export const diceRoller = {
  rollDie: (sides) => {
    return Math.floor(Math.random() * sides + 1);
  },

  rollDice: (numberOfDice, sides, modifier = 0) => {
    let sum = 0;

    for (let i = 0; i < numberOfDice; i++) {
      sum += this.rollDice(sides);
    }

    return sum + modifier;
  }
}