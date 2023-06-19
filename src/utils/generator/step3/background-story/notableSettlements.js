/*

  SETTLEMENT TYPES:

  'diasporic group',
  'hamlet',
  'village',
  'small town',
  'large township',
  'small city',
  'large city',
  'nomadic group'

  ----------------------------

  'province' property must draw from the 'region' property of step3/provincialOrigins.js

  ie. province must be represented in the same way as it is on the 'Roll Settlement' chart.
  there is no 'Bosen' but there is a 'Central Bosen', no 'Hinn', but 'Delonian Hinn'.
  
  Here it will not represent exactly where the notable settlement is, but the closest matching location
  available from the 'region' of the provincial origins chart.
  
  The 'location' property of the notable settlement will then replace the 'region' that would otherwise be
  used in the character's backstory.

  For example if the only notable settlement 'X' in Wendajii was described as being located in North Wendajii,
  and the character can only roll 'Central Wendajii' as a possible region, there needs to be a way to:
  
  - link notable settlement 'X' to 'Central Wendajii' in order for it to be a possible home location of character via the generator, AND
  - replace 'Central Wendajii' with the more accurate location of notable settlement 'X' to stay true to the description of that settlement.

  Even if the region rolled matches well with the location of the notable settlement, the 'location' property can be
  used to replace the region with a more detailed description.
*/

