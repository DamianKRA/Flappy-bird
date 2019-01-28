function Ball() {
    this.x = Math.floor(innerWidth / 10);
    this.y = Math.floor(innerHeight / 3);
    this.size = Math.floor(innerWidth / 20);
    this.lift = -15;
    this.gravity = 0.5;
    this.velocity = 0;
    this.maxVelo = 7;

    this.draw = function () {
        c.beginPath();
        c.fillStyle = "black";
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.closePath();
    };

    this.jump = function () {
        this.velocity += this.lift;
    };

    this.update = function () {
        //ograniczenie przyśpieszenia od -10 do 10
        if (this.velocity > this.maxVelo) {
            this.velocity = this.maxVelo;
        }

        if (this.velocity < -this.maxVelo) {
            this.velocity = -this.maxVelo;
        }

        //sprawdzenie czy nie dotyka ziemi
        if (this.y >= innerHeight - this.size) {
            gameOver = true;
        }

        //ochrona przed zbyt wyokością
        if (this.y < 0 - this.size / 2) {
            this.y = 0;
        }

        this.velocity += this.gravity;
        this.y += this.velocity;
    };
}