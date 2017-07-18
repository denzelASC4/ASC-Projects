// no parameter
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var current_money = 1000;
var items = [];

//sword costs $500
//food costs $100

while (current_money > 99) {
    console.log("You cureently have" + current_money + "Sword = $500. Food = $100");
    var choice = prompt("Do you want a Sword, or do you want Food?");
    if (choice == "sword") {
        if (current_money >= 500) {
            current_money = current_money - 500;
            user_items.
    } else if (choice == "food") {
            current_money = current_money - 100;
            user_items.push("food");
        } else {
            console.log("We don't have that in stock");
        }
    }

    console.log('Watch out for the frost troll! Best of luck on your adventure!!');
    var seeInventory = prompt("Do you want to see your inventory?(y/n)");

if(seeInventory == "y"){
    console.log("Your inventory")