import { TheleanDate } from "./theleanDate";
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
import { notableSettlements } from "./background-story/notableSettlements";
import { notableSettlementMatchProbabilities } from "./background-story/notableSettlementMatch";
import { notableSettlementVerbs } from "./background-story/notableSettlementVerbs";
import { communityPlaceholderValues } from "./background-story/communityPlaceholderValues";
import { reputationProse } from "./background-story/reputationProse";
import { regionPrepositions } from "./background-story/regionPrepositions";
import { parentageProse } from "./background-story/parentageProse";
import { culturalValueCommunityDescriptors } from "./background-story/culturalValueCommunityDescriptors";
import {
  communityTypesBiomeSpecific,
  communityTypesGeneric,
  groupValues,
} from "./background-story/communityProseValues";
import { diasporicRegions, lineage } from "./lineage";

export class Step3 extends Step2 {
  rollBirthDate = () => {
    this.character.origins.birthdate = new TheleanDate().rollDate();
  };

  rollDiasporicRegionAndLanguage = () => {
    // For Diasporic and Valiarch Bloodline
    const { region, languages } = this.getRandomArrayValue(diasporicRegions);
    this.character.origins.region = region;
    this.character.origins.primaryLanguage =
      this.getRandomArrayValue(languages);
  };

  rollStandardLineage = (ancestry) => {
    const lineagePossibilities = lineage[ancestry];
    const lineageResult = this.getRandomArrayValue(lineagePossibilities);
    if (lineageResult === "DIASPORIC") {
      this.character.origins.lineage = "Diasporic";
      this.rollDiasporicRegionAndLanguage();
    } else {
      this.character.origins.lineage = lineageResult.lineage;
      this.character.origins.region = lineageResult.region;
      this.character.origins.primaryLanguage = this.getRandomArrayValue(
        lineageResult.languages
      );
    }
  };

  rollPulnagaLineage = () => {
    const dieRoll = this.rollDie(4);
    switch (dieRoll) {
      case 1: {
        this.rollStandardLineage("Human");
        break;
      }
      case 2: {
        this.rollStandardLineage(`Kahlnissá`);
        break;
      }
      case 3: {
        this.character.origins.lineage = "Valiarch Bloodline";
        this.rollDiasporicRegionAndLanguage();
        break;
      }
      case 4: {
        this.character.origins.lineage = "Diasporic";
        this.rollDiasporicRegionAndLanguage();
        break;
      }
      default: {
        console.error(`Expected die roll of 1 - 4, but got ${dieRoll}.`);
      }
    }
  };

  rollLineage = () => {
    if (this.character.ancestry === `Pulnagá`) {
      this.rollPulnagaLineage();
    } else {
      this.rollStandardLineage(this.character.ancestry);
    }
  };

  rollSettlement = () => {
    this.character.origins.settlement = this.getRandomArrayValue(settlements);
  };

  rollParentage = () => {
    this.character.origins.parentage = this.getRandomArrayValue(parentage);
  };

  rollName = () => {
    let namesPool = [];
    let language = this.character.languages[0];
    if (language.includes(`Es'ahn`)) {
      language = `Es'ahn`;
    }

    const nameObj = names[language];

    // Es'ahn names are shared between different dialects.

    if (nameObj.isCommunityBased) {
      const { id: communityId } = this.character.origins.community;
      const nameCategory = communityNameInfluences[communityId][language];
      namesPool = nameObj.nameList[nameCategory];
    } else if (nameObj.isGendered) {
      if (
        nameObj.genderedProbability &&
        this.rollDie(100) >= nameObj.genderedProbability
      ) {
        namesPool = nameObj.nameList[nameObj.nonGenderedType];
      } else {
        const genderedNameAssignmentType = this.rollNameType(
          nameObj.probabilities
        );
        const alignsWithSex =
          (genderedNameAssignmentType === "standard" && !nameObj.isReversed) ||
          (genderedNameAssignmentType === "genderFlip" && nameObj.isReversed);

        let nameCategory;
        if (alignsWithSex) {
          nameCategory =
            this.character.sex === "Male" ? "masculine" : "feminine";
        } else {
          nameCategory =
            this.character.sex === "Male" ? "feminine" : "masculine";
        }
        namesPool = nameObj.nameList[nameCategory];
      }
    } else {
      const nameType = this.rollNameType(nameObj.probabilities);
      namesPool = nameObj.nameList[nameType];
    }

    this.character.name = this.getRandomArrayValue(namesPool);
  };

  rollNameType = (probabilities) => {
    const sides = probabilities.reduce(
      (total, probabilityObj) => total + probabilityObj.probability,
      0
    );

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
  };

