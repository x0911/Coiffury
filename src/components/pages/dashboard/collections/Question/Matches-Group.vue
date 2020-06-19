<template>
  <div>
    <div>
      <v-text-field
        hide-details
        v-model="new_question.matches_a.value"
        :readonly="new_question.matches_a.readonly"
        :append-icon="
          new_question.matches_a.readonly ? 'mdi-pencil' : 'mdi-check-bold'
        "
        @click:append="
          new_question.matches_a.readonly = !new_question.matches_a.readonly
        "
      ></v-text-field>
    </div>
    <div v-if="new_question.selects.length < 10">
      <v-text-field
        autocomplete="off"
        label="Write option"
        single-line
        filled
        persistent-hint
        hint="* You can press '<span class='font-weight-simibold'>Enter</span>' to add options."
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
    </div>
    <div class="text-center grey--text" v-else>
      -- <i>Maximum number of options is 10</i> --
    </div>
  </div>
</template>

<script>
export default {
  name: "matches-group",
  props: ["group-type"],
  data: () => ({})
};
</script>
