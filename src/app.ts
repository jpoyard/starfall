import "phaser";
import { GameScene } from "./gameScene";
import { ScoreScene } from "./scoreScene";
import { WelcomeScene } from "./welcomeScene";

const config: Phaser.Types.Core.GameConfig = {
  title: "Starfall",
  width: 800,
  height: 600,
  parent: "game",
  scene: [WelcomeScene, GameScene, ScoreScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  backgroundColor: "#000033",
};

export class StarfallGame extends Phaser.Game {
  constructor(config) {
    super(config);
  }
}

window.onload = () => {
  const gameElt = document.querySelector("#game");
  var game = new StarfallGame({
    ...config,
    width: gameElt.clientWidth,
    height: gameElt.clientHeight,
  });
};
