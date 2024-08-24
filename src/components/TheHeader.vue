<template>
  <div class="row text-nowrap">
    <div class="col">
      <div class="d-flex flex-column flex-md-row column-gap-4 text-start">
        <div>Score : {{ score }}</div>
        <div>Hints : {{ hints }}</div>
        <div class="mt-3 mt-md-0">
          <button @click="$store.dispatch('resetSelected')" v-if="isUserSelected" id="reset-btn">
            <v-reset></v-reset>
          </button>
        </div>
      </div>
    </div>
    <div class="col">Sort The Word</div>
    <div class="col text-end">
      <button @click="$store.dispatch('hint')" title="Hint" id="lamb">
        <v-lamb v-if="isRemainHint"></v-lamb>
        <v-lamb-off v-else></v-lamb-off>
      </button>
    </div>
  </div>
</template>

<script>
import VLamb from './icons/VLamb.vue'
import VLambOff from './icons/VLambOff.vue'
import VReset from './icons/VReset.vue'
import { mapGetters } from 'vuex'
export default {
  components: { VLamb, VLambOff, VReset },
  computed: {
    ...mapGetters(['score', 'hints', 'isUserSelected']),
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
  padding: 0;
}
#reset-btn {
  position: absolute;
}
#lamb {
  padding: 0 0 5px 5px;
}
#lamb:active {
  transform: scale(0.9);
}
</style>
