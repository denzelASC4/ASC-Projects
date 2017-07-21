var grid = [[1, 2, 3, 4, 5, 6, 7, 8],
[1, 2, 3, 4, 5, 6, 7, 8],
[1, 2, 3, 4, 5, 6, 7, 8],
[1, 2, 3, 4, 5, 6, 7, 8],
[1, 2, 3, 4, 5, 6, 7, 8],
[1, 2, 3, 4, 5, 6, 7, 8],
[1, 2, 3, 4, 5, 6, 7, 8],
[1, 2, 3, 4, 5, 6, 7, 8]];

function setup() {
    createCanvas(880, 880);
    background('red');
}

var rectx = 0
var recty = 0

function draw() {
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid.length; j++) {
            fill('white');
            rect(rectx, recty, 100, 100);
        }
        rectx = rectx + 110
        recty = recty + 0
    }


}



