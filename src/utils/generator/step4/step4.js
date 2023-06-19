import { skills } from "../skills";
import { Step3 } from "../step3/step3";
import { aptitudes } from "./aptitudes";
import { expertises } from "./expertises";
import { proficiencies } from "./proficiencies";
import { termOutcomes } from "./term";
import { vocations } from "./vocations";
import { expertiseAccoladesPhrases } from "./accolades-prose/expertiseAccoladesPhrases";
import { titleAccoladesPhrases } from "./accolades-prose/titleAccoladesPhrases";

export class Step4 extends Step3 {
  rollAptitude = () => {
    let highestNumber = 0;
    const { final: attributes } = this.character.attributes;
    Object.values(attributes).forEach((attributeVal) => {
      if (attributeVal > highestNumber) {
        highestNumber = attributeVal;
      }
    });
    const highestAttributes = Object.keys(attributes).filter(
      (key) => attributes[key] === highestNumber
    );
    const baseAttribute = this.getRandomArrayValue(highestAttributes);
    this.aptitude = aptitudes[baseAttribute];
    this.character.aptitude = this.aptitude.name;
    this.character.advantage = this.aptitude.advantage;
  };

  rollAptitudeSkills = (skillPoints = this.rollDie(4)) => {
    for (let i = 0; i < skillPoints; i++) {
      if (this.character.skills.length >= 3 && this.rollDie(100) <= 75) {
        this.addPointToExisting("skills");
      } else {
        const skillName = this.getRandomArrayValue(this.aptitude.skillsPool);
        this.addSkillPoint(skillName);
      }
    }
  };

  rollResistances = (resistancePoints = this.rollDie(4)) => {
    this.character.resistances = { ...this.aptitude.resistances };
    for (let i = 0; i < resistancePoints; i++) {
      const [key, val] = this.getRandomObjectEntry(this.character.resistances);
      this.character.resistances[key] = val + 1;
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
      const fallbackExpertises =
        this.character.origins.community.areasOfExpertise.filter(
          (name) => name !== expertiseName
        );
      expertiseName = this.getRandomArrayValue(fallbackExpertises);
    }

    this.expertise = expertises[expertiseName];
    this.character.expertise = expertiseName;
  };

  doesMeetProficiencyRequirements = (expertiseName) => {
    const expertise = expertises[expertiseName];
    const expertiseProficiencies = Object.keys(expertise.proficiencies).map(
      (key) => {
        return proficiencies[key];
      }
    );

    for (const proficiency of expertiseProficiencies) {
      if (
        this.character.attributes.final[proficiency.baseAttribute] >=
        proficiency.minRequired
      ) {
        return true;
      }
    }

    return false;
  };

  rollAbilities = (abilityPoints = this.rollDie(6)) => {
    this.character.abilities = { ...this.expertise.abilities };
    for (let i = 0; i < abilityPoints; i++) {
      const [ability] = this.getRandomObjectEntry(this.expertise.abilities);
      this.character.abilities[ability] += 1;
    }
  };

  rollConditioning = (conditioningPoints = 3) => {
    this.character.conditioning = { ...this.expertise.conditioning };
    for (let i = 0; i < conditioningPoints; i++) {
      const [conditioningType] = this.getRandomObjectEntry(
        this.expertise.conditioning
      );
      this.character.conditioning[conditioningType] += 1;
    }
  };

