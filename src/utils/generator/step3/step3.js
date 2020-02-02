import { DiceRoller } from "../../diceRoller";
import { Birthdate } from "./birthDate";
import { provincialOrigins } from "./provincialOrigins";
import { biomes } from "./biomes";
import { settlements, settlementPrepositions } from "./settlements";

export class Step3 {
    constructor() {
        this.diceRoller = new DiceRoller();
    }

    rollBirthDate = () => {
        return new Birthdate().rollBirthDate();
    }

    rollProvince = () => {
        const provinceKeys = Object.keys(provincialOrigins);
        return this.diceRoller.randomizeObjectKey(provinceKeys);
    }

    rollBiome = (provinceKey) => {
        const province = provincialOrigins[provinceKey];
        return province.biomes[this.diceRoller.randomizeIndex(province.biomes.length)];
    }

    rollSettlement = () => {
        const settlementKeys = Object.keys(settlements);
        return this.diceRoller.randomizeObjectKey(settlementKeys);
    }

    

    // All methods below are for generating origins prose

    generateOriginsProse = ({ province, biome, settlement }) => {
        const settlementPrep = this.rollSettlementPreposition(settlement);
        const biomePrep = this.rollBiomePreposition(biome);
        const provincePrep = this.rollProvincePreposition(biome);

        return `Hodjai ${settlementPrep} ${settlement} ${biomePrep} ${biome} ${provincePrep} ${province}`;
    }

    rollSettlementPreposition = (settlement) => {
        const settlementType = settlements[settlement].type;
        const isNeutral = this.diceRoller.rollDie(100) > 40;
        const finalType = isNeutral ? 'neutral' : settlementType;
        const prepostions = settlementPrepositions[finalType];

        return prepostions[this.diceRoller.randomizeIndex(prepostions.length)];
    }

    rollBiomePreposition = (biome) => {
        const prepositions = biomes[biome].biomePrepositions;
        return prepositions[this.diceRoller.randomizeIndex(prepositions.length)];
    }

    rollProvincePreposition = (biome) => {
        const prepositions = biomes[biome].provincePrepositions;
        return prepositions[this.diceRoller.randomizeIndex(prepositions.length)];
    }
}