  rollPronouns = () => {
    let pronounType;
    const rollResult = this.rollDie(100);
    if (this.character.sex === "Intersex") {
      pronounType =
        rollResult <= 85
          ? "neutral"
          : this.getRandomArrayValue(["masculine", "feminine"]);
    } else {
      const pronounTypes = {
        genderAligned: this.character.sex === "Male" ? "masculine" : "feminine",
        genderFlipped: this.character.sex === "Male" ? "feminine" : "masculine",
      };
      if (rollResult <= 5) {
        pronounType = "neutral";
      } else if (rollResult <= 95) {
        pronounType = pronounTypes.genderAligned;
      } else {
        pronounType = pronounTypes.genderFlipped;
      }
    }
    this.pronouns = { ...pronouns[pronounType] };
  };

  rollCommunity = () => {
    this.character.origins.community = this.getRandomArrayValue(communities);
  };

  rollCulturalValues = () => {
    this.character.origins.culturalValues =
      this.getRandomArrayValue(culturalValues);
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
    this.character.isLiterate =
      this.character.origins.community.id >= 13 ||
      (this.character.attributes.final.int >= 13 && this.rollDie(100) <= 40);
  };

  rollBackgroundStory = () => {
    this.rollLocationsProse();
    this.rollParentageCommunityProse();
    this.rollReputationProse();
  };

  rollLocationsProse = () => {
    const { isMatch, phrase: notablePhrase } =
      this.rollNotableSettlementPhrase();
    if (isMatch) {
      this.character.backgroundStory += notablePhrase;
      return;
    }

    const settlementPhrase = this.rollSettlementPhrase();
    const pastOnlySettlementPhrase = this.rollSettlementPhrase(true);
    const { biomePhrase, regionPhrase } = this.rollBiomeAndRegionPhrases();

    const { region } = this.character.origins.provincialOrigins;

    const startingRegionPrepositions = regionPrepositions[region];
    const startingRegionPreposition = this.getRandomArrayValue(
      startingRegionPrepositions
    );
    const startingRegionPhrase = `${startingRegionPreposition} ${region}`;

    const roll = this.rollDie(100);
    const { settlement } = this.character.origins;
    const nonStructuralSettlements = ["diasporic group", "nomadic group"];
    const isNonStructuralSettlement =
      nonStructuralSettlements.includes(settlement);
    let locationsProse;

    if (notablePhrase) {
      if (roll <= 20 && !isNonStructuralSettlement) {
        locationsProse = `${notablePhrase}, ${biomePhrase}, ${pastOnlySettlementPhrase} ${regionPhrase}.`;
      } else if (roll <= 45) {
        locationsProse = `${startingRegionPhrase}, ${pastOnlySettlementPhrase} ${biomePhrase}, ${notablePhrase}.`;
      } else {
        locationsProse = `${settlementPhrase} ${biomePhrase} ${regionPhrase}, ${notablePhrase}.`;
      }
    } else {
      if (roll <= 20 && !isNonStructuralSettlement) {
        locationsProse = `${biomePhrase}, ${pastOnlySettlementPhrase} ${regionPhrase}.`;
      } else if (roll <= 45) {
        locationsProse = `${startingRegionPhrase}, ${pastOnlySettlementPhrase} ${biomePhrase}.`;
      } else {
        locationsProse = `${settlementPhrase} ${biomePhrase} ${regionPhrase}.`;
      }
    }

    try {
      this.fillProse(locationsProse);
    } catch {
      console.error("Failed to Fill Prose:", locationsProse);
      locationsProse = "";
    }

    const filledLocationsProse = this.capitalizeString(
      this.fillProse(locationsProse)
    );
    this.character.backgroundStory = filledLocationsProse;
  };

  rollSettlementPhrase = (isPastOnly) => {
    const { settlement } = this.character.origins;
    const { phrases, verbs } = settlementsProse[settlement];
    const settlementPhrase = this.getRandomArrayValue(phrases);

    const actionPhrases = isPastOnly
      ? verbs.past
      : verbs.past.concat(verbs.present);
    const actionPhrase = this.getRandomArrayValue(actionPhrases);
    const settlementsProseString = `${this.character.name} ${actionPhrase} ${settlementPhrase}`;
    return settlementsProseString;
  };

  rollBiomeAndRegionPhrases = () => {
    const { provincialOrigins, settlement } = this.character.origins;
    const { region, biome } = provincialOrigins;

    const biomePhrases = biomesProse[biome].phrases[settlement];
    const biomePhrase = this.getRandomArrayValue(biomePhrases);

    const provincePhrases = biomesProse[biome].provincePhrases;
    const provincePhrase = this.getRandomArrayValue(provincePhrases);

    return {
      biomePhrase,
      regionPhrase: `${provincePhrase} ${region}`,
    };
  };

