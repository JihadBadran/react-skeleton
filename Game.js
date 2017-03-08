var Game = {
    canvas:undefined,
    context:undefined,

    backgroundSprite:undefined,
    backgroundPos:4

}

Game.init = function(){
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    this.gameLoop();
}

Game.gameLoop = function(){
    this.clear();
    this.update();
    this.draw();
}

module.exports = Game;