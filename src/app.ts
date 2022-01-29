import { Game } from "phaser";

const config = {
    title: "Starfall",
    width: 800,
    height: 600,
    parent: "game",
    backgroundColor: "#18216D"
};
export class StarfallGame extends Game {
    constructor(config) {
        super(config);
    }
}
window.onload = () => {
    var game = new StarfallGame(config);
};
