export const influence = {
  name: `Influence`,
  auxillarySkillsPool: [
    'Aim',
    'Attune',
    'Catch/Throw',
    'Dance',
    'Gamble',
    'Play Musical Instrument',
    'Run',
    'Scale Rope',
    'Swim',
    'Tell Fortune',
    'Tell Story',
    'Track'
  ],
  abilities: {
    [`Assess Threat`]: 2,
    [`Collect Information`]: 1,
    [`Find`]: 1,
    [`Haggle`]: 2,
    [`Navigate`]: 1,
    [`Take Notice`]: 1,
  },
  conditioning: {
    poise: 1,
    avoidance: 0,
    capacity: 1
  },
  proficiencies: {
    'Connections': 0,
    'Diplomacy': 0,
    'Leadership': 0,
    'Oration': 1,
    'Wit': 0
  },
  titles: [
    {
      name: 'Pariah',
      notes: '+2 difficulty recruiting'
    },
    {
      name: 'Dignitary',
      notes: '-2 difficulty recruiting'
    },
    {
      name: 'Noble',
      notes: '-4 difficulty recruiting'
    },
  ],
  equipment: [
    {
      name: `Colorful banner`
    },
    {
      name: `Crude Dirk`
    },
    {
      name: `Leather satchel`
    },
    {
      name: `Lesser medallion`
    },
    {
      name: `Official Seal`
    },
    {
      name: `Tailored Cloak`,
    }
  ],
  supplies: [
    {
      name: `Candles`,
      quantity: 6
    },
    {
      name: `Ink`,
      quantity: 5
    },
    {
      name: `Parchments`,
      quantity: 10
    },
    {
      name: `Perfume`,
      quantity: 2
    },
    {
      name: `Quill scribers`,
      quantity: 5
    },
    {
      name: `Wax links`,
      quantity: 10
    },
  ]
};