  rollExpertiseSkills = (skillPoints = this.rollDie(4)) => {
    const skillsPool = this.expertise.auxiliarySkillsPool
      .map((skillName) => skills[skillName])
      .map((skill) => {
        const attributeVal =
          this.character.attributes.final[skill.baseAttribute];
        let probability = Math.floor(attributeVal * (attributeVal / 10));
        let probabilityModifier = Math.floor(Math.abs(attributeVal - 10) / 2);
        if (attributeVal - 10 < 0) {
          probabilityModifier = -probabilityModifier;
        }

        probability += probabilityModifier;

        if (probability < 10) {
          probability -= 1;
        }

        if (probability <= 0) {
          probability = 1;
        }

        return {
          name: skill.name,
          probability,
        };
      });

    const sides = skillsPool.reduce(
      (sides, skill) => sides + skill.probability,
      0
    );

    for (let i = 0; i < skillPoints; i++) {
      const existingAuxSkills = this.character.skills.filter((skill) =>
        skillsPool.some((name) => name === skill.name)
      );
      let skillName;
      if (
        this.character.skills.length >= 4 &&
        existingAuxSkills.length > 0 &&
        this.rollDie(100) <= 75
      ) {
        skillName = this.getRandomArrayValue(existingAuxSkills);
      } else {
        skillName = this.rollAuxiliarySkillProficiency(skillsPool, sides);
      }
      this.addSkillPoint(skillName);
    }
  };

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
  };

  rollProficiencies = (proficiencyPoints = this.rollDie(4)) => {
    if (!this.character.proficiencies.length) {
      this.character.proficiencies = Object.entries(
        this.expertise.proficiencies
      )
        .filter(([, points]) => points !== 0)
        .map(([name, points]) => {
          return {
            ...proficiencies[name],
            points,
          };
        });
    }

    const expertiseProficiencies = Object.keys(
      this.expertise.proficiencies
    ).map((name) => proficiencies[name]);

    let proficienciesPool = expertiseProficiencies
      .filter((proficiency) => {
        return (
          this.character.attributes.final[proficiency.baseAttribute] >=
          proficiency.minRequired
        );
      })
      .map((proficiency) => {
        const attributeVal =
          this.character.attributes.final[proficiency.baseAttribute];
        let probability = Math.floor(attributeVal * (attributeVal / 10));
        let probabilityModifier = Math.floor(Math.abs(attributeVal - 10) / 2);
        if (attributeVal - 10 < 0) {
          probabilityModifier = -probabilityModifier;
        }

        probability += probabilityModifier;

        if (probability < 10) {
          probability -= 1;
        }

        if (probability < 0) {
          probability = 1;
        }

        return {
          name: proficiency.name,
          probability,
        };
      });

    if (!proficienciesPool.length) {
      proficienciesPool = this.getClosestAttainableProficiencies(
        expertiseProficiencies
      );
    }

    const sides = proficienciesPool.reduce(
      (sides, proficiency) => sides + proficiency.probability,
      0
    );

    for (let i = 0; i < proficiencyPoints; i++) {
      const proficiencyName = this.rollAuxiliarySkillProficiency(
        proficienciesPool,
        sides
      );
      this.addProficiencyPoint(proficiencyName);
    }
  };

  getClosestAttainableProficiencies = (expertiseProficiencies) => {
    const proficienciesWithDifferences = expertiseProficiencies.map(
      (proficiency) => {
        return {
          ...proficiency,
          difference:
            proficiency.minRequired -
            this.character.attributes.final[proficiency.baseAttribute],
        };
      }
    );
    const lowestDifference = proficienciesWithDifferences.reduce(
      (lowest, proficiency) => {
        return proficiency.difference < lowest
          ? proficiency.difference
          : lowest;
      },
      99
    );

    return expertiseProficiencies
      .filter((proficiency) => proficiency.difference === lowestDifference)
      .map((proficiency) => {
        return {
          ...proficiency,
          probability: 10,
        };
      });
  };

  rollVocation = () => {
    const possibleVocations = this.aptitude.vocations[this.expertise.name];
    const name = this.getRandomArrayValue(possibleVocations);
    const description = vocations[name];
    this.character.vocation = {
      name,
      description,
    };
  };

  addEquipment = () => {
    this.character.inventory = [
      ...this.character.inventory,
      ...this.expertise.equipment,
    ];
  };

  rollSupplies = () => {
    const suppliesPoints = this.rollDie(6);
    let remainingSupplies = this.expertise.supplies;
    const characterSupplies = [];

    for (let i = 0; i < suppliesPoints; i++) {
      const chosenSupply = this.getRandomArrayValue(remainingSupplies);
      characterSupplies.push(chosenSupply);
      remainingSupplies = remainingSupplies.filter(
        (supply) => supply !== chosenSupply
      );
    }

    this.character.inventory = [
      ...this.character.inventory,
      ...characterSupplies,
    ];
  };

  rollTerm = () => {
    let rollResults = [];
    let termYears = 0;
    for (let i = 0; i < 4; i++) {
      const years = this.rollDie(6);
      rollResults.push(years);
      termYears += years;
    }

    const termResult = this.getOutcomeDiceResults(rollResults);
    const termOutcome = termOutcomes[termResult];

    this.character.term.years = termYears;
    this.character.term.outcome = {
      modifications: termOutcome.modifications || [],
    };

    const titleName = this.expertise.titles[termResult];
    if (titleName) {
      this.character.title = titleName;
    }

    this.character.appearance.final.age =
      this.character.appearance.initial.age + termYears;

    if (termOutcome.recognition) {
      this.character.recognition = [
        ...this.character.recognition,
        ...termOutcome.recognition,
      ];
    }

    this.termDiceResult = termResult;
  };

  rollAccoladesProse = () => {
    const part1Phrases =
      expertiseAccoladesPhrases[this.character.expertise][this.termDiceResult];
    const part1Phrase = this.getRandomArrayValue(part1Phrases);
    const sentence1 = this.fillProse(`$NAME ${part1Phrase}.`);
    const part2Sentences = titleAccoladesPhrases[this.termDiceResult];
    let sentence2 = this.getRandomArrayValue(part2Sentences);
    try {
      sentence2 = this.fillProse(sentence2);
    } catch {
      console.error("Failed to Fill Prose:", sentence2);
    }
    sentence2 = this.capitalizeString(sentence2);

    this.character.accolades = `${sentence1} ${sentence2}`;
  };

  rollStep4 = () => {
    this.rollAptitude();
    this.rollAptitudeSkills();
    this.rollResistances();
    this.rollExpertise();
    this.rollAbilities();
    this.rollConditioning();
    this.rollExpertiseSkills();
    this.rollProficiencies();
    this.rollVocation();
    this.addEquipment();
    this.rollSupplies();
    this.rollTerm();
    this.rollAccoladesProse();
  };
}
