/*
    How this fits into the layout:

    [CHARACTER NAME] [VERB/SETTLEMENT PREPOSITION] [SETTLEMENT] [BIOME PREPOSITION] [BIOME] [PROVINCE PREPOSITION] [PROVINCE]

    Example 1: [Kiskuja] [grew up in a] [hamlet] [deep within the] [spruce forests] [north of] [the Ommultic Front]
    Example 2: [Sairdunel] [hails from a] [large city] [along the] [rainy coasts] [of] [Siadagal]
    
    NOTE:
      -- Biomes are organized by province as noted with comment lines for ease of coding.
      -- Biome prepositions are organized by settlement type.
         *  Biome prepositions that work well for every settlement type are 'neutral'.
         *  Biome prepositions that work well for multiple settlement types but not all can be
            repeated for each settlement type they work for.
         *  As long as there are neutral biome prepositions, others types can be empty.
         *  If there are no neutral biome prepositions, then all other types must have at least
            one entry
*/



// TODO: Finish dividing biome prepositions by settlement type: 'location', 'group', 'nomadic', and 'neutral'.
//       (Move the commented out prepositions to their corresponding type)

export const biomes = {
/*--- the Ommultic Front ---*/
    'spruce forests': {
        biomePrepositions: {
            location: [
                'felled from the',
                'neighboring the',
                'in the clearings of the'
            ],
            group: [
                'among the',
            ],
            nomadic: [
                'that travels among the',
                'which traverses the',
                'that journies through the',
                'among the'
            ],
            neutral: [
                'nestled within the',
                'deep within the'
            ]
        },
        provincePrepositions: [
            'north of',
            'east of',
            'bordering Lost Lake in the north of',
            'west of'
        ]
    },
    'expansive tundra': {
        biomePrepositions: {
            location: [
                'centered within the',
                'overlooking the'
            ],
            group: [],
            nomadic: [
                'that travels over the',
            ],
            neutral: [
                'isolated on the',
                'among the ice fields of the',
            ]
        },
        provincePrepositions: [
            'north of',
            'beyond Lost Lake and north of',
            'beyond'
        ]
    },
    'cold lakefronts': {
        biomePrepositions: {
            location: [
                'overlooking the',
                'looking out over the',
            ],
            group: [
                'that has made its home along the'
            ],
            nomadic: [
                'that makes their way along the'
            ],
            neutral: [
                'on the Tanethi greatbarges of the'
            ]
        },
        provincePrepositions: [
            'nearby'
        ]
    },
/*--- central Wendajii ---*/
    'savannah grasslands': {
        biomePrepositions: {
            location: [
                'overlooking the',
                'within the lower oasis of the'
            ],
            group: [
                'within the lower oasis of the'
            ],
            nomadic: [
                'which wanders the'
            ],
            neutral: [
                'isolated on the',
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'rolling storm plains': {
        biomePrepositions: {
            location: [
                'in the heart of the',
                'cloistered on the'
            ],
            group: [
                'in the heart of the',
                'cloistered on the',
                'sprawling throughout the'
            ],
            nomadic: [
                'sprawling throughout the'
            ],
            neutral: [
                'isolated on the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'grassy hills': {
        biomePrepositions: {
            location: [
                'resting upon the',
                'situated within the'
            ],
            group: [
                'situated within the'
            ],
            nomadic: [
                'that travels across the'
            ],
            neutral: [
                'within the densely settled',
                'in the sparse and distant'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Brolean Expanse ---*/
    'temperate rainforests': {
        biomePrepositions: {
            location: [
                'in the great canopies of the',
                'cresting the thickets of the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'among the',
                'hidden within the',
                'within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'woodlands': {
        biomePrepositions: {
            location: [
                'concealed among the',
                'bordering the bleak'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'within the dark',
                'above the shadowed'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'fen glades': {
        biomePrepositions: {
            location: [
                'in the center of the dazzling'
            ],
            group: [
                'in the center of the dazzling'
            ],
            nomadic: [
                'that roams the'
            ],
            neutral: [
                'among the life-giving',
                'in the blissful'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- Delonian Hinn ---*/
    'deep forest riverlands': {
        biomePrepositions: {
            location: [
                'on the waterside coasts of the',
                'adjacent to the'
            ],
            group: [
                'on the waterside coasts of the'
            ],
            nomadic: [],
            neutral: [
                'within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'meadowlands': {
        biomePrepositions: {
            location: [
                'overlooking the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'in the',
                'beyond the',
                'in the central'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'mossy shale valleys': {
        biomePrepositions: {
            location: [
                'perched on the',
                'overlooking the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'beneath the',
                'in the heart of the',
                'beyond the waterfalls of the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- New Scorth ---*/
    'craggy northlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'among the',
        //     'peering out over the',
        //     'overlooking the',
        //     'seated in the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'central farmlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'across the',
        //     'amid the',
        //     'fostered within the',
        //     'at the midway of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'southern wetlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'planted in the',
        //     'emerging from the',
        //     'flourishing within the',
        //     `at the water's edge in the`
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Weyell North ---*/
    'northern temperate hills': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'resting on the',
        //     'on the',
        //     'warming the',
        //     'prominent among the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
    'forest groves': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'nestled among the',
        //     'wandering through the',
        //     'deep within the',
        //     'high among the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
    'lakelands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'down among the',
        //     'at the shores of the',
        //     'overlooking the',
        //     'nigh the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
/*--- Northern Valadagal ---*/
    'cloudless hot deserts': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the dusty and',
        //     'centered in the',
        //     'in the wild,',
        //     'isolated within the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'lush southern dunes': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'amid the',
        //     'cresting the',
        //     'overlooking the',
        //     'isolated on the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'clay fields': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'wading through the',
        //     'deep within the',
        //     'atop the',
        //     'across the fiery'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Mainland Schelk ---*/
    'warm woodlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'basking in the',
        //     'inheriting the',
        //     'among the privileged',
        //     'casting among the nobles of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'overcast gardens': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'branching from the',
        //     'in the shadow of the',
        //     'amid the outstretched',
        //     'blooming within the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'rice paddies': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'standing among the',
        //     'overlooking the',
        //     'sequestered within the',
        //     'soaking in the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- New Voland ---*/
    'redwoods': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'beneath the',
        //     'hanging from the',
        //     'shadowed by the',
        //     'carved from the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'hilly expanses': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'embedded in the',
        //     'resting on the',
        //     'overlooking the',
        //     'draped across the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'mild shrublands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'situated among the',
        //     'standing above the',
        //     'gathered within the',
        //     'resting atop the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Djenndan Protectorate ---*/
    'wide plains and foothills': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'standing upon the',
        //     'fortified within the',
        //     'isolated upon the',
        //     'situated between the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'temperate steppes': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'resting on the',
        //     'bound to the',
        //     'emerging from the',
        //     'blessed by the gods of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'farmlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'resolved to the',
        //     'overseeing the',
        //     'oathbound to the',
        //     'neighboring the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- coastal Bosen ---*/
    'olive forests': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'among the',
        //     'next to the',
        //     'overlooking the',
        //     'vital to the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'nut groves': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'centered within the',
        //     'ritually dependent on the',
        //     'opposite the',
        //     'shaped by the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'mild coastlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'along the',
        //     'of fishing communities on the',
        //     'heritage community of the',
        //     'isolated upon'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'balmy seas': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'afloat on the',
        //     'among the coastal docks of the',
        //     'looking out across the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Siadagal ---*/
    'lush farmlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the',
        //     'central to the',
        //     'in the hills above the',
        //     'among the lesser known'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'fields': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'on the',
        //     'beyond the',
        //     'above the',
        //     'planted in the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'rainy coasts': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'on the',
        //     'under the',
        //     'whisping across the',
        //     'in the caves of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'summer storms': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'emerging from the',
        //     'central to the',
        //     'at the evocation of the',
        //     'beyond the clearings of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the forests of Creona ---*/
    'stormy woodlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the overcast',
        //     'amid the',
        //     'beyond the',
        //     'in the sanctuary of the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
    'rocky coasts': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the thickets of the',
        //     'beneath the plateaus near the',
        //     'at the heart of the',
        //     'in the central'
        // ],
        provincePrepositions: [
            'among'
        ]
    },
    'lush river valleys': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the isolated',
        //     'in the heartland',
        //     'nestled among the',
        //     'in the wet and'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Plenith South ---*/
    'tropical coasts and forests': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'within the',
        //     'scorching among the',
        //     'nearby the',
        //     'resting among the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
    'rainforests': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'lost within the',
        //     'north of the',
        //     'peering out from the',
        //     'vital to the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'palm fields': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'sprawling out among the',
        //     'overlooking',
        //     'basking in the',
        //     'emerging from the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Reviak Proper ---*/
    'steppes': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'across the',
        //     'beyond the',
        //     'overlooking the',
        //     'enduring on the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'flatlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'planted in the center of the',
        //     'central within the',
        //     'where outlaws rule the',
        //     'boldly rising from the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'lightning stormlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'within the most holy',
        //     'which is protected within the',
        //     'overlooking the',
        //     'isolated within the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'sandy plains': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'captured on the',
        //     'west of the',
        //     'beneath the Joza trees in the',
        //     'beyond the dunes in the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Weyell Groves ---*/
    'temperate wetlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'among the',
        //     'planted in the',
        //     'safely within the',
        //     'prospering in the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
    'pine thrushes': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'amid the',
        //     'in the heart of the',
        //     'among the greater peoples of the',
        //     'beneath the winds among the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
    'swamps': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'standing in the',
        //     'just beyond the',
        //     'in the harvest soil',
        //     'in the bogs and'
        // ],
        provincePrepositions: [
            'southeast of'
        ]
    },
    'mangroves': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'within the enchanting',
        //     'shaped by the waterlogged',
        //     'among the sunkissed',
        //     'withdrawn beyond the'
        // ],
        provincePrepositions: [
            'in'
        ]
    },
/*--- southwest Hinn ---*/
    'coastal wetlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'at the margins of the',
        //     'among the harbors of the',
        //     'bordering the standing waters in the',
        //     'among the seasonal fields of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'southern flatlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'across the',
        //     'bound within the clay-rich',
        //     'south of the hills near the',
        //     'at the edge of the salted fields in the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'eastern borderlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'along the Marendian channel in the',
        //     'north of Dhentin in the',
        //     'overlooking the',
        //     'beneath the plateaued forests of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Schelk Islands ---*/
    'warm inlets': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'basking in the',
        //     'near the',
        //     'overlooking the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'volcanic crags': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'embedded in the',
        //     'fortified atop the',
        //     'dependent on the',
        //     'sequestered within the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'coral reefs': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'adjacent to the',
        //     'looking out over the',
        //     'dependent on the',
        //     'in symbiosis with the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'sandy beaches': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'resting on the',
        //     'central to the',
        //     'on the flat and',
        //     'which emerged from a lasting pirate presence on the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Central Bosen ---*/
    'rocky highlands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'atop the',
        //     'at the summit of the',
        //     'in the middlemost settlements of the',
        //     'elevated among the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'river valleys': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'deep within the',
        //     'looking out over the',
        //     'in the winding',
        //     'beyond the',
        //     'among the caves and'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'terraced vine fields': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'twisting through the',
        //     'climbing above the',
        //     'nestled in the',
        //     'isolated among the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Northern Wilds ---*/
    'icy steppes': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the distant',
        //     'east of Ember in the',
        //     'beyond the wastelands and',
        //     'at the edge of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'extreme hills': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'among the',
        //     'at the standing stones south of the',
        //     'consisting of subterranean dwellings in the',
        //     'isolated in the high altitude and'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'frozen forests': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'hidden within the',
        //     'in the hot wellsprings of the',
        //     'at the edge of the',
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'wastelands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the',
        //     'near the eastern',
        //     'south of the',
        //     'isolated from the'
        // ],
        provincePrepositions: [
            'of'
        ]
    }
}