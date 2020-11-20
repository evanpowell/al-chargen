import { skills } from "../shared/skills";
import { Step3 } from "../step3/step3";
import { aptitudes } from "./aptitudes";

export class Step4 extends Step3 {
  rollAptitude = () => {
    let highestNumber = 0;
    const { final: attributes } = this.character.attributes;
    Object.values(attributes).forEach((attributeVal) => {
      if (attributeVal > highestNumber) {
        highestNumber = attributeVal;
      }
    });
    const highestAttributes = Object.keys(attributes).filter((key) => attributes[key] === highestNumber);
    const baseAttribute = this.getRandomArrayValue(highestAttributes);
    this.aptitude = aptitudes[baseAttribute];
    this.character.aptitude = this.aptitude.name;
    this.character.advantage = this.aptitude.advantage;
  }

  rollSkills() {
    let skillPoints = this.rollDie(4);
    for (let i = 0; i < skillPoints; i++) {
      const skillName = this.getRandomArrayValue(this.aptitude.skillsPool);
      this.addSkillPoint(skillName);
    }
  }

  rollStep4 = () => {
    this.rollAptitude();
    this.rollSkills();
  }
}