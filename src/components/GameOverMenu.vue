<template>
  <transition name="layer">
    <div class="box" v-if="$store.getters.gameOver">
      <v-box class="pt-3">
        <h1>Well Played</h1>
        <p>
          Your Earn : <span class="fw-bold">{{ score }} Points</span>
        </p>
        <v-button @click-event="reload">Retry</v-button>
      </v-box>
      <div class="dark-layer"></div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    score() {
      return this.$store.getters.score
    }
  },
  methods: {
    reload() {
      window.location.reload()
    }
  }
}
</script>

<style scoped>
h1 {
  color: var(--main-clr);
  margin-bottom: 1rem;
}
.box {
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: absolute;
  z-index: 2;
  margin-top: 1rem;
}
.dark-layer {
  position: absolute;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
button {
  margin-top: 3rem;
}
.layer-enter-active {
  animation: opacity 0.3s;
}
.layer-leave-active {
  animation: opacity 0.3s reverse;
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
