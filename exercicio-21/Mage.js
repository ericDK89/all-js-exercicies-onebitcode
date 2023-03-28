const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, hp, atk, def, magic) {
    super(name, hp, atk, def);
    this.magic = magic;
  }

  attack(target) {
    const damage = this.magic + this.atk - target.def;
    const result = target.hp - damage;
    target.hp = result;
    console.log(`${target.name} HP: ${result}`);
  }

  heal(target) {
    target.hp += this.magic * 2;
    console.log(`${target.name} HP: ${target.hp}`);
  }
}

module.exports = Mage;
