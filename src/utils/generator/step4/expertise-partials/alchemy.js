export const alchemy = {
  name: `Alchemy`,
  auxiliarySkillsPool: [
    'Bribe',
    'Bandage Injury',
    'Fish',
    'Gather',
    'Hurl Object',
    'Meditate',
    'Read Map',
    'Recollect',
    'Send Signal',
    'Swim',
    'Track',
    'Trek'
  ],
  abilities: {
    [`Assess Threat`]: 1,
    [`Collect Information`]: 1,
    [`Find`]: 2,
    [`Haggle`]: 1,
    [`Navigate`]: 1,
    [`Take Notice`]: 2,
  },
  conditioning: {
    poise: 0,
    avoidance: 0,
    capacity: 2
  },
  proficiencies: {
    'Compounds': 0,
    'Elixirs': 0,
    'Herbalism': 1,
    'Salves': 0,
    'Tonics': 0
  },
  titles: [
    {
      name: 'Occultist',
      notes: '+2 difficulty recruiting'
    },
    {
      name: 'Toiler',
      notes: '-2 difficulty recruiting'
    },
    {
      name: 'Shaper',
      notes: '-4 difficulty recruiting'
    },
  ],
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
