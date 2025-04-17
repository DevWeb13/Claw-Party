// game.js : logique du jeu
import { setupPeer, onNetworkEvent } from './network.js';
import { showMessage, updateScore, switchToGameScreen } from './ui.js';

console.log('Claw Party - Game logic ready');

// Exemple minimal :
export let gameState = {
  score: 0,
  clawX: 50,
  direction: 1
};

function update() {
  gameState.clawX += gameState.direction;
  if (gameState.clawX > 95 || gameState.clawX < 5) {
    gameState.direction *= -1;
  }
  requestAnimationFrame(update);
}

update();
