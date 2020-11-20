export const connections = [
  {
    description: 'local merchant',
    notes: '15% discount on trades (local merchant connection)'
  },
  {
    description: 'local mount trainer',
    notes: '15% discount on mounts (local mount trainer connection)'
  },
  {
    description: `ship captain's cousin`,
    notes: `free ship passage (ship captain's cousin connection)`
  },
  {
    description: 'trusted friend',
    notes: 'roll companion character'
  },
  {
    description: 'thoughtful guide',
    notes: 'two additional rolls on Navigation (thoughtful guide connection)'
  },
  {
    description: 'medical instructor',
    modifications: [
      {
        type: 'skill',
        name: 'Bandage Injury',
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
    notes: 'free board in any city (guild member connection)'
  }
];
