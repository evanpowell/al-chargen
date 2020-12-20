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
            this.rollExpertiseSkills(1);
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
      case 'accolades': {
        for (let i = 0; i < modification.points; i++) {
          const category = this.getRandomArrayValue([
            'abilities',
            'skills',
            'conditioning',
            'proficiencies'
          ]);
          
          if (category === 'skills') {
            this.rollExpertiseSkills(1);
          } else if (category === 'proficiencies') {
            this.rollProficiencies(1);
          } else {
            const [key] = this.getRandomObjectEntry(this.character[category]);
            this.character[category][key] += 1;
          }
        }

        break;
      }
      case 'proficiency': {
        for (let i = 0; i < modification.points; i++) {
          this.addPointToExisting('proficiencies');
        }
        break;
      }
      case 'attribute': {
        this.character.attributes.adjustments[name] += modification.points
        break;
      }
      case 'death': {
        //TODO: roll death chart
        // console.log('------------DEATH----------------');
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
    const { distinguishingFeatures } = this.character.appearance;
    if (distinguishingFeatures.length) {
      return this.character.appearance.distinguishingFeatures
        .map((feature) => `- ${feature.description}`)
        .join("\n");
    } else {
      return 'No distinguishing features'
    }
  }

  listLanguages = () => {
    return this.character.languages.join(", ");
  }

  getVocationAndDescription = () => {
    const { name, description } = this.character.vocation;
    return `${name.toUpperCase()}: ${description}`
  }

  getAdvantageAndDescription = () => {
    const { name, description } = this.character.advantage;
    return `${name.toUpperCase()}:\n${description}`;
  }

  mapSkillsToFieldsObject = () => {
    return this.character.skills.reduce((fieldsObj, { name, baseAttribute, points }, i) => {
      const nameString = `${name} (${baseAttribute.toUpperCase()})`;
      const num = i + 1;
      fieldsObj[`Skill name ${num}`] = [nameString];
      fieldsObj[`Skill number ${num}`] = [points];

      return fieldsObj;
    }, {});
  }

  mapProficienciesToFieldsObject = () => {
    return this.character.proficiencies.reduce((fieldsObj, { name, baseAttribute, minRequired, points }, i) => {
      const nameString = `${name} (${baseAttribute.toUpperCase()} >= ${minRequired})`;
      const num = i + 1;
      fieldsObj[`Proficiency name ${num}`] = [nameString];
      fieldsObj[`Proficiency number ${num}`] = [points];

      return fieldsObj;
    }, {});
  }

  listInventory = () => {
    return this.character.inventory.map(({name, quantity}) => {
      if (!quantity) {
        return name;
      } else {
        return `${name} (${quantity})`
      }
    }).join('\n');
  }

  listMasteries = () => {
    return this.character.masteries.join(`\n`);
  }

  listRecognition = () => {
    return this.character.recognition.join(`\n`);
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
      "Ancestry": [this.character.ancestry],
      "Sex": [this.character.sex],
      "Height": [this.convertInchesToFeet(appearance.height)],
      "Weight": [`${appearance.weight} lbs.`],
      "Age": [appearance.age],
      "Day of Birth": [this.character.origins.birthdate.dateString],
      "Distinguishing Features": [this.listDistinguishingFeatures()],

      //ORIGINS
      "Languages Spoken": [this.listLanguages()],

      // ATTRIBUTES
      "STR": [this.character.attributes.initial.str],
      "END": [this.character.attributes.initial.end],
      "AGI": [this.character.attributes.initial.agi],
      "PRE": [this.character.attributes.initial.pre],
      "INT": [this.character.attributes.initial.int],
      "WIS": [this.character.attributes.initial.wis],
      "PER": [this.character.attributes.initial.per],
      "CHA": [this.character.attributes.initial.cha],

      "Attribute AdjustmentsSTR": [adjustments.str],
      "Attribute AdjustmentsEND": [adjustments.end],
      "Attribute AdjustmentsAGI": [adjustments.agi],
      "Attribute AdjustmentsPRE": [adjustments.pre],
      "Attribute AdjustmentsINT": [adjustments.int],
      "Attribute AdjustmentsWIS": [adjustments.wis],
      "Attribute AdjustmentsPER": [adjustments.per],
      "Attribute AdjustmentsCHA": [adjustments.cha],

      "Adjusted ScoreSTR": [this.character.attributes.final.str],
      "Adjusted ScoreEND": [this.character.attributes.final.end],
      "Adjusted ScoreAGI": [this.character.attributes.final.agi],
      "Adjusted ScorePRE": [this.character.attributes.final.pre],
      "Adjusted ScoreINT": [this.character.attributes.final.int],
      "Adjusted ScoreWIS": [this.character.attributes.final.wis],
      "Adjusted ScorePER": [this.character.attributes.final.per],
      "Adjusted ScoreCHA": [this.character.attributes.final.cha],

      "Bonus PenaltySTR": [bonusPenalties.str],
      "Bonus PenaltyEND": [bonusPenalties.end],
      "Bonus PenaltyAGI": [bonusPenalties.agi],
      "Bonus PenaltyPRE": [bonusPenalties.pre],
      "Bonus PenaltyINT": [bonusPenalties.int],
      "Bonus PenaltyWIS": [bonusPenalties.wis],
      "Bonus PenaltyPER": [bonusPenalties.per],
      "Bonus PenaltyCHA": [bonusPenalties.cha],

      // PROFILE
      "Aptitude": [this.character.aptitude],
      "Expertise": [this.character.expertise],
      "Vocation and Description": [this.getVocationAndDescription()],
      "Accolades": [this.character.accolades],
      "Term": [`${this.character.term.years} yrs`],

      // PALE STONE ENCOUNTER
      "Encounter Story": [this.character.palestoneEncounter.prose],
      "Outcome": [this.character.palestoneEncounter.outcome.description],

      // RESISTANCES
      "Addiction": [this.character.resistances.addiction],
      "Aversion": [this.character.resistances.aversion],
      "Debility": [this.character.resistances.debility],
      "Explosion": [this.character.resistances.explosion],
      "Infection": [this.character.resistances.infection],
      "Toxin": [this.character.resistances.toxin],

      //ABILITIES
      "Assess Threat": [this.character.abilities.assessThreat],
      "Collect Information": [this.character.abilities.collectInformation],
      "Find": [this.character.abilities.find],
      "Haggle": [this.character.abilities.haggle],
      "Navigate": [this.character.abilities.navigate],
      "Take Notice": [this.character.abilities.takeNotice],

      //ADVANTAGE
      "Advantage": [this.getAdvantageAndDescription()],

      // CONDITIONING

      "PoiseConditioning": [this.character.conditioning.poise],
      "AvoidanceConditioning": [this.character.conditioning.avoidance],
      "CapacityConditioning": [this.character.conditioning.capacity],

      // SKILLS
      ...this.mapSkillsToFieldsObject(),

      // PROFICIENCIES
      ...this.mapProficienciesToFieldsObject(),

      // INVENTORY
      "Inventory": [this.listInventory()],
      "Coins": [`${this.character.wealth} Threnn`],

      // MASTERY
      "MasteryBox": [this.listMasteries()],

      // STATUS, RECOGNITION, AND INFLUENCE
      "StatusBox": [this.listRecognition()]
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