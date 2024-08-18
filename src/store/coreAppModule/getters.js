export default {
  activePage(state) {
    return state.activePage
  },
  words(state) {
    return state.words
  },
  randomWord(state) {
    return state.randomWord
  },
  wordAfterShuffle(state) {
    return state.wordAfterShuffle
  },
  score(state) {
    return state.score
  },
  hintLetters(state) {
    return state.hintLetters
  },
  hints(state) {
    return state.hints
  },
  gameOver(state) {
    return state.gameOver
  },
  theme(state) {
    return state.theme
  },
  preferdTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDarkScheme ? 'dark' : 'light'
  },
  alertContent(state, getters) {
    switch (getters.show) {
      case 'right':
        return 'Right Answer'
      case 'wrong':
        return 'Wrong Answer Try Again'
      case 'hint':
        return `Hint : The Word Starts With <span class="fw-bold">${state.hintLetters.toUpperCase()}</span>`
      case 'noHints':
        return 'No Enough Hints'
      case 'hintReminder':
        return `Remember You Can Use Hints You Have ${state.hints} Remain`
      default:
        return 'Please Enter At Least 1 Charachter'
    }
  }
}
