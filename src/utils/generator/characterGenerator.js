import Step6 from "./step6/step6";

export default class CharacterGenerator extends Step6 {
  rollAll = () => {
    this.rollStep1();
    this.rollStep2();
    this.rollStep3();
    this.rollStep4();
    this.rollStep5();
    this.rollStep6();
    this.applyModifications();
  };

  applyModifications = () => {
    const modifications = this.getAllModifications();
    modifications.forEach((modification) => this.applyModification(modification));
  };

  applyModification = (modification) => {
    const { type, name } = modification;
    switch (type) {
      case 'skill': {
        if (!name) {
          for (let i = 0; i < modification.points; i++) {
            if (this.rollDie(100) <= 50) {
              this.rollAptitudeSkills(1);
            } else {
              this.rollExpertiseSkills(1);
            }
          }
        } else {
          for (let i = 0; i < modification.points; i++) {
            this.addSkillPoint(name);
          }
        }
        break;
      }
      case 'appearance': {
        const newAppearance = Math.round(this.character.appearance.initial[name] * modification.multiplier);
        this.character.appearance.final[name] = newAppearance;
        break;
      }
      case 'distinguishingFeature': {
        this.character.appearance.distinguishingFeatures.push({
          description: modification.description
        });
        break;
      }
      case 'ability': {
        this.rollAbilities(modification.points);
        break;
      }
      case 'resistance': {
        if (!name) {
          this.rollResistances(modification.points);
        } else {
          this.character.resistances[name] += modification.points;
        }
        break;
      }
      case 'proficiency': {
        this.rollProficiencies(modification.points);
        break;
      }
      case 'attribute': {
        this.character.attributes.adjustments[name] += modification.points
        break;
      }
      case 'death': {
        //TODO: roll death chart
        console.log('------------DEATH----------------');
        break;
      }
      case 'wealth': {
        const [numberOfDice, sides] = modification.amount.split('d');
        this.character.wealth += this.rollDice(numberOfDice, sides);
        break;
      }
      default: {
        console.log('modification type does not match:', modification.type);
      }
    }
  };

  getAllModifications = () => {
    let allModifications = [];
    this.character.appearance.distinguishingFeatures.forEach(({ modifications }) => {
      if (modifications) {
        allModifications = [...allModifications, ...modifications]
      }
    });
    const { connection } = this.character.origins;
    if (connection && connection.modifications) {
      allModifications = [...allModifications, ...connection.modifications];
    }
    
    allModifications = [
      ...allModifications,
      ...this.character.term.outcome.modifications,
      ...this.character.palestoneEncounter.outcome.modifications
    ];

    return allModifications;
  };

  showPlusHideZerosReducer = (obj, [key, val]) => {
    if (val === 0) {
      val = '';
    } else if (val > 0) {
      val = `+${val}`;
    }

    obj[key] = val;
    return obj;
  }

  convertInchesToFeet = (inches) => {
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;
    if (remainingInches) {
      return `${feet}' ${remainingInches}"`
    } else {
      return `${feet}'`
    }
  }

  listDistinguishingFeatures = () => {
    return this.character.appearance.distinguishingFeatures
      .map((feature) => `- ${feature.description}`)
      .join("\n");
  }

  listLanguages = () => {
    return this.character.languages.join(", ");
  }

  mapToPdfFields = () => {
    const adjustments = Object.entries(this.character.attributes.adjustments)
      .reduce(this.showPlusHideZerosReducer, {});
    
    const bonusPenalties = Object.entries(this.character.attributes.bonusPenalties)
      .reduce(this.showPlusHideZerosReducer, {});
    
    const appearance = this.character.appearance.final;

    return {
      "Character Name": [this.character.name],
      "Adventurer Level": "1",

      // CHARACTERISTICS

      Ancestry: [this.character.ancestry],
      Sex: [this.character.sex],
      Height: [this.convertInchesToFeet(appearance.height)],
      Weight: [`${appearance.weight} lbs.`],
      Age: [appearance.age],
      "Distinguishing Features": [this.listDistinguishingFeatures()],

      //ORIGINS

      "Languages Spoken": [this.listLanguages()],

      // ATTRIBUTES

      STR: [this.character.attributes.initial.str],
      END: [this.character.attributes.initial.end],
      AGI: [this.character.attributes.initial.agi],
      PRE: [this.character.attributes.initial.pre],
      INT: [this.character.attributes.initial.int],
      WIS: [this.character.attributes.initial.wis],
      PER: [this.character.attributes.initial.per],
      CHA: [this.character.attributes.initial.cha],

      "Attribute AdjustmentsRow1": [adjustments.str],
      "Attribute AdjustmentsEND": [adjustments.end],
      "Attribute AdjustmentsAGI": [adjustments.agi],
      "Attribute AdjustmentsPRE": [adjustments.pre],
      "Attribute AdjustmentsINT": [adjustments.int],
      "Attribute AdjustmentsWIS": [adjustments.wis],
      "Attribute AdjustmentsPER": [adjustments.per],
      "Attribute AdjustmentsCHA": [adjustments.cha],

      "Adjusted ScoreRow1": [this.character.attributes.final.str],
      "Adjusted ScoreEND": [this.character.attributes.final.end],
      "Adjusted ScoreAGI": [this.character.attributes.final.agi],
      "Adjusted ScorePRE": [this.character.attributes.final.pre],
      "Adjusted ScoreINT": [this.character.attributes.final.int],
      "Adjusted ScoreWIS": [this.character.attributes.final.wis],
      "Adjusted ScorePER": [this.character.attributes.final.per],
      "Adjusted ScoreCHA": [this.character.attributes.final.cha],

      "Bonus PenaltyRow1": [bonusPenalties.str],
      "Bonus PenaltyEND": [bonusPenalties.end],
      "Bonus PenaltyAGI": [bonusPenalties.agi],
      "Bonus PenaltyPRE": [bonusPenalties.pre],
      "Bonus PenaltyINT": [bonusPenalties.int],
      "Bonus PenaltyWIS": [bonusPenalties.wis],
      "Bonus PenaltyPER": [bonusPenalties.per],
      "Bonus PenaltyCHA": [bonusPenalties.cha],

      // PROFILE

      Aptitude: [this.character.aptitude],
      Expertise: [this.character.expertise],

      // PALE STONE ENCOUNTER

      "Encounter Story": [this.character.palestoneEncounter.prose],
      Outcome: [this.character.palestoneEncounter.outcome.description]
    }
  }

  printCharacter = () => {
    const character = {
      ...this.character,
      attributes: {
        ...this.character.attributes,
        final: this.character.attributes.final,
        bonusPenalties: this.character.attributes.bonusPenalties
      }
    };
    console.log(JSON.stringify(character, null, 2).replace(/["]/g, ""));
  };
}