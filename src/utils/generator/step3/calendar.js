const months = {
    1: `Bailiea's Dawn`,
    2: `Star of the Morning`,
    3: `Seed's Rise`,
    4: `Dance of Etia`,
    5: `Water's Rise`,
    6: `Vostiar's Renewal`,
    7: `The Warming Night`,
    8: `Kalmor's Bright Mist`,
    9: `Song of Ithera`,
    10: `Water's Fall`,
    11: `Star of the Evening`,
    12: `Thrennum's Journey`,
    13: `Dawn's Edge`,
};

const weeks = {
    1: 'First',
    2: 'Second',
    3: 'Third',
    4: 'Fourth',
    5: 'Fifth',
    6: 'Last'
};

const weekdays = {
    1: 'Rehan',
    2: 'Thelehan',
    3: 'Middhan',
    4: 'Ledhan',
    5: 'Estahan'
};

// To determine whether a birthdate falls during a holiday celebration
// the birthdate is referenced as a number:

// Months: 1000's and 100's place,
// Weeks: '10's place
// Weekdays: '1's place

// Example: Fifth Ledhan of Star of the Evening = 1154 (11, 5, 4)

const holidays = [
    {
        minDate: 111,
        maxDate: 111,
        name: `New Year's Day`,
        description: 'A celebration of the new year that ushers in good fortune in the name of Thrennum.'
    },
    {
        minDate:111,
        maxDate: 165,
        name: `Bailiea's Blessing`,
        description: `A celebration of the first full moon of the year. People celebrate by greeting their neighbors with food and drink, sitting outside when the skies are clear.`,
        isMoonDay: true
    },
    {
        minDate: 141,
        maxDate: 141,
        name: 'Fourth Night',
        description: `An evening celebration of singing, dancing, and good food; people with birthdays on this day wear a special wreath to the celebrations.`
    },
    {
        minDate: 215,
        maxDate: 215,
        name: `Dordirian`,
        description: `This is a day honoring the Regent and the Empire. People usually wear their fine clothes and visit to make an offering to Thrennum at their local or regional temple, or make a fire offering to one of the gods.`
    },
    {
        minDate: 325,
        maxDate: 325,
        name: `Planter's Day`,
        description: `the day to rest after the first two weeks' planting during the month; typically, this day sees many gatherings and discussions of what plants will be harvested in the weeks to come, and communities will gather and share fruit and drink and discuss vegetables.`
    },
    {
        minDate: 415,
        maxDate: 425,
        name: `Etia's Bloom`,
        description: `This festival is a week of singing, dancing, and pairing games, with plenty of drink; people often marry in the eyes of the gods during this celebratory time.`
    },
    {
        minDate: 515,
        maxDate: 515,
        name: 'Chapan Day',
        description: `A celebration of chapan and of generosity. People typically bake, hang wreaths, and exchange a multitude of breads, or give bread to those in need.`
    },
    {
        minDate: 533,
        maxDate: 533,
        name: `Kalmor's Day`,
        description: `This day is celebrated in honor of Kalmor and the cooling nights around the capital. This is typically a gathering day where communities share stories and various fictions, and ceremonially exchange gifts of value.`
    },
    {
        minDate: 612,
        maxDate: 612,
        name: `Merchant's Day`,
        description: `A truly Thelean celebration of civilization where merchants typically have huge sales and people gather together in public markets to shop and trade openly.`
    },
    {
        minDate: 615,
        maxDate: 615,
        name: `Laborer's Day`,
        description: `A day to celebrate labors, particularly those of farmers and herders. Most laborers take this day to rest, share food and drink, and play games.`
    },
    {
        minDate: 611,
        maxDate: 665,
        name: `Harvest Moon`,
        description: `This variable day marks the week of harvest, though sometimes people harvest their crops before or after this day and sometimes the celebrations last a full week; typically, the days are full of labor and the nights are full of food and drink exchanged communally with song and dance.`,
        isMoonDay: true
    },
    {
        minDate: 713,
        maxDate: 713,
        name: `Vallicast's Night`,
        description: `This holiday, which begins at dusk, marks the longest night of the year, and in many places, this is celebrated with a large fire in which bones are burned in addition to wood (hence, a bonfire) among gatherings at the center of settlements across Thelea.`
    },
    {
        minDate: 823,
        maxDate: 823,
        name: `Nalvaram's Fantasy`,
        description: `It is a day of reversals, where people wear each others' clothes or dress as beasts and monsters, and close to nightfall many celebrants will dance around public areas sharing jests and laughter, as well as copious amounts of drink.`
    },
    {
        minDate: 845,
        maxDate: 845,
        name: `Day of Mists`,
        description: `This is a day spent in community cooperation, where the morning is spent at one's temple, followed by a gathering of friends and family to share a feast and fellowship. Celebrants honor civilization by thanking their neighbors for safety and community and offering thoughtful gifts to show appreciation.`
    },
    {
        minDate: 932,
        maxDate: 932,
        name: `Winds of Ithera`,
        description: `A day celebrating ships and sea travel; children play with toy boats and take a day's break from gathering water, while sailors make elaborate displays in harbors demonstrating their seaworthiness and the congruence of fleets. Ship builders and sailors alike are given tributes by locals to show their appreciation for what is thought of as an honorable profession.`
    },
    {
        minDate: 1023,
        maxDate: 1033,
        name: `Swuskwah's Path`,
        description: `The week-long celebration of the way of Swuskwah and the trial of the hunt. Many communities will see locals going on extended hunts, gathering food for huge feasts to commemmorate family and the oversight of the gods.`
    },
    {
        minDate: 1053,
        maxDate: 1054,
        name: `Rite of Ressek`,
        description: `A two-day spring festival of planting and water from dawn to second dusk. This marks the second planting within the many rains of the central Empire; people often bathe publicly on the second day, or visit community pools and exchange vegetable or rose flavored waters.`
    },
    {
        minDate: 1111,
        maxDate: 1111,
        name: `Day of Maros`,
        description: `The day of the dead. It is a day to celebrate the power of death and the journey of souls who have left our world and have been welcomed into Maros's grasp. The Day of Maros is accompanied by macabre imagery, vibrant costumes, and communal bonfires deep into the night. The decorations are often seen hanging for weeks afterward.`
    },
    {
        minDate: 1265,
        maxDate: 1265,
        name: `Year's End Celebration`,
        description: `The last day of the year that begins local food, music, drink, song, and sharing. The celebration that begins on Year's End usually lasts well throughout Dawn's Edge.`
    },
]

export const calendar = {
    months,
    weeks,
    weekdays,
    holidays
}