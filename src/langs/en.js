"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  /*
    General
  */
  title: "Haircode",
  account: {
    login: "Login",
    register: "Register",
    email: "Email",
    phone: "Phone",
    create: "Create",
    account: "Account",
    my_account: "My account",
    password: "Password",
    verification: "Verification",
    code: "Code",
    verification_code: "Verification Code"
  },
  dir: {
    next: "Next",
    prev: "Previous",
    up: "Up",
    down: "Down",
    left: "Left",
    right: "Right",
    toward: "Toward",
    backward: "Backward"
  },
  langs: {
    langs: "Languages",
    ar: "Arabic",
    en: "English"
  },
  themes: {
    themes: "Themes",
    light: "Light",
    dark: "Dark"
  },
  or: "or",
  close: "Close",
  dataIterator: {
    pageText: "{0}-{1} of {2}",
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: ": Sorted descending. Activate to remove sorting.",
      sortAscending: ": Sorted ascending. Activate to sort descending.",
      sortNone: ": Not sorted. Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  datePicker: {
    itemsSelected: "{0} selected"
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual"
  },
  calendar: {
    moreEvents: "{0} more"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  /*
    Global Sections
  */
  // 1. Top app bar

  // 2. Side app bar
  // 3. Footer
  /*
    Pages
  */
  // 1. Home
  home: {
    out: {},
    in: {}
  },
  // 2. Gallery
  gallery: {},
  about: {},
  /*
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "16": "",
    "17": "",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": ""
  */
  // 3. Privacy Policy
  privacy_policy: {
    "1": "Collecting specific information:",
    "2": `We collect information from you when you register on our site, book a
          doctor or subscribe to our newsletter. When booking or registering on
          our site, as appropriate, you may be asked to enter your name, e-mail
          address, mailing address or phone number.`,
    "3": "Disclosure Regarding Google Display Advertising:",
    "4": `We implement Google Analytics features that use Display Advertising
          information for Google Analytics Demographics and Interest Reporting.
          You can opt-out of Google Analytics for Display Advertising, to prevent
          your data from being used by Google Analytics, by going to the Google
          Analytics opt-out page. (Here's the link:
          <a target="_blank" href="https://tools.google.com/dlpage/gaoptout/"
            >https://tools.google.com/dlpage/gaoptout/</a
          >
          We, along with third-party vendors (including Google), use first-party
          cookies (such as the Google Analytics cookies) and third-party cookies
          (such as the DoubleClick cookies) to report how your ad impressions,
          other uses of ad services, and interactions with these ad impressions
          and ad services are related to visits to our website. You can read more
          about the cookies used by Google Analytics advertising features, by
          going to the Google Analytics Privacy Policy page. (Here's the link:
          <a
            href="https://support.google.com/analytics/answer/2700409?hl=en"
            target="_blank"
            >https://support.google.com/analytics/answer/2700409?hl=en</a
          >)`,
    "5": "Specific uses of information",
    "6": `Any of the information we collect from you may be used in one of the
          following ways: To personalize your experience (your information helps
          us to better respond to your individual needs) To process
          transactions(Your information, whether public or private, will not be
          sold, exchanged, transferred, or given to any other company for any
          reason whatsoever, without your consent, other than for the express
          purpose of delivering the purchased product or service requested). To
          send periodic emails (The email address you provide for booking, may be
          used to send you information and updates pertaining to your booking, in
          addition to receiving occasional company news, updates, related product
          or service information, etc.) Note: If at any time you would like to
          unsubscribe from receiving future emails, we include detailed
          unsubscribe instructions at the bottom of each email.`,
    "7": "Protecting Your Information",
    "8": `We implement a variety of security measures to maintain the safety of
          your personal information when you place a booking or enter, submit, or
          access your personal information. We offer the use of a secure server.
          All supplied sensitive/credit information is transmitted via Secure
          Socket Layer (SSL) technology and then encrypted into our Payment
          gateway providers database only to be accessible by those authorized
          with special access rights to such systems, and are required to keep the
          information confidential. After a transaction, your private information
          (credit cards, social security numbers, financials, etc.) will not be
          stored on our servers.`,
    "9": "Cookie Usage Policy",
    "10": `Cookies are small files that a site or its service provider transfers to
          your computer’s hard drive through your Web browser (if you allow) that
          enables the sites or service providers systems to recognize your browser
          and capture and remember certain information If you prefer, you can
          choose to have your computer warn you each time a cookie is being sent,
          or you can choose to turn off all cookies via your browser settings.
          Like most websites, if you turn your cookies off, some of our services
          may not function properly.`,
    "11": "No disclosure of information to other parties",
    "12": `We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted third
          parties who assist us in operating our website, conducting our business,
          or servicing you, so long as those parties agree to keep this
          information confidential. We may also release your information when we
          believe release is appropriate to comply with the law, enforce our site
          policies, or protect ours or others rights, property, or safety.
          However, non-personally identifiable visitor information may be provided
          to other parties for marketing, advertising, or other uses. All
          credit/debit cards details and personally identifiable information will
          NOT be stored, sold, shared, rented or leased to any third parties. The
          Website Policies and Terms & Conditions may be changed or updated
          occasionally to meet the requirements and standards. Therefore the
          Customers’ are encouraged to frequently visit these sections in order to
          be updated about the changes on the website. Modifications will be
          effective on the day they are posted.`,
    "13": "Third party links",
    "14": `We may include or offer third party products or services on our website.
          These third party sites have separate and independent privacy policies.
          We therefore have no responsibility or liability for the content and
          activities of these linked sites. Nonetheless, we seek to protect the
          integrity of our site and welcome any feedback about these sites.`,
    "15": "Terms and Conditions",
    "16": `Please also visit our Terms and Conditions section establishing the use, disclaimers,
          and limitations of liability governing the use of our website at
          <a target='_blank' href='https://medroid.web.app'>medroid.web.app</a>`,
    "17": "Your Consent",
    "18": "By using our site, you consent to our privacy policy.",
    "19": "Contacting Us",
    "20": `If there are any questions regarding this privacy policy you may contact us using
          the email <a target='_blank' href='https://medroid.web.app'>contact@medroid.web.app</a>.`,
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": ""
  },
  /**
    Errors
  */
  errors: {
    "1": "A network error occured. Please refresh page and try again.",
    "2":
      "<b>There was an error</b>, Please refresh page and try again in a minute.",
    "3":
      "If you are having trouble, Call me on <a href='tel:+201113429944'>+201113429944</a>",
    "4": "<b>Code is invalid</b>, Please double check your code and try again.",
    "5":
      "<b>Code Expired</b>. You can try a code twice. Please refresh page and try again.",
    "6": "<b>reCaptcha Expired</b>. Please refresh page and try again.",
    "7": "Your name can't be less than 4 characters.",
    "8": "You have to fill required fields.",
    "9": "A Comment can't be empty.",
    "10": "There was an error adding new patient, Please try again later.",
    "11": "Name and gender are required!",
    "12": "Custom field you are trying to delete is not exist.",
    "13": "Please fill required fields",
    "14": "There was an error checking user existance.",
    "15":
      "<b>Too Many Requests</b>: We have blocked all requests from this device due to unusual activity. Try again later or Login with email and password instead.",
    "16":
      "<b>ERROR</b>: An unknown error occured, Please refresh page and try again in a minute.",
    "17":
      "<b>Access Denied:</b> This phone number is not autherized to access the app.",
    "18": "<b>Invalid:</b> This is not Egyptian phone number.",
    "19":
      "<b>reCAPTCHA Error</b>, are you connected to the internet? We are unable to load external reCAPTCHA dependencies. Please reload page and try again in a minute.",
    "20":
      "<b>reCAPTCHA Error</b>, Please complete the reCAPTCHA correctly to continue.",
    "21":
      "<b>A network error</b>, Please double check your internet connection and try again.",
    "22": "You are not authorized to access this data.",
    "23":
      "Image you are trying to view can't be reached. Please double check your internet connection",
    "24":
      "You are trying to access some data that you are not authorized to. <b>If you think</b> this error was appeared by mistake, please contact me.",
    "25": "<b>Auth Error: </b>You have to write a confirmation code.",
    "26": "QrCode not found",
    "27": "You need to select a question type",
    "28": "Options should be 10 or less.",
    "29": "Please make sure you have 2 or more options in the answer.",
    "30": "Question should be 500 characters length or less.",
    "31": "Question should not be empty",
    "32":
      "All options should neither be empty nor more than 200 characters length.",
    "33": "Answer should be one of your allowed answers.",
    "34": "You need to select corrent answer.",
    "35": "Groups [A, B] titles should not be empty.",
    "36": "Please make sure both groups have 2 options or more."
  }
};
exports.default = _default;
// export default _default;
