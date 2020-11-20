import { DiceRoller } from "../diceRoller";
import Character from "./character";
import { skills } from "./shared/skills";

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
}