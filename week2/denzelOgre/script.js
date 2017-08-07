$(document).ready(setup);


var hp= 100;
var gold= 0;
var slain=0;



function setup(){ 
$("body").append("<h1>Welcome to Ogre Fighter v1.0</h1>");
$("body").append("<p>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</p>")
$('body').append("<h1>STATS</h>");
$('body').append('<div class="stats"></div>');
$('body').append("<button onclick='stats()'>Attack the Ogre!</button>");
$('body').append('<div class="ogres"></div>');
}

function stats(){
$(".stats").text("HP:"+hp+" // Gold "+gold+" // Ogres Slain: "+slain); 
}

function attack(){
    //conditional to see whether or not you killed an ogre
    //Win +10 gold, +1 slain,
    //lose -1 gold, -1 hp
    if (hp>0){
        if(Math.random()*100 >gold){
    gold=gold+10;
    slain=slain+1;
    $('.ogres').prepend("<p style='color: green'>You won! +10 gold</p>");
        }
    } else{
        $('ogres').prepend("<h3> Your Blood got Shpilt, Slaughter Gang")
    }
    stats();
}




//Variables:hp,gold,wins
// Display ogre
//Display a button that refers to a function that attacks an ogre
//Display a button that refers to a function that attacks an ogre
//Display an ogre
//Function for attacking:
//Return valuse, win or lose
// Win=10 gold
//Lose=minus 1 gold
//Regardless picture is added 