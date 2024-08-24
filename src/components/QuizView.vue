<template>
  <div class="my-5 py-3 d-flex flex-column align-items-center">
    <VAlert :content="alertContent" :mode="show" :show="show" />
    <transition-group
      tag="ul"
      name="list"
      class="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mt-3 list-unstyled"
    >
      <li
        class="letter"
        v-for="(letter, i) in wordAfterShuffle"
        :key="letter + i"
        translate="no"
        @click="selectLetter(letter)"
      >
        {{ letter }}
        <span></span>
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
    ...mapGetters(['wordAfterShuffle', 'alertContent', 'show'])
  },
  methods: {
    selectLetter(letter) {
      this.$store.dispatch('selectLetter', { letter: letter, target: event.target })
    }
  },
  mounted() {
    this.$store.dispatch('randomWord')
  }
}
</script>

<style scoped>
.letter {
  position: relative;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 20px;
  color: var(--el-clr);
  background-color: var(--sec-bg);
  cursor: pointer;
  transition: opacity 0.2s;
  user-select: none;
}

.selected {
  opacity: 0.5;
}

li span {
  font-size: 10px;
  position: absolute;
  left: 5px;
  bottom: 0;
}
@media screen and (max-width: 480px) {
  .letter {
    width: 40px;
    height: 40px;
  }
  li span {
    font-size: 9px;
    position: absolute;
    left: 5px;
    bottom: 0;
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
