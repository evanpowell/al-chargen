import { Step3 } from "./step3/step3";
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
        for (let i = 0; i < modification.points; i++) {
          this.addSkillPoint(name);
        }
        break;
      }
      case 'appearance': {
        const newAppearance = Math.round(this.character.appearance.initial[name] * modification.multiplier);
        this.character.appearance.final[name] = newAppearance;
        break;
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
    console.log(JSON.stringify(this.character, null, 2).replace(/["]/g, ""));
  };
}