<template>
  <div class="row py-2 text-nowrap">
    <div class="col">
      <div class="d-flex flex-column flex-md-row column-gap-4">
        <div>Score : {{ score }}</div>
        <div>Hints : {{ hints }}</div>
      </div>
    </div>
    <div class="col text-center">{{ title }}</div>
    <div class="col text-end">
      <button @click="$store.dispatch('hint')" title="Hint">
        <v-lamb v-if="hints > 0"></v-lamb>
        <v-lamb-off v-else></v-lamb-off>
      </button>
    </div>
  </div>
</template>

<script>
import VLamb from './icons/VLamb.vue'
import VLambOff from './icons/VLambOff.vue'
export default {
  props: ['title'],
  components: { VLamb, VLambOff },
  computed: {
    score() {
      return this.$store.getters.score
    },
    hints() {
      return this.$store.getters.hints
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  outline: 0;
  border: 0;
  padding: 0;
}
button:active {
  transform: scale(0.9);
}
</style>
