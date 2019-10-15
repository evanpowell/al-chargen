export class DiceRoller {
  rollDie = (sides) => {
    return Math.floor(Math.random() * sides + 1);
  }

  rollDice = (numberOfDice, sides, modifier = 0) => {
    let sum = 0;

    for (let i = 0; i < numberOfDice; i++) {
      sum += this.rollDie(sides);
    }

    return sum + modifier;
  }
  
  randomizeIndex = (arrayLength) => {
    return this.rollDie(arrayLength) - 1;
  }
}