import { DiceRoller } from "../../diceRoller.js";
import { calendar } from "./calendar";

export class TheleanDate {
  constructor() {
    this.diceRoller = new DiceRoller();
  }

  rollDate = () => {
    const monthRoll = this.rollMonth();
    const isLeapDay = this.diceRoller.rollDie(1461) === 1461;
    const isMoonDay = this.rollIsMoonDay(monthRoll === 13);

    if (isLeapDay) {
      return {
        dateString: `Thrennum's Chase`,
        holidays: [
          {
            name: `Thrennum's Chase`,
            description: `A Leap Day that happens every 4 years, and is marked
                            with a dawn to dawn celebration full of food and dance, often
                            dramas and extensive public displays; people with birthdays on
                            this day wear a special costume, and joke that their age is a fraction
                            of those who seem to be their peers.`,
          },
        ],
        isMoonDay: isMoonDay && this.diceRoller.rollDie(59) >= 58,
      };
    }

    const weekRoll = this.diceRoller.rollDie(6);
    const weekdayRoll = this.diceRoller.rollDie(5);
    const birthDateNum = monthRoll * 100 + weekRoll * 10 + weekdayRoll;
    const holidays = this.determineBirthDateHolidays(birthDateNum, isMoonDay);

    return {
      dateString: this.convertBirthDateToString(
        monthRoll,
        weekRoll,
        weekdayRoll
      ),
      holidays,
      isMoonDay,
    };
  };

  rollMonth = () => {
    let monthRoll = this.diceRoller.rollDie(20);
    if (monthRoll >= 14) {
      monthRoll -= 8;
    }

    return monthRoll;
  };

  rollIsMoonDay = (isDawnsEdge) => {
    // There is a 2/59 chance of any given day being a moon day
    const isMoonDay = this.diceRoller.rollDie(59) >= 58;

    // There is roughly a 1/6 chance of Dawn's Edge having a moonday in it
    if (isMoonDay && isDawnsEdge) {
      return this.diceRoller.rollDie(6) >= 6;
    }

    return isMoonDay;
  };

  determineBirthDateHolidays = (birthDateNum, isMoonDay) => {
    const birthDateHolidays = [];
    let birthDateFallsWithHoliday = false;
    for (let holiday of calendar.holidays) {
      birthDateFallsWithHoliday =
        birthDateNum >= holiday.minDate && birthDateNum <= holiday.maxDate;
      if (birthDateFallsWithHoliday) {
        if (!holiday.isMoonDay) {
          birthDateHolidays.push({
            name: holiday.name,
            description: holiday.description,
          });
        } else if (isMoonDay) {
          birthDateHolidays.push({
            name: holiday.name,
            description: holiday.description,
          });
        }
      }
    }
    return birthDateHolidays;
  };

  convertBirthDateToString = (monthRoll, weekRoll, weekdayRoll) => {
    const month = calendar.months[monthRoll];
    const week = calendar.weeks[weekRoll];
    const weekday = calendar.weekdays[weekdayRoll];

    if (monthRoll === 13) {
      return `${weekday} of ${month}`;
    }

    return `${week} ${weekday} of ${month}`;
  };
}
