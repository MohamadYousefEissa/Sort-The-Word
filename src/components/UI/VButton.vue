<template>
  <button @click="$emit('click-event')">{{ label }}</button>
</template>

<script>
export default {
  props: ['label'],
  emits: ['click-event']
}
</script>

<style scoped>
button {
  width: 100%;
  background: rgb(56, 56, 56);
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 0.5rem 0;
  transition: all 0.2s;
}
button:hover {
  background: rgb(62, 62, 62);
}
button:active {
  transform: scale(0.95);
}
</style>
