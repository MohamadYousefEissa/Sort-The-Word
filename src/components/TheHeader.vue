<template>
  <div class="row text-nowrap">
    <div class="col">
      <div class="d-flex flex-column flex-md-row column-gap-4 text-start">
        <div>Score : {{ score }}</div>
        <div>Hints : {{ hints }}</div>
      </div>
    </div>
    <div class="col">{{ title }}</div>
    <div class="col text-end">
      <button @click="$store.dispatch('hint')" title="Hint">
        <v-lamb v-if="isRemainHint"></v-lamb>
        <v-lamb-off v-else></v-lamb-off>
      </button>
    </div>
  </div>
</template>

<script>
import VLamb from './icons/VLamb.vue'
import VLambOff from './icons/VLambOff.vue'
import { mapGetters } from 'vuex'
export default {
  props: ['title'],
  components: { VLamb, VLambOff },
  computed: {
    ...mapGetters(['score', 'hints']),
    isRemainHint() {
      return this.hints > 0
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  outline: 0;
  border: 0;
  padding: 0 0 5px 5px;
}
button:active {
  transform: scale(0.9);
}
</style>
