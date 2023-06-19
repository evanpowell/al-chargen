export default class Attributes {
  initial = {};
  adjustments = {};
  get final() {
    const final = {};
    Object.entries(this.initial).forEach(([key, value]) => {
      final[key] = value + this.adjustments[key];
    });
    return final;
  }

  get bonusPenalties() {
    const bonusPenalties = {};
    Object.entries(this.final).forEach(([key, value]) => {
      bonusPenalties[key] = this.calculateBonusPenalties(value);
    });
    return bonusPenalties;
  }

  calculateBonusPenalties = (score) => {
    if (score >= 19) {
      return 5;
    }
    
    if (score <= 2) {
      return -5;
    }

    return Math.floor((score - 10) / 2);
  }
}