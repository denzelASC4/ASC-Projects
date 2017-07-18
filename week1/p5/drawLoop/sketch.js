//Setup only happens once
function setup() {
    createCanvas(800, 800)
    background('purple');
}

var x = 0
function draw() {
    //Background comes first...Be careful of the order of things
    background('purple')
    ellipse(x, 200, 200, 200);
    x = x + 1
    //x++*
}
// call or invoke a function