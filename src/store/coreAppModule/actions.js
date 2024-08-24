export default {
  startGame(context) {
    context.state.activePage = 'GameView'
  },
  randomWord(context) {
    const random = Math.floor(Math.random() * context.state.words.length)
    context.state.randomWord = context.state.words[random]
    context.dispatch('shuffleLetters')
  },
  shuffleLetters(context) {
    const word = context.getters.randomWord.split('')
    let shuffledWord = ''
    for (let i = 0; i < context.getters.randomWord.length; i++) {
      let randomLetter = Math.floor(Math.random() * word.length)
      while (i === 0 && randomLetter === 0) {
        randomLetter = Math.floor(Math.random() * word.length)
      }
      shuffledWord += word[randomLetter]
      word.splice(randomLetter, 1)
    }
    context.state.wordAfterShuffle = shuffledWord.toUpperCase()
  },
  nextWord(context) {
    context.dispatch('resetSelected', 0)
    const input = document.querySelector('#word-input')
    input.value = ''
    context.state.hintLetters = ''
    const preWord = context.state.randomWord
    context.state.words.splice(context.state.words.indexOf(preWord), 1)
    if (context.state.words.length > 0) context.dispatch('randomWord')
    else context.dispatch('gameOver')
    context.commit('show', null)
  },
  submit(context) {
    clearTimeout(context.state.to)
    context.dispatch('resetSelected', 0)
    const input = document.querySelector('#word-input')
    if (input.value.length === 0) {
      context.commit('show', 'empty')
      context.dispatch('timeOut', { delay: 2000 })
    } else if (input.value.toLowerCase() === context.state.randomWord) {
      context.dispatch('correctAnswer')
    } else {
      context.dispatch('wrongAnswer')
    }
  },
  correctAnswer(context) {
    context.state.score++
    context.state.hints++
    context.dispatch('nextWord')
    context.commit('show', 'right')
    if (context.state.words.length > 0)
      context.state.to = setTimeout(() => {
        context.commit('show', null)
      }, 2000)
  },
  wrongAnswer(context) {
    context.commit('show', 'wrong')
    const lamp = document.querySelector('.bi-lightbulb-fill')
    if (lamp) {
      if (context.state.wrongAnswers < 2) {
        context.state.wrongAnswers++
        lamp.classList.remove('shake')
      } else {
        context.state.wrongAnswers = 0
        lamp.classList.add('shake')
        context.commit('show', 'hintReminder')
        context.dispatch('timeOut', { delay: 4000 })
        return
      }
    }
    context.dispatch('timeOut', { delay: 2000 })
  },
  hint(context) {
    clearTimeout(context.state.to)
    if (context.state.randomWord[context.state.hintLetters.length] && context.state.hints > 0) {
      context.commit('show', 'hint')
      context.state.hints--
      context.state.hintLetters += context.state.randomWord[context.state.hintLetters.length]
    } else if (!context.state.randomWord[context.state.hintLetters.length]) {
      return
    } else {
      context.commit('show', 'noHints')
      context.dispatch('timeOut', { delay: 2000 })
    }
  },
  timeOut(context, payload) {
    context.state.to = setTimeout(() => {
      if (context.state.hintLetters) context.commit('show', 'hint')
      else context.commit('show', null)
    }, payload.delay)
  },
  gameOver(context) {
    clearTimeout(context.state.to)
    setTimeout(() => {
      context.state.gameOver = true
    }, 500)
  },
  changeTheme(context) {
    const html = document.querySelector('html')
    context.state.theme = context.state.theme === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-theme', context.state.theme)
    localStorage.setItem('theme', context.state.theme)
  },
  getTheme(context) {
    const html = document.querySelector('html')
    const theme = localStorage.getItem('theme') || context.getters.preferdTheme
    context.state.theme = theme
    html.setAttribute('data-theme', theme)
  }
}
