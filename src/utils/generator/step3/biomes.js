/*
    How this fits into the layout:

    [CHARACTER NAME] [VERB/SETTLEMENT PREPOSITION] [SETTLEMENT] [BIOME PREPOSITION] [BIOME] [PROVINCE PREPOSITION] [PROVINCE]

    Example 1: [Kiskuja] [grew up in a] [hamlet] [deep within the] [spruce forests] [north of] [the Ommultic Front]
    Example 2: [Sairdunel] [hails from a] [large city] [along the] [rainy coasts] [of] [Siadagal]
    
    NOTE:
      -- Biomes are organized by province as noted with comment lines for ease of coding.
      -- Biome prepositions are organized by settlement type.
*/



// TODO: finish dividing biome prepositions by settlement type: 'location', 'group', 'nomadic', and 'neutral'

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
                'that journies through the'
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
            group: [

            ],
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
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'in the heart of the',
        //     'cloistered on the',
        //     'sprawling throughout the',
        //     'isolated on the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'grassy hills': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'within the densely settled',
        //     'resting upon the',
        //     'situated within the',
        //     'in the sparse and distant'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Brolean Expanse ---*/
    'temperate rainforests': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: []
        },
        // [
        //     'among the',
        //     'hidden within the',
        //     'in the great canopies of the',
        //     'cresting the thickets of the'
        // ],
        provincePrepositions: [
            'of'
        ]
    },
    'woodlands': {
        biomePrepositions: [
            'concealed among the',
            'bordering the bleak',
            'within the dark',
            'above the shadowed'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'fen glades': {
        biomePrepositions: [
            'protected within the',
            'among the life-giving',
            'in the center of the dazzling',
            'in the blissful'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Delonian Hinn ---*/
    'deep forest riverlands': {
        biomePrepositions: [
            'within the',
            'bordering the',
            'adjacent to the',
            'on the waterside coasts of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'meadowlands': {
        biomePrepositions: [
            'in the',
            'overlooking the',
            'beyond the',
            'in the central'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'mossy shale valleys': {
        biomePrepositions: [
            'perched on the',
            'beneath the',
            'overlooking the',
            'in the heart of the',
            'beyond the waterfalls of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- New Scorth ---*/
    'craggy northlands': {
        biomePrepositions: [
            'among the',
            'peering out over the',
            'overlooking the',
            'seated in the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'central farmlands': {
        biomePrepositions: [
            'across the',
            'amid the',
            'fostered within the',
            'at the midway of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'southern wetlands': {
        biomePrepositions: [
            'planted in the',
            'emerging from the',
            'flourishing within the',
            `at the water's edge in the`
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Weyell North ---*/
    'northern temperate hills': {
        biomePrepositions: [
            'resting on the',
            'on the',
            'warming the',
            'prominent among the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
    'forest groves': {
        biomePrepositions: [
            'nestled among the',
            'wandering through the',
            'deep within the',
            'high among the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
    'lakelands': {
        biomePrepositions: [
            'down among the',
            'at the shores of the',
            'overlooking the',
            'nigh the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
/*--- Northern Valadagal ---*/
    'cloudless hot deserts': {
        biomePrepositions: [
            'in the dusty and',
            'centered in the',
            'in the wild,',
            'isolated within the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'lush southern dunes': {
        biomePrepositions: [
            'amid the',
            'cresting the',
            'overlooking the',
            'isolated on the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'clay fields': {
        biomePrepositions: [
            'wading through the',
            'deep within the',
            'atop the',
            'across the fiery'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Mainland Schelk ---*/
    'warm woodlands': {
        biomePrepositions: [
            'basking in the',
            'inheriting the',
            'among the privileged',
            'casting among the nobles of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'overcast gardens': {
        biomePrepositions: [
            'branching from the',
            'in the shadow of the',
            'amid the outstretched',
            'blooming within the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'rice paddies': {
        biomePrepositions: [
            'standing among the',
            'overlooking the',
            'sequestered within the',
            'soaking in the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- New Voland ---*/
    'redwoods': {
        biomePrepositions: [
            'beneath the',
            'hanging from the',
            'shadowed by the',
            'carved from the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'hilly expanses': {
        biomePrepositions: [
            'embedded in the',
            'resting on the',
            'overlooking the',
            'draped across the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'mild shrublands': {
        biomePrepositions: [
            'situated among the',
            'standing above the',
            'gathered within the',
            'resting atop the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Djenndan Protectorate ---*/
    'wide plains and foothills': {
        biomePrepositions: [
            'standing upon the',
            'fortified within the',
            'isolated upon the',
            'situated between the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'temperate steppes': {
        biomePrepositions: [
            'resting on the',
            'bound to the',
            'emerging from the',
            'blessed by the gods of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'farmlands': {
        biomePrepositions: [
            'resolved to the',
            'overseeing the',
            'oathbound to the',
            'neighboring the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- coastal Bosen ---*/
    'olive forests': {
        biomePrepositions: [
            'among the',
            'next to the',
            'overlooking the',
            'vital to the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'nut groves': {
        biomePrepositions: [
            'centered within the',
            'ritually dependent on the',
            'opposite the',
            'shaped by the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'mild coastlands': {
        biomePrepositions: [
            'along the',
            'of fishing communities on the',
            'heritage community of the',
            'isolated upon'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'balmy seas': {
        biomePrepositions: [
            'afloat on the',
            'among the coastal docks of the',
            'looking out across the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Siadagal ---*/
    'lush farmlands': {
        biomePrepositions: [
            'in the',
            'central to the',
            'in the hills above the',
            'among the lesser known'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'fields': {
        biomePrepositions: [
            'on the',
            'beyond the',
            'above the',
            'planted in the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'rainy coasts': {
        biomePrepositions: [
            'on the',
            'under the',
            'whisping across the',
            'in the caves of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'summer storms': {
        biomePrepositions: [
            'emerging from the',
            'central to the',
            'at the evocation of the',
            'beyond the clearings of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the forests of Creona ---*/
    'stormy woodlands': {
        biomePrepositions: [
            'in the overcast',
            'amid the',
            'beyond the',
            'in the sanctuary of the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
    'rocky coasts': {
        biomePrepositions: [
            'in the thickets of the',
            'beneath the plateaus near the',
            'at the heart of the',
            'in the central'
        ],
        provincePrepositions: [
            'among'
        ]
    },
    'lush river valleys': {
        biomePrepositions: [
            'in the isolated',
            'in the heartland',
            'nestled among the',
            'in the wet and'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Plenith South ---*/
    'tropical coasts and forests': {
        biomePrepositions: [
            'within the',
            'scorching among the',
            'nearby the',
            'resting among the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
    'rainforests': {
        biomePrepositions: [
            'lost within the',
            'north of the',
            'peering out from the',
            'vital to the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'palm fields': {
        biomePrepositions: [
            'sprawling out among the',
            'overlooking',
            'basking in the',
            'emerging from the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Reviak Proper ---*/
    'steppes': {
        biomePrepositions: [
            'across the',
            'beyond the',
            'overlooking the',
            'enduring on the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'flatlands': {
        biomePrepositions: [
            'planted in the center of the',
            'central within the',
            'where outlaws rule the',
            'boldly rising from the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'lightning stormlands': {
        biomePrepositions: [
            'within the most holy',
            'which is protected within the',
            'overlooking the',
            'isolated within the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'sandy plains': {
        biomePrepositions: [
            'captured on the',
            'west of the',
            'beneath the Joza trees in the',
            'beyond the dunes in the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Weyell Groves ---*/
    'temperate wetlands': {
        biomePrepositions: [
            'among the',
            'planted in the',
            'safely within the',
            'prospering in the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
    'pine thrushes': {
        biomePrepositions: [
            'amid the',
            'in the heart of the',
            'among the greater peoples of the',
            'beneath the winds among the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
    'swamps': {
        biomePrepositions: [
            'standing in the',
            'just beyond the',
            'in the harvest soil',
            'in the bogs and'
        ],
        provincePrepositions: [
            'southeast of'
        ]
    },
    'mangroves': {
        biomePrepositions: [
            'within the enchanting',
            'shaped by the waterlogged',
            'among the sunkissed',
            'withdrawn beyond the'
        ],
        provincePrepositions: [
            'in'
        ]
    },
/*--- southwest Hinn ---*/
    'coastal wetlands': {
        biomePrepositions: [
            'at the margins of the',
            'among the harbors of the',
            'bordering the standing waters in the',
            'among the seasonal fields of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'southern flatlands': {
        biomePrepositions: [
            'across the',
            'bound within the clay-rich',
            'south of the hills near the',
            'at the edge of the salted fields in the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'eastern borderlands': {
        biomePrepositions: [
            'along the Marendian channel in the',
            'north of Dhentin in the',
            'overlooking the',
            'beneath the plateaued forests of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Schelk Islands ---*/
    'warm inlets': {
        biomePrepositions: [
            'basking in the',
            'near the',
            'overlooking the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'volcanic crags': {
        biomePrepositions: [
            'embedded in the',
            'fortified atop the',
            'dependent on the',
            'sequestered within the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'coral reefs': {
        biomePrepositions: [
            'adjacent to the',
            'looking out over the',
            'dependent on the',
            'in symbiosis with the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'sandy beaches': {
        biomePrepositions: [
            'resting on the',
            'central to the',
            'on the flat and',
            'which emerged from a lasting pirate presence on the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- Central Bosen ---*/
    'rocky highlands': {
        biomePrepositions: [
            'atop the',
            'at the summit of the',
            'in the middlemost settlements of the',
            'elevated among the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'river valleys': {
        biomePrepositions: [
            'deep within the',
            'looking out over the',
            'in the winding',
            'beyond the',
            'among the caves and'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'terraced vine fields': {
        biomePrepositions: [
            'twisting through the',
            'climbing above the',
            'nestled in the',
            'isolated among the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Northern Wilds ---*/
    'icy steppes': {
        biomePrepositions: [
            'in the distant',
            'east of Ember in the',
            'beyond the wastelands and',
            'at the edge of the'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'extreme hills': {
        biomePrepositions: [
            'among the',
            'at the standing stones south of the',
            'consisting of subterranean dwellings in the',
            'isolated in the high altitude and'
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'frozen forests': {
        biomePrepositions: [
            'hidden within the',
            'in the hot wellsprings of the',
            'at the edge of the',
        ],
        provincePrepositions: [
            'of'
        ]
    },
    'wastelands': {
        biomePrepositions: [
            'in the',
            'near the eastern',
            'south of the',
            'isolated from the'
        ],
        provincePrepositions: [
            'of'
        ]
    }
}