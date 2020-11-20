import { Birthdate } from "./birthdate";
import { provincialOrigins } from "./provincialOrigins";
import { settlements } from "./settlements";
import { parentage } from "./parentage";
import { relations, petTypes, relationStatuses } from "./relations";
import { names, communityNameInfluences } from "./names";
import { allLanguages } from "./languages";
import { communities } from "./communities";
import { culturalValues } from "./culturalValues";
import { reputation } from "./reputation";
import { connections } from "./connections";
import { Step2 } from "../step2/step2";

export class Step3 extends Step2 {


    rollBirthDate = () => {
        this.character.origins.birthdate = new Birthdate().rollBirthDate();
    }

    rollProvince = () => {
        this.character.origins.provincialOrigins = this.getRandomArrayValue(provincialOrigins);
    }

    rollLanguages = () => {
        const { regionalLanguages } = this.character.origins.provincialOrigins;
        const { int: intelligence } = this.character.attributes.final;
        let languages = regionalLanguages.map((languageObj) => {
            return {... languageObj};
        });

        const characterLanguages = [];

        // 95% chance character knows Thelean plus another language
        const isSpeaksTwoLanguages = this.rollDie(100) <= 95;

        let isTheleanPrimary = false;

        if (isSpeaksTwoLanguages) {
            characterLanguages.push('Thelean');
            languages = languages.filter(({ language }, i) => {
                if (language === 'Thelean') {
                    if (i === 0) {
                        isTheleanPrimary = true;
                    }
                    return false;
                }
                return true;
            });
        }

        let firstRolledLanguage = this.rollLanguage(languages);
        if (isTheleanPrimary) {
            characterLanguages.push(firstRolledLanguage);
        } else {
            characterLanguages.unshift(firstRolledLanguage);
        }
        languages = languages.filter(({ language }) =>  {
            return (!characterLanguages.includes(language)) && language !== 'Thelean';
        });

        // if INT is 16 or higher & 50% chance
        if (intelligence >= 16 && this.rollDie(100) <= 50) {
            // add another language (from regional non-thelean languages)
            characterLanguages.push(this.rollLanguage(languages));
            languages = languages.filter(({ language }) => !characterLanguages.includes(language));
        }

        // if INT is 18 or higher & 50% chance
        if (intelligence >= 18 && this.rollDie(100) <= 50) {
            // add another language

            if (this.rollDie(100) <= 70) {
                // 70% chance regional non-thelean
                characterLanguages.push(this.rollLanguage(languages));

            } else {
                // 30% chance empire-wide non-thelean languages
                const empireWideLanguages = allLanguages.filter((language) => {
                    return language !== 'Thelean' && !characterLanguages.includes(language);
                });

                const language = this.getRandomArrayValue(empireWideLanguages);
                characterLanguages.push(language);
            }
        }


        this.character.languages = characterLanguages;
    }

    rollLanguage = (languages) => {
        const sides = languages.reduce((sides, languageObj) => {
            return sides + languageObj.probability;
        }, 0);

        const roll = this.rollDie(sides);

        let min = 0;
        let max = 0;

        for (const langObj of languages) {
            min = max;
            max += langObj.probability;
            if (roll > min && roll <= max) {
                return langObj.language;
            }
        }
    }

    rollSettlement = () => {
        this.character.origins.settlement = this.getRandomArrayValue(settlements);
    }

    rollParentage = () => {
        const parentObj = this.getRandomArrayValue(parentage);
        const { type } = parentObj;
        let numberOfParents = 0;
        if (parentObj.max) {
            numberOfParents = this.rollDie(parentObj.max);
        } else if (parentObj.fixed) {
            numberOfParents = parentObj.fixed;
        }

        const statuses = this.rollStatuses(numberOfParents, relationStatuses);
        
        this.character.origins.parentage = {
            type,
            statuses
        };
    }

    rollRelations = () => {
        this.character.origins.relations = relations
            .filter(() => this.rollDie(100) <= 75) // 75% chance of rolling any particular relation type
            .reduce((relationsObj,rel) => {
                const numOfRelations = this.rollDie(rel.max) - 1;
                let statuses;
                if (rel.type === 'pets') {
                    statuses = this.rollStatuses(numOfRelations, petTypes);
                } else {
                    statuses = this.rollStatuses(numOfRelations, relationStatuses);
                }

                if (numOfRelations) {
                    relationsObj[rel.type] = statuses;
                }
                
                return relationsObj;
            }, {});

    }

    rollStatuses(quantity, statuses) {
        return [...Array(quantity)]
            .map(() => {
                return this.getRandomArrayValue(statuses);
            })
            .reduce((statusObj, status) => {
                if (statusObj[status]) {
                    statusObj[status] += 1;
                } else {
                    statusObj[status] = 1;
                }

                return statusObj;
            }, {});
    }

    rollName(language, sex, community) {
        let namesPool = [];

        // Es'ahn names are shared between different dialects.
        if (language.includes(`Es'ahn`)) {
            language =  `Es'ahn`;
        }

        if (isCommunityBased) {
            namesPool = nameList[communityNameInfluences[community.id][language]];
            return this.getRandomArrayValue(namesPool);
        }

        let nameGender;
        const { nameList, isGendered, isReversed, isCommunityBased, probabilities } = names[language];
        if(isGendered && sex !== 'Intersex') {
            if (isReversed) {
                nameGender = sex === 'M' ? 'masculine' : 'feminine';                
            } else {
                nameGender = sex === 'M' ? 'feminine' : 'masculine';
            }
        }


        // if (genderFlipChance !== undefined) {
        //     const nameGender = this.getNameGender(genderFlipChance, sex);
        //     namesPool = namesInLanguage[nameGender];
        // } else {
        //     Object.entries(namesInLanguage).map(([category, names]) => {
        //         if (category !== 'neutral') {
        //             namesPool = namesPool.concat(names);
        //         }
        //     });
        // }

        // if (namesInLanguage.neutral) {
        //     namesPool = namesPool.concat(namesInLanguage.neutral);
        // }

        // return namesPool[this.randomizeIndex(namesPool.length)];
    }

    rollCommunity() {
        this.character.origins.community = this.getRandomArrayValue(communities);
    }

    rollCulturalValues() {
        this.character.origins.culturalValues = this.getRandomArrayValue(culturalValues);
    }

    rollReputation() {
        this.character.origins.reputation = this.getRandomArrayValue(reputation);
    }

    rollConnection() {
        // 40% chance of optional connection
        if (this.rollDie(100) <= 40) {
            this.character.origins.connection = this.getRandomArrayValue(connections);
        }
    }

    rollStep3 = () => {
        this.rollBirthDate();
        this.rollProvince();
        this.rollLanguages();
        this.rollSettlement();
        this.rollParentage();
        this.rollRelations();
        this.rollCommunity();
        this.rollCulturalValues();
        this.rollReputation();
        this.rollConnection();
    }
}