function setup() {
    createCanvas(500, windowHeight);
    background('grey');
}

var score = 0
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letter = alphabet[Math.floor(Math.random) * 265];
var x = 300

function draw() {
    textSize(32)
    text('Please type the following letters')
}
}











/*
function setup() {
    createCanvas(1000, 1000);
    background("yellow");
    textSize(30);
    text("Play This Game and 20 Bucks Will Appear Under Your Pillow", 75, 300);
    fill('red');

}

var a = 10;
var b = 20;
var c = 30;
var d = 40;
var e = 50;

function draw() {
    text('You would not believe your eyes', a, 500, 20, 20);
     fill('red');
     a++;
   
}


var value = 0;
function draw() {
    fill(value);
    rect(25, 25, 50, 50);
}
function keyTyped() {
    if (key === 'a') {
        value = 255;
    } else if (key === 'b') {
        value = 0;
    } else if (key === 'c') {
        value = 150
    }
}


