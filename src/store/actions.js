export default {
  startGame(contex) {
    contex.state.activePage = 'GameView'
  },
  randomWord(contex) {
    const random = Math.floor(Math.random() * contex.state.words.length)
    contex.state.randomWord = contex.state.words[random]
    contex.dispatch('shuffleLetters')
  },
  shuffleLetters(contex) {
    const word = contex.getters.randomWord.split('')
    let shuffledWord = ''
    for (let i = 0; i < contex.getters.randomWord.length; i++) {
      let randomLetter = Math.floor(Math.random() * word.length)
      while (i === 0 && randomLetter === 0) {
        randomLetter = Math.floor(Math.random() * word.length)
      }
      shuffledWord += word[randomLetter]
      word.splice(randomLetter, 1)
    }
    contex.state.wordAfterShuffle = shuffledWord.toUpperCase()
  },
  nextWord(contex) {
    const input = document.querySelector('#word-input')
    input.value = ''
    contex.state.hintLetters = ''
    const preWord = contex.state.randomWord
    contex.state.words.splice(contex.state.words.indexOf(preWord), 1)
    if (contex.state.words.length > 0) contex.dispatch('randomWord')
    else contex.dispatch('gameOver')
    contex.commit('show', null)
  },
  submit(contex) {
    clearTimeout(contex.state.to)
    const input = document.querySelector('input')
    if (input.value.length === 0) {
      contex.commit('show', 'empty')
      contex.dispatch('timeOut', { delay: 2000 })
    } else if (input.value.toLowerCase() === contex.state.randomWord) {
      contex.dispatch('correctAnswer')
    } else {
      contex.dispatch('wrongAnswer')
    }
  },
  correctAnswer(contex) {
    contex.state.score++
    contex.state.hints++
    contex.dispatch('nextWord')
    contex.commit('show', 'right')
    if (contex.state.words.length > 0)
      contex.state.to = setTimeout(() => {
        contex.commit('show', null)
      }, 2000)
  },
  wrongAnswer(contex) {
    contex.commit('show', 'wrong')
    const lamp = document.querySelector('.bi-lightbulb-fill')
    if (lamp) {
      if (contex.state.wrongAnswers < 2) {
        contex.state.wrongAnswers++
        lamp.classList.remove('shake')
      } else {
        contex.state.wrongAnswers = 0
        lamp.classList.add('shake')
        contex.commit('show', 'hintReminder')
        contex.dispatch('timeOut', { delay: 3000 })
        return
      }
    }
    contex.dispatch('timeOut', { delay: 2000 })
  },
  hint(contex) {
    clearTimeout(contex.state.to)
    if (contex.state.randomWord[contex.state.hintLetters.length] && contex.state.hints > 0) {
      contex.commit('show', 'hint')
      contex.state.hints--
      contex.state.hintLetters += contex.state.randomWord[contex.state.hintLetters.length]
    } else if (!contex.state.randomWord[contex.state.hintLetters.length]) {
      return
    } else {
      contex.commit('show', 'noHints')
      contex.dispatch('timeOut', { delay: 2000 })
    }
  },
  timeOut(contex, payload) {
    contex.state.to = setTimeout(() => {
      if (contex.state.hintLetters) contex.commit('show', 'hint')
      else contex.commit('show', null)
    }, payload.delay)
  },
  gameOver(contex) {
    clearTimeout(contex.state.to)
    setTimeout(() => {
      contex.state.gameOver = true
    }, 500)
  },
  changeTheme(contex) {
    const html = document.querySelector('html')
    contex.state.theme = contex.state.theme === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-theme', contex.state.theme)
    localStorage.setItem('theme', contex.state.theme)
  },
  getTheme(contex) {
    const html = document.querySelector('html')
    const theme = localStorage.getItem('theme') || contex.getters.preferdTheme
    contex.state.theme = theme
    html.setAttribute('data-theme', theme)
  }
}
