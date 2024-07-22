<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <TheHeader :title="'Sort The Word'" />
        <QuizView />
        <VInput :label="'Enter The Word Here Please'" />
        <div class="d-flex flex-column flex-sm-row gap-2 pb-2">
          <VButton @click-event="submit" :label="'Submit'" />
          <VButton @click-event="nextWord" :label="'Skip'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import QuizView from './components/QuizView.vue'
import VInput from './components/UI/VInput.vue'
import VButton from './components/UI/VButton.vue'

import { mapActions } from 'vuex'
export default {
  components: { TheHeader, QuizView, VInput, VButton },
  methods: {
    ...mapActions(['nextWord', 'submit'])
  }
}
</script>

<style>
* {
  color: white;
}
body {
  display: grid;
  place-items: center;
  height: 100vh;
  background: rgb(40, 40, 40);
  overflow-y: hidden;
  font-family: 'Open Sans', sans-serif;
}
.container {
  background: rgb(24, 24, 24);
  border-radius: 6px;
  width: 800px;
}
@media screen and (max-width: 810px) {
  .container {
    width: 90vw;
  }
}
@media screen and (max-width: 480px) {
  body {
    display: flex;
    place-content: center;
    place-items: start;
    margin-top: 3rem;
  }
}
</style>
