import BootScene from "./scenes/bootScene.js";
import BattleScene from "./scenes/battleScene.js";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [BattleScene],
};

const game = new Phaser.Game(config);
