function setup() {
    createCanvas(500, 500);
    background(225);
}

function mouseDragged() {
    num1 = random(0, 225);
    num2 = random(0, 225);
    num3 = random(0, 225);
    fill(num1, num2, num3);
    ellipse(mouseX, mouseY, 50);
}