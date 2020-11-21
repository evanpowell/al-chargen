export const manipulation = {
  name: `Manipulation`,
  auxiliarySkillsPool: [
    'Acrobatic Feat',
    'Appraise',
    'Bandage Injury',
    'Bribe',
    'Decipher Code',
    'Forgery',
    'Gamble',
    'Jump',
    'Move Quietly',
    'Provoke',
    'Recollect',
    'Run'
  ],
  abilities: {
    [`Assess Threat`]: 1,
    [`Collect Information`]: 2,
    [`Find`]: 1,
    [`Haggle`]: 1,
    [`Navigate`]: 1,
    [`Take Notice`]: 2,
  },
  conditioning: {
    poise: 0,
    avoidance: 1,
    capacity: 1
  },
  proficiencies: {
    'Disguises': 1,
    'Intelligence': 0,
    'Misdirection': 0,
    'Skullduggery': 0,
    'Stealth': 0
  },
  titles: [
    {
      name: 'Rat',
      notes: '+2 difficulty recruiting'
    },
    {
      name: 'Dasher',
      notes: '-2 difficulty recruiting'
    },
    {
      name: 'Mystborn',
      notes: '-4 difficulty recruiting'
    },
  ],
  equipment: [
    {
      name: `Abacus`
    },
    {
      name: `Concealing Cloak`
    },
    {
      name: `Mirror`
    },
    {
      name: `Spyglass`
    },
    {
      name: `Spot filter`
    },
    {
      name: `Locksmith's tools`,
    }
  ],
  supplies: [
    {
      name: `False features`,
      quantity: 5
    },
    {
      name: `Invisible ink`,
      quantity: 5
    },
    {
      name: `Knuckle grease`,
      quantity: 5
    },
    {
      name: `Ledger cyphers`,
      quantity: 10
    },
    {
      name: `Lock picks`,
      quantity: 10
    },
    {
      name: `Trick coins`,
      quantity: 20
    },
  ]
};