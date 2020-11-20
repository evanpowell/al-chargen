export const aptitudes = {
  str: {
    name: 'Strongarm',
    skillsPool: [
      'Brawl',
      'Climb',
      'Focus Strength',
      'Hurl Object',
      'Sustain Strength',
      'Scale Rope'
    ],
    resistances: {
      addiction: 1,
      aversion: 1,
      debility: 2,
      explosion: 1,
      infection: 1,
      toxin: 2
    },
    advantage: {
      name: 'Summon Strength',
      description: 'Retry STR-based skill test once per day'
    }
  },
  end: {
    name: 'Survivalist',
    skillsPool: [
      'Fish',
      'Hunt',
      'Keep Watch',
      'Run',
      'Swim',
      'Trek'
    ],
    resistances: {
      addiction: 1,
      aversion: 1,
      debility: 2,
      explosion: 1,
      infection: 1,
      toxin: 2
    },
    advantage: {
      name: 'Fortitude',
      description: 'Retry END-based skill test once per day'
    }
  },
  agi: {
    name: 'Acrobat',
    skillsPool: [
      'Acrobatic Feat',
      'Catch/Throw',
      'Dance',
      'Jump',
      'Move Quietly',
      'Tumble'
    ],
    resistances: {
      addiction: 1,
      aversion: 2,
      debility: 1,
      explosion: 1,
      infection: 1,
      toxin: 2
    },
    advantage: {
      name: 'Deftness',
      description: 'Retry AGI-based skill test once per day'
    }
  },
  pre: {
    name: 'Seeker',
    skillsPool: [
      'Aim',
      'Bandage Injury',
      'Forgery',
      'Play Musical Instrument',
      'Repair/Mend',
      'Tie Knot'
    ],
    resistances: {
      addiction: 1,
      aversion: 1,
      debility: 2,
      explosion: 2,
      infection: 1,
      toxin: 1
    },
    advantage: {
      name: 'Finesse',
      description: 'Retry PRE-based skill test once per day'
    }
  },
  int: {
    name: 'Deviser',
    skillsPool: [
      'Alter Mechanism',
      'Decipher Code',
      'Envision',
      'Gamble',
      'Recollect',
      'Send Signal'
    ],
    resistances: {
      addiction: 1,
      aversion: 1,
      debility: 1,
      explosion: 2,
      infection: 2,
      toxin: 1
    },
    advantage: {
      name: 'Mastermind',
      description: 'Retry INT-based skill test once per day'
    }
  },
  wis: {
    name: 'Scholar',
    skillsPool: [
      'Appraise',
      'Inscribe',
      'Evoke',
      'Meditate',
      'Negotiate',
      'Read Map'
    ],
    resistances: {
      addiction: 1,
      aversion: 2,
      debility: 1,
      explosion: 1,
      infection: 2,
      toxin: 1
    },
    advantage: {
      name: 'Well Versed',
      description: 'Retry WIS-based skill test once per day'
    }
  },
  per: {
    name: 'Watcher',
    skillsPool: [
      'Attune',
      'Discern',
      'Forage',
      'Gather',
      'Hide',
      'Track'
    ],
    resistances: {
      addiction: 1,
      aversion: 1,
      debility: 2,
      explosion: 1,
      infection: 1,
      toxin: 2
    },
    advantage: {
      name: 'Ascertaining',
      description: 'Retry PER-based skill test once per day'
    }
  },
  cha: {
    name: 'Opportunist',
    skillsPool: [
      'Bribe',
      'Comfort',
      'Persuade',
      'Provoke',
      'Tell Fortune',
      'Tell Story'
    ],
    resistances: {
      addiction: 2,
      aversion: 2,
      debility: 1,
      explosion: 1,
      infection: 1,
      toxin: 1
    },
    advantage: {
      name: 'Convincing',
      description: 'Retry CHA-based skill test once per day'
    }
  }
}