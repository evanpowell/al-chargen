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
                'in the heart of the',
                'in the clearings of the'
            ],
            group: [
                'among the',
                'central to the',
                'bordering the'
            ],
            nomadic: [
                'that travels among the',
                'which traverses the',
                'that journeys through the',
                'that circles through the',
                'among the'
            ],
            neutral: [
                'nestled within the',
                'cloistered within the',
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
                'overlooking the',
                'fortified upon the'
            ],
            group: [
                'which fled to the',
                'in the heart of the',
                'bermed in the central hills of the'
            ],
            nomadic: [
                'that travels over the',
                'that traverses the',
                'that hunts across the',
                'that fishes the hotsprings on the'
            ],
            neutral: [
                'isolated on the',
                'among the ice fields of the',
                'within the hotsprings of the'
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
                'in the hills along the'
            ],
            group: [
                'that has made its home along the',
                'that has settled on the ice beds of the'
            ],
            nomadic: [
                'that makes their way along the',
                'that hunts the elk rich'
            ],
            neutral: [
                'on the Tanethi greatbarges of the',
                'among the',
                'in the bordered forests of the'
            ]
        },
        provincePrepositions: [
            'nearby',
            'north of',
            'far beyond'
        ]
    },
/*--- central Wendajii ---*/
    'savannah grasslands': {
        biomePrepositions: {
            location: [
                'overlooking the',
                'within the lower oasis of the',
                'beyond the rifts of the'
            ],
            group: [
                'within the lower oasis of the',
                'marking the tall reeds of the',
                'among the water catches of the',
                'overwatching the elephant herds of the'
            ],
            nomadic: [
                'which wanders the',
                'that hunts across the',
                'that overlooks the greatnecks of the'
            ],
            neutral: [
                'isolated on the',
                'central to the',
                'overlooking the outstretched'
            ]
        },
        provincePrepositions: [
            'of',
            'in the heart of',
            'across'
        ]
    },
    'rolling storm plains': {
        biomePrepositions: {
            location: [
                'in the heart of the',
                'cloistered on the',
                'situated within the',
                'on the cloudhills of the'
            ],
            group: [
                'in the heart of the',
                'cloistered on the',
                'sprawling throughout the',
                'among the shortwillows of the'
            ],
            nomadic: [
                'sprawling across the',
                'gathered among the',
                'that patrols the',
                'chasing lightning across the'
            ],
            neutral: [
                'isolated on the',
                'bordering the',
                'central to the',
                'proudly bordering the cloudhills of the'
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
                'situated within the',
                'rising above the',
                'grounded within the',
                'growing upon the'
            ],
            group: [
                'situated within the',
                'settled among the',
                'formed within the',
                'gaining a foothold on the'
            ],
            nomadic: [
                'that travels across the',
                'that hunts among the',
                'which patrols the shimmering',
                'that illuminates the'
            ],
            neutral: [
                'within the fertile',
                'in the sparse and distant',
                'upon the',
                'in the shimmering reeds of the'
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
                'cresting the thickets of the',
                'protected by the looming',
                'among the dense'
            ],
            group: [
                'settled within the',
                'hidden among the',
                'that fled to the heart of the',
                'rebuilding a community within the'
            ],
            nomadic: [
                'that hunts throughout the',
                'traversing in the grace of the ancestors in the',
                'that seeks the light of Kalmor within the',
                'that camps along the borders of the'
            ],
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
                'bordering the bleak',
                'central to the',
                'planted within the'
            ],
            group: [
                'sequestered within the',
                'dependent on the',
                'guarded among the'
            ],
            nomadic: [
                'hunting among the',
                'guided by the deer among the',
                'seeking the night of Maros within the'
            ],
            neutral: [
                'within the dark',
                'above the shadowed',
                'beneath the covered'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'fen glades': {
        biomePrepositions: {
            location: [
                'in the center of the dazzling',
                'in the outer',
                'above the waterways in the',
                'between the tree arches of the'
            ],
            group: [
                'in the center of the dazzling',
                'amid the',
                'guided by Kalmor to the',
                'repopulated among the'
            ],
            nomadic: [
                'that roams the',
                'that follow the rivercats of the',
                'traversing the',
                'that treks across the'
            ],
            neutral: [
                'among the life-giving',
                'in the blissful',
                'rested within the',
                'seated within the'
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
                'adjacent to the',
                'amid the'
            ],
            group: [
                'on the waterside coasts of the',
                'nestled precariously along the',
                'regaining a foothold within the'
            ],
            nomadic: [
                'that hunts the',
                'traversing the',
                'following the shale rocks of the'
            ],
            neutral: [
                'within the',
                'beneath the',
                'atop the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'meadowlands': {
        biomePrepositions: {
            location: [
                'overlooking the',
                'upon the',
                'amid the',
                'located within the'
            ],
            group: [
                'resettled in the',
                'that is among the first generation to settle in the',
                'hidden in the central'
            ],
            nomadic: [
                'hunting the',
                'traversing the',
                'traveling from border to border in the',
                'guarding the'
            ],
            neutral: [
                'in the',
                'beyond the',
                'in the central',
                'amid the'
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
                'overlooking the',
                'clinging to the',
                'springing from the'
            ],
            group: [
                'situated within the',
                'proudly relocated to the',
                'claiming sovereignty among the'
            ],
            nomadic: [
                'that fishes along the',
                'that travels north each year to the',
                'that camps among the plentiful',
                'that traverses the breathtaking'
            ],
            neutral: [
                'beneath the',
                'in the heart of the',
                'beyond the waterfalls of the',
                'in the plainrocks of the'
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
                'seated in the',
                'embedded in the'
            ],
            group: [
                'relocated to the',
                'that resettled among the',
                'which fled to the',
                'that settled above the'
            ],
            nomadic: [
                'that journeys through the',
                'that wanders across the',
                'herding goats in the steep'
            ],
            neutral: [
                'among the',
                'within the',
                'atop the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'central farmlands': {
        biomePrepositions: {
            location: [
                'at the midway of the',
                'in the fields of the',
                'bordering the great farms of the',
                'at the forks north of the'
            ],
            group: [
                'at the midway of the',
                'relocated to the',
                'indentured to the',
                'rebuilding their community among the'
            ],
            nomadic: [
                'traversing the',
                'patrolling the',
                'that guards the borders of the'
            ],
            neutral: [
                'across the',
                'amid the',
                'fostered within the',
                'planted in the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'southern wetlands': {
        biomePrepositions: {
            location: [
                'sprouting from the',
                `at the water's edge in the`,
                'springing from the'
            ],
            group: [
                'planted in the',
                'relocated to the',
                'fleeing persecution in the',
                'rebuilding their community in the',
                'safeguarding their culture among the'
            ],
            nomadic: [
                'traversing the',
                'guarding the',
                'guided through the reeds of the',
                'traveling north to south across the'
            ],
            neutral: [
                'flourishing with the',
                'sprouting from the',
                'resting within the'
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
                'warming the',
                'overlooking the',
                'ingrained in the'
            ],
            group: [
                'prominent among the',
                'relocated to the',
                'rebuilding a community among the'
            ],
            nomadic: [
                'prominent among the',
                'guarding the sacred hunting grounds of the'
            ],
            neutral: [
                'resting on the',
                'centrally positioned in the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'forest groves': {
        biomePrepositions: {
            location: [
                'nestled among the',
                'high among the',
                'deep within the',
                'hidden within the'
            ],
            group: [
                'hidden within the',
                'that resettled within the',
                'that fled to the',
                'interspersed among the'
            ],
            nomadic: [
                'wandering through the',
                'hunting among the',
                'that serves as the guardians of the'
            ],
            neutral: [
                'deep within the',
                'carved out of the',
                'cloistered within the'
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
                'overlooking the',
                'among the',
                'amid the fertile'
            ],
            group: [
                'at the shores of the',
                'rebuilding among the',
                'relocated to the',
                'prominent within the'
            ],
            nomadic: [
                'that hunts throughout the',
                'that traverses the plentiful',
                'that guards the central'
            ],
            neutral: [
                'down among the',
                'nigh the',
                'in the restful'
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
                'centered in the',
                'sequestered in the',
                'cursed among the',
                'defying the'
            ],
            group: [
                'centered in the',
                'defiantly settled within the',
                'banished to the',
                'bermed in the rocky dunes of the'
            ],
            nomadic: [
                'traversing the',
                'leading travelers across the',
                'hunting the roaming sandsnakes of the'
            ],
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
                'overlooking the',
                'bordering the',
                'that thrives among the'
            ],
            group: [
                'rebuilding among the',
                'settled atop the',
                'farming cactus in the vast,'
            ],
            nomadic: [
                'guarding the monuments across the',
                'traversing the rifts of the',
                'navigating the bleached sands of the'
            ],
            neutral: [
                'amid the',
                'isolated on the',
                'thriving within the'
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
                'wading through the',
                'grounded in the',
                'dependent on the'
            ],
            group: [
                'indentured to the',
                'relocated to the',
                'cursed to mine the',
                'rebuilding among the'
            ],
            nomadic: [
                'that hunts north of the',
                'that traverses the corridors of the',
                'that searches for the Moghul secrets buried within the'
            ],
            neutral: [
                'deep within the',
                'across the fiery',
                'situated beneath the gas clouds of the'
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
                'casting among the nobles of the',
                'among the long-eared fox of the',
                'in the humid,'
            ],
            group: [
                'inheriting the',
                'relocated among the',
                'thriving deep within the',
                'claiming their noble birthright among the'
            ],
            nomadic: [
                'that hunts throughout the',
                'that camps along the borders of the',
                'from one of the foraging tribes in the',
                'that follows the gray fox across the'
            ],
            neutral: [
                'among the privileged',
                'within the noble',
                'that stems from the'
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
                'that stems from the',
                'flourishing within the',
                'illuminating the',
                'branching from the'
            ],
            group: [
                'indentured within the',
                'tending to the',
                'relocated to the',
                'rebuilding a fractured community among the'
            ],
            nomadic: [
                'that hunts under the low clouds of the',
                'traversing the',
                'that thrives foraging across the'
            ],
            neutral: [
                'amid the outstreched and',
                'in the shadow of the',
                'situated beneath the low clouds of the'
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
                'that lives among the',
                'indentured within the',
                'that has been integral to the development of the',
                'that cultivates a new community among the'
            ],
            nomadic: [
                'that travels between the warm woodlands and the glistening',
                'that camps in the dry fields north of the',
                'that traverses the seasonal'
            ],
            neutral: [
                'among the',
                'within the',
                'central to the'
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
                'carved from the',
                'canopied beneath the'
            ],
            group: [
                'sequestered within the',
                'hidden within the',
                'branching among the',
                'rebuilding amid the'
            ],
            nomadic: [
                'that hunts throughout the',
                'who are the guardians of the',
                'that camps along the borders of the'
            ],
            neutral: [
                'among the',
                'within the',
                'in the canopies of the'
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
                'embedded in the',
                'bermed in the edges of the',
                'relocated among the',
                'hiding in the desolate'
            ],
            nomadic: [
                'that crosses the',
                'that hunts the rugged,',
                'that guards the vast,',
                'surviving the harsh terrain of the'
            ],
            neutral: [
                'situated among the',
                'in the shrubs and berries of the',
                'sprawling across the wide,'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'mild shrublands': {
        biomePrepositions: {
            location: [
                'standing above the',
                'resting atop the',
                'in the midst of the',
                'overlooking the'
            ],
            group: [
                'situated among the',
                'that fled to the sparse and',
                'rebuilding a fractured community among the'
            ],
            nomadic: [
                'that forages across the',
                'that gathers seasonally from north to south among the',
                'that follows the winds across the'
            ],
            neutral: [
                'situated among the',
                'central to the',
                'bordering the'
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
                'situated between the',
                'in the Central Corridor beneath the'
            ],
            group: [
                'situated between the',
                'relocated to the',
                'born from refugees who fled beyond the',
                'scattered across the'
            ],
            nomadic: [
                'that travels between the',
                'that hunts beyond the',
                'that follows the way of Swuskwah within the'
            ],
            neutral: [
                'among the',
                'south of the',
                'amid the'
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
                'emerging from the',
                'fortified atop the',
                'central to the'
            ],
            group: [
                'that emigrated to the',
                'forging a lasting hold within the',
                'relocated to the'
            ],
            nomadic: [
                'that guides travelers to the wall beyond the',
                'that hunts the desolate',
                'that traverses the wide'
            ],
            neutral: [
                'bound to the',
                'blessed by the gods of the',
                'blessed by the patriarch of the'
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
                'bound to the',
                'central to the',
                'located among the'
            ],
            group: [
                'indentured within the',
                'relocated to the',
                'planted in the'
            ],
            nomadic: [
                'that camps north of the',
                'that traverses the hills north of the',
                'that guards the laborers among the'
            ],
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
                'overlooking the',
                'caretaking the',
                'amid the'
            ],
            group: [
                'rebuilding a community within the',
                'relocated to the',
                'tending to the',
                'planted among the'
            ],
            nomadic: [
                'foraging across the',
                'that camps north of the',
                'that migrates each season south of the'
            ],
            neutral: [
                'among the',
                'next to the',
                'pruned from the',
                'tending to the'
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
                'shaped by the',
                'located within the',
                'overlooking the'
            ],
            group: [
                'centered within the',
                'tasked with caretaking the',
                'that remains hidden among the',
                'that has become vital to the'
            ],
            nomadic: [
                'that travels between the coastlands and the',
                'that forages along the southern',
                'that hunts along the falcon trails in the'
            ],
            neutral: [
                'ritually dependent on the',
                'that is located within'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'mild coastlands': {
        biomePrepositions: {
            location: [
                'thriving as a heritage community in the',
                'centrally positioned along the',
                'resting along the',
                'cast on the shores and'
            ],
            group: [
                'that emigrated to the',
                'forging a new society at the edge of the',
                'forcibly relocated to the',
                'that long ago settled the'
            ],
            nomadic: [
                'that traverses the tides across the',
                'that depends on the water fowl of the',
                'that sails the outer rocks of the'
            ],
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
                'at the edge of the'
            ],
            group: [
                'among the coastal docks of the',
                'that fled to the',
                'that relocated on the',
                'that now represents the largest fishing community along the'
            ],
            nomadic: [
                'that sails the',
                'that navigates the',
                'that traverses the'
            ],
            neutral: [
                'afloat on the',
                'located near the',
                'overlooking the'
            ]
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
                'located within the',
                'amid the',
                'in the heart of the'
            ],
            group: [
                'indentured within the',
                'rebuilding among the',
                'relocated to the',
                'crucial to the sustainability of the'
            ],
            nomadic: [
                'that camps north of the',
                'that guards the delicate and',
                'that traverses the winters outside of the'
            ],
            neutral: [
                'in the',
                'in the hills above the',
                'among the lesser known',
                'among the greater'
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
                'planted in the',
                'on the lonely'
            ],
            group: [
                'planted in the',
                'scattered aross the',
                'that emigrated to the',
                'that has fortified a hold in the central'
            ],
            nomadic: [
                'ranging across the eastern',
                'traversing across the open',
                'herding along the southern'
            ],
            neutral: [
                'on the',
                'within the',
                'amid the'
            ]
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
                'in the caves along the',
                'situated at the edge of the'
            ],
            group: [
                'in the craggy and',
                'relocated to the storm-ridden',
                'that fled to the',
                'scattered along the'
            ],
            nomadic: [
                'that hunts across the',
                'who serve as the roaming caretakers of the',
                'that traverses the storm-ridden'
            ],
            neutral: [
                'whisping across the',
                'within the winds of the',
                'on the'
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
                'at the evocation of the',
                'resting beneath the'
            ],
            group: [
                'central to the',
                'that fled south of the',
                'rebuilding among the'
            ],
            nomadic: [
                'traversing the',
                'that hunts amid the',
                'that guides travelers across the'
            ],
            neutral: [
                'beyond the clearings of the',
                'central to the',
                'thriving beyond the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- the forests of Creona ---*/
    'stormy woodlands': {
        biomePrepositions: {
            location: [
                'beneath the overcast',
                'overlooking the',
                'beyond the outstretched',
                'above the'
            ],
            group: [
                'relocated to the',
                'that recently emigrated to the',
                'that long ago settled among the'
            ],
            nomadic: [
                'that follows the winds through the',
                'that guards the trees throughout the',
                'traversing the'
            ],
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
                'beneath the plateaus near the',
                'under the tall shadows at the',
                'carved from the'
            ],
            group: [
                'beneath the plateaus near the',
                'relocated to the',
                'establishing a new community along the'
            ],
            nomadic: [
                'that oversees the stretches of the',
                'that travels from the plateaus to the',
                'that hunts in the shadow of the plateaus along the'
            ],
            neutral: [
                'at the heart of the',
                'in the central',
                'along the'
            ]
        },
        provincePrepositions: [
            'among'
        ]
    },
    'lush river valleys': {
        biomePrepositions: {
            location: [
                'nestled among the',
                'located within the',
                'springing from the',
                'thriving within the'
            ],
            group: [
                'settled within the',
                'central to the',
                'relocated to the',
                'that long ago settled the'
            ],
            nomadic: [
                'traveling across the',
                'that navigates the tall ridges and low waters of the',
                'that fishes along the great rivers in the'
            ],
            neutral: [
                'in the isolated',
                'in the hearland',
                'in the wet and',
                'at the banks of the'
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
                'resting among the',
                'basking in the heat of the',
                'situated south of the rainy,'
            ],
            group: [
                'that long since settled in the',
                'that recently relocated to the',
                'that now claim home within the',
                'that is lost and scattered across the'
            ],
            nomadic: [
                'that hunts in the thick vegetation of the',
                'that traverses across the'
            ],
            neutral: [
                'within the',
                'nearby the',
                'amid the'
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
                'peering out from the',
                'beneath the canopied',
                'within the central'
            ],
            group: [
                'relocated among the',
                'hidden deep within the',
                'reclaiming a lost society within the',
                'fleeing war deep within the'
            ],
            nomadic: [
                'that wanders through the',
                'dependent on the migrating dwellers of the',
                'guarding the northern borders of the'
            ],
            neutral: [
                'lost within the',
                'north of the',
                'located within the'
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
            group: [
                'that has resettled among the',
                'that is hidden within the',
                'that long ago emigrated to the',
                'forging a new community among the'
            ],
            nomadic: [
                'that forages across the',
                'that follows the ape trails throughout the',
                'that traverses the'
            ],
            neutral: [
                'within the',
                'among the',
                'dependent on the'
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
                'overlooking the',
                'atop the outstretched',
                'overseeing the noble',
                'crested upon the'
            ],
            group: [
                'indentured among the',
                'forcibly relocated to the southern',
                'defiantly settled atop the disputed',
                'in current control of the eastern'
            ],
            nomadic: [
                'that herds across the dry',
                'that traverses east to west along the rugged',
                'that depends on the antelope of the'
            ],
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
                'where outlaws rule the',
                'boldly rising from the',
                'situated on the lawless'
            ],
            group: [
                'from the',
                'from the wild',
                'that recently settled in the western',
                'that is trying to reclaim its birthright across the'
            ],
            nomadic: [
                'that travels the',
                'that traverses the lawless',
                'that raids travelers across the'
            ],
            neutral: [
                'central within the',
                'located within the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'lightning stormlands': {
        biomePrepositions: {
            location: [
                'within the most sacred',
                'which is protected within the',
                'overlooking the',
                'illuminating the'
            ],
            group: [
                'that conquered the southern',
                'relocated to the western',
                'situated at the heart of the'
            ],
            nomadic: [
                'that caravans through the',
                'that guides travelers through the rain soaked',
                'that hunts the outer lakes of the'
            ],
            neutral: [
                'isolated within the',
                'within the',
                'overlooking the'
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
                'beneath the Joza trees in the',
                'within the tumblegrass of the',
                'central to the'
            ],
            group: [
                'indentured on the ridge surrouding the',
                'relocated to the harsh',
                'that emigrated long ago to the'
            ],
            nomadic: [
                'herding large cattle on the',
                'that traverses north across the',
                'that guards the ancient rock dwellings in the western'
            ],
            neutral: [
                'west of the',
                'beyond the dunes in the',
                'central to the'
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
                'planted in the',
                'deep within the',
                'nestled within the'
            ],
            group: [
                'settled among the',
                'seeking spiritual enlightenment within the',
                'that seeks to rekindle a ritual way of life among the'
            ],
            nomadic: [
                'that hunts the entire stretch of the',
                'that traverses the seasons of the',
                'that camps along the borders of the',
                'that raids the farmlands south of the'
            ],
            neutral: [
                'among the',
                'prospering in the',
                'hidden within the'
            ]
        },
        provincePrepositions: [
            'in'
        ]
    },
    'pine thrushes': {
        biomePrepositions: {
            location: [
                'beneath the winds among the',
                'in the shadows among the',
                'bermed in the hills north of the',
                'that has long overlooked the'
            ],
            group: [
                'among the greater peoples of the',
                'that long ago settled among the',
                'that has tamed the wild soils among the',
                'settled within the aromatic'
            ],
            nomadic: [
                'among the greater peoples of the',
                'traversing the tall',
                'that follows the small game native to the',
                'that travels with the seasons throughout the'
            ],
            neutral: [
                'amid the',
                'in the heart of the',
                'within the barrens of the'
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
                'in the harvest soil',
                'overlooking the',
                'interwoven among the deep'
            ],
            group: [
                'relocated to the',
                'that has scattered across the',
                'settled among the cypress tress in the'
            ],
            nomadic: [
                'that remains dependent on the water beasts of the southern',
                'that travels frequently by longboat across the',
                'that traverses the barely navigable'
            ],
            neutral: [
                'just beyond the',
                'in the bogs and',
                'overlooking the'
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
                'among the wide trees in the',
                'in the quiet',
                'planted among the'
            ],
            group: [
                'that long ago relocated to the',
                'that recently settled among the',
                'amid the',
                'central to the'
            ],
            nomadic: [
                'that hunts along the path of',
                'guarding the treasures within the',
                'that traverses the'
            ],
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
                'bordering the standing waters in the',
                'at the edge of the peninsular',
                'standing at the edge of the'
            ],
            group: [
                'among the harbors of the',
                'living among foreigners in the',
                'recently settled along the'
            ],
            nomadic: [
                'that travels between the Krench and the',
                'that guards the outstretched',
                'that follows the tides along the',
                'that sails along the'
            ],
            neutral: [
                'at the margins of the',
                'among the seasonal fields of the',
                'central within the'
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
                'at the edge of the salted fields in the',
                'at the border of the',
                'at the crest of the'
            ],
            group: [
                'at the edge of the salted fields in the',
                'relocated to the',
                'recently settled within the',
                'defiantly maintaining an outpost in the'
            ],
            nomadic: [
                'that raids travelers along the',
                'that herds in the wide stretches of the',
                'that travels with the winds across the'
            ],
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
                'beneath the plateaued forests of the',
                'east of the Marendian flatlands in the',
                'long situated within the'
            ],
            group: [
                'that has fled to the',
                'fortified within the',
                'hoping to rebuild their society in the lawless',
                'recently settled along the coasts of the'
            ],
            nomadic: [
                'traversing the high forests west of the',
                'that hunts south near the Pale Spires in the'
            ],
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
                'overlooking the',
                'located within the',
                'emerging from the',
                'cast fromt the'
            ],
            group: [
                'that labors within the',
                'recently settled within the',
                'harbored in the south of the'
            ],
            nomadic: [
                'traversing the',
                'fishing the waterways and',
                'traveling between the sand bars and'
            ],
            neutral: [
                'near the',
                'in the',
                'among the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'volcanic crags': {
        biomePrepositions: {
            location: [
                'fortified atop the',
                'carved from the',
                'exposed atop the',
                'long positioned among the'
            ],
            group: [
                'recently relocated to the',
                'long ago settled within the',
                'forged within the firey'
            ],
            nomadic: [
                'that traverses the heated',
                'that hunt the terror birds native to the',
                'bound to the winds around the'
            ],
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
                'looking out over the',
                'built above the',
                'on the coasts north of the'
            ],
            group: [
                'relocated to the coasts around the',
                'that depends on the delicate sea life connected to the'
            ],
            nomadic: [
                'that fishes across the waters of the',
                'that traverses the'
            ],
            neutral: [
                'dependent on the',
                'in symbiosis with the',
                'adjacent to the'
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
                'which emerged from a lasting pirate presence on the',
                'which represents one of the oldest settlements on the'
            ],
            group: [
                'recently settled along the mild and',
                'relocated to the',
                'scattered throughout the',
                'rebuilding their society along the'
            ],
            nomadic: [
                'that travels along the',
                'that camps along the',
                'that raids the boats and camps along the'
            ],
            neutral: [
                'central to the',
                'scattered across the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- central Bosen ---*/
    'rocky highlands': {
        biomePrepositions: {
            location: [
                'atop the',
                'at the summit of the',
                'elevated among the'
            ],
            group: [
                'in the middlemost settlements of the',
                'that carved out a new community within the',
                'that were long ago brought to the'
            ],
            nomadic: [
                'that hunt along the high roads of the',
                'that traverses the distant',
                'that travels the cold and windy'
            ],
            neutral: [
                'among the',
                'in the summits of the',
                'in the cloud covered'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'river valleys': {
        biomePrepositions: {
            location: [
                'looking out over the',
                'among the caves and',
                'along the fertile banks of the',
                'situated in the heart of the'
            ],
            group: [
                'among the caves and',
                'relocated to the',
                'hoping to settle within the',
                'retaining their ancestral culture within the'
            ],
            nomadic: [
                'that traverses the',
                'that hunts north to south within the',
                'that moves with the seasons throughout the'
            ],
            neutral: [
                'deep within the',
                'in the winding',
                'beyond the',
                'along the twisting'
            ]
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
                'nestled in the',
                'situated in the heart of the'
            ],
            group: [
                'indentured as laborers within the',
                'that has recently relocated to the',
                'that hopes to reclaim their lost legacy within the'
            ],
            nomadic: [
                'dedicated to navigating the twisting',
                'that hunts the small game native to the',
                'that guides travelers through the'
            ],
            neutral: [
                'isolated among the',
                'within the',
                'central to the'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
/*--- the Northern Wilds ---*/
    'icy steppes': {
        biomePrepositions: {
            location: [
                'bermed in the cold, hard earth of the',
                'centrally exposed along the',
                'in the open',
                'illuminating the'
            ],
            group: [
                'cast out and scattered along the',
                `that fled the Empire's reach within the`,
                'that has long thrived in the harsh'
            ],
            nomadic: [
                'that follows the caribou across the',
                'that traverses each summer to the north of the'
            ],
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
                'consisting of subterranean dwellings in the',
                'in the distant and',
                'among the Kimenian bird tribes in the'
            ],
            group: [
                'that has relocated to the',
                'whose elders have recently settled in the',
                'hoping to farm away from the Empire in the'
            ],
            nomadic: [
                'that hunts throughout the',
                'that navigates the',
                'that camps south of the'
            ],
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
                'at the edge of the',
                'in the glistening',
                'south of the'
            ],
            group: [
                'in the hot wellsprings of the',
                'at the edge of the',
                'recently settling in the'
            ],
            nomadic: [
                'that hunts the large game that roam the',
                'that traverses the',
                'that camps within the harsh'
            ],
            neutral: [
                'hidden within the',
                'in the quiet and'
            ]
        },
        provincePrepositions: [
            'of'
        ]
    },
    'wastelands': {
        biomePrepositions: {
            location: [
                'at the edge of the',
                'that rests as the last hope of civilization outside the',
                'west of the'
            ],
            group: [
                'that escaped genocide by hiding among the',
                'that against all odds thrives within the',
                'that recently relocated just south of the'
            ],
            nomadic: [
                'that traverses the lifeless',
                'that guides travelers across the',
                'that travels from the frozen forests to the edge of the'
            ],
            neutral: [
                'in the western',
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