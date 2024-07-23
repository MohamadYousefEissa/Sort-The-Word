<template>
  <v-box>
    <h1>{{ startTitle }}</h1>
    <h6>By Mohamad Yousef Eissa ❤️</h6>
    <ol class="text-start">
      Tips:
      <li>You have 3 hints</li>
      <li>You can skip the word</li>
      <li>Every correct answer you get a hint</li>
      <li>The hint appear the first letters of word</li>
      <li>Click the lamp in top-right corner to show the hint</li>
      <li>Enjoy</li>
    </ol>
    <VButton @click-event="$store.dispatch('startGame')" :label="'Play'" />
  </v-box>
</template>

<script>
export default {
  props: {
    startTitle: {
      type: String,
      default: 'Sort The Word'
    }
  }
}
</script>

<style scoped>
.container {
  font-family: monospace;
}
h6 {
  margin: 1rem 0 3rem 0;
}
</style>
