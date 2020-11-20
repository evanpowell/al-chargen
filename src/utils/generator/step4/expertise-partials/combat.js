export const combat = {
  name: `Combat`,
  auxillarySkillsPool: [
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
  // TODO: equipment and supplies
  equipment: [
    {
      name: `Alchemist's satchel`
    },
    {
      name: `Alembic`
    },
    {
      name: `Crucible`
    },
    {
      name: `Linen bags`
    },
    {
      name: `Mortar and Pestle`
    },
    {
      name: `Tubed vials`,
      quantity: 6
    }
  ],
  supplies: [
    {
      name: `Clear water`,
      quantity: 5
    },
    {
      name: `Joza root`,
      quantity: 5
    },
    {
      name: `Myrtle`,
      quantity: 5
    },
    {
      name: `Nettle milk`,
      quantity: 5
    },
    {
      name: `Witch's Webbing`,
      quantity: 5
    },
    {
      name: `Pine tar`,
      quantity: 5
    },
  ]
};