export const notableSettlements = [
  {
    name: `Akal`,
    type: `large township`,
    region: `the Djenndan Protectorate`,

    // location is only when character is determined to be from the notable settlement, and will
    // replace biome and province descriptions that are otherwise rolled.
    location: `in the eastern rolling hills and forests of the Djenndan Protectorate`,

    prepositions: [
      `the $["ancestral", "hospitable", "looming"] township of`
    ],

    rangeDescriptions: {
      // unique expressions for the distance from character's settlement to the notable settlement
      // Example: "three days along the main roads to", "a fortnight by camel from"
      close: [
        `$["a long day's", "two days'"] ride from`
      ],
      mid: [
        `a fortnight by horse from`,
        `$["six", "seven", "eight", "nine"] days' journey from`
      ]
    },

    rangeProbabilities: {
      // chances that a settlement type of smaller population is either within close or mid range
      // of the notable settlement. (If the character's settlement is of equal or greater size, the
      // notable settlement automatically excluded).
      'diasporic group': {
        close: 30,
        mid: 30
      },
      'hamlet': {
        // if character is from a hamlet, there is a 40% chance that hamlet is close to Akal, and
        // a 50% chance that it is mid range (leaving a 10% chance that the distance is too far
        // for Akal to be mentioned in the backstory prose).
        close: 40,
        mid: 50
      },
      'village': {
        close: 25,
        mid: 45
      },
      'small town': {
        close: 20,
        mid: 40
      }
    }
  },
  {
    name: `Asnarat`,
    type: `large city`,
    region: `the Weyell Groves`,
    location: `along the coast southeast of the Weyell Groves`,
    prepositions: [
      `the $["impressive port", "port", "harbor", "capital trade"] city of`,
    ],
    rangeDescriptions: {
      close: [
        `$["an afternoon's", "a half days'", "a short"] journey from`
      ],
      mid: [
        `$["a week's caravan", "a week by carriage", "two days' sail"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 50,
        mid: 40
      },
      'hamlet': {
        close: 50,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 40
      },
      'large township': {
        close: 20,
        mid: 40
      },
      'small city' : {
        close: 10,
        mid: 50
      }
    }
  },
  {
    name: `Bright Reach`,
    type: `small city`,
    region: `Southwest Hinn`,
    location: `along the Balendian channel inside the peninsula of Hinn`,
    prepositions: [
      `the $["borderlands", "peninsular", "free"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["three days'", "two days'"] ride from`
      ],
      mid: [
        `a week by horse from`,
        `$["six", "seven", "five", "four"] days' journey from`,
        `a $["long", "tedious", "distant"] ride from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 40,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 50
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 50
      },
      'large township': {
        close: 20,
        mid: 20
      },
      'small city' : {
        close: 30,
        mid: 30
      }
    }
  },
  {
    name: `Burunu`,
    type: `small city`,
    region: `Southwest Hinn`,
    location: `on the tropical Isle of Undan off the coast of mainland Hinn`,
    prepositions: [
      `the $["ancient", "volcanic", "ancestral"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["a day's sail", "across the Isle of Undan, less than a day's hike", "an afternoon by boat"] from`
      ],
      mid: [
        `a fortnight over land and water from`,
        `$["six", "seven", "eight", "nine"] days' journey from`,
        `a $["week-long", "picturesque", "difficult"] journey from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 65,
        mid: 20
      },
      'hamlet': {
        close: 70,
        mid: 20
      },
      'village': {
        close: 60,
        mid: 20
      },
      'small town': {
        close: 30,
        mid: 10
      },
      'large township': {
        close: 10,
        mid: 20
      }
    }
  },
  {
    name: `The Central Corridor`,
    type: `large township`,
    region: `the Djenndan Protectorate`,
    location: `in the large glacial valley across the center of the Djenndan Protectorate`,
    prepositions: [
      `the $["immense", "outstretched", "vast"] township of`
    ],

    rangeDescriptions: {
      close: [
        `$["four days'", "five days'"] $["ride", "journey", "caravan"] from`
      ],
      mid: [
        `a fortnight by horse from`,
        `$["fifteen", "sixteen", "seventeen", "eighteen"] days' $["ride", "journey", "caravan"] from`,
        `a $["dangerous", "cold", "challenging"] trek from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 60,
        mid: 30
      },
      'hamlet': {
        close: 60,
        mid: 30
      },
      'village': {
        close: 50,
        mid: 30
      },
      'small town': {
        close: 30,
        mid: 50
      }
    }
  },
  {
    name: `Cho Kassal`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the vast township of Deridian Standing, west of the bogs near the Central Corridor in the Djenndan Protectorate`,
    prepositions: [
      `the city $["of peat,", "of the emerald earth,", "at the standing ridge,", "of the Djati Gaour,", "above Pale Moss Bridge,"]`
    ],
    rangeDescriptions: {
      close: [
        `$["four days'", "five days'"] $["ride", "journey", "caravan"] from`
      ],
      mid: [
        `a fortnight by horse from`,
        `$["fifteen", "sixteen", "seventeen", "eighteen"] days' $["ride", "journey", "caravan"] from`,
        `a $["daunting", "rocky", "twisting"] journey from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 60,
        mid: 20
      },
      'hamlet': {
        close: 30,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 50
      },
      'small town': {
        close: 30,
        mid: 40
      },
      'large township': {
        close: 60,
        mid: 40
      }
    }
  },
  {
    name: `Cyopolda`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the forested and rocky hills of the northern Djenndan Protectorate`,
    prepositions: [
      `the $["towered", "trade", "unearthed", "northern"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["a long week's", "two weeks'"] journey from`
      ],
      mid: [
        `a month-long expedition from`,
        `a $["tedious", "lengthy", "cold and demanding"] trek from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 70,
        mid: 30
      },
      'hamlet': {
        close: 40,
        mid: 50
      },
      'village': {
        close: 50,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 30
      },
      'large township': {
        close: 30,
        mid: 30
      }
    }
  },
  {
    name: `Dhentin`,
    type: `small city`,
    region: `Reviak Proper`,
    location: `along Reviak's flatland coasts on the mainland of the Balendian Channel`,
    prepositions: [
      `the $["fortified", "borderlands", "trade-rich"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["a day's sail", "two days' journey"] from`
      ],
      mid: [
        `a week by $["horse", "boat"] from`,
        `$["six", "seven", "eight", "nine"] days' journey from`,
        `$["a mild", "an easy", "several days'"] trek from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 30
      },
      'hamlet': {
        close: 50,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 50
      },
      'small town': {
        close: 30,
        mid: 60
      },
      'large township': {
        close: 30,
        mid: 30
      }
    }
  },
  {
    name: `Dragonsands`,
    type: `small town`,
    region: `Northern Valadagal`,
    location: `deep within the deserts and dunes of Valadagal`,
    prepositions: [
      `the $["lush cactus", "fiery", "Moghul clan"] town of`
    ],

    rangeDescriptions: {
      close: [
        `$["several days", "four days"] $["caravan", "by camel"] from`
      ],
      mid: [
        `a fortnight by camel from`,
        `$["six", "seven", "eight", "nine"] days' $["caravan", "journey"] from`,
        `a $["challenging", "harrowing", "dangerous"] journey across the lifeless desert from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 60
      },
      'hamlet': {
        close: 20,
        mid: 60
      },
      'village': {
        close: 30,
        mid: 50
      }
    }
  },
  {
    name: `Drynnia`,
    type: `small town`,
    region: `Delonian Hinn`,
    location: `at the edge of the stormplains on the coasts of the Delonian Gulf in Hinn`,
    prepositions: [
      `the $["small", "historical", "tempestuous"] town of`
    ],

    rangeDescriptions: {
      close: [
        `$["three", "two"] days by $["river", "horse"] from`
      ],
      mid: [
        `a week's journey $["upriver", "downriver", "by horse"] from`,
        `$["ten", "eleven", "eight", "nine"] days' journey from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 40,
        mid: 50
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 30
      }
    }
  },
  {
    name: `Dunaajii`,
    type: `large township`,
    region: `Central Wendajii`,
    location: `at the gateway to the Eastern pass within the grasslands of Central Wendajii`,
    prepositions: [
      `the $["distant", "sizeable", "windy"] township of`
    ],

    rangeDescriptions: {
      close: [
        `$["a week's", "several days'"] $["journey", "caravan", "ride"] from`
      ],
      mid: [
        `a fortnight by $["buffalo", "bison", "horse", "elephant"] from`,
        `$["two", "three", "nearly four"] weeks' journey from`,
        `a $["tedious", "long and precipitous", "remote"] expedition from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 40,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 30
      },
      'village': {
        close: 40,
        mid: 20
      },
      'small town': {
        close: 40,
        mid: 20
      }
    }
  },
  {
    name: `Durdu'un`,
    type: `small city`,
    region: `New Voland`,
    location: `among the temperate forests east of the grand mountains of New Voland`,
    prepositions: [
      `the $["viantu", "provincial", "ancient provincial capital"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["three", "two", "four"] days by $["caravan", "mount", "horse"] from`
      ],
      mid: [
        `a $["lengthy", "distant", "considerable"] ride from`,
        `$["a one week ride", "over one week", "beyond a week's journey", "two weeks"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 40
      },
      'hamlet': {
        close: 60,
        mid: 30
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 50
      },
      'large township': {
        close: 30,
        mid: 50
      }
    }
  },
  {
    name: `Finder's Wharf`,
    type: `small city`,
    region: `coastal Bosen`,
    location: `scattered beyond the docks and tethered along the coasts of Bosen`,
    prepositions: [
      `the $["floating", "seabound", "tropical"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["a long day's boatride", "two days by boat"] from`
      ],
      mid: [
        `a week by ship from`,
        `$["six", "seven", "eight", "nine"] days' journey from`,
        `a $["windy", "warm", "convenient"] sail from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 10,
        mid: 30
      },
      'hamlet': {
        close: 30,
        mid: 30
      },
      'village': {
        close: 30,
        mid: 30
      },
      'small town': {
        close: 30,
        mid: 40
      },
      'large township': {
        close: 20,
        mid: 40
      }
    }
  },
  {
    name: `The Forklands`,
    type: `large township`,
    region: `New Scorth`,
    location: `within the borderlands between the Djenndan Protectorate, New Scorth, and Valadagal`,
    prepositions: [
      `the $["barren", "razed", "contentious"] township of`
    ],

    rangeDescriptions: {
      close: [
        `$["three days", "four days", "five days"] $["by buffalo", "by bison", "by horse", "by mount"] from`
      ],
      mid: [
        `a fortnight by $["buffalo", "bison", "horse", "mount"] from`,
        `$["one week's", "over a week's", "two weeks'"] $["trek", "journey", "ride"] from`,
        `a $["lonely", "cursed", "considerable"] distance from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 40
      },
      'hamlet': {
        close: 30,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 30
      }
    }
  },
  {
    name: `Galtiere`,
    type: `large township`,
    region: `Delonian Hinn`,
    location: `in the Delonian river gorges, where the Deloni splits in two directions`,
    prepositions: [
      `the $["ancestral", "noble", "tall shale"] township of`
    ],

    rangeDescriptions: {
      close: [
        `$["a long day's", "two days'"] $["journey", "ride", "boatride"] from`
      ],
      mid: [
        `$["one week's", "over a week's", "two weeks'"] $["boatride", "journey", "ride"] from`,
        `$["a ten", "an eleven", "a twelve", "a nine"]-day $["journey", "ride", "boatride"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 10,
        mid: 50
      },
      'hamlet': {
        close: 30,
        mid: 50
      },
      'village': {
        close: 30,
        mid: 50
      },
      'small town': {
        close: 30,
        mid: 50
      }
    }
  },
  {
    name: `Gladesh`,
    type: `large township`,
    region: `the Brolean Expanse`,
    location: `among the pristine ancient ruins at the edge of the great forests of the Brolean Expanse`,
    prepositions: [
      `the $["forested", "old", "overrun"] township of`
    ],

    rangeDescriptions: {
      close: [
        `$["a long day", "a covered forest journey", "two days"] by horse from`
      ],
      mid: [
        `a fortnight by horse from`,
        `$["six", "seven", "eight", "nine"] days' ride from`,
        `a $["twisting", "wild", "long"] woodland journey from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 50
      },
      'hamlet': {
        close: 30,
        mid: 50
      },
      'village': {
        close: 40,
        mid: 50
      },
      'small town': {
        close: 30,
        mid: 40
      }
    }
  },
  {
    name: `Heksaag`,
    type: `village`,
    region: `the Djenndan Protectorate`,
    location: `at the apex of the foothills of the Djenndan Protectorate`,
    prepositions: [
      `the $["Ranakda", "welcoming", "northern"] village of`
    ],

    rangeDescriptions: {
      close: [
        `$["two days", "three days", "four days"] by $["horse", "bison", "mount"] from`
      ],
      mid: [
        `a fortnight by $["horse", "bison", "mount"] from`,
        `$["ten", "eleven", "eight", "nine"] days' journey through the Saltlands from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 20
      },
      'hamlet': {
        close: 50,
        mid: 20
      }
    }
  },
  {
    name: `Jelekron`,
    type: `village`,
    region: `coastal Bosen`,
    location: `adjacent to the jagged cliffs and bluffs that overlook the great reefs of coastal Bosen`,
    prepositions: [
      `the $["sequestered", "fishing", "historic"] village of`
    ],

    rangeDescriptions: {
      close: [
        `$["a day's", "two days'"] sail from`
      ],
      mid: [
        `a week by ship from`,
        `$["six", "seven", "eight", "nine"] days' journey by boat from`,
        `a $["rocky", "choppy", "turbulent"] jaunt over water from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 30
      }
    }
  },
  {
    name: `Kriidar`,
    type: `large city`,
    region: `Plenith South`,
    location: `in the dense rainforests between Greenlook River and the Jodhra Ocean in Plenith`,
    prepositions: [
      `the $["warm city,", "humid city of", "the city of the Gazta,"]`
    ],

    rangeDescriptions: {
      close: [
        `$["several days'", "five days'"] $["journey", "trek", "hike"] from`
      ],
      mid: [
        `a considerable distance from`,
        `a $["journey", "trek", "hike"] of $["twelve days", "thirteen days", "two weeks", "fourteen days", "sixteen days"] from`,
        `a $["difficult and perilous", "meandering", "harsh and confusing"] $["journey", "trek", "hike"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 50
      },
      'hamlet': {
        close: 30,
        mid: 40
      },
      'village': {
        close: 30,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 50
      },
      'large township': {
        close: 30,
        mid: 50
      },
      'small city' : {
        close: 30,
        mid: 50
      }
    }
  },
  {
    name: `Lirkammer`,
    type: `small city`,
    region: `Siadagal`,
    location: `at the center of the commerce exchange in the rolling fields of Siadagal`,
    prepositions: [
      `the $["merchant", "bustling", "Opportune"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["a few days along the road", "a four day trip by horse"] from`
      ],
      mid: [
        `a fortnight by $["carriage", "caravan", "mount"] from`,
        `a $["weeks long", "week long", "two week"] $["journey", "excursion", "drive", "ride"] from`,
        `a $["tedious", "winding road", "wide open"] $["journey", "excursion", "drive", "ride"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 40
      },
      'hamlet': {
        close: 60,
        mid: 30
      },
      'village': {
        close: 50,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 50
      },
      'large township': {
        close: 20,
        mid: 70
      }
    }
  },
  {
    name: `Lirrus`,
    type: `large city`,
    region: `the Brolean Expanse`,
    location: `in the foliage and flowers at the edge of the Pinerush Gates at the farthest point of the Brolean Expanse`,
    prepositions: [
      `the $["far city", "Gem of the Gates,", "city under Borgas Hill,"]`
    ],

    rangeDescriptions: {
      close: [
        `$["a long day's", "two days'"] ride from`
      ],
      mid: [
        `a month by $["caravan", "horse", "mount"] from`,
        `$["six", "seven", "eight", "nine"] weeks' journey from`,
        `$["a long and painful", "an extended", "a perilous"] $["trek", "journey", "expedition", "caravan"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 50
      },
      'hamlet': {
        close: 30,
        mid: 50
      },
      'village': {
        close: 30,
        mid: 40
      },
      'small town': {
        close: 20,
        mid: 20
      },
      'large township': {
        close: 10,
        mid: 10
      },
      'small city' : {
        close: 10,
        mid: 10
      }
    }
  },
  {
    name: `Mahrkonat`,
    type: `large city`,
    region: `central Bosen`,
    closestRegion: `Reviak Proper`,
    location: `atop the rocky plateus north of the Pale Spires at the mouth of the Balendian Channel`,
    prepositions: [
      `the $["Bosenite", "mountain", "gleaming"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["a two-day", "a three-day", "a four-day"] $["journey", "trek", "ride"] away from`
      ],
      mid: [
        `$["six", "seven", "eight", "nine"] days' journey from`,
        `a $["dangerous mountainside", "challenging mountainous", "perilous and distant"] $["journey", "trek", "ride"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 20
      },
      'hamlet': {
        close: 30,
        mid: 20
      },
      'village': {
        close: 40,
        mid: 30
      },
      'small town': {
        close: 40,
        mid: 30
      },
      'large township': {
        close: 30,
        mid: 20
      },
      'small city' : {
        close: 30,
        mid: 20
      }
    }
  },
    {
    name: `Meiartu'uv`,
    type: `village`,
    region: `New Voland`,
    location: `atop the karst topography amid the green wetlands of New Voland`,
    prepositions: [
      `the $["village of power,", "village of magic,", "village of the pools,"]`
    ],

    rangeDescriptions: {
      close: [
        `$["a few days", "two days'"] by $["horse", "goat", "mount"] from`
      ],
      mid: [
        `a fortnight by $["horse", "goat", "mount"] from`,
        `$["six", "seven", "eight", "nine"] days by $["horse", "goat", "mount"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 60
      },
      'hamlet': {
        close: 60,
        mid: 30
      }
    }
  },
  {
    name: `Minnevikaro`,
    type: `small city`,
    region: `the Weyell Groves`,
    location: `in the calm and temperate south of the Weyell Groves`,
    prepositions: [
      `the $["arena", "great", "old"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["three days'", "four days'", "five days'"] ride from`
      ],
      mid: [
        `$["several weeks", "over a month away", "nine weeks"] from`,
        `$["a long and difficult to navigate", "an isolated and lengthy", "quite a distant"] journey from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 40,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 40
      },
      'large township': {
        close: 20,
        mid: 40
      }
    }
  },
  {
    name: `Pale Point`,
    type: `small town`,
    region: `Plenith South`,
    location: `at the coast of the glimmering blue waters of Plenith South`,
    prepositions: [
      `the $["quaint", "sun-swept", "beachfront"] town of`
    ],

    rangeDescriptions: {
      close: [
        `$["a few days'", "four days'"] hike from`,
        `a $["short", "quick afternoon"] sail from`
      ],
      mid: [
        `a week by ship from`,
        `$["ten", "eleven", "eight", "nine"] days' journey from`,
        `a $["breathtaking", "rainy", "tropical"] journey from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 50,
        mid: 50
      },
      'hamlet': {
        close: 50,
        mid: 50
      },
      'village': {
        close: 50,
        mid: 50
      }
    }
  },
  {
    name: `Pelmora`,
    type: `small city`,
    region: `the Weyell North`,
    location: `at the edge of the Northern Pass near the treeline of the Weyell North`,
    prepositions: [
      `the $["City of Embers,", "evergreen city of", "Royal city of"]`
    ],

    rangeDescriptions: {
      close: [
        `$["several days", "less than a week"] away from`,
        `a few days by horse from`
      ],
      mid: [
        `a fortnight by horse from`,
        `$["six", "seven", "eight", "nine"] days' journey from`,
        `a $["cold", "snowy", "rocky"] distance from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 30
      },
      'hamlet': {
        close: 30,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 20,
        mid: 20
      },
      'large township': {
        close: 30,
        mid: 30
      }
    }
  },
  {
    name: `Polek`,
    type: `large township`,
    region: `Reviak Proper`,
    location: `atop the rocky plateaus of Western Reviak`,
    prepositions: [
      `the $["Quivering Tower,", "catacomb city,", "overcast city of"]`
    ],

    rangeDescriptions: {
      close: [
        `$["a short distance", "a few days", "several days'"] $["by horse", "by goat", "by dog", "by mount", "by caravan"] from`
      ],
      mid: [
        `a fortnight through the hills away from`,
        `$["two weeks", "over two weeks", "a fortnight"] away from`,
        `$["a manageable", "a hilly", "an overland"] $["trek", "journey", "excursion"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 10
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 40
      }
    }
  },
  {
    name: `Raelian`,
    type: `large city`,
    region: `the Ommultic Front`,
    location: `high among the mountains and among the grand Torlish relics of the Ommultic Front`,
    prepositions: [
      `the $["great", "old-world", "marvelous"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["several days", "a week", "ten days"] $["by horse", "by goat", "by dog", "by buffalo", "by caravan"] from`
      ],
      mid: [
        `a fortnight $["by horse", "by goat", "by dog", "by buffalo", "by caravan"] from`,
        `$["six", "seven", "eight", "nine"] weeks' journey from`,
        `$["a perilous", "an outstretched", "a wild and dangerous"] distance from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 20
      },
      'hamlet': {
        close: 50,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 40
      },
      'large township': {
        close: 20,
        mid: 40
      },
      'small city' : {
        close: 10,
        mid: 40
      }
    }
  },
  {
    name: `Rendalenn`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the remote regions between the mountains and Rendal's Wall in the northwest of the Djenndan Protectorate`,
    prepositions: [
      `the $["northern", "far-off", "gateway"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["six", "seven", "eight", "nine"] days by $["horse", "goat", "dog", "buffalo", "caravan"] from`
      ],
      mid: [
        `$["six", "seven", "eight", "nine"] weeks by $["horse", "goat", "dog", "buffalo", "caravan"] from`,
        `$["a six", "a seven", "a eight", "a nine"] week $["journey", "trek", "excursion", "distance"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 20,
        mid: 40
      },
      'large township': {
        close: 20,
        mid: 40
      }
    }
  },
  {
    name: `Reviak City`,
    type: `large city`,
    region: `Reviak Proper`,
    location: `in the fertile and warm towers along the plateaus of Reviak Proper`,
    prepositions: [
      `the $["Bronze City,", "gilded populous of", "provincial capital,"]`
    ],

    rangeDescriptions: {
      close: [
        `$["two", "three", "four", "five"] days by $["horse", "goat", "dog", "mount", "caravan"] from`
      ],
      mid: [
        `a fortnight by $["horse", "goat", "dog", "mount", "caravan"] from`,
        `$["two", "three", "four"] weeks' $["journey", "trek", "expedition"] from`,
        `a $["difficult", "well traveled", "considerable"] $["journey", "trek", "distance"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 40
      },
      'hamlet': {
        close: 50,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 40
      },
      'large township': {
        close: 20,
        mid: 40
      },
      'small city' : {
        close: 10,
        mid: 40
      }
    }
  },
  {
    name: `Sar du Plagg`,
    type: `large city`,
    region: `the forests of Creona`,
    location: `at the water's edge of the vasts forests of southern Creona`,
    prepositions: [
      `the $["port", "sprawling", "shipyard"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["two", "three", "four"] days $["by boat", "over water", "inland", "by mount", "by caravan"] from`
      ],
      mid: [
        `a week by ship from`,
        `$["nine", "eight", "ten", "eleven"] days $["by ship", "by boat", "by mount", "by caravan"] from`,
        `a $["standard", "pleasant", "simple"] $["trek", "journey", "ship fare"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 50
      },
      'hamlet': {
        close: 20,
        mid: 50
      },
      'village': {
        close: 30,
        mid: 50
      },
      'small town': {
        close: 40,
        mid: 50
      },
      'large township': {
        close: 50,
        mid: 40
      },
      'small city' : {
        close: 60,
        mid: 30
      }
    }
  },
  {
    name: `Torvv`,
    type: `large city`,
    region: `New Voland`,
    location: `stretching across the great redbark forests of central New Voland`,
    prepositions: [
      `the $["impressive", "unique", "elaborate"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["two", "three", "four", "five"] days $["by horse", "by goat", "by dog", "by mount", "by caravan"] from`
      ],
      mid: [
        `a fortnight by goat from`,
        `a $["two", "three", "four"] week $["journey", "expedition", "trailwalk", "trek", "caravan"] from`,
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 30
      },
      'hamlet': {
        close: 40,
        mid: 30
      },
      'village': {
        close: 50,
        mid: 30
      },
      'small town': {
        close: 50,
        mid: 40
      },
      'large township': {
        close: 40,
        mid: 30
      },
      'small city' : {
        close: 30,
        mid: 20
      }
    }
  },
  {
    name: `Veilin`,
    type: `small city`,
    region: `Mainland Schelk`,
    location: `in the isolated central $["great oak", "elm", "maple", "birch", "aspen", "butternut", "beech", "hornwood", "mountain beam", "ash", "dogwood", "ironwood", "deciduous"] forests at the heart of mainland Schelk`,
    prepositions: [
      `the $["City of the Fox,", "great city of", "red city,"]`
    ],

    rangeDescriptions: {
      close: [
        `$["two", "three", "four"] days' $["ride", "journey", "distance", "crossing", "ramble"] from`
      ],
      mid: [
        `a week by $["horse", "caravan", "roadside", "carriage"] from`,
        `$["two", "three", "four"] weeks' $["ride", "journey", "distance", "crossing", "ramble"] from`,
        `a $["long and winding", "difficult forest", "meandering and tedious"] $["ride", "journey", "distance", "crossing", "ramble"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 20,
        mid: 40
      },
      'hamlet': {
        close: 30,
        mid: 50
      },
      'village': {
        close: 30,
        mid: 60
      },
      'small town': {
        close: 30,
        mid: 60
      },
      'large township': {
        close: 60,
        mid: 20
      }
    }
  },
  {
    name: `Veragem`,
    type: `small city`,
    region: `the forests of Creona`,
    location: `nestled atop the great plateau northeast of The Rise in mainland Creona`,
    prepositions: [
      `the $["old", "Enthaadian", "Ohm'Veshi", "sacred"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["four", "five", "six", "seven"] days $["by horse", "by goat", "by dog", "by mount", "by caravan"] from`
      ],
      mid: [
        `a fortnight $["distance", "excursion"] from`,
        `$["two", "three", "four", "five"] weeks $["by horse", "by goat", "by dog", "by mount", "by caravan"] from`,
        `a $["poorly traveled", "lengthy", "considerable"] distance from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 40,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 50,
        mid: 40
      },
      'small town': {
        close: 30,
        mid: 40
      },
      'large township': {
        close: 30,
        mid: 40
      }
    }
  },
  {
    name: `Vor'umi`,
    type: `small city`,
    region: `Northern Valadagal`,
    location: `within the lush deserts and shaded oasis of Moghul Valadagal`,
    prepositions: [
      `the $["isolated", "dry", "expansive"] city of`
    ],

    rangeDescriptions: {
      close: [
        `a $["two", "three", "four", "five"]-day $["ride", "journey", "trek", "crossing", "excursion"] $["by camel", "by horse", "by goat"] from`
      ],
      mid: [
        `a fortnight by camel from`,
        `a $["two", "three", "four", "five"]-week $["ride", "journey", "trek", "crossing", "excursion"] $["by camel", "by horse", "by goat"] from`,
        `a $["dangerous", "lonely", "perilous"] $["ride", "journey", "excursion", "trek", "crossing"] away from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 50,
        mid: 20
      },
      'hamlet': {
        close: 20,
        mid: 40
      },
      'village': {
        close: 10,
        mid: 10
      },
      'small town': {
        close: 10,
        mid: 10
      },
      'large township': {
        close: 20,
        mid: 20
      }
    }
  },
  {
    name: `Vordigar`,
    type: `small city`,
    region: `New Scorth`,
    location: `far south of the forklands in the shadowed coniferous forests of New Scorth`,
    prepositions: [
      `the $["ais'lun", "old world", "ancient"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["four", "five", "six", "seven"] days' $["jaunt", "journey", "trek", "crossing", "procession"] from`
      ],
      mid: [
        `a $["two", "three", "four", "five"] week pilgrimage from`,
        `a $["distant", "considerable", "treacherous"] $["trek", "journey", "pilgrimage"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 40,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 40
      },
      'large township': {
        close: 40,
        mid: 40
      }
    }
  },
  {
    name: `Water's Edge`,
    type: `large township`,
    region: `Southwest Hinn`,
    location: `where the Deloni flows into the great Sea of Thrennum`,
    prepositions: [
      `the $["howling", "Delonian", "delta"] township of`
    ],

    rangeDescriptions: {
      close: [
        `$["a long day's", "three days'", "four days'", "five day's"] $["journey", "crossing", "excursion"] from`
      ],
      mid: [
        `a week by boat from`,
        `$["ten", "eleven", "eight", "nine"] days' $["journey", "crossing", "excursion"] from`,
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 40
      }
    }
  },
  {
    name: `Wirost`,
    type: `large city`,
    region: `Northern Valadagal`,
    location: `at the edge of the great desert of Valadagal where the Moghul clans remain`,
    prepositions: [
      `the $["jewel of the sands,", "ancestral city of", "ancient Torlish polis,"]`
    ],

    rangeDescriptions: {
      close: [
        `a $["four", "five", "six", "seven"] day long $["ride", "journey", "trek", "crossing", "excursion"] $["by camel", "by goat"] from`
      ],
      mid: [
        `a fortnight by camel from`,
        `$["two", "three", "four", "five"] week long $["ride", "journey", "trek", "crossing", "excursion"] $["by camel", "by goat"] from`,
        `a $["perilous", "scorching and dangerous", "deplorable"] distance from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 50
      },
      'hamlet': {
        close: 40,
        mid: 50
      },
      'village': {
        close: 50,
        mid: 50
      },
      'small town': {
        close: 40,
        mid: 50
      },
      'large township': {
        close: 40,
        mid: 50
      },
      'small city' : {
        close: 40,
        mid: 50
      }
    }
  },
  {
    name: `Xiapitis`,
    type: `large township`,
    region: `Southwest Hinn`,
    location: `in the rainy and immense greatwood forests among the viantu clanships of southern Hinn`,
    prepositions: [
      `the $["canopied", "treetop", "misty"] township of`
    ],

    rangeDescriptions: {
      close: [
        `$["a", "a two", "a three", "a four"] day long $["journey", "trek", "hike", "climb"] from`
      ],
      mid: [
        `a fortnight's $["journey", "trek", "hike", "climb"] from`,
        `$["a", "a two", "a three", "a four"] week long $["journey", "trek", "hike", "climb"] from`,
        `$["a considerable", "an appreciable", "a wandering, distant"] $["journey", "trek", "hike", "climb"] from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 30
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 40
      }
    }
  },
  {
    name: `Yivihalo`,
    type: `small city`,
    region: `the islands of Schelk`,
    location: `at the heart of the Schelk islander tradeway in the Sea of Thrennum`,
    prepositions: [
      `the $["island", "paradise", "hardworking"] city of`
    ],

    rangeDescriptions: {
      close: [
        `$["four", "five", "six", "seven"] day long $["ride", "journey", "trek", "crossing", "excursion"] $["by boat", "by ship", "by schooner", "by barge"] from`
      ],
      mid: [
        `a fortnight by ship from`,
        `$["a", "a two", "a three", "a four"] week long $["ride", "journey", "trek", "crossing", "excursion"] $["by boat", "by ship", "by schooner", "by barge"] from`,
        `a $["stormy", "warm ocean", "boat"] $["ride", "journey", "trek", "crossing", "excursion"] away from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 30,
        mid: 30
      },
      'hamlet': {
        close: 40,
        mid: 40
      },
      'village': {
        close: 40,
        mid: 40
      },
      'small town': {
        close: 40,
        mid: 40
      },
      'large township': {
        close: 40,
        mid: 40
      }
    }
  },
  {
    name: `Ad'tai`,
    type: `village`,
    region: `the Northern Wilds`,
    location: `far north of Weyell in the Kimenian freecamps of the Northern Wilds`,
    prepositions: [
      `the $["labor", "sacred", "snow covered"] village of`
    ],

    rangeDescriptions: {
      close: [
        `$["a long day's", "two days'"] ride from`
      ],
      mid: [
        `a fortnight by horse from`,
        `$["six", "seven", "eight", "nine"] days' journey from`,
        `a $["harrowing", "lengthy", "distant"] trek from`
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 40,
        mid: 40
      },
      'hamlet': {
        close: 40,
        mid: 40
      }
    }
  }
  
]