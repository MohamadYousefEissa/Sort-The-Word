<template>
  <v-box>
    <TheHeader :title="headerTitle" />
    <QuizView />
    <VInput :label="inputPlaceHolder" />
    <div class="d-flex flex-column flex-sm-row gap-2">
      <VButton @click-event="submit" :label="submitBtn" />
      <VButton @click-event="nextWord" :label="skipBtn" />
    </div>
  </v-box>
</template>

<script>
import TheHeader from './TheHeader.vue'
import QuizView from './QuizView.vue'
import VInput from './UI/VInput.vue'
import { mapActions } from 'vuex'
export default {
  props: ['headerTitle', 'inputPlaceHolder', 'submitBtn', 'skipBtn'],
  components: { TheHeader, QuizView, VInput },
  methods: {
    ...mapActions(['nextWord', 'submit'])
  }
}
</script>
