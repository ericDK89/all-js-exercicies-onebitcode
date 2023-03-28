const Character = require("./Character.js");
const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const newCharacter = new Character("Eric", 100, 25, 30);
const newThief = new Thief("Hobbit", 50, 70, 15);
const newMage = new Mage("Harry", 75, 30, 40, 80);
const newWarrior = new Warrior("Kratos", 150, 50, 80, 30, "atk");

console.log(newCharacter);
console.log(newThief);
console.log(newMage);
console.log(newWarrior);

newThief.attack(newCharacter);
newMage.attack(newCharacter);
newMage.heal(newCharacter);
console.log(newWarrior);

newMage.attack(newWarrior);
