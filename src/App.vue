<template>
  <transition name="start" mode="out-in">
    <Component :is="$store.getters.activePage" v-if="isLoad" />
  </transition>
  <teleport to="body">
    <ThemeButton />
    <CopyRight />
  </teleport>
</template>

<script>
import GameView from './components/GameView.vue'
import StartMenu from './components/StartMenu.vue'
import ThemeButton from './components/icons/ThemeButton.vue'
import CopyRight from './components/CopyRight.vue'

export default {
  components: { GameView, StartMenu, ThemeButton, CopyRight },
  data() {
    return {
      isLoad: false
    }
  },
  created() {
    this.$store.dispatch('getTheme')
    window.addEventListener('load', () => {
      this.isLoad = true
    })
  }
}
</script>

<style scoped>
.start-leave-to {
  opacity: 0;
  transform: translateY(3rem);
}
.start-enter-from {
  opacity: 0;
  transform: translateY(-3rem);
}
.start-enter-active,
.start-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.start-enter-to,
.start-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
