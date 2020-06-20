import Vue from "vue";
const mix = require("@/mixin/fun.js");
const fb = {}; // require("@/firebase.config.js")

// Mixins
Vue.mixin({
  methods: {
    appConnection() {
      return this.$store.state.isOnline;
    },
    loadView(view) {
      return () => import(`@/views/${view}.vue`);
    },
    getAppDefaults(refresh = false) {
      // Fetch Current Theme and Language
      let langs = ["ar", "en"],
        lang = this.$ls.get("coiffury_lang", "en"),
        dark_theme = this.$ls.get("coiffury_dark_theme", "false");
      this.$vuetify.theme.dark = dark_theme == "false" ? false : true;
      if (langs.includes(lang)) this.changeLang(lang);
      // Fetch Theme Options and colors
      let lights = this.$vuetify.theme.themes.light,
        darks = this.$vuetify.theme.themes.dark;
      for (let l in lights) {
        if (lights.hasOwnProperty(l)) {
          let v = this.$ls.get("coiffury_theme_light" + "_" + l, null);
          if (v) {
            this.$vuetify.theme.themes.light[l] = v;
          }
        }
      }
      for (let d in darks) {
        if (darks.hasOwnProperty(d)) {
          let v = this.$ls.get("coiffury_theme_dark" + "_" + d, null);
          if (v) {
            this.$vuetify.theme.themes.dark[d] = v;
          }
        }
      }
      if (refresh) {
        let href = document.location.href;
        document.location.href = href;
      }
    },
    changeLang: function(lang) {
      let langs = ["ar", "en"];
      lang = langs.includes(lang) ? lang : "en";
      this.$vuetify.lang.current = lang;
      this.$ls.set("coiffury_lang", lang);
      this.$vuetify.rtl = lang == "ar" ? true : false;
      return;
    },
    getUdata(data, alt) {
      return this.$store.state.currentUserPublic &&
        this.$store.state.currentUserPublic[data] &&
        this.$store.state.currentUserPublic[data].trim() !== ""
        ? this.$store.state.currentUserPublic[data]
        : alt
        ? alt
        : "--";
    },
    getLang: function(...expression) {
      let returner = "";
      for (let t of expression) {
        returner += `${this.$vuetify.lang.t("$vuetify." + t)} `;
      }
      return returner.substring(0, returner.length - 1);
    },
    defaultUserAvatar: function() {
      // return require("@/assets/media/imgs/user-placeholder.jpg");
    },
    setCaptcha() {
      let $this = this;
      $this.$store.state.login.loading = true;
      window.recaptchaVerifier = "";
      document.getElementById("recaptcha-container").innerHTML = "";
      window.recaptchaVerifier = new fb.firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function(response) {
            // window.recaptchaToken = response;
            $this.getCode();
          },
          "expired-callback": function() {
            // Response expired.
            let error = {
              code: "recaptcha_expired"
            };
            $this.$store.state.login.loading = false;
            return $this.showError(error);
          }
        }
      );
      window.recaptchaVerifier.render().then(widgetId => {
        window.recaptchaWidgetId = widgetId;
        window.recaptchaVerifier.g.ready(() => {
          window.recaptchaVerifier.g.execute();
        });
      });
      // console.log(window.recaptchaVerifier.a.sitekey);
    },
    getCode() {
      this.$store.state.login.loading = true;
      let $this = this,
        phoneNumber = $this.$store.state.login.phone.value.replace(/-/g, "");
      let appVerifier = window.recaptchaVerifier;
      fb.auth
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          // SMS sent.
          window.confirmationResult = confirmationResult;
          $this.$store.state.login.step = 1;
          $this.$store.state.login.loading = false;
          $this.resendCodeTimer();
        })
        .catch(function(error) {
          $this.showError(error.code);
          $this.$store.state.login.loading = false;
        });
    },
    verifyCode() {
      let $this = this;
      if ($this.$store.state.login.step == 1 && window.confirmationResult) {
        $this.$store.state.login.loading = true;
        let code = $this.$store.state.login.code.value;
        window.confirmationResult
          .confirm(code)
          .then(function(result) {
            // User signed in successfully.
            let user = result.user;
            mix.fun.setCurrentUser(user, true);
          })
          .catch(function(error) {
            // User couldn't sign in (bad verification code?)
            $this.showError(error.code);
            $this.$store.state.login.loading = false;
          });
      }
    },
    resendCodeTimer() {
      this.$store.state.login.code.resendTime = 60;
      this.$store.state.login.code.timer = setInterval(() => {
        this.$store.state.login.code.resendTime--;
        if (this.$store.state.login.code.resendTime == 0) {
          clearInterval(this.$store.state.login.code.timer);
        }
      }, 1000);
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
    isServer() {
      if (
        this.$store.state.currentUser &&
        this.$store.state.servers &&
        this.$store.state.servers.length > 0
      ) {
        return true;
      }
      return false;
    },
    isApproved() {
      if (
        this.$store.state.currentUser &&
        this.$store.state.servers &&
        this.$store.state.servers.length > 0 &&
        this.$store.state.currentUserApproved
      ) {
        return true;
      }
      return false;
    },
    showError(code) {
      if (code) {
        // console.log(code);
        let defaultMsg = "1",
          showError = code => {
            let msg = errors[code] ? errors[code] : defaultMsg;
            this.$store.state.appError.msg = this.getLang("errors." + msg);
            this.$store.state.appError.model = true;
          },
          errors = {
            error: "2",
            call_me: "3",
            "auth/invalid-verification-code": "4",
            "auth/code-expired": "5",
            recaptcha_expired: "6",
            "displayName-empty": "7",
            sting_data_required: "8",
            comment_empty: "9",
            // Patient
            error_adding_patient: "10",
            name_gender_required: "11",
            custom_field_not_exist: "12",
            fill_required_fields: "13",
            // User
            error_checking_user_existance: "14",
            // Auth
            "auth/missing-verification-code": "25",
            "auth/too-many-requests": "15",
            step_no_auth: "16",
            "auth/user-not-found": "17",
            "auth/invalid-phone-number": "18",
            no_auth: "17",
            "auth/internal-error": "19",
            recaptcha_not_loaded: "19",
            "auth/argument-error": "20",
            "auth/network-request-failed": "21",
            // Storage
            "storage/unauthorized": "22",
            "storage/retry-limit-exceeded": "23",
            // Firestore
            "permission-denied": "24",
            qrcode_not_found: "26",
            // Add Question
            q_type_1: "27",
            q_selects_true: "28",
            q_selects_false: "29",
            q_empty_true: "30",
            q_empty_false: "31",
            q_select_options_error: "32",
            a_select_error: "33",
            a_truefalse_error: "34",
            q_match_groups_text_empty: "35",
            q_match_groups_options_lessmore: "36",
            q_match_options_error: "32" // Dublicated
          };
        showError(code);
      }
    },
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          if (this.$route.name !== "home") this.$router.push("/");
          let href = document.location.href;
          document.location.href = href;
        })
        .catch(err => {
          // console.log(err);
          this.showError(err.code);
        });
    },
    ucFirst($text) {
      let ucfirst = $text
        .replace("_", " ")
        .toLowerCase()
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
      return ucfirst;
    },
    arr_obj_unique(arr, comp) {
      let unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e])
        .map(e => arr[e]);
      return unique;
    },
    getAnim(name) {
      let data = require("@/assets/animation/" + name + ".json");
      return data;
    },
    changeTheme(c) {
      this.$ls.set("coiffury_dark_theme", c);
      this.$vuetify.theme.dark = c;
    },
    changeWidth() {
      let w = this.$store.state.app.width;
      if (w < 3) {
        this.$store.state.app.width = w + 1;
      } else {
        this.$store.state.app.width = 1;
      }
    }
  }
});
