class Character {
  constructor(name, hp, atk, def) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }

  attack(target) {
    const damage = this.atk - target.def;
    const result = target.hp - damage;
    target.hp = result;
    console.log(result);
  }
}

module.exports = Character;
