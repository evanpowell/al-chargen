export const crafts = {
  name: `Crafts`,
  auxiliarySkillsPool: [
    'Acrobatic Feat',
    'Aim',
    'Alter Mechanism',
    'Appraise',
    'Bandage Injury',
    'Bribe',
    'Gather',
    'Hurl Object',
    'Persuade',
    'Repair/Mend',
    'Tie Knot',
    'Trek'
  ],
  abilities: {
    assessThreat: 1,
    collectInformation: 1,
    find: 2,
    haggle: 2,
    navigate: 1,
    takeNotice: 1,
  },
  conditioning: {
    poise: 1,
    avoidance: 0,
    capacity: 1
  },
  proficiencies: {
    'Construction': 0,
    'Fine Crafts': 0,
    'Mechanisms': 0,
    'Smithing': 0,
    'Transports': 1
  },
  titles: [
    {
      name: 'Bumbler',
      notes: '+2 difficulty recruiting'
    },
    {
      name: 'Artisan',
      notes: '-2 difficulty recruiting'
    },
    {
      name: 'Master',
      notes: '-4 difficulty recruiting'
    },
  ],
  equipment: [
    {
      name: `Crude Smith's Hammer`
    },
    {
      name: `Hand saw`
    },
    {
      name: `Prybar`
    },
    {
      name: `Smith's Apron`
    },
    {
      name: `Smith's Tools`
    },
    {
      name: `Tool bag`,
    }
  ],
  supplies: [
    {
      name: `Armorer's Bundle`,
      quantity: 10
    },
    {
      name: `Board lumber`,
      quantity: 5
    },
    {
      name: `Brown salts`,
      quantity: 5
    },
    {
      name: `Glass flecks`,
      quantity: 10
    },
    {
      name: `Leather Strips`,
      quantity: 10
    },
    {
      name: `Nails`,
      quantity: 50
    },
  ]
};