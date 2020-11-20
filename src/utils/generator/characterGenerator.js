import { Step3 } from "./step3/step3";
import { Step4 } from "./step4/step4";

export default class CharacterGenerator extends Step4 {
  rollAll = () => {
    this.rollStep1();
    this.rollStep2();
    this.rollStep3();
    this.rollStep4();  
  }

  printCharacter = () => {
    console.log(JSON.stringify(this.character, null, 2).replace(/["]/g, ""));
  }
}