/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Hero {
  constructor({ name = "hero", xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} received ${amount} xp`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}

const mango = new Warrior({ name: "mango", xp: 1000, weapon: "halberd" });
console.log(mango);
mango.attack();
mango.gainXp(1000);

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} is casting a spell 🧙‍♂️`);
  }
}

const poly = new Mage({ name: "poly", xp: 500, spells: ["fireball"] });
console.log(poly);
poly.cast();
poly.gainXp(200);
