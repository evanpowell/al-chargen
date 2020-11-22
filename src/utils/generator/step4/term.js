export const term = {
  'All Numbers Distinct': {
    outcome: 'Showed a lack of motivation or disdain for their initial area of expertise',
  },

  'Sequential Numbers': {
    outcome: 'Showed adept prowess in their area of expertise',
    modifications: [
      {
        type: 'skill',
        points: 2
      },
      {
        type: 'ability',
        points: 2
      },
      {
        type: 'resistance',
        points: 2
      },
      {
        type: 'proficiency',
        points: 2
      },
    ]
  },

  'One Equaled Pair': {
    outcome: 'Showed an above-average dedication in their field of expertise',
    modifications: [
      {
        type: 'skill',
        points: 2
      },
      {
        type: 'ability',
        points: 2
      }
    ]
  },

  'Three Equal Numbers': {
    outcome: 'Experiences an injury or trauma during training',
    modifications: [
      {
        type: 'distinguishingFeature',
        description: 'Noticeable scar from injury during training'
      }
    ]
  },

  'Two Equaled Pairs': {
    outcome: 'Showed a master of their practice',
    modifications: [
      {
        type: 'skill',
        points: 3
      },
      {
        type: 'ability',
        points: 3
      },
      {
        type: 'resistance',
        points: 3
      },
      {
        type: 'proficiency',
        points: 3
      },
    ]
  },

  'All Equal Numbers': {
    outcome: 'Showed unrivaled command of their practice',
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
