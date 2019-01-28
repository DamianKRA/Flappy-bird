function UI() {
    this.x = 0 + innerWidth / 2 / 2;
    this.y = innerHeight / 2;

    this.drawGameOver = function () {
        c.font = "40px Arial";
        c.fillStyle = "#444";
        c.fillText("Game Over", this.x, this.y);

        c.font = "20px Arial";
        c.fillStyle = "#222";
        c.fillText("Tap twice to play again", this.x, this.y+25);
    };

    this.drawPoints = function () {
        c.font = "40px Arial";
        c.fillStyle = "#ff0";
        c.fillText(points, innerWidth / 2, innerHeight / 10);
    };

    this.reset = function () {
        ball.x = Math.floor(innerWidth / 10);
        ball.y = Math.floor(innerHeight / 3);
        pipe = [];
        counter = 0;
        points = 0;
        gameOver = false;
    }
}