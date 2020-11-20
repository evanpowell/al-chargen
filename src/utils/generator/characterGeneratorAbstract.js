import { DiceRoller } from "../diceRoller";
import Character from "./character";

export default class CharacterGeneratorAbstract extends DiceRoller {
  character = new Character();
}