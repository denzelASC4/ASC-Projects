var prompt = require('prompt-sync')();

function roll(n){
    var roll = Math.floor(Math.random() * n)
    return roll;
}


var mashArray = ["Stage","Omega Stage","Congo Jungle","Dream Land"];
var firstQuestion = [2,4];
var secondQuestion = ["Cloud","Link"];

function nextAction(){
var strike= prompt("How many times will you strike?");
var battle= prompt("Who will you choose to fight");

firstQuestion.push(strike);
secondQuestion.push(battle);
}

function answer(){
    var arena= mashArray[roll(mashArray.length)]
    var hits= firstQuestion[roll(firstQuestion.length)]
    var character= secondQuestion[roll(secondQuestion.length)]
}



