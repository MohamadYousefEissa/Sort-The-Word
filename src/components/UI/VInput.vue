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
  background: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  width: 100%;
  outline: 0;
  padding: 0.4rem 0.5rem;
  position: relative;
}
label {
  position: absolute;
  top: 7px;
  left: 5px;
  pointer-events: none;
  background: rgb(24, 24, 24);
  color: rgb(180, 180, 180);
  padding: 0 0.5rem;
  transition: all 0.3s;
}
input:focus ~ label,
input:valid ~ label {
  top: -13px;
  left: 20px;
}
</style>
