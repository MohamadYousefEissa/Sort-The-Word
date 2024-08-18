import { gsap } from 'gsap'
export default {
  selectLetter(context, payload) {
    const randomWord = context.getters.randomWord
    if (
      context.state.word.length < randomWord.length &&
      !payload.target.classList.contains('selected')
    ) {
      payload.target.classList.add('selected')
      context.state.word += payload.letter.toLowerCase()
      payload.target.firstElementChild.innerText = context.state.word.length
      if (context.state.word.length === randomWord.length) {
        let timeout = 500
        clearTimeout(context.rootState.coreAppModule.to)
        if (context.state.word === randomWord) {
          timeout = 0
          const input = document.querySelector('#word-input')
          input.value = ''
          context.dispatch('correctAnswer')
        } else {
          context.dispatch('wrongAnswer')
          gsap.from('li', {
            y: 5,
            duration: 1.5,
            ease: 'elastic.out(1, 0.1)'
          })
          gsap.from('li', {
            duration: 1,
            ease: 'none',
            color: 'red'
          })
        }
        context.dispatch('resetSelected', timeout)
      }
    }
  },
  resetSelected(context, timeout = 0) {
    context.state.word = ''
    const li = document.querySelectorAll('.selected')
    const counter = document.querySelectorAll('li span')
    setTimeout(() => {
      counter.forEach((item) => {
        item.innerHTML = ''
      })
      li.forEach((item) => {
        item.classList.remove('selected')
      })
    }, timeout)
  }
}
