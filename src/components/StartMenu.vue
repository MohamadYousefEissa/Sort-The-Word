<template>
  <v-box>
    <h1 class="mt-1">{{ startTitle }}</h1>
    <p>By Mohamad Yousef Eissa ❤️</p>
    <div class="text-start mt-5">
      <p class="mb-2">Tips:</p>
      <ul>
        <li>You have 3 hints</li>
        <li>You can skip the word</li>
        <li>Every correct answer you get a hint</li>
        <li>The game end when the words end</li>
        <li>The hint appear the first letters of word</li>
        <li>You can answer by clicking at the letters</li>
        <li>Click the lamp in top-right corner to show the hint</li>
        <li>Enjoy</li>
      </ul>
    </div>
    <v-button @click-event="$store.dispatch('startGame')">Play</v-button>
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
