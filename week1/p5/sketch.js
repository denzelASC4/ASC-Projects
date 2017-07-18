function setup() {
    createCanvas(500, 500);
    //Background(R (value: 0-225), G (value: 0))
    background(225);
    //Making the Background
    fill('yellow');
    ellipse(width / 2, height / 2, 400);
    //Every shape below this line is black
    fill('black');
    //BEASTLY
    //Thicker lines
    strokeWeight(10);
    //Top sunglasses line
    line(80, 150, 420, 150);
    //Mouth line
    line(150, 350, width - 150, 350);
    //RECTANGLES
    rect(150, 150, 80, 40);
    rect(width - 150 - 80, 150, 80, 40);
}
function mousePressed() {
    console.log('The mouse is at this x:' + mouseX + ".")
    console.log('The mouse is at this y:' + mouseY + ".")
}