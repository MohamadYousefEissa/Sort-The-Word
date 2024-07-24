<template>
  <button @click="$emit('click-event')"><slot></slot></button>
</template>

<script>
export default {
  emits: ['click-event']
}
</script>

<style scoped>
button {
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 0.5rem 0;
  transition: all 0.2s;
  background: var(--sec-bg);
  color: var(--color);
}

button:active {
  transform: scale(0.95);
}
</style>
