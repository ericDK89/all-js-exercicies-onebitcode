const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, hp, atk, def, shield, position) {
    super(name, hp, atk, def);
    this.shield = shield;
    this.position = position;
  }

  attack(target) {
    if (this.position === "atk") {
      const damage = this.atk - target.def;
      const result = target.hp - damage;
      target.hp = result;
      console.log(`${target.name} HP: ${result}`);
    } else {
      console.log("Warrior on def position, can't attack");
    }
  }

  changePosition() {
    if (this.position === "atk") {
      this.position = "def";
      this.def += this.shield;
    } else {
      this.position = "atk";
      this.def -= this.shield;
    }
  }
}

module.exports = Warrior;
