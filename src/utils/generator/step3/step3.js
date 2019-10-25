import { DiceRoller } from "../../diceRoller";
import { Birthdate } from "./birthDate";

export class Step3 {
    constructor() {
        this.diceRoller = new DiceRoller();
    }

    rollBirthDate = () => {
        return new Birthdate().rollBirthDate();
    }
}