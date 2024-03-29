import { appearance } from "./appearance";
import { distinguishingFeatures } from "./distinguishingFeatures";
import { ancestries } from "./ancestries";
import Step1 from "../step1/step1";
import { presentations } from "./presentation";

export class Step2 extends Step1 {
  rollAncestry = () => {
    const { ancestry, adjustments } = this.getRandomArrayValue(ancestries);
    this.character.ancestry = ancestry;
    this.character.attributes.adjustments = { ...adjustments };
  };

  rollSex = () => {
    const roll = this.rollDie(8);
    if (roll >= 7) {
      this.character.sex = "Intersex";
      return;
    }

    this.character.sex = roll % 2 ? "Male" : "Female";
  };

  rollAppearance = () => {
    const { height, weight, baseAge } = appearance[this.character.ancestry];

    this.character.appearance.initial = {
      height: this.rollDice(height.number, height.sides, height.modifier),
      weight: this.rollDice(weight.number, weight.sides, weight.modifier),
      age: this.rollDice(baseAge.number, baseAge.sides, baseAge.modifier),
    };

    this.character.appearance.final = { ...this.character.appearance.initial };
  };

  rollDistinguishingFeatures = () => {
    const features = [];
    for (let featureType in distinguishingFeatures) {
      const roll = this.rollDie(100);
      const feature = distinguishingFeatures[featureType][roll];
      if (feature) {
        features.push({ ...feature });
      }
    }
    this.character.appearance.distinguishingFeatures = features;
  };

  rollPresentation = () => {
    const presentationBinary = this.getRandomArrayValue(presentations);
    this.character.appearance.presentation =
      this.getRandomArrayValue(presentationBinary);
  };

  rollStep2 = () => {
    this.rollAncestry();
    this.rollSex();
    this.rollAppearance();
    this.rollPresentation();
    this.rollDistinguishingFeatures();
  };
}
