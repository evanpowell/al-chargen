import Step5 from "../step5/step5";

export default class Step6 extends Step5 {
  rollStartingWealth = () => {
    this.character.wealth = this.rollDice(3, 6) * this.character.term.years;
  }

  rollStep6 = () => {
    this.rollStartingWealth();
  }
}