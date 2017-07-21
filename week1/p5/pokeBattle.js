
function Pokemon(name, type, HP, def, atk, legend, moves, atkPoints) {
    this.name = name;
    this.type = type;
    this.HP = HP;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
    this.moves = moves;
    this.atkPoints = atkPoints;
}

var Charmander = new Pokemon("Charmander", ["Fire"], 39, 43, 52, false, ["Fire Blast", "Fire Spin", "Flamethrower", "Ember"], [110, 35, 90, 40]);
var Dragonite = new Pokemon("Dragonite", ["Flying", "Dragon"], 91, 95, 134, false, ["Dragon Tail", "Steel Wing", "Dragon Breath", "Thunder"], [60, 70, 60, 110]);
var Abra = new Pokemon("Abra", ["Psychic"], 25, 15, 20, false, ["Psychic", "Barrier", "Knock off", "Fire Punch"], [90, 20, 65, 75]);
var Zapdos = new Pokemon("Zapdos", ["Electric", "Flying"], 90, 85, 90, true, ["Peck", "Thunder Shock", "Thunder", "Zap Cannon"], [35, 40, 110, 120]);
var Moltres = new Pokemon("Moltres", ["Fire", "Flying"], 90, 90, 100, true, ["Ember", "Wing Attack", "Fire Spin", "Burn Up"], [40, 60, 35, 130]);
var Articuno = new Pokemon("Articuno", ["Ice", "Flying"], 90, 100, 85, true, ["Gust", "Powder Snow", "Blizzard", "Hurricane"], [40, 40, 110, 110]);
var pokeArray = [Charmander, Dragonite, Abra, Zapdos, Moltres, Articuno];


function setup() {
    createCanvas(600, 600);
    background('pink');
    fill("blue");
    rect(400, 0, 200, 200);
    fill('grey');
    ellipse(500, 150, 100, 20);
    fill("yellow");
    ellipse(500, 100, 100, 100);
    fill('purple');
    rect(0, 400, 200, 200);
    fill('grey');
    ellipse(100, 550, 100, 20)

    fill("red");
    ellipse(100, 500, 100, 100);
    fill("White")
    rect(200, 350, 200, 50);
    fill('grey');
    rect(200, 400, 200, 50);

    fill("White");
    rect(200, 0, 200, 50);
    fill("grey")
    rect(200, 50, 200, 50);


    fill("green");
    rect(200, 450, 400, 150);


    fill('grey');
    rect(225, 465, 150, 50, 20);
    rect(225, 540, 150, 50, 20);
    rect(425, 465, 150, 50, 20);
    rect(425, 540, 150, 50, 20);
}

var num1 = Math.floor(Math.random() * 6);
var num2 = pokeArray[num1];
var num3 = num2.name;
var move1 = num2.moves[0];
var move2 = num2.moves[1];
var move3 = num2.moves[2];
var move4 = num2.moves[3];

function mouseClicked() {
    fill("grey")
    rect(200, 50, 200, 50);
    if (mouseX <= 375 && mouseX >= 225 && mouseY <= 515 && mouseY >= 465) {
        hpValueOpp -= num2.atkPoints[0];
    }
    if (mouseX <= 375 && mouseX >= 225 && mouseY <= 590 && mouseY >= 540) {
        hpValueOpp -= num2.atkPoints[2];
    }
    if (mouseX <= 575 && mouseX >= 425 && mouseY <= 515 && mouseY >= 465) {
        hpValueOpp -= num2.atkPoints[1];
    }
    if (mouseX <= 575 && mouseX >= 425 && mouseY <= 590 && mouseY >= 540) {
        hpValueOpp -= num2.atkPoints[3];
    }
}

var hpvalueMe = 200
var hpValueOpp = 200

function draw() {
    fill("blue");
    textSize(20);
    text(num3, 230, 385);
    text("Pikachu", 230, 35);


    textSize(20);
    text(move1, 230, 495);
    text(move2, 230, 575);
    text(move3, 435, 495);
    text(move4, 435, 575);

    if (hpValueOpp <= 0) {
        hpValueOpp = 0;
    }
    fill("red");
    rect(200, 50, hpValueOpp, 50);

    fill('red');
    rect(200, 400, hpvalueMe, 50);

}



