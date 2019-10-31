import { DiceRoller } from "../../diceRoller";
import { Birthdate } from "./birthDate";
import { provincialOrigins } from "./provincialOrigins";

export class Step3 {
    constructor() {
        this.diceRoller = new DiceRoller();
    }

    rollBirthDate = () => {
        return new Birthdate().rollBirthDate();
    }

    rollProvincialOrigins = () => {
        return provincialOrigins[this.diceRoller.rollDie(20)];
    }
}