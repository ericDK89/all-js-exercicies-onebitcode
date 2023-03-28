const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, hp, atk, def, shield) {
    super(name, hp, atk, def);
    this.shield = shield;
    this.position = "atk";
  }

  attack(target) {
    if (this.position === "atk") {
      super.attack(target);
      console.log(`${target.name} HP: ${target.hp}`);
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
