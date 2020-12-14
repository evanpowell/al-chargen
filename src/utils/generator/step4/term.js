export const termOutcomes = {
  'All Numbers Distinct': {},

  'Sequential Numbers': {
    notes: '+2 difficulty recruiting',
    modifications: [
      {
        type: 'accolades',
        points: 2
      }
    ]
  },

  'One Equaled Pair': {
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
    notes: '-4 difficulty recruiting',
    modifications: [
      {
        type: 'accolades',
        points: 4
      }
    ]
  },

  'Two Equaled Pairs': {
    modifications: [
      {
        type: 'accolades',
        points: 5
      }
    ]
  },

  'All Equal Numbers': {
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
