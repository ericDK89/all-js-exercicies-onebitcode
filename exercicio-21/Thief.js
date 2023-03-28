const Character = require("./Character.js");

class Thief extends Character {
  attack(target) {
    const damage = this.atk - target.def;
    const result = target.hp - damage * 2;
    target.hp = result;
    console.log(`${target.name} HP: ${result}`);
  }
}

module.exports = Thief;