  rollNotableSettlementPhrase = () => {
    const { provincialOrigins, settlement } = this.character.origins;
    const { region } = provincialOrigins;

    const notableSettlementsInRegion = notableSettlements.filter(
      (settlement) => settlement.region === region
    );
    const notableSettlement = this.getRandomArrayValue(
      notableSettlementsInRegion
    );

    if (notableSettlement && settlement === notableSettlement.type) {
      const chanceOfMatch = notableSettlementMatchProbabilities[settlement];
      if (this.rollDie(100) <= chanceOfMatch) {
        const { location, prepositions, name } = notableSettlement;
        const settlementPreposition = this.getRandomArrayValue(prepositions);
        const verbType = settlement === "large city" ? "large city" : "other";
        const verbs = notableSettlementVerbs[verbType];
        const verb = this.getRandomArrayValue(verbs);
        let phrase = `$NAME ${verb} ${settlementPreposition} ${name}, ${location}.`;
        phrase = this.fillProse(phrase);
        return {
          isMatch: true,
          phrase,
        };
      }
    }

    if (!notableSettlement) {
      return {};
    }

    const { rangeProbabilities } = notableSettlement;
    const rangeProbabilitiesForSettlementType = rangeProbabilities[settlement];

    if (!rangeProbabilitiesForSettlementType) {
      return {};
    }

    const { close, mid } = rangeProbabilitiesForSettlementType;
    const roll = this.rollDie(100);
    if (roll <= close) {
      const descriptions = notableSettlement.rangeDescriptions.close;
      const description = this.getRandomArrayValue(descriptions);
      const preposition = this.getRandomArrayValue(
        notableSettlement.prepositions
      );
      const phrase = `${description} ${preposition} ${notableSettlement.name}`;
      return {
        phrase,
      };
    }

    if (roll <= close + mid) {
      const descriptions = notableSettlement.rangeDescriptions.mid;
      const description = this.getRandomArrayValue(descriptions);
      const preposition = this.getRandomArrayValue(
        notableSettlement.prepositions
      );
      const phrase = `${description} ${preposition} ${notableSettlement.name}`;
      return {
        phrase,
      };
    }

    return {};
  };

  rollParentageCommunityProse = () => {
    const { parentage, provincialOrigins, culturalValues, community } =
      this.character.origins;
    const { biome } = provincialOrigins;
    const parentagePhrases = parentageProse[parentage];
    const parentagePhrase = this.getRandomArrayValue(parentagePhrases);

    const communityAdjective =
      culturalValueCommunityDescriptors[culturalValues];

    const communityTypesByBiome = communityTypesBiomeSpecific[biome];
    const communityType =
      communityTypesByBiome[community.description] ||
      communityTypesGeneric[community.description];

    let groupValue = groupValues[community.description];
    let middle;
    if (this.rollDie(100) <= 35) {
      groupValue = groupValue.replaceAll("a ", "").replaceAll("an ", "");
      middle = `${communityAdjective} ${groupValue}`;
    } else {
      middle = groupValue;
    }

    let parentageCommunitySentence = `${parentagePhrase} $["among", "within", "amid", "in"] ${middle} of ${communityType}.`;
    try {
      parentageCommunitySentence = this.fillProse(parentageCommunitySentence);
    } catch {
      console.error("Failed to Fill Prose:", parentageCommunitySentence);
    }

    const communityValue = this.getValueForCommunityPlaceholder();
    parentageCommunitySentence = parentageCommunitySentence.replaceAll(
      "$COMMUNITY",
      communityValue
    );
    parentageCommunitySentence = this.capitalizeString(
      parentageCommunitySentence
    );

    this.character.backgroundStory = `${this.character.backgroundStory} ${parentageCommunitySentence}`;
  };

  getValueForCommunityPlaceholder = () => {
    const communityValues =
      communityPlaceholderValues[this.character.origins.settlement];
    return this.getRandomArrayValue(communityValues);
  };

  rollReputationProse = () => {
    const communityValue = this.getValueForCommunityPlaceholder();
    const reputationSentences =
      reputationProse[this.character.origins.reputation];
    let reputationSentence = this.getRandomArrayValue(reputationSentences);
    reputationSentence = reputationSentence.replaceAll(
      "$COMMUNITY",
      communityValue
    );
    try {
      reputationSentence = this.fillProse(reputationSentence);
    } catch {
      console.error("Failed to Fill Prose:", reputationSentence);
      reputationSentence = "";
    }
    this.character.backgroundStory = `${this.character.backgroundStory} ${reputationSentence}`;
  };

  rollStep3 = () => {
    this.rollBirthDate();
    this.rollLineage();
    this.rollSettlement();
    this.rollCommunity();
    // this.rollParentage();
    // this.rollName();
    // this.rollPronouns();
    // this.rollCulturalValues();
    // this.rollReputation();
    // this.rollConnection();
    // this.rollLiteracy();
    // this.rollBackgroundStory();
  };
}
