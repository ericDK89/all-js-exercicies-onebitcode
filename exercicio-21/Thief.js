const Character = require("./Character.js");

class Thief extends Character {
  constructor(name, hp, atk, def) {
    super(name, hp, atk, def);
  }

  attack(target) {
    const damage = this.atk - target.def;
    const result = target.hp - 2 * damage;
    console.log(`${target.name} HP: ${result}`);
  }
}

module.exports = Thief;
