const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const beatrice = new Thief("Beatrice", 140, 22, 8);
const arthur = new Mage("Arthur", 90, 4, 2, 14);
const cain = new Warrior("Cain", 200, 14, 12, 4);

console.table({ beatrice, arthur, cain });

cain.changePosition();
arthur.attack(cain);
beatrice.attack(arthur);

console.table({ beatrice, arthur, cain });

cain.changePosition();
cain.attack(arthur);
arthur.heal(arthur);
beatrice.attack(cain);

console.table({ beatrice, arthur, cain });
