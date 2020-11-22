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
      if (this.character.attributes.final[proficiency.baseAttribute] >= proficiency.minRequired) {
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
      const skillName = this.rollAuxiliarySkillProficiency(skillsPool, sides);
      this.addSkillPoint(skillName);
    }
  }

  rollAuxiliarySkillProficiency = (skillsProficiencies, sides) => {
    const rollResult = this.rollDie(sides);
    let min = 0;
    let max = 0;

    for (const item of skillsProficiencies) {
      min = max;
      max += item.probability;

      if (rollResult > min && rollResult <= max) {
        return item.name;
      }
    }
  }

  rollProficiencies = () => {
    /*
      - If no proficiency requirements are met, put all the points in closest acheivable proficiencies.

      - Filter out proficiencies with unmet requirements
      - Of the remaining proficiencies, skew probability in favor of those with higher attribute values
    */
    this.character.proficiencies = Object.entries(this.expertise.proficiencies)
      .filter(([name, points]) => points !== 0)
      .map(([name, points]) => {
        return {
          ...proficiencies[name],
          points
        }
      });

    const expertiseProficiencies = Object.keys(this.expertise.proficiencies)
      .map((name) => proficiencies[name]);

    let proficienciesPool = expertiseProficiencies
      .filter((proficiency) => {
        return this.character.attributes.final[proficiency.baseAttribute] >= proficiency.minRequired;
      })
      .map((proficiency) => {
        const attributeVal = this.character.attributes.final[proficiency.baseAttribute];
        let probability = Math.floor(attributeVal * (attributeVal / 10));
        if (attributeVal < 10) {
          probability -= 1;
        } else if (attributeVal >=12 ) {
          probability += 1;
        }

        return {
          name: proficiency.name,
          probability
        }
      });

    if (!proficienciesPool.length) {
      proficienciesPool = this.getClosestAttainableProficiencies(expertiseProficiencies);
    }

    const sides = proficienciesPool.reduce((sides, proficiency) => (sides + proficiency.probability), 0);
    const points = this.rollDie(4);

    for (let i = 0; i < points; i++) {
      const proficiencyName = this.rollAuxiliarySkillProficiency(proficienciesPool, sides);
      this.addProficiencyPoint(proficiencyName);
    }
  }

  getClosestAttainableProficiencies = (expertiseProficiencies) => {
    const proficienciesWithDifferences = expertiseProficiencies.map((proficiency) => {
      return {
        ...proficiency,
        difference: proficiency.minRequired - this.character.attributes.final[proficiency.baseAttribute]
      }
    })
    const lowestDifference = proficienciesWithDifferences
      .reduce((lowest, proficiency) => {
        return proficiency.difference < lowest ? proficiency.difference : lowest
      }, 99);
    
    return expertiseProficiencies
      .filter((proficiency) => proficiency.difference === lowestDifference)
      .map((proficiency) => {
        return {
          ...proficiency,
          probability: 10
        }
    });
  }

  rollTitle = () => {
    const rollResult = this.rollDie(6) - 4;
    if (rollResult < 0) {
      this.character.titles.push({
        name: 'No Title'
      });
    } else {
      this.character.titles.push(this.expertise.titles[rollResult]);
    }
  }

  rollVocation = () => {
    const vocations = this.aptitude.vocations[this.expertise.name];
    this.character.vocation = this.getRandomArrayValue(vocations);
  }

  addEquipment = () => {
    this.character.inventory = [
      ...this.character.inventory,
      ...this.expertise.equipment
    ]
  }

  rollSupplies = () => {
    const suppliesPoints = this.rollDie(6);
    let remainingSupplies = this.expertise.supplies;
    const characterSupplies = [];
    
    for (let i = 0; i < suppliesPoints; i++) {
      const chosenSupply = this.getRandomArrayValue(remainingSupplies);
      characterSupplies.push(chosenSupply);
      remainingSupplies = remainingSupplies.filter((supply) => supply !== chosenSupply);
    }

    this.character.inventory = [
      ...this.character.inventory,
      ...characterSupplies
    ];
  }

  rollStep4 = () => {
    this.rollAptitude();
    this.rollAptitudeSkills();
    this.rollResistances();
    this.rollExpertise();
    this.rollAbilities();
    this.rollConditioning();
    this.rollExpertiseSkills();
    this.rollProficiencies();
    this.rollTitle();
    this.rollVocation();
    this.addEquipment();
    this.rollSupplies();
  };
}