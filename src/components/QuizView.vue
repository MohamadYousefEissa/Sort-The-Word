<template>
  <div class="my-5 py-3 d-flex flex-column align-items-center">
    <VAlert :content="alertContent" :mode="show" :show="show" />
    <transition-group
      tag="ul"
      name="list"
      class="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mt-3 list-unstyled"
    >
      <li class="letter" v-for="(letter, i) in wordAfterShuffle" :key="letter + i">
        {{ letter }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import VAlert from './UI/VAlert.vue'
import { mapGetters } from 'vuex'
export default {
  components: { VAlert },
  computed: {
    ...mapGetters(['wordAfterShuffle', 'show', 'alertContent'])
  },
  mounted() {
    this.$store.dispatch('randomWord')
  }
}
</script>

<style scoped>
.letter {
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 20px;
  background: var(--sec-bg);
}
@media screen and (max-width: 480px) {
  .letter {
    width: 40px;
    height: 40px;
  }
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}
.list-leave-active {
  position: absolute;
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
}
.list-move {
  transition: all 0.5s;
}
</style>
