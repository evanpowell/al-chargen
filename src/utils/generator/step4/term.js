export const termOutcomes = {
  'All Numbers Distinct': {
    description: 'Showed a lack of motivation or disdain for their initial area of expertise'
  },

  'Sequential Numbers': {
    description: 'Regarged with disdain',
    notes: '+2 difficulty recruiting',
    modifications: [
      {
        type: 'accolades',
        points: 2
      }
    ]
  },

  'One Equaled Pair': {
    description: 'Showed drive and dedication, earned respect',
    modifications: [
      {
        type: 'skill',
        points: 4
      },
      {
        type: 'ability',
        points: 2
      },
    ]
  },

  'Three Equal Numbers': {
    description: 'Highly regarded',
    notes: '-4 difficulty recruiting',
    modifications: [
      {
        type: 'accolades',
        points: 4
      }
    ]
  },

  'Two Equaled Pairs': {
    description: 'Demonstrated exceptional prowess',
    modifications: [
      {
        type: 'accolades',
        points: 5
      }
    ]
  },

  'All Equal Numbers': {
    description: 'Displayed unrivaled expertise',
    modifications: [
      {
        type: 'skill',
        points: 5
      },
      {
        type: 'ability',
        points: 5
      },
      {
        type: 'resistance',
        points: 5
      },
      {
        type: 'proficiency',
        points: 5
      },
    ]
  }
};
