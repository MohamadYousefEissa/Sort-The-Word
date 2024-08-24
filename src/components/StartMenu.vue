<template>
  <v-box>
    <h1 class="mt-1" id="start-title" ref="startTitle">Sort The Word Game</h1>
    <p id="author">By Mohamad Yousef Eissa ❤️</p>
    <div class="text-start mt-5">
      <p class="mb-2" id="tips-label">Tips:</p>
      <ul>
        <li>You have 3 hints</li>
        <li>You can skip the word</li>
        <li>Every correct answer you get a hint</li>
        <li>The game end when the words end</li>
        <li>The hint appear the first letters of word</li>
        <li>You can answer by clicking at the letters</li>
        <li>Click the lamp in top-right corner to show the hint</li>
        <li>Enjoy</li>
      </ul>
    </div>
    <v-button @click-event="$store.dispatch('startGame')">Play</v-button>
  </v-box>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    //for text animation :
    const textTL = gsap.timeline()
    const startTitle = this.$refs.startTitle
    const splitedText = startTitle.textContent.replace(/ /g, '').split('')
    let text = ''
    splitedText.forEach((item) => {
      if (item < 'a') {
        text += `&ThickSpace;<span>${item}</span>`
      } else {
        text += `<span>${item}</span>`
      }
    })
    startTitle.innerHTML = text

    textTL
      .from('#start-title span', {
        opacity: 0,
        delay: 0.2,
        duration: 1,
        y: -20,
        stagger: 0.1,
        ease: 'elastic.out(1,0.4)'
      })
      .from('#author', {
        opacity: 0
      })
      .from('#tips-label', {
        opacity: 0
      })
      .from('li', {
        x: -20,
        opacity: 0,
        stagger: 0.4
      })
  }
}
</script>

<style>
#start-title span {
  display: inline-block;
}
</style>

<style scoped>
#start-title {
  font-size: clamp(20px, 8vw, 40px);
}
p,
li {
  font-size: clamp(14px, 2vw, 16px);
}
</style>
