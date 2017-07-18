


var charizard = {
    "attack": "Blaze",
    "HP": 206,
    "legendary": false,
    "types": ["Fire", "Flying"]
};

function Pokemon(HP, def, atk, type, legendary) {
    this.HP = HP;
    this.def = def;
    this.atk = atk;
    this.type = type;
    this.legendary = legendary;
}

