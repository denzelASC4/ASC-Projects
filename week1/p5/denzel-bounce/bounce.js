function setup() {
    createCanvas(500, 500);
    background("grey");


}

function draw() {
    fill("red")
    ellipse(x, y, 50, 50);
    x++;
    y++;
}