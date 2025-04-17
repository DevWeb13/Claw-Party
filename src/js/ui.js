// ui.js : interactions DOM
export function showMessage(text, color = 'purple') {
  console.log('%c' + text, `color: ${color}`);
}

export function updateScore(score) {
  console.log('Score:', score);
}

export function switchToGameScreen() {
  console.log('Switching to game screen');
}
