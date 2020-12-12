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
import { pronouns } from "./pronouns";
import { biomesProse } from "./background-story/biomesProse";
import { settlementsProse } from "./background-story/settlementsProse";

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
      .filter(() => this.rollDie(100) <= 75)
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

  rollName = () => {
    let namesPool = [];
    let language = this.character.languages[0];
    if (language.includes(`Es'ahn`)) {
      language =  `Es'ahn`;
    }
    
    const nameObj = names[language];

    // Es'ahn names are shared between different dialects.

    if (nameObj.isCommunityBased) {
      const { id: communityId } = this.character.origins.community;
      const nameCategory = communityNameInfluences[communityId][language];
      namesPool = nameObj.nameList[nameCategory];
    } else if (nameObj.isGendered) {
      if (nameObj.genderedProbability && this.rollDie(100) >= nameObj.genderedProbability) {
        namesPool = nameObj.nameList[nameObj.nonGenderedType];
      } else {
        const genderedNameAssignmentType = this.rollNameType(nameObj.probabilities);
        const alignsWithSex = (genderedNameAssignmentType === 'standard' && !nameObj.isReversed)
          || (genderedNameAssignmentType === 'genderFlip' && nameObj.isReversed);

        let nameCategory;
        if (alignsWithSex) {
          nameCategory = this.character.sex === 'Male' ? 'masculine' : 'feminine';
        } else {
          nameCategory = this.character.sex === 'Male' ? 'feminine' : 'masculine';
        }
        namesPool = nameObj.nameList[nameCategory]
      }
    } else {
      const nameType = this.rollNameType(nameObj.probabilities);
      namesPool = nameObj.nameList[nameType];
    }
    
    this.character.name = this.getRandomArrayValue(namesPool);
  };

  rollNameType = (probabilities) => {
    const sides = probabilities.reduce((total, probabilityObj) => (total + probabilityObj.probability), 0);

    const roll = this.rollDie(sides);

    let min = 0;
    let max = 0;

    for (const probabilityObj of probabilities) {
      min = max;
      max += probabilityObj.probability;
      if (roll > min && roll <= max) {
        return probabilityObj.type;
      }
    }
  }

  rollPronouns = () => {
    let pronounType;
    const rollResult = this.rollDie(100);
    if (this.character.sex === 'Intersex') {
      pronounType = rollResult <= 85 ? 'neutral' : this.getRandomArrayValue(['masculine', 'feminine']);
    } else {
      const pronounTypes = {
        genderAligned: this.character.sex === 'Male' ? 'masculine' : 'feminine',
        genderFlipped: this.character.sex === 'Male' ? 'feminine' : 'masculine'
      };
      if (rollResult <= 5) {
        pronounType = 'neutral';
      } else if (rollResult <= 95) {
        pronounType = pronounTypes.genderAligned;
      } else {
        pronounType = pronounTypes.genderFlipped;
      }
    }
    this.pronouns = pronouns[pronounType];
  };

  rollCommunity = () => {
    this.character.origins.community = this.getRandomArrayValue(communities);
  };

  rollCulturalValues = () => {
    this.character.origins.culturalValues = this.getRandomArrayValue(culturalValues);
  };

  rollReputation = () => {
    this.character.origins.reputation = this.getRandomArrayValue(reputation);
  };

  rollConnection = () => {
    if (this.rollDie(100) <= 40) {
      this.character.origins.connection = this.getRandomArrayValue(connections);
    }
  };

  rollLiteracy = () => {
    this.character.isLiterate = this.character.origins.community.id >= 13
      || (this.character.attributes.final.int >= 13 && this.rollDie(100) <= 40);
  };

  rollBackgroundStory = () => {
    this.rollLocationsProse();
  };

  rollLocationProse = () => {
    const settlementPhrase = this.rollSettlementsProse();
    const biomesPhrase = this.rollBiomesProse();

    const locationsProse = `${settlementPhrase} ${biomesPhrase}`;
    const filledLocationsProse = this.fillProse(locationsProse);
    console.log('LOCATIONAL PROSE:');
    console.log(filledLocationsProse);
  };

  rollSettlementsProse = () => {
    const { settlement } = this.character.origins;
    let settlementType;
    if (settlement === 'nomadic group') {
      settlementType = 'nomadic';
    } else if (settlement === 'diasporic group') {
      settlementType = 'diasporic';
    } else {
      settlementType = 'location';
    }

    let settlementPrepositions;

    if (settlmentType === 'location') {
      if (settlement === 'large city') {
        const { location } = settlementsProse.prepositions;
        settlementPrepositions = [...location.large, ...location.neutral];
      } else {
        settlementPrepositions = location.neutral;
      }
    } else {
      settlementPrepositions = settlementsProse.prepositions[settlementType];
    }

    settlementPrepositions = [...settlementPrepositions, ...settlementsProse.prepositions.neutral];

    const settlementPreposition = this.getRandomArrayValue(settlementPrepositions);
    const settlementsProseString = `${this.character.name} ${settlementPreposition} ${settlement}`;
    return settlementsProseString;
  };
  
  rollBiomesProse = () => {
    const { provincialOrigins, settlement } = this.character.origins;
    // const { region, biomes } = provincialOrigins;
    const region = 'the Ommultic Front';
    const biome = 'spruce forests';

    // const biome = this.getRandomArrayValue(biomes);

    const biomePhrases = biomesProse[biome].phrases[settlement];
    const biomePhrase = this.getRandomArrayValue(biomePhrases);

    const provincePhrases = biomesProse[biome].provincePhrases;
    const provincePhrase = this.getRandomArrayValue(provincePhrases);

    const biomesProseString = `${settlement} ${biomePhrase} ${provincePhrase} ${region}`;
    return biomesProseString;
  };

  rollStep3 = () => {
      this.rollBirthDate();
      this.rollProvince();
      this.rollLanguages();
      this.rollSettlement();
      this.rollParentage();
      this.rollRelations();
      this.rollCommunity();
      this.rollName();
      this.rollPronouns();
      this.rollCulturalValues();
      this.rollReputation();
      this.rollConnection();
      this.rollLiteracy();
      this.
  };
}