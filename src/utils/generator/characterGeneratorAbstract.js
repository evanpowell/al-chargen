import { DiceRoller } from "../diceRoller";
import Character from "./character";
import { skills } from "./shared/skills";
import { proficiencies } from "./step4/proficiencies";

export default class CharacterGeneratorAbstract extends DiceRoller {
  character = new Character();
  pronouns = {};

  addSkillPoint(skillName) {
    let hasSkill = false;
    this.character.skills.forEach((skill) => {
      if (skill.name === skillName) {
        skill.points += 1;
        hasSkill = true;
      }
    });

    if (!hasSkill) {
      this.character.skills.push({
        ...skills[skillName],
        points: 1
      });
    }
  }

  addPointToExisting= (type) => {
    const item = this.getRandomArrayValue(this.character[type]);
    item.points += 1;
  }

  addProficiencyPoint(proficiencyName) {
    let hasProficiency = false;
    this.character.proficiencies.forEach((proficiency) => {
      if (proficiency.name === proficiencyName) {
        proficiency.points += 1;
        hasProficiency = true;
      }
    });

    if (!hasProficiency) {
      this.character.proficiencies.push({
        ...proficiencies[proficiencyName],
        points: 1
      });
    }
  }

  isSequentialNumbers = (numbers) => {
    const sortedNumbers = [...numbers].sort();
    let prev = sortedNumbers[0];
    for (const [i, num] of sortedNumbers.entries()) {
      if (i === 0) {
        continue;
      }
      if (num !== prev + 1) {
        return false;
      }
      prev = num;
    }

    return true;
  }

  getOutcomeDiceResults = (numbers) => {
    if (this.isSequentialNumbers(numbers)) {
      return 'Sequential Numbers';
    }

    const occurenceObj = numbers.reduce((occurences, num) => {
      if (!occurences[num]) {
        occurences[num] = 1;
      } else {
        occurences[num] += 1;
      }
      return occurences;
    }, {});

    const occurences = Object.values(occurenceObj);
    if (occurences.includes(4)) {
      return 'All Equal Numbers';
    } else if (occurences.includes(2) && !occurences.includes(1)) {
      return 'Two Equaled Pairs';
    } else if (occurences.includes(3)) {
      return 'Three Equal Numbers';
    } else if (occurences.includes(2)) {
      return 'One Equaled Pair';
    } else {
      return 'All Numbers Distinct'
    }
  }

  fillProse = (prose) => {
    prose = prose.replaceAll('$PRONOUN_SUBJECT', this.pronouns.subject);
    prose = prose.replaceAll('$PRONOUN_OBJECT', this.pronouns.object);
    prose = prose.replaceAll('$PRONOUN_POSSESSIVE', this.pronouns.possessive);
    prose = prose.replaceAll('$PRONOUN_SELF', this.pronouns.self);
    prose = prose.replaceAll('$VERB_PRESENT', this.pronouns.verbs.present);
    prose = prose.replaceAll('$VERB_PAST', this.pronouns.verbs.past);
    prose = prose.replaceAll('$NAME', this.character.name);
    prose = prose.replaceAll('$TITLE', `"${this.character.title}"`);
    prose = prose.replaceAll(/\$\[.*?\]/g, (arrayAsString) => {
      arrayAsString = arrayAsString.replace('$', '');
      arrayAsString = arrayAsString.replaceAll(`'`, `"`);
      const parsedArray = JSON.parse(arrayAsString);
      return this.getRandomArrayValue(parsedArray);
    });
    return prose;
  };

  capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}