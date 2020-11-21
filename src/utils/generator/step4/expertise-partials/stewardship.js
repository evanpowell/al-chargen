export const stewardship = {
  name: `Stewardship`,
  auxillarySkillsPool: [
    'Bandage Injury',
    'Comfort',
    'Fish',
    'Forage',
    'Gather',
    'Hunt',
    'Meditate',
    'Scale Rope',
    'Send Signal',
    'Tell Story',
    'Tie Knot',
    'Tumble'
  ],
  abilities: {
    [`Assess Threat`]: 1,
    [`Collect Information`]: 1,
    [`Find`]: 2,
    [`Haggle`]: 1,
    [`Navigate`]: 2,
    [`Take Notice`]: 1,
  },
  conditioning: {
    poise: 0,
    avoidance: 1,
    capacity: 1
  },
  proficiencies: {
    'Animal Handling': 0,
    'Food Handling': 0,
    'Operations': 0,
    'Provisioning': 0,
    'Survivalism': 1
  },
  titles: [
    {
      name: 'Hermit',
      notes: '+2 difficulty recruiting'
    },
    {
      name: 'Operator',
      notes: '-2 difficulty recruiting'
    },
    {
      name: 'Keeper',
      notes: '-4 difficulty recruiting'
    },
  ],
  equipment: [
    {
      name: `Falconer's Bracer`
    },
    {
      name: `Hunting Knife`
    },
    {
      name: `Rope Spinner`
    },
    {
      name: `Rucksack`
    },
    {
      name: `Shovel`
    },
    {
      name: `Wood Axe`,
    }
  ],
  supplies: [
    {
      name: `Bandage Provisions`,
      quantity: 10
    },
    {
      name: `Candles`,
      quantity: 6
    },
    {
      name: `Charcoal`,
      quantity: 20
    },
    {
      name: `Seeds`,
      quantity: 50
    },
    {
      name: `Salts`,
      quantity: 10
    },
    {
      name: `Vinegar`,
      quantity: 5
    },
  ]
};