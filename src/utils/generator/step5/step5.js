import { TheleanDate } from "../step3/theleanDate";
import { Step4 } from "../step4/step4";
import { deathChart } from "./deathChart";
import { palestoneEncounter } from "./palestone";

export default class Step5 extends Step4 {
  rollPalestoneEncounter = () => {
    const rollResults = {
      description: this.rollDie(6),
      locale: this.rollDie(6),
      sharedExposure: this.rollDie(6),
      impact: this.rollDie(6),
    };

    const description = palestoneEncounter.description[rollResults.description];
    const locale = palestoneEncounter.locale[rollResults.locale];
    const sharedExposure = palestoneEncounter.sharedExposure[rollResults.sharedExposure];
    let impact = palestoneEncounter.impact[rollResults.impact];

    if (typeof impact !== 'string') {
      impact = impact(rollResults.sharedExposure);
    }

    const discoveryVerb = this.getRandomArrayValue(palestoneEncounter.discoveryVerbs);

    const prose = `${sharedExposure} ${discoveryVerb} ${description} ${locale} ${impact}`;
    const filledProse = this.fillProse(prose);
    
    const encounterResult = this.getOutcomeDiceResults(Object.values(rollResults));
    let outcome = { ...palestoneEncounter.outcomes[encounterResult] };
    if (outcome.rollDeathChart) {
      outcome = this.rollDeathChart();
    }
    outcome.description = this.fillProse(outcome.description);
    this.character.palestoneEncounter = {
      prose: filledProse,
      outcome: outcome
    }

    if (outcome.masteries) {
      this.character.masteries = [
        ...this.character.masteries,
        ...outcome.masteries
      ];
    }

    if (outcome.notes) {
      this.character.notes = [
        ...this.character.notes,
        ...outcome.notes
      ]
    }
  };

  rollDeathChart = () => {
    const result = { ...this.getRandomArrayValue(deathChart) };
    let description = this.getRandomArrayValue(result.phrases);
    description = this.fillProse(description);
    if (result.isDeath) {
      this.rollDeathDate();
      return {
        description
      }
    }

    if (result.senses) {
      const sense = { ...this.getRandomArrayValue(result.senses) };
      this.updateFeaturesForMissingSense(sense);
      description = `${description} ${this.fillProse(sense.phrase)}.`
      return {
        description,
        notes: sense.notes || null
      };
    }

    if (result.limbs) {
      const limb = this.getRandomArrayValue(result.limbs);
      this.updateFeaturesForMissingLimb(limb);
      description = `${description} ${limb}.`
      return {
        description
      }
    }

    return {
      description,
      masteries: result.masteries || null,
      notes: result.notes || null,
      modifications: result.modifications || null,
    }
  };

  updateFeaturesForMissingSense = (sense) => {
    if (sense.type === 'sight') {
      this.character.appearance.distinguishingFeatures = this.character.appearance.distinguishingFeatures.filter((feature) => feature.type !== 'sight');
    }

    if (sense.type === 'smellTaste') {
      const senseResult = this.getRandomArrayValue(['smell', 'taste', 'both']);
      sense.phrase = sense[senseResult].phrase;
      sense.feature = sense[senseResult].feature;
    }

    if (sense.type === 'touchPain') {
      const senseResult = this.getRandomArrayValue(['touch', 'pain']);
      sense.phrase = sense[senseResult].phrase;
      sense.feature = sense[senseResult].feature;
    }

    this.character.appearance.distinguishingFeatures = [
      { description: sense.feature },
      ...this.character.appearance.distinguishingFeatures
    ];
  }

  updateFeaturesForMissingLimb = (limb) => {
    const limbType = limb.includes('leg') ? 'leg' : 'arm';
    const side = limb.includes('right') ? 'left' : 'right';
    this.character.appearance.distinguishingFeatures.forEach((feature) => {
      if (feature.type === 'limb' && feature.alternatives && feature.alternatives[limbType]) {
        feature.description = feature.alternatives[limbType].replaceAll('$SIDE', side);
      }
    });

    this.character.appearance.distinguishingFeatures = [
      { description: `Missing ${limb}` },
      ...this.character.appearance.distinguishingFeatures
    ];
  }

  rollDeathDate = () => {
    this.character.deathDate = new TheleanDate().rollDate();
  }

  rollStep5 = () => {
    this.rollPalestoneEncounter();
  }

}
