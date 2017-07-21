var x = 30;
var y = 30;
var xspeed = 9;
var yspeed = 10;

function setup() {
    createCanvas(500, 500);
    background("grey");
}

function draw() {
    var d = dist(50, 50, mouseX, mouseY);
    background('whitec');
    fill(random(92, 250, 36), random(50, 250, 74), random(63, 250, 109));
    ellipse(x, y, d, d);
    x = x + xspeed;

    if (x > 500 || x < 0) {
        xspeed = -xspeed;
    }
    y = y + yspeed;

    if (y > 500 || y < 0) {
        yspeed = -yspeed;
    }
}