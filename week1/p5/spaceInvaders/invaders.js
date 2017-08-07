function setup() {
    createCanvas(700, 780);
    background("black")

        ;

}

var battleship = {
    x: 350,
    y: 730,
    w: 30,
    h: 30
};
var x1 = 60;
var x2 = 30;

var battleshipSpeed = 12;
function draw() {


    background("black");
    noStroke();
    //Shapes
    fill("green")
    strokeWeight(1)
    fill("white");
    var myArray= [,,,]
    ellipse(100, 100, x1, x2);
    ellipse(200, 100, x1, x2);
    ellipse(300, 100, x1, x2);
    ellipse(400, 100, x1, x2);
    ellipse(500, 100, x1, x2);
    ellipse(600, 100, x1, x2);
    ellipse(100, 250, x1, x2);
    ellipse(200, 250, x1, x2);
    ellipse(300, 250, x1, x2);
    ellipse(400, 250, x1, x2);
    ellipse(500, 250, x1, x2);
    ellipse(600, 250, x1, x2);
    ellipse(100, 400, x1, x2);
    ellipse(200, 400, x1, x2);
    ellipse(300, 400, x1, x2);
    ellipse(400, 400, x1, x2);
    ellipse(500, 400, x1, x2);
    ellipse(600, 400, x1, x2);
    fill('green')
    rect(0, 10, 10, 780);
    rect(0, 0, 700, 10);
    rect();
    rect();
    bottomBattleship();
}
function bottomBattleship() {
    fill("white");
    rect(battleship.x, battleship.y, battleship.w, battleship.h);
    if (keyIsDown(RIGHT_ARROW) === true) {
        if (battleship.x + battleship.h < height - 5) {
            battleship.x = battleship.x + battleshipSpeed;
        }
    }

    if (keyIsDown(LEFT_ARROW) === true) {
        if (battleship.x > 5) {
            battleship.x = battleship.x - battleshipSpeed;
        }

    }
    if (battleship.x >= 665) {
        battleship.x = 665

    }
}


