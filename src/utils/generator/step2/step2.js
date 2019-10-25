import { ancestryConstants } from "../../../constants/rulebookConstants"
import { DiceRoller } from "../../diceRoller";
import { ancestralAdjustments } from "./ancestralAdjustments";
import { appearance } from "./appearance";
import { distinguishingFeatures } from "./distinguishingFeatures";

export class Step2 {
    constructor() {
        this.diceRoller = new DiceRoller();
    }

    rollAncestry = () => {
        const ancestryNum = this.diceRoller.randomizeIndex(6);
        const ancestryArray = [];

        for (let key in ancestryConstants) {
            ancestryArray.push(key);
        }

        return ancestryArray[ancestryNum];
    }

    calculateAdjustedScores = (initialScores, ancestry) => {
        const adjustedScores = {...ancestralAdjustments[ancestryConstants[ancestry]]};
        
        for(let attribute in initialScores) {
            adjustedScores[attribute] += initialScores[attribute];
        }

        return adjustedScores;
    }

    calculateBonusPenalties = (adjustedScores) => {
        const bonusPenalties = {};

        for (let attribute in adjustedScores) {
            bonusPenalties[attribute] = this.calculateBonusPenalty(adjustedScores[attribute]);
        }

        return bonusPenalties;
    }

    calculateBonusPenalty = (score) => {
        if (score >= 19) {
            return 5;
        }
        
        if (score <= 2) {
            return -5;
        }

        return Math.floor((score - 10) / 2);
    }

    rollSex = () => {
        const initialRoll = this.diceRoller.rollDie(8);

        if (initialRoll >= 7) {
            return this.determineSexByRoll(this.diceRoller.rollDie(8));
        }

        return this.determineSexByRoll(initialRoll);
    }

    determineSexByRoll = (roll) => {
        if (roll >= 7) {
            return 'Intersex';
        }

        return roll % 2 ? 'Male' : 'Female';
    }

    rollAppearance = (ancestry) => {
        const { height, weight, baseAge } = appearance[ancestryConstants[ancestry]];
        
        return {
            height: this.diceRoller.rollDice(height.number, height.sides, height.modifier),
            weight: this.diceRoller.rollDice(weight.number, weight.sides, weight.modifier),
            baseAge: this.diceRoller.rollDice(baseAge.number, baseAge.sides, baseAge.modifier)
        }
    }

    rollDistinguishingFeatures = () => {
        const features = [];
        for (let featureType in distinguishingFeatures) {
            const roll = this.diceRoller.rollDie(100);
            const feature = distinguishingFeatures[featureType][roll];
            if (feature) {
                features.push(feature);
            }
        }
        return features;
    }
}