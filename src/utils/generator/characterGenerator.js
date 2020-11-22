import { Step4 } from "./step4/step4";

export default class CharacterGenerator extends Step4 {
  rollAll = () => {
    this.rollStep1();
    this.rollStep2();
    this.rollStep3();
    this.rollStep4();
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
        this.rollResistances(modification.points);
        break;
      }
      case 'proficiency': {
        this.rollProficiencies(modification.points);
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