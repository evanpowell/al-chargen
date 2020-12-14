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
      `the $['ancestral', 'hospitable', 'looming'] township of`
    ],

    rangeDescriptions: {
      // unique expressions for the distance from character's settlement to the notable settlement
      // Example: "three days along the main roads to", "a fortnight by camel from"
      close: [
        `$["a long day's", "two days'"] ride from`
      ],
      mid: [
        `a fortnight by horse from`,
        `$['six', 'seven', 'eight', 'nine'] days' journey from`
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
      `the impressive port city of`,
      `the port city of`
    ],
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Bright Reach`,
    type: `small city`,
    region: `Southwest Hinn`,
    location: `along the Balendian channel inside the peninsula of Hinn`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Burunu`,
    type: `small city`,
    region: `Southwest Hinn`,
    location: `on the tropical Isle of Undan off the coast of mainland Hinn`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `The Central Corridor`,
    type: `large township`,
    region: `the Djenndan Protectorate`,
    location: `in the large glacial valley across the center of the Djenndan Protectorate`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Cho Kassal`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the vast township of Deridian Standing, west of the bogs near the Central Corridor in the Djenndan Protectorate`,
    prepositions: [
      `the city of peat, `
    ],
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Cyopolda`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the forested and rocky hills of the northern Djenndan Protectorate`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Dhentin`,
    type: `small city`,
    region: `Reviak Proper`,
    location: `along Reviak's flatland coasts on the mainland of the Balendian Channel`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Dragonsands`,
    type: `small town`,
    region: `Northern Valadagal`,
    location: `deep within the deserts and dunes of Valadagal`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Drynnia`,
    type: `small town`,
    region: `Delonian Hinn`,
    location: `at the edge of the stormplains on the coasts of the Delonian Gulf in Hinn`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Dunaajii`,
    type: `large township`,
    region: `Central Wendajii`,
    location: `at the gateway to the Eastern pass within the grasslands of Central Wendajii`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Durdu'un`,
    type: `small city`,
    region: `New Voland`,
    location: `among the temperate forests east of the grand mountains of New Voland`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Finder's Wharf`,
    type: `small city`,
    region: `coastal Bosen`,
    location: `scattered beyond the docks and tethered along the coasts of Bosen`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `The Forklands`,
    type: `large township`,
    region: `New Scorth`,
    location: `within the borderlands between the Djenndan Protectorate, New Scorth, and Valadagal`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Galtiere`,
    type: `large township`,
    region: `Delonian Hinn`,
    location: `in the Delonian river gorges, where the Deloni splits in two directions`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Gladesh`,
    type: `large township`,
    region: `the Brolean Expanse`,
    location: `among the pristine ancient ruins at the edge of the great forests of the Brolean Expanse`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Heksaag`,
    type: `village`,
    region: `the Djenndan Protectorate`,
    location: `at the apex of the foothills of the Djenndan Protectorate`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Jelekron`,
    type: `village`,
    region: `coastal Bosen`,
    location: `adjacent to the jagged cliffs and bluffs that overlook the great reefs of coastal Bosen`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Kriidar`,
    type: `large city`,
    region: `Plenith South`,
    location: `in the dense rainforests between Greenlook River and the Jodhra Ocean in Plenith`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Lirkammer`,
    type: `small city`,
    region: `Siadagal`,
    location: `at the center of the commerce exchange in the rolling fields of Siadagal`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Lirrus`,
    type: `large city`,
    region: `the Brolean Expanse`,
    location: `in the foliage and flowers at the edge of the Pinerush Gates at the farthest point of the Brolean Expanse`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Mahrkonat`,
    type: `large city`,
    region: `central Bosen`,
    closestRegion: `Reviak Proper`,
    location: `atop the rocky plateus north of the Pale Spires at the mouth of the Balendian Channel`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
    {
    name: `Meiartu'uv`,
    type: `village`,
    region: `New Voland`,
    location: `atop the karst topography amid the green wetlands of New Voland`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Minnevikaro`,
    type: `small city`,
    region: `the Weyell Groves`,
    location: `in the calm and temperate south of the Weyell Groves`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Pale Point`,
    type: `small town`,
    region: `Plenith South`,
    location: `at the coast of the glimmering blue waters of Plenith South`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Pelmora`,
    type: `small city`,
    region: `the Weyell North`,
    location: `at the edge of the Northern Pass near the treeline of the Weyell North`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Polek`,
    type: `large township`,
    region: `Reviak Proper`,
    location: `atop the rocky plateaus of Western Reviak`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Raelian`,
    type: `large city`,
    region: `the Ommultic Front`,
    location: `high among the mountains among the grand Torlish relics of the Ommultic Front`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Rendalenn`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the remote regions between the mountains and Rendal's Wall in the northwest of the Djenndan Protectorate`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Reviak City`,
    type: `large city`,
    region: `Reviak Proper`,
    location: `in the fertile and warm towers along the plateaus of Reviak Proper`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Sar du Plagg`,
    type: `large city`,
    region: `the forests of Creona`,
    location: `at the water's edge of the vasts forests of southern Creona`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Torvv`,
    type: `large city`,
    region: `New Voland`,
    location: `stretching across the great redbark forests of central New Voland`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Veilin`,
    type: `small city`,
    region: `Mainland Schelk`,
    location: `in the isolated central oak forests at the heart of mainland Schelk`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Veragem`,
    type: `small city`,
    region: `the forests of Creona`,
    location: `nestled atop the great plateau northeast of The Rise in mainland Creona`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Vor'umi`,
    type: `small city`,
    region: `Northern Valadagal`,
    location: `within the lush deserts and shaded oasis of Moghul Valadagal`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Vordigar City`,
    type: `small city`,
    region: `New Scorth`,
    location: `far south of the forklands in the shadowed coniferous forests of New Scorth`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Water's Edge`,
    type: `large township`,
    region: `Southwest Hinn`,
    location: `where the Deloni flows into the great Sea of Thrennum`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Wirost`,
    type: `large city`,
    region: `Northern Valadagal`,
    location: `at the edge of the great desert of Valadagal where the Moghul clans remain`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      },
      'small city' : {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Xiapitis`,
    type: `large township`,
    region: `Southwest Hinn`,
    location: `in the rainy and immense greatwood forests among the viantu clanships of southern Hinn`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Yivihalo`,
    type: `small city`,
    region: `the islands of Schelk`,
    location: `at the heart of the Schelk islander tradeway in the Sea of Thrennum`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      },
      'village': {
        close: 0,
        mid: 0
      },
      'small town': {
        close: 0,
        mid: 0
      },
      'large township': {
        close: 0,
        mid: 0
      }
    }
  },
  {
    name: `Ad'tai`,
    type: `village`,
    region: `the Northern Wilds`,
    location: `far north of Weyell in the Kimenian freecamps of the Northern Wilds`,
    rangeDescriptions: {
      close: [
        ``
      ],
      mid: [
        ``
      ]
    },
    rangeProbabilities: {
      'diasporic group': {
        close: 0,
        mid: 0
      },
      'hamlet': {
        close: 0,
        mid: 0
      }
    }
  }
  
]