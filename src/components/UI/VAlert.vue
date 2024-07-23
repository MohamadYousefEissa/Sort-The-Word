<template>
  <transition name="alert">
    <div v-if="show" class="position-absolute w-75 text-center">
      <span :class="mode" v-html="content"></span>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['mode', 'content', 'show']
}
</script>

<style scoped>
div {
  margin-top: -2.5rem;
}
.right {
  color: var(--hint-right-clr);
}
.wrong,
.empty,
.noHints {
  color: var(--hint-wrong-clr);
}
.hint {
  color: var(--hint-letters-clr);
}
.hintReminder {
  color: var(--hint-reminder-clr);
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
.alert-enter-active,
.alert-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.alert-enter-to,
.alert-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
