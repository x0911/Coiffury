<template>
  <div>
    <v-dialog
      v-model="new_question_model"
      persistent
      max-width="520"
      scrollable
      @click:outside="hideModel"
    >
      <v-card>
        <v-card-title>
          <v-row>
            <v-col class="py-0">
              New Question
            </v-col>
            <v-col cols="auto" class="py-0">
              <v-btn @click="hideModel" icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="px-0">
          <v-stepper vertical class="elevation-0" v-model="step">
            <!-- [1] Type of question -->
            <v-stepper-step :complete="step > 1" step="1">
              Select Type
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-select
                filled
                rounded
                label="Type"
                hint="* Select type of question"
                persistent-hint
                :items="question_types"
                v-model="new_question.type"
              ></v-select>
            </v-stepper-content>
            <!-- [2] Question -->
            <v-stepper-step :complete="step > 2" step="2">
              Write Question
            </v-stepper-step>
            <v-stepper-content step="2">
              <v-textarea
                filled
                rounded
                label="Question"
                hint="* Press '<span class='font-weight-simibold'>Enter</span>' to go to a new line."
                persistent-hint
                v-model="new_question.q"
                rows="1"
                auto-grow
                counter="500"
              >
                <template v-slot:message="{ message, key }">
                  <div :key="key" v-html="message"></div>
                </template>
              </v-textarea>
              <div class="mt-3" v-if="new_question.type == 'select'">
                <div class="mb-4" v-show="new_question.selects.length > 0">
                  <v-menu
                    v-for="(s, i) in new_question.selects"
                    :key="i"
                    bottom
                    right
                    transition="scale-transition"
                    origin="top left"
                    :close-on-content-click="false"
                    v-model="s.model"
                  >
                    <template v-slot:activator="{ on }">
                      <v-chip v-on="on" v-text="s.value" outlined></v-chip>
                    </template>
                    <v-card>
                      <v-card-title class="break-word">
                        <v-row class="py-0 my-0">
                          <v-col class="py-0 my-0">
                            <div>Edit Option</div>
                          </v-col>
                          <v-col cols="auto" class="py-0 my-0">
                            <v-btn
                              color="error"
                              icon
                              @click="new_question.selects.splice(i, 1)"
                            >
                              <v-icon>mdi-trash-can-outline</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="pt-5">
                        <v-text-field
                          autocomplete="off"
                          label="Write option"
                          single-line
                          filled
                          rounded
                          dense
                          counter="200"
                          v-model="s.value"
                          @keypress.enter="s.model = false"
                          hint="* Press '<span class='font-weight-simibold'>Enter</span>' to save."
                          persistent-hint
                        >
                          <template v-slot:message="{ message, key }">
                            <div :key="key" v-html="message"></div>
                          </template>
                        </v-text-field>
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </div>
                <!-- Add New Option -->
                <v-text-field
                  v-if="new_question.selects.length < 10"
                  autocomplete="off"
                  label="Write option"
                  single-line
                  counter="200"
                  filled
                  persistent-hint
                  hint="* Press '<span class='font-weight-simibold'>Enter</span>' to add options."
                  rounded
                  dense
                  v-model="new_question.new_select.value"
                  @keypress.enter="
                    new_question.selects.push(new_question.new_select),
                      (new_question.new_select = { value: '', model: false })
                  "
                  @click:append="
                    new_question.selects.push(new_question.new_select),
                      (new_question.new_select = { value: '', model: false })
                  "
                  append-icon="mdi-plus-circle-outline"
                >
                  <template v-slot:message="{ message, key }">
                    <div :key="key" v-html="message"></div>
                  </template>
                </v-text-field>
                <div class="text-center grey--text" v-else>
                  -- <i>Maximum options is 10</i> --
                </div>
              </div>
              <div v-else-if="new_question.type == 'match'">
                <div>
                  <v-row>
                    <v-col class="pt-0">
                      <div class="mb-4">
                        <v-text-field
                          autocomplete="off"
                          hide-details
                          :outlined="!new_question.matches_a.readonly"
                          v-model="new_question.matches_a.value"
                          :readonly="new_question.matches_a.readonly"
                          :append-icon="
                            new_question.matches_a.readonly
                              ? 'mdi-pencil'
                              : 'mdi-check-bold'
                          "
                          @keypress.enter="
                            new_question.matches_a.readonly = !new_question
                              .matches_a.readonly
                          "
                          @click:append="
                            new_question.matches_a.readonly = !new_question
                              .matches_a.readonly
                          "
                        ></v-text-field>
                      </div>
                      <div class="mb-2">
                        <template
                          v-for="(o, i) in new_question.matches_a._options"
                        >
                          <v-text-field
                            :key="i"
                            autocomplete="off"
                            placeholder="Write option"
                            counter="200"
                            persistent-hint
                            :prepend-inner-icon="`mdi-numeric-${i + 1}-box`"
                            append-icon="mdi-trash-can error--text"
                            @click:append="
                              new_question.matches_a._options.splice(i, 1)
                            "
                            dense
                            v-model="new_question.matches_a._options[i]"
                          >
                            <template v-slot:message="{ message, key }">
                              <div :key="key" v-html="message"></div>
                            </template>
                          </v-text-field>
                        </template>
                      </div>
                      <div v-if="new_question.matches_a._options.length < 10">
                        <v-text-field
                          autocomplete="off"
                          placeholder="Write option"
                          counter="200"
                          persistent-hint
                          hint="* Press '<span class='font-weight-simibold'>Enter</span>' to add."
                          dense
                          v-model="new_question.matches_a.new_option"
                          @keypress.enter="
                            new_question.matches_a._options.push(
                              new_question.matches_a.new_option
                            ),
                              (new_question.matches_a.new_option = '')
                          "
                          @click:append="
                            new_question.matches_a._options.push(
                              new_question.matches_a.new_option
                            ),
                              (new_question.matches_a.new_option = '')
                          "
                          append-icon="mdi-plus"
                        >
                          <template v-slot:message="{ message, key }">
                            <div :key="key" v-html="message"></div>
                          </template>
                        </v-text-field>
                      </div>
                      <div class="text-center grey--text" v-else>
                        --<i>Maximum is 10</i>--
                      </div>
                    </v-col>
                    <v-col class="pt-0">
                      <div class="mb-4">
                        <v-text-field
                          autocomplete="off"
                          hide-details
                          :outlined="!new_question.matches_b.readonly"
                          v-model="new_question.matches_b.value"
                          :readonly="new_question.matches_b.readonly"
                          :append-icon="
                            new_question.matches_b.readonly
                              ? 'mdi-pencil'
                              : 'mdi-check-bold'
                          "
                          @keypress.enter="
                            new_question.matches_b.readonly = !new_question
                              .matches_b.readonly
                          "
                          @click:append="
                            new_question.matches_b.readonly = !new_question
                              .matches_b.readonly
                          "
                        ></v-text-field>
                      </div>
                      <div class="mb-2">
                        <template
                          v-for="(o, i) in new_question.matches_b.options"
                        >
                          <v-text-field
                            :key="i"
                            autocomplete="off"
                            placeholder="Write option"
                            counter="200"
                            persistent-hint
                            :prepend-inner-icon="`mdi-numeric-${i + 1}-box`"
                            append-icon="mdi-trash-can error--text"
                            @click:append="
                              new_question.matches_b.options.splice(i, 1)
                            "
                            dense
                            v-model="new_question.matches_b.options[i]"
                          >
                            <template v-slot:message="{ message, key }">
                              <div :key="key" v-html="message"></div>
                            </template>
                          </v-text-field>
                        </template>
                      </div>
                      <div v-if="new_question.matches_b.options.length < 10">
                        <v-text-field
                          autocomplete="off"
                          placeholder="Write option"
                          counter="200"
                          persistent-hint
                          hint="* Press '<span class='font-weight-simibold'>Enter</span>' to add."
                          dense
                          v-model="new_question.matches_b.new_option"
                          @keypress.enter="
                            new_question.matches_b.options.push(
                              new_question.matches_b.new_option
                            ),
                              (new_question.matches_b.new_option = '')
                          "
                          @click:append="
                            new_question.matches_b.options.push(
                              new_question.matches_b.new_option
                            ),
                              (new_question.matches_b.new_option = '')
                          "
                          append-icon="mdi-plus"
                        >
                          <template v-slot:message="{ message, key }">
                            <div :key="key" v-html="message"></div>
                          </template>
                        </v-text-field>
                      </div>
                      <div class="text-center grey--text" v-else>
                        --<i>Maximum is 10</i>--
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-stepper-content>
            <!-- [3] Correct Answer -->
            <v-stepper-step :complete="step > 3" step="3">
              Answer it
            </v-stepper-step>
            <v-stepper-content step="3">
              <div v-if="new_question.type == 'select'">
                <div>
                  <v-list-item class="wrap px-0">
                    <v-list-item-content>
                      <v-list-item-title
                        class="line-height-x1 mb-2"
                        v-text="new_question.q"
                      ></v-list-item-title>
                      <v-list-item-subtitle>
                        <v-select
                          :items="new_question.selects"
                          item-text="value"
                          item-value="value"
                          filled
                          rounded
                          v-model="new_question.a"
                          label="Answer"
                          hint="What is the correct answer?"
                          persistent-hint
                          no-data-text="No options found."
                        ></v-select>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </div>
              <div v-else-if="new_question.type == 'truefalse'">
                <div>
                  <v-list-item class="wrap px-0">
                    <v-list-item-content>
                      <v-list-item-title
                        class="line-height-x1 mb-2"
                        v-text="new_question.q"
                      ></v-list-item-title>
                      <v-list-item-subtitle>
                        <v-btn-toggle v-model="new_question.a">
                          <v-btn
                            value="true"
                            class="text-capitalize"
                            v-text="'True'"
                            active-class="primary white--text"
                          ></v-btn>
                          <v-btn
                            value="false"
                            class="text-capitalize"
                            v-text="'False'"
                            active-class="error white--text"
                          ></v-btn>
                        </v-btn-toggle>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </div>
              <div v-else-if="new_question.type == 'match'">
                <div>
                  <v-list-item class="wrap px-0">
                    <v-list-item-content>
                      <v-list-item-title
                        class="line-height-x1 mb-2"
                        v-text="new_question.q"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <v-divider></v-divider>
                <div>
                  <!-- Match the following -->
                  <v-row>
                    <v-col>
                      <div>
                        <span v-text="new_question.matches_a.value"></span>
                      </div>
                      <div>
                        <v-list>
                          <template
                            v-for="(val, key, i) in new_question.matches_a
                              .options"
                          >
                            <v-list-item :key="i">
                              <v-list-item-content>
                                <v-list-item-title
                                  v-text="key"
                                ></v-list-item-title>
                                <v-list-item-subtitle>
                                  -> {{ val }}
                                </v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-btn
                                  style="z-index: 1"
                                  :id="`matching-btn_${key}`"
                                  icon
                                  color="primary"
                                  @click="
                                    matchReadyState == key
                                      ? (matchReadyState = '')
                                      : ((matchReadyState = key),
                                        createLine(key))
                                  "
                                >
                                  <v-icon>mdi-checkbox-blank-outline</v-icon>
                                </v-btn>
                              </v-list-item-action>
                            </v-list-item>
                            <v-divider
                              :key="i + '_d'"
                              v-if="
                                Object.keys(new_question.matches_a.options)
                                  .length >
                                  i + 1
                              "
                            ></v-divider>
                          </template>
                        </v-list>
                        <div ref="matching-lines">
                          <template
                            v-for="(val, key, i) in new_question.matches_a
                              .options"
                          >
                            <div :id="`matching-line_${key}`" :key="i"></div>
                          </template>
                        </div>
                      </div>
                    </v-col>
                    <v-col>
                      <div>
                        <span v-text="new_question.matches_b.value"></span>
                      </div>
                      <div>
                        <v-list>
                          <template
                            v-for="(o, i) in new_question.matches_b.options"
                          >
                            <v-list-item
                              :key="i"
                              @click="
                                stopLineDraw(matchReadyState, i),
                                  matchReadyState
                                    ? new_question.matches_a.options[
                                        matchReadyState
                                      ] == o
                                      ? ((new_question.matches_a.options[
                                          matchReadyState
                                        ] = ''),
                                        (matchReadyState = ''))
                                      : ((new_question.matches_a.options[
                                          matchReadyState
                                        ] = o),
                                        (matchReadyState = ''))
                                    : () => {}
                              "
                            >
                              <v-list-item-action>
                                <v-icon :id="`matching-icon_${i}`"
                                  >mdi-checkbox-blank-outline</v-icon
                                >
                              </v-list-item-action>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-text="o"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-divider
                              :key="i + '_d'"
                              v-if="
                                new_question.matches_b.options.length > i + 1
                              "
                            ></v-divider>
                          </template>
                        </v-list>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
              <div v-else-if="new_question.type == 'freetext'">
                <div>
                  <v-list-item class="wrap px-0">
                    <v-list-item-content>
                      <v-list-item-title
                        class="line-height-x1 mb-2"
                        v-text="new_question.q"
                      ></v-list-item-title>
                      <v-list-item-subtitle>
                        <v-textarea
                          value="Players will write their own answers here. Each answer should be less than or equal to 1000 characters length."
                          filled
                          rounded
                          readonly
                          label="Answer"
                          hint="Admins of the tournament will decide which answer is correct."
                          persistent-hint
                          auto-grow
                        ></v-textarea>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </div>
              <div class="text-center px-4" v-else>
                <span class="grey--text">
                  -- Please select a question type --
                </span>
              </div>
            </v-stepper-content>
            <!-- [4] Rate this question -->
            <v-stepper-step :complete="step > 4" step="4">
              Points
            </v-stepper-step>
            <v-stepper-content step="4">
              <v-select
                filled
                rounded
                label="Points"
                hint="* If somebody answered this question, How many points will he get?"
                persistent-hint
                :items="[...10]"
                v-model="new_question.rate"
              ></v-select>
            </v-stepper-content>
          </v-stepper>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="px-4">
          <v-btn
            class="px-6 text-capitalize"
            text
            large
            @click="hideModel"
            v-text="'Cancel'"
          ></v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="px-6 text-capitalize"
            large
            outlined
            color="primary"
            @click="step > 1 ? step-- : () => {}"
            :disabled="step == 1"
          >
            Back
          </v-btn>
          <v-btn
            class="px-6 text-capitalize"
            large
            color="primary"
            v-text="step > steps - 1 ? 'Finish' : 'Next'"
            @click="stepFrom(step)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "add-question",
  props: ["new_question_model"],
  data: () => ({
    steps: 4,
    step: 1,
    new_question: {
      q: "", // String
      a: null, // String | Boolean | Object
      rate: 1,
      type: "", // String
      selects: [], // Array - Object
      matches_a: {
        value: "Group A",
        _options: [],
        options: {},
        new_option: "",
        readonly: true
      },
      matches_b: {
        value: "Group B",
        options: [],
        new_option: "",
        readonly: true
      },
      // Not for databse
      model: false,
      new_select: {
        value: "",
        model: false
      },
      tmp_select: {
        value: "",
        model: false
      }
    },
    matchReadyState: "",
    question_types: [
      {
        text: "Select",
        value: "select"
      },
      {
        text: "True or False",
        value: "truefalse"
      },
      {
        text: "Match",
        value: "match"
      },
      {
        text: "Free Text",
        value: "freetext"
      }
    ]
  }),
  watch: {
    matchReadyState(v) {
      if (v.length > 0) {
        //
      } else {
        //
      }
    }
  },
  methods: {
    createLine(key, i, isDone = false) {
      if (key) {
        let scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop,
          _source = document.getElementById("matching-btn_" + key),
          source = _source.getBoundingClientRect(),
          line = document.getElementById("matching-line_" + key),
          x1 = source.left + scrollLeft + source.width / 2,
          x2 = 0,
          y1 = source.top + scrollTop + source.height / 2,
          y2 = 0,
          distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)),
          xMid = (x1 + x2) / 2,
          yMid = (y1 + y2) / 2,
          slopeRadian = Math.atan2(y1 - y2, x1 - x2),
          slopeDegree = (slopeRadian * 180) / Math.PI,
          matchReadyState = this.matchReadyState;
        line.classList.remove("line-used");
        if (isDone) {
          let distination = document
            .getElementById(`matching-icon_${i}`)
            .getBoundingClientRect();
          line.classList.add("line-used");
          (x2 = distination.left + scrollLeft + distination.width / 2),
            // console.log("x2: " + x2);
            (y2 = distination.top + scrollTop + distination.height / 2),
            // console.log("y2: " + y2);
            (distance = Math.sqrt(
              (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
            ));
          // console.log("distance: " + distance);
          xMid = (x1 + x2) / 2;
          // console.log("xMid: " + xMid);
          yMid = (y1 + y2) / 2;
          // console.log("yMid: " + yMid);
          slopeRadian = Math.atan2(y1 - y2, x1 - x2);
          // console.log("slopeRadian: " + slopeRadian);
          slopeDegree = (slopeRadian * 180) / Math.PI;
          // console.log("slopeDegree: " + slopeDegree);
          line.style.height = "2px";
          line.style.position = "fixed";
          // line.style.zIndex = -1;
          line.style.width = distance + "px";
          line.style.top = yMid + "px";
          line.style.left = xMid - distance / 2 + "px";
          line.style.transform = `rotate(${slopeDegree}deg)`;
          line.style.backgroundColor = "var(--v-primary-base)";
          this.$set(this, "matchReadyState", "");
        } else {
          document.onmousemove = function(e) {
            if (
              matchReadyState !== key ||
              line.classList.contains("line-used")
            ) {
              return false;
            }
            // console.log("Match: " + matchReadyState + ", Key: " + key);
            // console.log("Google");
            x2 = e.pageX;
            // console.log("x2: " + x2);
            y2 = e.pageY;
            // console.log("y2: " + y2);
            distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
            // console.log("distance: " + distance);
            xMid = (x1 + x2) / 2;
            // console.log("xMid: " + xMid);
            yMid = (y1 + y2) / 2;
            // console.log("yMid: " + yMid);
            slopeRadian = Math.atan2(y1 - y2, x1 - x2);
            // console.log("slopeRadian: " + slopeRadian);
            slopeDegree = (slopeRadian * 180) / Math.PI;
            // console.log("slopeDegree: " + slopeDegree);
            line.style.height = "2px";
            line.style.position = "fixed";
            // line.style.zIndex = -1;
            line.style.width = distance + "px";
            line.style.top = yMid + "px";
            line.style.left = xMid - distance / 2 + "px";
            line.style.transform = `rotate(${slopeDegree}deg)`;
            line.style.backgroundColor = "var(--v-primary-base)";
          };
        }
      } else {
        // console.log("Wrong");
      }
    },
    stopLineDraw(key, i) {
      this.createLine(key, i, true);
    },
    addQuestion() {
      return false;
    },
    levelUp(index) {
      let options = this.new_question.selects;
      this.$set(this.new_question, "tmp_select", options[index - 1]);
      this.$set(this.new_question.selects, index - 1, options[index]);
      this.$set(this.new_question.selects, index, this.new_question.tmp_select);
    },
    levelDown(index) {
      let options = this.new_question.selects;
      this.$set(this.new_question, "tmp_select", options[index + 1]);
      this.$set(this.new_question.selects, index + 1, options[index]);
      this.$set(this.new_question.selects, index, this.new_question.tmp_select);
    },
    hideModel() {
      this.$emit("update:new_question_model", false);
      return;
    },
    stepFrom(step) {
      if (step > 0) {
        let q = this.new_question,
          q_types = this.question_types.map(v => v.value);
        switch (step) {
          case 1:
            if (q_types.includes(q.type)) {
              this.step++;
            } else {
              this.showError("q_type_1");
            }
            break;
          case 2:
            if (q.q.trim().length > 0 && q.q.trim().length <= 500) {
              switch (q.type) {
                case "select":
                  if (q.selects.length > 1 && q.selects.length < 11) {
                    let inallowed = q.selects.filter(v => {
                      return (
                        v.value.trim().length < 1 || v.value.trim().length > 200
                      );
                    });
                    if (inallowed.length > 0) {
                      this.showError("q_select_options_error");
                    } else {
                      this.step++;
                    }
                  } else {
                    // selects are less than 2 or more than 10
                    this.showError(`q_selects_${q.selects.length > 1}`);
                  }

                  break;
                case "truefalse":
                  this.step++;
                  break;
                case "match":
                  // Check if Group A, Group B texts are fullfilled
                  if (
                    q.matches_a.value.trim().length > 0 &&
                    q.matches_b.value.trim().length > 0
                  ) {
                    // Check if both groups have 2 options or more, and less than 10
                    if (
                      q.matches_a._options.length > 1 &&
                      q.matches_a._options.length < 11 &&
                      q.matches_b.options.length > 1 &&
                      q.matches_b.options.length < 11
                    ) {
                      // Check if all options in both groups are not empty and less than 200 characters
                      let inallowed = [],
                        inallowed_a = q.matches_a._options.filter(v => {
                          return v.trim().length < 1 || v.trim().length > 200;
                        }),
                        inallowed_b = q.matches_b.options.filter(v => {
                          return v.trim().length < 1 || v.trim().length > 200;
                        });
                      inallowed = [...inallowed_a, ...inallowed_b];
                      if (inallowed.length > 0) {
                        // console.log(inallowed);
                        this.showError("q_match_options_error");
                      } else {
                        // Push Group A options into _options
                        this.$set(this.new_question.matches_a, "options", {}); // Empty
                        q.matches_a._options.forEach((o, i) => {
                          this.$set(this.new_question.matches_a.options, o, ""); // Fullfill again
                        });
                        this.step++;
                      }
                    } else {
                      this.showError("q_match_groups_options_lessmore");
                    }
                  } else {
                    // One of [Group A, Group B] texts is empty
                    this.showError("q_match_groups_text_empty");
                  }
                  break;
                case "freetext":
                  this.step++;
                  break;
                default:
                  this.step--;
                  break;
              }
            } else {
              // Question is empty
              this.showError(`q_empty_${q.q.trim().length > 0}`);
            }
            break;
          case 3:
            switch (q.type) {
              case "select":
                if (q.selects.map(v => v.value).includes(q.a)) {
                  // console.log("Question Added");
                } else {
                  // Answer is not listed in the allowed answers
                  this.showError("a_select_error");
                }
                break;
              case "truefalse":
                if (["true", "false"].includes(q.a)) {
                  // console.log("Question Added");
                } else {
                  this.showError("a_truefalse_error");
                }
                break;
              case "match":
                break;
              case "freetext":
                // console.log("Question Added");
                break;
              default:
                this.step--;
                break;
            }
            break;
        }
      }
    }
  }
};
</script>
