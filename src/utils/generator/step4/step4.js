import { skills } from "../shared/skills";
import { Step3 } from "../step3/step3";
import { aptitudes } from "./aptitudes";
import { expertises } from "./expertises";
import { proficiencies } from "./proficiencies";

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
  };

  rollAptitudeSkills = () => {
    let skillPoints = this.rollDie(4);
    for (let i = 0; i < skillPoints; i++) {
      const skillName = this.getRandomArrayValue(this.aptitude.skillsPool);
      this.addSkillPoint(skillName);
    }
  };
  
  rollResistances = () => {
    this.character.resistances = { ...this.aptitude.resistances };
    let resistancePoints = this.rollDie(4);
    for (let i = 0; i < resistancePoints; i++) {
      const [resistance, points] = this.getRandomObjectEntry(this.character.resistances);
      this.character.resistances[resistance] = points + 1;
    }
  };

  rollExpertise = () => {
    let potentialExpertises;
    if (this.rollDie(100) <= 90) {
      potentialExpertises = this.character.origins.community.areasOfExpertise;
    } else {
      potentialExpertises = Object.keys(expertises);
    }


    
    let expertiseName = this.getRandomArrayValue(potentialExpertises);
    if (!this.doesMeetProficiencyRequirements(expertiseName)) {
      const fallbackExpertises = this.character.origins.community.areasOfExpertise
        .filter((name) => name !== expertiseName);
      expertiseName = this.getRandomArrayValue(fallbackExpertises);
    }

    this.expertise = expertises[expertiseName];
    this.character.expertise = expertiseName;
  };

  doesMeetProficiencyRequirements = (expertiseName) => {
    const expertise = expertises[expertiseName];
    const expertiseProficiencies = Object.keys(expertise.proficiencies).map((key) => {
      return proficiencies[key];
    });

    for (const proficiency of expertiseProficiencies) {
      if (this.character.attributes.final[proficiency.baseAttribute] >= proficiency.minAttributeValue) {
        return true;
      }
    }

    return false;
  };

  rollAbilities = () => {
    this.character.abilities = { ...this.expertise.abilities };
    const points = this.rollDie(6);
    for (let i = 0; i < points; i++) {
      const [ability] = this.getRandomObjectEntry(this.expertise.abilities);
      this.character.abilities[ability] += 1;
    }
  }

  rollConditioning = () => {
    this.character.conditioning = { ...this.expertise.conditioning };
    const points = 3;
    for (let i = 0; i < points; i++) {
      const [conditioningType] = this.getRandomObjectEntry(this.expertise.conditioning);
      this.character.conditioning[conditioningType] += 1;
    }
  }

  rollExpertiseSkills = () => {
    const skillsPool = this.expertise.auxiliarySkillsPool
      .map((skillName) => skills[skillName])
      .map((skill) => {
        const attributeVal = this.character.attributes.final[skill.baseAttribute];
        let probability = Math.floor(attributeVal * (attributeVal / 10));
        if (attributeVal < 10) {
          probability -= 1;
        } else if (attributeVal >=12 ) {
          probability += 1;
        }

        return {
          name: skill.name,
          probability
        }
      });

    const sides = skillsPool.reduce((sides, skill) => (sides + skill.probability), 0);
    const points = this.rollDie(4);

    for (let i = 0; i < points; i++) {
      const skillName = this.rollAuxiliarySkill(skillsPool, sides);
      this.addSkillPoint(skillName);
    }
  }

  rollAuxiliarySkill = (skills, sides) => {
    const rollResult = this.rollDie(sides);
    let min = 0;
    let max = 0;

    for (const skill of skills) {
      min = max;
      max += skill.probability;

      if (rollResult > min && rollResult <= max) {
        return skill.name;
      }
    }
  }

  rollStep4 = () => {
    this.rollAptitude();
    this.rollAptitudeSkills();
    this.rollResistances();
    this.rollExpertise();
    this.rollAbilities();
    this.rollConditioning();
    this.rollExpertiseSkills();
  };
}