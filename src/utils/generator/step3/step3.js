import { DiceRoller } from "../../diceRoller";
import { Birthdate } from "./birthDate";
import { provincialOrigins } from "./provincialOrigins";
import { biomes } from "./biomes";

export class Step3 {
    constructor() {
        this.diceRoller = new DiceRoller();
    }

    rollBirthDate = () => {
        return new Birthdate().rollBirthDate();
    }

    rollProvince = () => {
        const provinceKeys = Object.keys(provincialOrigins);
        const provinceKey = this.diceRoller.randomizeObjectKey(provinceKeys);
        return provinceKey;
    }

    rollBiome = (provinceKey) => {
        const province = provincialOrigins[provinceKey];
        return province.biomes[this.diceRoller.randomizeIndex(province.biomes.length)];
    }


    // All methods below are for generating origins prose

    generateOriginsProse = ({ province, biome }) => {
        const biomePreposition = this.rollBiomePreposition(biome);
        const provincePreposition = this.rollProvincePreposition(biome);

        return `Hodjai grew up in a small township ${biomePreposition} ${biome} ${provincePreposition} ${province}`;
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