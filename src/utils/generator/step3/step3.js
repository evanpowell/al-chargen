import { DiceRoller } from "../../diceRoller";
import { Birthdate } from "./birthdate";
import { provincialOrigins } from "./provincialOrigins";
import { biomes } from "./biomes";
import { settlements, settlementPrepositions } from "./settlements";
import { names } from "./names";
import { allLanguages } from "./languages";

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

    // TODO: break out repetitive code into helper functions
    rollLanguages = (provinceKey, intelligence) => {
        const province = provincialOrigins[provinceKey];
        const languages = province.languages.map((languageObj) => {
            return {... languageObj};
        })
        let maxRoll = 100;
        const characterLanguages = [];

        // 95% chance character knows Thelean plus another language
        const isSpeaksTwoLanguages = this.diceRoller.rollDie(100) > 5;

        if (isSpeaksTwoLanguages) {
            characterLanguages.push('Thelean');

            const theleanLanguageObject = languages.find((languageObj) => languageObj.language === 'Thelean');
            maxRoll -= theleanLanguageObject.probability;
            theleanLanguageObject.probability = 0;
        }

        const roll = this.diceRoller.rollDie(maxRoll);


        // min is exclusive, max is inclusive
        let min = 0;
        let max = languages[0].probability;

        languages.forEach((languageObj, i) => {

            if (roll > min && roll <= max) {
                if (languages[0].language === 'Thelean' && characterLanguages.length) {
                    // if character already knows thelean and thelean is predominant language of region,
                    // character's name will be thelean (first language in character language list)
                    characterLanguages.push(languageObj.language);
                } else {
                    // otherwise, character's name will be from this language (added to front of language list)
                    characterLanguages.unshift(languageObj.language);

                }

                languageObj.probability = 0;
            }
            
            if (i < languages.length - 1) {
                min = max;
                max += languages[i+1].probability;
            }
        });

        // if INT is 16 or higher & 50% chance
        if (intelligence >= 16 && this.diceRoller.rollDie(100) > 50) {
            const remainingLanguages = languages.filter((languageObj) => {
                if (languageObj.language === 'Thelean') {
                    return false;
                }

                if (characterLanguages.includes(languageObj.language)) {
                    return false;
                }
                
                return true;
            });
            // add another language (from regional non-thelean languages)
            let remainingProbabilityMax = languages.reduce((a, b) => {
                return a + b.probability;
            }, 0);
            
            min = 0;
            max = remainingLanguages[0].probability;
            
            const remainingRegionalLanguagesRoll = this.diceRoller.rollDie(remainingProbabilityMax);

            remainingLanguages.forEach((languageObj, i) => {

                if (remainingRegionalLanguagesRoll > min && remainingRegionalLanguagesRoll <= max) {
                    characterLanguages.push(languageObj.language);
                    languageObj.probability = 0;
                }
                
                if (i < remainingLanguages.length - 1) {
                    min = max;
                    max += remainingLanguages[i+1].probability;
                }
            });
        }

        // if INT is 18 or higher & 50% chance
        if (intelligence >= 18 && this.diceRoller.rollDie(100) > 50) {
            // add another language

            if (this.diceRoller.rollDie(100) <= 70) {
                // 70% chance regional non-thelean
                const remainingLanguages = languages.filter((languageObj) => {
                    if (languageObj.language === 'Thelean') {
                        return false;
                    }
    
                    if (characterLanguages.includes(languageObj.language)) {
                        return false;
                    }
                    
                    return true;
                });
                let remainingProbabilityMax = languages.reduce((a, b) => {
                    return a + b.probability;
                }, 0);
                
                min = 0;
                max = remainingLanguages[0].probability;
                
                const remainingRegionalLanguagesRoll = this.diceRoller.rollDie(remainingProbabilityMax);
    
                remainingLanguages.forEach((languageObj, i) => {
    
                    if (remainingRegionalLanguagesRoll > min && remainingRegionalLanguagesRoll <= max) {
                        characterLanguages.push(languageObj.language);
                        languageObj.probability = 0;
                    }
                    
                    if (i < remainingLanguages.length - 1) {
                        min = max;
                        max += remainingLanguages[i+1].probability;
                    }
                });

            } else {
                // 30% chance empire-wide non-thelean languages
                const remainingLanguages = allLanguages.filter((language) => {
                    if (language === 'Thelean') {
                        return false;
                    }
    
                    if (characterLanguages.includes(language)) {
                        return false;
                    }
                    
                    return true;
                });

                const language = remainingLanguages[this.diceRoller.randomizeIndex(remainingLanguages.length)];

                characterLanguages.push(language);
            }
        }


        return characterLanguages;
    }

    rollBiome = (provinceKey) => {
        const province = provincialOrigins[provinceKey];
        return province.biomes[this.diceRoller.randomizeIndex(province.biomes.length)];
    }

    rollSettlement = () => {
        const settlementKeys = Object.keys(settlements);
        return this.diceRoller.randomizeObjectKey(settlementKeys);
    }

    rollName(language, sex) {
        // Es'ahn names are shared between different dialects.
        if (language.includes(`Es'ahn`)) {
            language =  `Es'ahn`;
        }

        const namesInLanguage = names[language].nameList;
        const { genderFlipChance } = names[language];

        let namesPool = [];

        if (genderFlipChance !== undefined) {
            const nameGender = this.getNameGender(genderFlipChance, sex);
            namesPool = namesInLanguage[nameGender];
        } else {
            Object.entries(namesInLanguage).map(([category, names]) => {
                if (category !== 'neutral') {
                    namesPool = namesPool.concat(names);
                }
            });
        }

        if (namesInLanguage.neutral) {
            namesPool = namesPool.concat(namesInLanguage.neutral);
        }

        return namesPool[this.diceRoller.randomizeIndex(namesPool.length)];
    }

    // rollName helper
    getNameGender(genderFlipChance, sex) {
        let nameGender;

        if (this.diceRoller.rollDie(1000) <= genderFlipChance) {
            nameGender = (sex === 'Male') ? 'feminine' : 'masculine';
        } else {
            nameGender = (sex === 'Male') ? 'masculine' : 'feminine';
        }

        return nameGender;
    }
    

    // All methods below are for generating origins prose

    generateOriginsProse = ({ name, province, biome, settlement }) => {
        const settlementPrep = this.rollSettlementPreposition(settlement);
        const biomePrep = this.rollBiomePreposition(biome, settlement);
        const provincePrep = this.rollProvincePreposition(biome);

        return `${name} ${settlementPrep} ${settlement} ${biomePrep} ${biome} ${provincePrep} ${province}`;
    }

    rollSettlementPreposition = (settlement) => {
        const settlementType = settlements[settlement].type;
        const prepositions = settlementPrepositions[settlementType].concat(settlementPrepositions.neutral);

        return prepositions[this.diceRoller.randomizeIndex(prepositions.length)];
    }

    rollBiomePreposition = (biome, settlement) => {
        const { biomePrepositions } = biomes[biome];
        const settlementType = settlements[settlement].type;
        const prepositions = biomePrepositions[settlementType].concat(biomePrepositions.neutral);

        return prepositions[this.diceRoller.randomizeIndex(prepositions.length)];
    }

    rollProvincePreposition = (biome) => {
        const prepositions = biomes[biome].provincePrepositions;
        return prepositions[this.diceRoller.randomizeIndex(prepositions.length)];
    }
}