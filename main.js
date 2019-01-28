const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//const canvasWidth = window.innerWidth;
//const canvasHeight = window.innerHeight

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

let ball; //obiekt
let pipe = []; //przeszkody- rury
let counter; //odlicza klatki
let ui; //wszystkie napisy- user interface
let points; //punkty
let resetButton;
let mouseX, mouseY;
let playAgain = 0;

let gameOver = false;

function randomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

//---------------------------------------------------------------------
//Główny program-------------------------------------------------------
//---------------------------------------------------------------------

function init() {
    ball = new Ball();
    ui = new UI();
    counter = 0;
    points = 0;
}

function update() {
    if (gameOver == false) {
        c.clearRect(0, 0, innerWidth, innerHeight);

        if (counter % 120 == 0) {
            pipe[pipe.length] = new Pipe();
        }

        for (let i in pipe) {
            pipe[i].draw();
            pipe[i].update();
            if (pipe[i].x <= -350) {
                pipe.splice(i, 1);
            }
            ui.drawPoints(points);
        }

        ball.draw();
        ball.update();

        counter++;
    } else {
        ui.drawGameOver();
    }
    console.log(counter)
}

//inicjowanie
init();

//pętla
let game = setInterval(update, 1000 / 60); // 60klatek/sec

canvas.onclick = function (event) {
    if (gameOver == true) {
        playAgain++;
        if (playAgain > 1) {
            ui.reset();
            playAgain = 0;
        }
    } else {
        ball.jump();
    }
};