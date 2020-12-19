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
  titles: {
    'Sequential Numbers': 'Meddler',
    'Three Equal Numbers': 'Elementalist',
    'Two Equaled Pairs': 'Magus',
    'All Equal Numbers': 'Archmagus'
  },
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
      name: `Spellcasting Components`,
      quantity: 3
    },
    {
      name: `Charm Components`,
      quantity: 3
    },
    {
      name: `Emergence Components`,
      quantity: 3
    },
    {
      name: `Artifice Components`,
      quantity: 3
    },
    {
      name: `Transference Components`,
      quantity: 3
    },
    {
      name: `Moonstone`,
      quantity: 1
    },
  ]
};