/*
    (roll name)---------------| "Urnya
                              |
    (settlementsProse.js)-----| hails from a small town  
                              |
    (biomesProse.js)----------| in the clearing of a spruce forest north of the
                              |
    (rollProvince)------------| Ommultic Front,
                              | 
    (modesOfTravel.js)--------| a fortnight by horse
                              |
    (notableSettlements.js)---| from the old-world city of Raelian."

    -----------------------------------------------------------------------------

    BIOMES PROSE STRUCTURE:

    (biome -> phrases -> type of location) --> "[settlement] in the clearing of a spruce forest"

    (biome -> provincePhrases) --> "north of the [province]"

*/
/*
    'diasporic group',
    'hamlet',
    'village',
    'small town',
    'large township',
    'small city',
    'large city',
    'nomadic group'
*/

export const biomesProse = {
/*--- the Ommultic Front ---*/
    'spruce forests': {
        phrases: {
            'hamlet': [
                `tucked within $['the shaded spruces', 'the whispering pines', 'the grand evergreens']`,
                `on the edge of $['the bright clearing', 'the towering willows', 'the spruce forests']`,
                `near the $['spring fed spruces', 'looming spruce forests', 'quiet flowing waters']`,
                `deep within the $['spruce tree valleys', 'dark spruce forests', 'bright spruce forests']`
            ],
            'village': [
                `tucked away in $['the shaded spruces', 'the tall pines', 'the grand evergreens']`,
                `at the heart of $['the tall spruces', 'the whispering willows', 'the spruce forests']`,
                `situated along the borders of $['the empty spruces', 'the tall green groves', 'sleepy pines']`,
                `settled within the $['spruce tree valleys', 'dark spruce forests', 'bright spruce forests']`
            ],
            'small town': [
                `in the heart of $['a spruce forest', 'a dense network of pines', 'a spruce forest clearing']`,
                `located within the $['dense networks of spruce trees', 'dense networks of evergreens', 'spruce forests']`,
                `situated just south of $['the bright spruces', 'the spruce forests', 'the shadowy spruce trees']`,
                `found at the border of $['the central evergreens', 'the twisting groves', 'the great pines', 'the watchful spruce trees']`
            ],
            'large township': [
                `stretched throughout $['the ancient spruce trees', 'the grand spruces', 'the shady pines']`,
                `found nestled in $['the flowing juniper fields', 'the arable forests', 'the dense evergreens']`,
                `at the center of $['the great spruce forests', 'the meandering forests', 'the secluded spruce clearings']`,
                `marking $['the far reaches of the hunting pines', 'the entrance to the spruce forests', 'the outer borders of the looming spruce forests']`
            ],
            'small city': [
                `settled among $['the ancient spruce trees', 'the whispering willows', 'the shady pines']`,
                `at the heart of $['the bright spruce forests', 'the tall evergreens', 'the spruce trees']`,
                `beyond the valleys of $['the ancient evergreens', 'the spring fed spruce trees', 'the rolling spruce forests']`,
                `found deep within $['the spruce forests', 'the juniper fields', 'the shaded spruces']`
            ],
            'large city': [
                `thriving amid $['the ancient spruce trees', 'the grand spruces', 'the shady pines']`,
                `located just beyond $['an ancient spruce grove', 'the grand spruce trees', 'the whispering pines']`,
                `bordering $['the great spruce groves', 'the windy pines', 'the expansive evergreen forests']`,
                `densely settled within $['the twisting pines', 'the waving evergreens', 'the great spruce forests']`
            ],
            'diasporic group': [
                `settled in the opened clearings of $['the tall spruce trees', 'the grand spruces', 'the shaded pines']`,
                `located among $['the whispering spruces', 'the shaded willows', 'the tall pines']`,
                `found deep within $['the spruce forests', 'the spruce valleys', 'the lakeside groves']`,
                `at the heart of $['the dark spruce groves', 'the tall spruce hills', 'the expansive spruce forests']`
            ],
            'nomadic group': [
                `that travels among $['the sacred spruce trees', 'the grand spruce hunting grounds', 'the shaded evergreens']`,
                `which traverses the ridge beyond $['the coniferous forests', 'the spruce groves', 'the fields of willow']`,
                `that journeys through $['the quiet spruce forests', 'the sacred spruce shadows', 'the shadowed forests']`,
                `that hunts $['within the hallowed evergreens', 'beyond the reaching willows', 'among the spruce clearings']`
            ]
        },
        provincePhrases: [
            'north of',
            'east of',
            'in the north of',
            'west of'
        ],
    },
    'expansive tundra': {
        phrases: {
            'hamlet': [
                `centered within $['the expansive tundra', 'the glacial tundra', 'the grand tundra']`,
                `overlooking $['the great tundra', 'the cold steppes', 'the expansive tundra']`,
                `fortified upon $['the expansive tundra', 'looming ice fields', 'the great cold steppes']`,
                `deep within $['the snow covered tundra', 'the expansive tundra', 'the brisk tundra']`
            ],
            'village': [
                `settled in $['the stretching tundra', 'the desolate tundra', 'the wide tundra']`,
                `among the standing rocks of $['the cold tundra', 'the windy tundra', 'the glacial expanse']`,
                `situated within $['the dark tundra', 'the endless tundra', 'the expansive tundra']`,
                `near the shrublands of $['the vast tundra', 'the wide arctic tundra', 'the snowy steppes']`
            ],
            'small town': [
                `in the center of $['the forbidden tundra', 'the expansive tundra', 'the glacial clearings']`,
                `located amid the $['wide expansive tundra', 'cold ice fields', 'vast steppes']`,
                `resting within $['the clouded tundra', 'the snowy steppes', 'the glacial fields']`,
                `found centered in the $['vast tundra', 'icy and desolate steppes', 'glacial wilderness', 'expansive glaciers']`
            ],
            'large township': [
                `stretched across $['the wide tundra', 'the vast steppes', 'the vast tundra']`,
                `found nestled in $['the expansive tundra', 'the stony steppes', 'the dangerous glacial fields']`,
                `adjacent to $['the great cold expanse', 'the icy fields', 'the expansive steppes']`,
                `among the temperate grasses at $['the mouth of the jagged glaciers', 'the entrance to vast tundra', 'the edge of the windy steppes']`
            ],
            'small city': [
                `on the lower plateaus of $['the vast tundra', 'the endless rocky steppes', 'the chilling expanse']`,
                `beyond the treeline in $['the boundless tundra', 'the frozen wastelands', 'the vast steppes']`,
                `beyond the cold valley in $['the endless tundra', 'the wandering hotsprings', 'the bitter arctic steppes']`,
                `at the arctic edge of $['the vast frozen wastelands', 'the endless steppes', 'the expansive tundra']`
            ],
            'large city': [
                `warming the ridge of the arctic edge of $['the shifting glaciers', 'the grand steppes', 'the vast tundra']`,
                `located central to $['the windswept tundra', 'the boundless steppes', 'the expansive permafrost']`,
                `at the glacier's edge of $['the salted hotsprings', 'the vast permafrost', 'the arctic steppes']`,
                `still braving the cold winds of $['the clouded tundra', 'the frozen wastelands', 'the ice stone fields']`
            ],
            'diasporic group': [
                `that long ago resettled in $['the forgiving tundra', 'the open steppes', 'the brisk tundra']`,
                `just south of $['the scattered hotsprings', 'the expansive tundra', 'the boundless wastes']`,
                `found hidden deep within $['the ice stone steppes', 'the vast tundra', 'the frozen fields']`,
                `cresting the icy ridges of $['the endless permafrost', 'the vast tundra', 'the expansive steppes']`
            ],
            'nomadic group': [
                `that wanders across $['the vast tundra', 'the arctic permafrost', 'the chilling steppes']`,
                `that traverses $['the windswept steppes', 'the harsh tundra', 'the bitter cold glaciers']`,
                `that hunts beyond the cold stones of $['the lifegiving permafrost', 'the stone scattered steppes', 'the sacred shrublands']`,
                `that often camps within $['the cold green permafrosts', 'the caribou steppes', 'the icy tundra']`
            ]
        },
        provincePhrases: [
            'north of',
            'far beyond Lost Lake in',
            'beyond'
        ]
    },
    'cold lakefronts': {
        phrases: {
            'hamlet': [
                `in the thick forests of $['the cold lakefronts', 'the chilling lakes', 'the arctic lakelands']`,
                `situated close to $['the cold trout lakes', 'the icy lakefronts', 'the cold lakefronts']`,
                `near the waters' edge of $['the frigid lakefronts', 'the frigid lakelands', 'the frozen fjords']`,
                `found within $['the snow frosted lakes', 'the cold lakefronts', 'the windy cold lakes']`
            ],
            'village': [
                `settled in $['the long lakefronts', 'the frigid lakes', 'the icy lakelands']`,
                `established within the tall grasses of $['the cold lakefronts', 'the windy ice lakes', 'the ice covered lakes']`,
                `beneath the vibrant trees in $['the frost covered lakefronts', 'the bone chilling lakelands', 'the frigid lakefronts']`,
                `in the forests above $['the snowy lakefronts', 'the arctic lakelands', 'the crisp lakelands']`
            ],
            'small town': [
                `central to $['the formidable cold lakes', 'the cold lakefronts', 'the glacier fed lakelands']`,
                `located nearby the $['wide cold lakefronts', 'cold lakes', 'wild frostful lakelands']`,
                `resting beside $['the flowing cold lakes', 'the snow covered lakefronts', 'the frigid lake waters']`,
                `found amid the $['briarpatch lakesides', 'desolate lakefronts', 'quiet lakelands', 'icy lakelands']`
            ],
            'large township': [
                `bordering the edge of $['the cold lakefronts', 'the snow covered lakefronts', 'the frost-filled lakelands']`,
                `stretching across $['the cold lakefronts', 'the icy lakelands', 'the pale ice lakes']`,
                `encompassed within $['the great cold lakelands', 'the inhospitable lakefronts', 'the harsh lakelands']`,
                `surrounded by the temperate grasses at $['the heart of the cold lakelands', 'the entrance to icy cold lakes', 'the mouth of the trout lake waters']`
            ],
            'small city': [
                `on the Tanethi greatbarges of $['the chilly lake waters', 'the blue ice lakes', 'the frigid lake waters']`,
                `among $['the dark cold lakelands', 'the frozen lakefronts', 'the snow covered waterfronts']`,
                `nestled within $['the cold blue lakes', 'the placid lakelands', 'the arctic lakefronts']`,
                `near the icy waters of $['the crisp mountain lakes', 'the frost lakes', 'the cold lakefronts']`
            ],
            'large city': [
                `central to $['the cold lakelands', 'the great lakefronts', 'the distant trout lakes']`,
                `located along $['the icy gravel beaches', 'the frozen lake shores', 'the arctic lakelands']`,
                `in the hills above $['the frozen fjords', 'the frigid lakelands', 'the unforgiving ice lakes']`,
                `overlooking $['the vast ice lakes', 'the inhospitable lakelands', 'the snowswept lakefronts']`
            ],
            'diasporic group': [
                `that has made its home along $['the pale blue lakefronts', 'the ice covered lake fields', 'the frigid gravel beaches']`,
                `that has settled on the ice beds of $['the frostful lakelands', 'the cold lakefronts', 'the snowy lakefronts']`,
                `settled among $['the frost lakes', 'the frozen trout lake waters', 'the icy lakesides']`,
                `that made a lasting home among $['the great frost lakes', 'the fierce lakefronts', 'the snow waters']`
            ],
            'nomadic group': [
                `that traverses $['the outstretched cold lakes', 'the arctic lakefronts', 'the chilling gravel beaches']`,
                `that hunts the elk rich, $['snowy lakelands', 'harsh lakefronts', 'bitter cold lakesides']`,
                `that hunts beyond the cold stones of $['the ice lakes of Hathia', 'the frigid lakewaters', 'the frozen lakefronts']`,
                `that often camps within $['the cold lakeside forests', 'the frigid lakefronts', 'the icy lakelands']`
            ]
        },
        provincePhrases: [
            'nearby',
            'north of',
            'far beyond'
        ]
    },
/*--- central Wendajii ---*/
    'savannah grasslands': {
        phrases: {
            'hamlet': [
                `in the thick forests of $['the cold lakefronts', 'the chilling lakes', 'the arctic lakelands']`,
                `situated close to $['the cold trout lakes', 'the icy lakefronts', 'the cold lakefronts']`,
                `near the waters' edge of $['the frigid lakefronts', 'the frigid lakelands', 'the frozen fjords']`,
                `found within $['the snow frosted lakes', 'the cold lakefronts', 'the windy cold lakes']`
            ],
            'village': [
                `marking the tall reeds of $['the long lakefronts', 'the frigid lakes', 'the icy lakelands']`,
                `established within the tall grasses of $['the cold lakefronts', 'the windy ice lakes', 'the ice covered lakes']`,
                `beneath the vibrant trees in $['the frost covered lakefronts', 'the bone chilling lakelands', 'the frigid lakefronts']`,
                `in the forests above $['the snowy lakefronts', 'the arctic lakelands', 'the crisp lakelands']`
            ],
            'small town': [
                `among the watercatches of $['the formidable cold lakes', 'the cold lakefronts', 'the glacier fed lakelands']`,
                `located nearby the $['wide cold lakefronts', 'cold lakes', 'wild frostful lakelands']`,
                `resting beside $['the flowing cold lakes', 'the snow covered lakefronts', 'the frigid lake waters']`,
                `found amid the $['briarpatch lakesides', 'desolate lakefronts', 'quiet lakelands', 'icy lakelands']`
            ],
            'large township': [
                `bordering the edge of $['the cold lakefronts', 'the snow covered lakefronts', 'the frost-filled lakelands']`,
                `stretching across $['the cold lakefronts', 'the icy lakelands', 'the pale ice lakes']`,
                `encompassed within $['the great cold lakelands', 'the inhospitable lakefronts', 'the harsh lakelands']`,
                `surrounded by the temperate grasses at $['the heart of the cold lakelands', 'the entrance to icy cold lakes', 'the mouth of the trout lake waters']`
            ],
            'small city': [
                `beyond the rifts of $['the chilly lake waters', 'the blue ice lakes', 'the frigid lake waters']`,
                `within the vast $['the dark cold lakelands', 'the frozen lakefronts', 'the snow covered waterfronts']`,
                `nestled overlooking $['the cold blue lakes', 'the placid lakelands', 'the arctic lakefronts']`,
                `near the scattered tall trees of $['the crisp mountain lakes', 'the frost lakes', 'the cold lakefronts']`
            ],
            'large city': [
                `centrally located in $['the cold lakelands', 'the great lakefronts', 'the distant trout lakes']`,
                `located along $['the icy gravel beaches', 'the frozen lake shores', 'the arctic lakelands']`,
                `found far among $['the frozen fjords', 'the frigid lakelands', 'the unforgiving ice lakes']`,
                `built in the rocky reach above $['the vast ice lakes', 'the inhospitable lakelands', 'the snowswept lakefronts']`
            ],
            'diasporic group': [
                `within the lower oasis of $['the pale blue lakefronts', 'the ice covered lake fields', 'the frigid gravel beaches']`,
                `marking the tall reeds of $['the frostful lakelands', 'the cold lakefronts', 'the snowy lakefronts']`,
                `that migrated to the expansive $['the frost lakes', 'the frozen trout lake waters', 'the icy lakesides']`,
                `that found a sustainable home among $['the great frost lakes', 'the fierce lakefronts', 'the snow waters']`
            ],
            'nomadic group': [
                `which wanders $['the outstretched cold lakes', 'the arctic lakefronts', 'the chilling gravel beaches']`,
                `overwatching the elephant herds of $['snowy lakelands', 'harsh lakefronts', 'bitter cold lakesides']`,
                `that overlooks the greatnecks of $['the ice lakes of Hathia', 'the frigid lakewaters', 'the frozen lakefronts']`,
                `that follows the lion's trail through $['the cold lakeside forests', 'the frigid lakefronts', 'the icy lakelands']`
            ]
        },
        phrases: {
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
        provincePhrases: [
            'of',
            'in the heart of',
            'across'
        ]
    },
    'rolling storm plains': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'grassy hills': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- the Brolean Expanse ---*/
    'temperate rainforests': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'woodlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'fen glades': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- Delonian Hinn ---*/
    'deep forest riverlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'meadowlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'mossy shale valleys': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- New Scorth ---*/
    'craggy northlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'central farmlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'southern wetlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- the Weyell North ---*/
    'northern temperate hills': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'forest groves': {
        phrases: {
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
        provincePhrases: [
            'in'
        ]
    },
    'lakelands': {
        phrases: {
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
        provincePhrases: [
            'in'
        ]
    },
/*--- Northern Valadagal ---*/
    'cloudless hot deserts': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'lush southern dunes': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'clay fields': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- Mainland Schelk ---*/
    'warm woodlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'overcast gardens': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'rice paddies': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- New Voland ---*/
    'redwoods': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'hilly expanses': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'mild shrublands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- the Djenndan Protectorate ---*/
    'wide plains and foothills': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'temperate steppes': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'farmlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- coastal Bosen ---*/
    'olive forests': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'nut groves': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'mild coastlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'balmy seas': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- Siadagal ---*/
    'lush farmlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'fields': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'rainy coasts': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'summer storms': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- the forests of Creona ---*/
    'stormy woodlands': {
        phrases: {
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
        provincePhrases: [
            'in'
        ]
    },
    'rocky coasts': {
        phrases: {
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
        provincePhrases: [
            'among'
        ]
    },
    'lush river valleys': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- Plenith South ---*/
    'tropical coasts and forests': {
        phrases: {
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
        provincePhrases: [
            'in'
        ]
    },
    'rainforests': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'palm fields': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- Reviak Proper ---*/
    'steppes': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'flatlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'lightning stormlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'sandy plains': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- the Weyell Groves ---*/
    'temperate wetlands': {
        phrases: {
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
        provincePhrases: [
            'in'
        ]
    },
    'pine thrushes': {
        phrases: {
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
        provincePhrases: [
            'in'
        ]
    },
    'swamps': {
        phrases: {
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
        provincePhrases: [
            'southeast of'
        ]
    },
    'mangroves': {
        phrases: {
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
        provincePhrases: [
            'in'
        ]
    },
/*--- southwest Hinn ---*/
    'coastal wetlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'southern flatlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'eastern borderlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- the Schelk Islands ---*/
    'warm inlets': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'volcanic crags': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'coral reefs': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'sandy beaches': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- central Bosen ---*/
    'rocky highlands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'river valleys': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'terraced vine fields': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
/*--- the Northern Wilds ---*/
    'icy steppes': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'extreme hills': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'frozen forests': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    },
    'wastelands': {
        phrases: {
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
        provincePhrases: [
            'of'
        ]
    }
}