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
    assessThreat: 2,
    collectInformation: 1,
    find: 2,
    haggle: 1,
    navigate: 1,
    takeNotice: 1,
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
  titles: {
    'Sequential Numbers': 'Rabblerouser',
    'Three Equal Numbers': 'Veteran',
    'Two Equaled Pairs': 'Champion',
    'All Equal Numbers': 'Legend'
  },
  equipment: [
    {
      name: `Arm Bracers`,
    },
    {
      name: `Crude Cudgel`,
      type: `weapon`,
      damage: `1d6-1`
    },
    {
      name: `Crude Dirk`,
      type: `weapon`,
      damage: `1d6-1`
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
      name: `Armorer's Toolkit`,
      quantity: 3
    },
    {
      name: `Bandage Provisions`,
      quantity: 10
    },
    {
      name: `Field Provisions`,
      quantity: 3
    },
    {
      name: `Face Paint`,
      quantity: 5
    },
    {
      name: `Leather Lashings`,
      quantity: 5
    },
    {
      name: `Pemmican`,
      quantity: 5
    },
  ]
};
