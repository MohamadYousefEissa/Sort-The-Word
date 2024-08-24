<template>
  <v-box>
    <TheHeader :title="headerTitle" />
    <QuizView />
    <VInput :label="inputPlaceHolder" />
    <div class="d-flex flex-column flex-sm-row gap-2">
      <v-button @click-event="submit">Submit</v-button>
      <v-button @click-event="nextWord">Skip</v-button>
    </div>
    <teleport to="body">
      <GameOverMenu />
    </teleport>
  </v-box>
</template>

<script>
import TheHeader from './TheHeader.vue'
import QuizView from './QuizView.vue'
import VInput from './UI/VInput.vue'
import GameOverMenu from './GameOverMenu.vue'
import { mapActions } from 'vuex'
export default {
  props: ['headerTitle', 'inputPlaceHolder'],
  components: { TheHeader, QuizView, VInput, GameOverMenu },
  methods: {
    ...mapActions(['nextWord', 'submit'])
  }
}
</script>
