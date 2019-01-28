function Pipe() {
    this.x = Math.floor(innerWidth * 2);
    this.y = 0;
    this.width = Math.floor(innerWidth / 3.5); //szerokość dziury
    this.height = 120 //Math.floor(innerHeight / 4); //wysokość dziury
    this.moveSpeed = 2.5;
    this.randomY = randomNumber(100, innerHeight - this.height - 100); //wysokosc górnej rury
    this.passed = false;

    this.draw = function () {
        c.fillStyle = "#0f0";
        c.fillRect(this.x, this.y, this.width, this.randomY);
        c.fillRect(this.x, this.randomY + this.height, this.width, innerHeight);
    };

    this.update = function () {
        this.x -= this.moveSpeed;

        //dodawanie punktów po przeskoczeniu przez rure
        if (this.x < ball.x - this.height && this.passed === false) {
            points++;
            this.passed = true;
        }

        //wykrywanie kolizji piłki z rurami
        if (ball.x + ball.size > this.x && ball.x - ball.size < this.x + this.width) {
            if (ball.y - ball.size < this.randomY || ball.y + ball.size > this.randomY + this.height) {
                gameOver = true;
            }
        }
    };

}