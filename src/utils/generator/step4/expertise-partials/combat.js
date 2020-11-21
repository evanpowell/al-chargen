export const combat = {
  name: `Combat`,
  auxiliarySkillsPool: [
    'Acrobatic Feat',
    'Aim',
    'Bandage Injury',
    'Brawl',
    'Focus Strength',
    'Jump',
    'Keep Watch',
    'Negotiate',
    'Provoke',
    'Repair/Mend',
    'Run',
    'Sustain Strength'
  ],
  abilities: {
    [`Assess Threat`]: 2,
    [`Collect Information`]: 1,
    [`Find`]: 2,
    [`Haggle`]: 1,
    [`Navigate`]: 1,
    [`Take Notice`]: 1,
  },
  conditioning: {
    poise: 0,
    avoidance: 0,
    capacity: 2
  },
  proficiencies: {
    'Field Tactics': 0,
    'Finesse Maneuvers': 0,
    'Immobilization': 0,
    'Power Strikes': 1,
    'Precision Strikes': 0
  },
  titles: [
    {
      name: 'Rabblerouser',
      notes: '+2 difficulty recruiting'
    },
    {
      name: 'Veteran',
      notes: '-2 difficulty recruiting'
    },
    {
      name: 'Champion',
      notes: '-4 difficulty recruiting'
    },
  ],
  equipment: [
    {
      name: `Arm Bracers`
    },
    {
      name: `Crude Cudgel`
    },
    {
      name: `Crude Dirk`
    },
    {
      name: `Hemp Sling`
    },
    {
      name: `Quilted Fur Armor`
    },
    {
      name: `Weapon Belt`,
    }
  ],
  supplies: [
    {
      name: `Arrows`,
      quantity: 20
    },
    {
      name: `Bullets`,
      quantity: 20
    },
    {
      name: `Bandage Provisions`,
      quantity: 10
    },
    {
      name: `Face Paint`,
      quantity: 5
    },
    {
      name: `Leather Strips`,
      quantity: 10
    },
    {
      name: `Pemmican`,
      quantity: 5
    },
  ]
};
