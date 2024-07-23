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
  background: var(--sec-bg);
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 0.5rem 0;
  transition: all 0.2s;
  color: var(--color);
}

button:active {
  transform: scale(0.95);
}
</style>
