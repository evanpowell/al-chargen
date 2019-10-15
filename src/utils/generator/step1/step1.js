import { DiceRoller } from "../../diceRoller"

export class Step1 {
    constructor() {
        this.diceRoller = new DiceRoller();
    }
    rollAttribute = () => {
        return this.diceRoller.rollDice(3, 6);
    }
    generateAttributes = () => {
        return {
            str: this.rollAttribute(),
            end: this.rollAttribute(),
            agi: this.rollAttribute(),
            pre: this.rollAttribute(),
            int: this.rollAttribute(),
            wis: this.rollAttribute(),
            per: this.rollAttribute(),
            cha: this.rollAttribute(),
        }
    }
}