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
            location: [
                'peering out over the',
                'overlooking the',
                'seated in the'
            ],
            group: [],
            nomadic: [
                'that journies through'
            ],
            neutral: [
                'among the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'central farmlands': {
        biomePrepositions: {
            location: [
                'at the midway of the'
            ],
            group: [
                'at the midway of the'
            ],
            nomadic: [],
            neutral: [
                'across the',
                'amid the',
                'fostered within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'southern wetlands': {
        biomePrepositions: {
            location: [
                'planted in the',
                `at the water's edge in the`
            ],
            group: [
                'planted in the',
                `at the water's edge in the`
            ],
            nomadic: [],
            neutral: [
                'flourishing with the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Weyell North ---*/
    'northern temperate hills': {
        biomePrepositions: {
            location: [
                'resting on the',
                'on the',
                'warming the'
            ],
            group: [
                'prominent among the'
            ],
            nomadic: [
                'prominent among the'
            ],
            neutral: []
        },
        provincePrepositions: [
            'in'
        ]
    },
    'forest groves': {
        biomePrepositions: {
            location: [
                'nestled among the',
                'high among the'
            ],
            group: [],
            nomadic: [
                'wandering through the'
            ],
            neutral: [
                'deep within the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
    'lakelands': {
        biomePrepositions: {
            location: [
                'at the shores of the',
                'overlooking the'
            ],
            group: [
                'at the shores of the'
            ],
            nomadic: [],
            neutral: [
                'down among the',
                'nigh the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
/*--- Northern Valadagal ---*/
    'cloudless hot deserts': {
        biomePrepositions: {
            location: [
                'centered in the'
            ],
            group: [
                'centered in the'
            ],
            nomadic: [],
            neutral: [
                'in the dusty and',
                'in the wild,',
                'isolated within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'lush southern dunes': {
        biomePrepositions: {
            location: [
                'cresting the',
                'overlooking the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'amid the',
                'isolated on the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'clay fields': {
        biomePrepositions: {
            location: [
                'atop the',
                'wading through the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'deep within the',
                'across the fiery'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- Mainland Schelk ---*/
    'warm woodlands': {
        biomePrepositions: {
            location: [
                'basking in the',
                'casting among the nobles of the'
            ],
            group: [
                'inheriting the'
            ],
            nomadic: [
                'inheriting the'
            ],
            neutral: [
                'among the privileged'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'overcast gardens': {
        biomePrepositions: {
            location: [
                'blooming within the',
                'branching from the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'amid the outstreched',
                'in the shadow of'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'rice paddies': {
        biomePrepositions: {
            location: [
                'standing among the',
                'overlooking the',
                'sequestered within the',
                'soaking in the'
            ],
            group: [
                'that lives among the'
            ],
            nomadic: [
                'that travels between the warm woodlands and the glistening'
            ],
            neutral: [
                'among the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- New Voland ---*/
    'redwoods': {
        biomePrepositions: {
            location: [
                'beneath the',
                'hanging from the',
                'shadowed by the',
                'carved from the'
            ],
            group: [
                'sequestered within the'
            ],
            nomadic: [],
            neutral: [
                'among the',
                'within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'hilly expanses': {
        biomePrepositions: {
            location: [
                'embedded in the',
                'resting on the the',
                'overlooking the',
                'draped across the'
            ],
            group: [
                'embedded in the'
            ],
            nomadic: [
                'that crosses the'
            ],
            neutral: []
        },
        provincePrepositions: [
            'of'
        ]
    },
    'mild shrublands': {
        biomePrepositions: {
            location: [
                'standing above the',
                'resting atop the'
            ],
            group: [
                'situated amont the'
            ],
            nomadic: [],
            neutral: [
                'situated among the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Djenndan Protectorate ---*/
    'wide plains and foothills': {
        biomePrepositions: {
            location: [
                'standing upon the',
                'fortified within the',
                'isolated upon the',
                'situated between the'
            ],
            group: [
                'situated between the'
            ],
            nomadic: [
                'that travels between the'
            ],
            neutral: [
                'among the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'temperate steppes': {
        biomePrepositions: {
            location: [
                'resting on the',
                'emerging from the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'bound to the',
                'blessed by the gods of the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'farmlands': {
        biomePrepositions: {
            location: [
                'resolved to the',
            ],
            group: [
                'resolved to the',
                
            ],
            nomadic: [],
            neutral: [
                'overseeing the',
                'oathbound to the',
                'neighboring the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- coastal Bosen ---*/
    'olive forests': {
        biomePrepositions: {
            location: [
                'vital to the',
                'overlooking the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'among the',
                'next to the',
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'nut groves': {
        biomePrepositions: {
            location: [
                'centered within the',
                'shaped by the'
            ],
            group: [
                'centered within the'
            ],
            nomadic: [
                'that travels between the coastlands and the'
            ],
            neutral: [
                'ritually dependent on the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'mild coastlands': {
        biomePrepositions: {
            location: [
                'heritage community of the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'along the',
                'isolated upon',
                'of fishing communities'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'balmy seas': {
        biomePrepositions: {
            location: [
                'afloat on the',
                'among the coastal docks of the',
                'looking out across the',
            ],
            group: [
                'among the coastal docks of the'
            ],
            nomadic: [
                'that sails the',
            ],
            neutral: []
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- Siadagal ---*/
    'lush farmlands': {
        biomePrepositions: {
            location: [
                'central to the',
            ],
            group: [],
            nomadic: [],
            neutral: [
                'in the',
                'in the hills above the',
                'among the lesser known'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'fields': {
        biomePrepositions: {
            location: [
                'on the',
                'above the',
                'planted in the'
            ],
            group: [
                'planted in the'
            ],
            nomadic: [
                'ranging across the eastern'
            ],
            neutral: []
        },
        provincePrepositions: [
            'of'
        ]
    },
    'rainy coasts': {
        biomePrepositions: {
            location: [
                'on the',
                'under the',
                'in the caves of the'
            ],
            group: [
                'in the caves of the'
            ],
            nomadic: [],
            neutral: [
                'whisping across the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'summer storms': {
        biomePrepositions: {
            location: [
                'emerging from the',
                'central to the',
                'at the evocation of the'
            ],
            group: [
                'central to the'
            ],
            nomadic: [],
            neutral: [
                'beyond the clearings of the'
            ]
        },
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
            neutral: [
                'in the overcast',
                'amid the',
                'beyond the',
                'in the sanctuary of the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
    'rocky coasts': {
        biomePrepositions: {
            location: [
                'in the thickets of the',
                'beneath the plateaus near the'
            ],
            group: [
                'beneath the plateaus near the'
            ],
            nomadic: [],
            neutral: [
                'at the heart of the',
                'in the central'
            ]
        },
        provincePrepositions: [
            'among'
        ]
    },
    'lush river valleys': {
        biomePrepositions: {
            location: [
                'nestled among the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'in the isolated',
                'in the hearland',
                'in the wet and'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- Plenith South ---*/
    'tropical coasts and forests': {
        biomePrepositions: {
            location: [
                'scorching among the',
                'resting among the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'within the',
                'nearby the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
    'rainforests': {
        biomePrepositions: {
            location: [
                'vital to the',
                'peering out from the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'lost within the',
                'north of the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'palm fields': {
        biomePrepositions: {
            location: [
                'sprawling out among the',
                'overlooking the',
                'basking in the',
                'emerging from the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- Reviak Proper ---*/
    'steppes': {
        biomePrepositions: {
            location: [
                'overlooking the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'across the',
                'beyond the',
                'enduring on the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'flatlands': {
        biomePrepositions: {
            location: [
                'planted in the center of the',
                'where outlaws rule',
                'boldly rising from the'
            ],
            group: [
                'from the',
                'from the wild'
            ],
            nomadic: [
                'that travels the',
                'that traverses the lawless'
            ],
            neutral: [
                'central within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'lightning stormlands': {
        biomePrepositions: {
            location: [
                'within the most holy',
                'which is protected within the',
                'overlooking the'
            ],
            group: [],
            nomadic: [
                'that caravans through the'
            ],
            neutral: [
                'isolated within the',
                'within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'sandy plains': {
        biomePrepositions: {
            location: [
                'captured on the',
                'beneath the Joza trees in the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'west of the',
                'beyond the dunes in the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Weyell Groves ---*/
    'temperate wetlands': {
        biomePrepositions: {
            location: [
                'safely within the',
                'planted in the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'among the',
                'prospering in the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
    'pine thrushes': {
        biomePrepositions: {
            location: [
                'beneath the winds among the'
            ],
            group: [
                'among the greater peoples of the'
            ],
            nomadic: [
                'among the greater peoples of the'
            ],
            neutral: [
                'amid the',
                'in the heart of the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
    'swamps': {
        biomePrepositions: {
            location: [
                'standing in the',
                'in the harvest soil'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'just beyond the',
                'in the bogs and'
            ]
        },
        provincePrepositions: [
            'southeast of'
        ]
    },
    'mangroves': {
        biomePrepositions: {
            location: [
                'shaped by the waterlogged',
            ],
            group: [],
            nomadic: [],
            neutral: [
                'within the enchanting',
                'among the sunkissed',
                'withdrawn beyond the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
/*--- southwest Hinn ---*/
    'coastal wetlands': {
        biomePrepositions: {
            location: [
                'among the harbors of the',
                'bordering the standing waters in the'
            ],
            group: [
                'among the harbors of the'
            ],
            nomadic: [],
            neutral: [
                'at the margins of the',
                'among the seasonal fields of the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'southern flatlands': {
        biomePrepositions: {
            location: [
                'bound within the clay-rich',
                'at the edge of the salted fields in the'
            ],
            group: [
                'at the edge of the salted fields in the'
            ],
            nomadic: [],
            neutral: [
                'across the',
                'south of the hill near the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'eastern borderlands': {
        biomePrepositions: {
            location: [
                'overlooking the',
                'beneath the plateaued forests of the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'along the Marendian channel in the',
                'north of Dhentin in the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Schelk Islands ---*/
    'warm inlets': {
        biomePrepositions: {
            location: [
                'basking in the',
                'overlooking the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'near the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'volcanic crags': {
        biomePrepositions: {
            location: [
                'fortified atop the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'embedded in the',
                'dependent on the',
                'sequestered within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'coral reefs': {
        biomePrepositions: {
            location: [
                'adjacent to the',
                'looking out over the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'dependent on the',
                'in symbiosis with the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'sandy beaches': {
        biomePrepositions: {
            location: [
                'resting on the',
                'on the flat and',
                'which emerged from a lasting pirate presence on the'
            ],
            group: [],
            nomadic: [
                'that travels along the'
            ],
            neutral: [
                'central to the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- Central Bosen ---*/
    'rocky highlands': {
        biomePrepositions: {
            location: [
                'atop the',
                'at the summit of the',
                'elevated among the'
            ],
            group: [
                'in the middlemost settlements of the'
            ],
            nomadic: [],
            neutral: [
                'among the'
            ]
        },
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
        provincePrepositions: [
            'of'
        ]
    },
    'terraced vine fields': {
        biomePrepositions: {
            location: [
                'twisting through the',
                'climbing above the',
                'nestled in the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'isolated among the',
                'within the'
            ]
        },
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
            neutral: [
                'in the distant',
                'east of Ember in the',
                'beyond the wastelands and',
                'at the edge of the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'extreme hills': {
        biomePrepositions: {
            location: [
                'at the standing stones south of the',
                'consisting of subterranean dwellings in the'
            ],
            group: [],
            nomadic: [],
            neutral: [
                'among the',
                'isolated in the high altitude and'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'frozen forests': {
        biomePrepositions: {
            location: [
                'in the hot wellsprings of the',
                'at the edge of the'
            ],
            group: [
                'in the hot wellsprings of the',
                'at the edge of the'
            ],
            nomadic: [],
            neutral: [
                'hidden within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'wastelands': {
        biomePrepositions: {
            location: [],
            group: [],
            nomadic: [],
            neutral: [
                'in the wastelands',
                'near the eastern',
                'south of the',
                'isolated among the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    }
}