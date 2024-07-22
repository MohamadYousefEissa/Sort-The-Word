<template>
  <div class="my-5 py-3 d-flex flex-column align-items-center">
    <VAlert :content="alertContent" :mode="show" :show="show" />
    <div class="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mt-2">
      <div class="letter" v-for="(letter, i) in wordAfterShuffle" :key="letter + i">
        {{ letter }}
      </div>
    </div>
  </div>
</template>

<script>
import VAlert from './UI/VAlert.vue'
import { mapGetters } from 'vuex'
export default {
  components: { VAlert },
  computed: {
    ...mapGetters(['wordAfterShuffle', 'show', 'hintLetters', 'hints']),
    alertContent() {
      if (this.show === 'right') return 'Right Answer'
      else if (this.show === 'wrong') return 'Wrong Answer Try Again'
      else if (this.show === 'hint')
        return `Hint : The Word Starts With <span class="fw-bold">${this.hintLetters.toUpperCase()}</span>`
      else if (this.show === 'noHints') return 'No Enough Hints'
      else if (this.show === 'hintReminder')
        return `Remember You Can Use Hints You Have ${this.hints} Remain`
      else return 'Please Enter At Least 1 Charachter'
    }
  },
  mounted() {
    this.$store.dispatch('randomWord')
  }
}
</script>

<style scoped>
.letter {
  background: rgb(70, 70, 70);
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .letter {
    width: 35px;
    height: 35px;
  }
}
</style>
