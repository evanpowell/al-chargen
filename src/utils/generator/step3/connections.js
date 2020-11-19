export const connections = [
  {
    description: 'local merchant',
    notes: '15% discount on trades'
  },
  {
    description: 'local mount trainer',
    notes: '15% discount on mounts'
  },
  {
    description: `ship captain's cousin`,
    notes: 'free ship passage'
  },
  {
    description: 'trusted friend',
    notes: 'roll companion character'
  },
  {
    description: 'thoughtful guide',
    notes: 'two additional rolls on Navigation'
  },
  {
    description: 'medical instructor',
    modifications: [
      {
        type: 'skill',
        name: 'Bandage injury',
        points: 1
      }
    ]
  },
  {
    description: 'trusted friend',
    notes: 'roll companion character'
  },
  {
    description: 'mystery benefactor',
    modifications: [
      {
        type: 'wealth',
        amount: '2d6'
      }
    ]
  },
  {
    description: 'wealthy noble',
    modifications: [
      {
        type: 'wealth',
        amount: '3d6'
      }
    ]
  },
  {
    description: 'guild member',
    notes: 'free board in any city'
  }
];
