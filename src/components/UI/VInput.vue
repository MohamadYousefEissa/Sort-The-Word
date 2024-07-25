<template>
  <form @submit.prevent="submit">
    <div class="my-5 position-relative">
      <input
        @input="toUpper"
        type="text"
        required
        spellcheck="false"
        autocomplete="off"
        name="word"
        id="word"
      />
      <label for="word"> {{ label }}</label>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Enter The Word Here'
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('submit')
    },
    toUpper(ev) {
      ev.target.value = ev.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase()
    }
  }
}
</script>

<style scoped>
input {
  outline: 0;
  border-radius: 5px;
  width: 100%;
  padding: 0.4rem 0.5rem;
  background-color: transparent;
  border: 1px solid var(--sec-clr);
  color: var(--main-clr);
}
label {
  position: absolute;
  top: 7px;
  left: 5px;
  pointer-events: none;
  padding: 0 0.5rem;
  transition:
    all 0.3s,
    background-color 0s;
  background-color: var(--box-bg);
  color: var(--sec-clr);
}
input:focus ~ label,
input:valid ~ label {
  top: -13px;
  left: 20px;
}
</style>
