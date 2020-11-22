import { DiceRoller } from "../diceRoller";
import Character from "./character";
import { skills } from "./shared/skills";
import { proficiencies } from "./step4/proficiencies";

export default class CharacterGeneratorAbstract extends DiceRoller {
  character = new Character();

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
}