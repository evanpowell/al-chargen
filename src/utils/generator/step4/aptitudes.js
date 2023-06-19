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
    },
    vocations: {
      'Alchemy': ['Salvager', 'Brewer'],
      'Combat': ['Warrior', 'Vanguard'],
      'Crafts': ['Smith', 'Forgemaster'],
      'Influence': ['Stalwart', 'Wrangler'],
      'Lore': ['Pilgrim', 'Mountaineer'],
      'Manipulation': ['Rockclimber', 'Shipman'],
      'Spellwork': ['Awakener', 'Blackguard'],
      'Stewardship': ['Stablehand', 'Chamberlain']
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
    },
    vocations: {
      'Alchemy': ['Gatherer', 'Witch'],
      'Combat': ['Bulwark', 'Grappler'],
      'Crafts': ['Trapper', 'Prepper'],
      'Influence': ['Beastmaster', 'Tracker'],
      'Lore': ['Cartographer', 'Storyteller'],
      'Manipulation': ['Prowler', 'Ranger'],
      'Spellwork': ['Druid', 'Whisperer'],
      'Stewardship': ['Steward', 'Gatekeeper']
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
    },
    vocations: {
      'Alchemy': ['Sleeper', 'Ritualist'],
      'Combat': ['Duelist', 'Archer'],
      'Crafts': ['Scaffolder', 'Weaver'],
      'Influence': ['Entertainer', 'Juggler'],
      'Lore': ['Chronicler', 'Dancer'],
      'Manipulation': ['Scout', 'Ghost'],
      'Spellwork': ['Shadowdancer', 'Sorcerer'],
      'Stewardship': ['Shepherd', 'Farmhand']
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
    },
    vocations: {
      'Alchemy': ['Distiller', 'Medicine Maker'],
      'Combat': ['Assassin', 'Scorpion'],
      'Crafts': ['Mechanic', 'Jeweler'],
      'Influence': ['Diplomat', 'Tactician'],
      'Lore': ['Sleeper', 'Sage'],
      'Manipulation': ['Fox', 'Pickpocket'],
      'Spellwork': ['Coldrunner', 'Sandman'],
      'Stewardship': ['Hunter', 'Forager']
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
    },
    vocations: {
      'Alchemy': ['Brewmaster', 'Apothecary'],
      'Combat': ['Strategist', 'Viper'],
      'Crafts': ['Spider', 'Engineer'],
      'Influence': ['Savant', 'Mystic'],
      'Lore': ['Ambassador', 'Oracle'],
      'Manipulation': ['Mentalist', 'Cryptographer'],
      'Spellwork': ['Battlemage', 'Wizard'],
      'Stewardship': ['Scavenger', 'Delegator']
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
    },
    vocations: {
      'Alchemy': ['Herbalist', 'Healer'],
      'Combat': ['Monk', 'Cleric', 'Paladin'],
      'Crafts': ['Maker', 'Tailor'],
      'Influence': ['Adviser', 'Augur'],
      'Lore': ['Historian', 'Elder'],
      'Manipulation': ['Diviner', 'Antagonist'],
      'Spellwork': ['Evoker', 'Thaumaturge'],
      'Stewardship': ['Caretaker', 'Mender']
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
    },
    vocations: {
      'Alchemy': ['Alchemist', 'Botanist'],
      'Combat': ['Militia Leader', 'Rival'],
      'Crafts': ['Architect', 'Builder'],
      'Influence': ['Spymaster', 'Politician'],
      'Lore': ['Priest', 'Shaman'],
      'Manipulation': ['Puppeteer', 'Overseer'],
      'Spellwork': ['Enchanter', 'Artificer'],
      'Stewardship': ['Chef', 'Provisioner']
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
    },
    vocations: {
      'Alchemy': ['Nostrumist', 'Perfumer'],
      'Combat': ['Sellsword', 'Freerider'],
      'Crafts': ['Trader', 'Peddler'],
      'Influence': ['Ringleader', 'Fence'],
      'Lore': ['Traveler', 'Bard'],
      'Manipulation': ['Rogue', 'Thief'],
      'Spellwork': ['Conjurer', 'Warlock'],
      'Stewardship': ['Acolyte', 'Squire']
    }
  }
}