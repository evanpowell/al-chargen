import { Step4 } from "../step4/step4";
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
    const outcome = { ...palestoneEncounter.outcomes[encounterResult] };
    outcome.description = this.fillProse(outcome.description);
    this.character.palestoneEncounter = {
      prose: filledProse,
      outcome: {
        ...outcome,
        modifications: outcome.modifications || []
      }
    }
  }

  rollStep5 = () => {
    this.rollPalestoneEncounter();
  }

}
