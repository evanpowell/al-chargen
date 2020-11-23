export const spellwork = {
  name: `Spellwork`,
  auxiliarySkillsPool: [
    'Aim',
    'Attune',
    'Bandage Injury',
    'Catch/Throw',
    'Decipher Code',
    'Gather',
    'Hurl Object',
    'Inscribe',
    'Provoke',
    'Run',
    'Send Signal',
    'Tell Fortune'
  ],
  abilities: {
    assessThreat: 1,
    collectInformation: 1,
    find: 2,
    haggle: 1,
    navigate: 1,
    takeNotice: 2,
  },
  conditioning: {
    poise: 0,
    avoidance: 1,
    capacity: 1
  },
  proficiencies: {
    'Artifice': 1,
    'Charms': 0,
    'Emergence': 0,
    'Spellcasting': 0,
    'Transference': 0
  },
  titles: [
    {
      name: 'Meddler',
      notes: '+2 difficulty recruiting'
    },
    {
      name: 'Elemenalist',
      notes: '-2 difficulty recruiting'
    },
    {
      name: 'Magus',
      notes: '-4 difficulty recruiting'
    },
  ],
  equipment: [
    {
      name: `Flame-resistant cloak`
    },
    {
      name: `Flint spark`
    },
    {
      name: `Focus`
    },
    {
      name: `Sorcerer's Satchel`
    },
    {
      name: `Torc`
    },
    {
      name: `Wand`,
    }
  ],
  supplies: [
    {
      name: `Amethyst`,
      quantity: 5
    },
    {
      name: `Illusionist's Powder`,
      quantity: 10
    },
    {
      name: `Lead`,
      quantity: 5
    },
    {
      name: `Malachite`,
      quantity: 5
    },
    {
      name: `Nightshade Dust`,
      quantity: 5
    },
    {
      name: `Turquoise`,
      quantity: 5
    },
  ]
};