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
  margin-top: -3rem;
}
.right {
  color: green;
}
.wrong,
.empty,
.noHints {
  color: red;
}
.hint {
  color: rgb(88, 88, 241);
}
.hintReminder {
  color: gold;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
}
.alert-enter-active,
.alert-leave-active {
  transition: opacity 0.3s;
}
.alert-enter-to,
.alert-leave-from {
  opacity: 1;
}
</style>
