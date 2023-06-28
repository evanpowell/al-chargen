import CharacterGeneratorAbstract from "../characterGeneratorAbstract";

export default class Step1 extends CharacterGeneratorAbstract {
  rollAttribute = () => {
    return this.rollDice(3, 6);
  };
  rollInitialAttributes = () => {
    this.character.attributes.initial = {
      str: this.rollAttribute(),
      end: this.rollAttribute(),
      agi: this.rollAttribute(),
      acc: this.rollAttribute(),
      int: this.rollAttribute(),
      wis: this.rollAttribute(),
      per: this.rollAttribute(),
      cha: this.rollAttribute(),
    };
  };

  rollStep1 = () => {
    this.rollInitialAttributes();
  };
}
