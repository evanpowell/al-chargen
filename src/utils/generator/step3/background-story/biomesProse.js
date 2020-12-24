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
                `tucked within $["the shaded spruces", "the whispering pines", "the grand evergreens"]`,
                `on the edge of $["the bright clearing", "the towering willows", "the spruce forests"]`,
                `near the $["spring fed spruces", "looming spruce forests", "calm flowing waters"]`,
                `deep within the $["spruce tree valleys", "dark spruce forests", "bright spruce forests"]`
            ],
            'village': [
                `tucked away in $["the shaded spruces", "the tall pines", "the grand evergreens"]`,
                `at the heart of $["the tall spruces", "the whispering willows", "the spruce forests"]`,
                `situated along the borders of $["the empty spruces", "the tall green groves", "sleepy pines"]`,
                `settled within the $["spruce tree valleys", "dark spruce forests", "bright spruce forests"]`
            ],
            'small town': [
                `in the heart of $["a spruce forest", "a dense network of pines", "a spruce forest clearing"]`,
                `located within the $["dense networks of spruce trees", "dense networks of evergreens", "spruce forests"]`,
                `situated just south of $["the bright spruces", "the spruce forests", "the shadowy spruce trees"]`,
                `found at the border of $["the central evergreens", "the twisting groves", "the great pines", "the watchful spruce trees"]`
            ],
            'large township': [
                `stretched throughout $["the ancient spruce trees", "the grand spruces", "the shady pines"]`,
                `found nestled in $["the flowing juniper fields", "the arable forests", "the dense evergreens"]`,
                `at the center of $["the great spruce forests", "the meandering forests", "the secluded spruce clearings"]`,
                `marking $["the far reaches of the hunting pines", "the entrance to the spruce forests", "the outer borders of the looming spruce forests"]`
            ],
            'small city': [
                `settled among $["the ancient spruce trees", "the whispering willows", "the shady pines"]`,
                `at the heart of $["the bright spruce forests", "the tall evergreens", "the spruce trees"]`,
                `beyond the valleys of $["the ancient evergreens", "the spring fed spruce trees", "the rolling spruce forests"]`,
                `found deep within $["the spruce forests", "the juniper fields", "the shaded spruces"]`
            ],
            'large city': [
                `thriving amid $["the ancient spruce trees", "the grand spruces", "the shady pines"]`,
                `located just beyond $["an ancient spruce grove", "the grand spruce trees", "the whispering pines"]`,
                `bordering $["the great spruce groves", "the windy pines", "the expansive evergreen forests"]`,
                `densely settled within $["the twisting pines", "the waving evergreens", "the great spruce forests"]`
            ],
            'diasporic group': [
                `settled in the opened clearings of $["the tall spruce trees", "the grand spruces", "the shaded pines"]`,
                `located among $["the whispering spruces", "the shaded willows", "the tall pines"]`,
                `found deep within $["the spruce forests", "the spruce valleys", "the lakeside groves"]`,
                `at the heart of $["the dark spruce groves", "the tall spruce hills", "the expansive spruce forests"]`
            ],
            'nomadic group': [
                `that travels among $["the sacred spruce trees", "the grand spruce hunting grounds", "the shaded evergreens"]`,
                `which traverses the ridge beyond $["the coniferous forests", "the spruce groves", "the fields of willow"]`,
                `that journeys through $["the serene spruce forests", "the sacred spruce shadows", "the shadowed forests"]`,
                `that hunts $["within the hallowed evergreens", "beyond the reaching willows", "among the spruce clearings"]`
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
                `centered within $["the expansive tundra", "the glacial tundra", "the grand tundra"]`,
                `overlooking $["the great tundra", "the cold steppes", "the expansive tundra"]`,
                `fortified upon $["the expansive tundra", "looming ice fields", "the great cold steppes"]`,
                `deep within $["the snow covered tundra", "the expansive tundra", "the brisk tundra"]`
            ],
            'village': [
                `settled in $["the stretching tundra", "the desolate tundra", "the wide tundra"]`,
                `among the standing rocks of $["the cold tundra", "the windy tundra", "the glacial expanse"]`,
                `situated within $["the dark tundra", "the endless tundra", "the expansive tundra"]`,
                `near the shrublands of $["the vast tundra", "the wide arctic tundra", "the snowy steppes"]`
            ],
            'small town': [
                `in the center of $["the forbidden tundra", "the expansive tundra", "the glacial clearings"]`,
                `located amid the $["wide expansive tundra", "cold ice fields", "vast steppes"]`,
                `resting within $["the clouded tundra", "the snowy steppes", "the glacial fields"]`,
                `found centered in the $["vast tundra", "icy and desolate steppes", "glacial wilderness", "expansive glaciers"]`
            ],
            'large township': [
                `stretched across $["the wide tundra", "the vast steppes", "the vast tundra"]`,
                `found nestled in $["the expansive tundra", "the stony steppes", "the dangerous glacial fields"]`,
                `adjacent to $["the great cold expanse", "the icy fields", "the expansive steppes"]`,
                `among the temperate grasses at $["the mouth of the jagged glaciers", "the entrance to vast tundra", "the edge of the windy steppes"]`
            ],
            'small city': [
                `on the lower plateaus of $["the vast tundra", "the endless rocky steppes", "the chilling expanse"]`,
                `beyond the treeline in $["the boundless tundra", "the frozen wastelands", "the vast steppes"]`,
                `beyond the cold valley in $["the endless tundra", "the wandering hotsprings", "the bitter arctic steppes"]`,
                `at the arctic edge of $["the vast frozen wastelands", "the endless steppes", "the expansive tundra"]`
            ],
            'large city': [
                `warming the ridge of the arctic edge of $["the shifting glaciers", "the grand steppes", "the vast tundra"]`,
                `located central to $["the windswept tundra", "the boundless steppes", "the expansive permafrost"]`,
                `at the glacier's edge of $["the salted hotsprings", "the vast permafrost", "the arctic steppes"]`,
                `still braving the cold winds of $["the clouded tundra", "the frozen wastelands", "the ice stone fields"]`
            ],
            'diasporic group': [
                `that long ago resettled in $["the forgiving tundra", "the open steppes", "the brisk tundra"]`,
                `just south of $["the scattered hotsprings", "the expansive tundra", "the boundless wastes"]`,
                `found hidden deep within $["the ice stone steppes", "the vast tundra", "the frozen fields"]`,
                `cresting the icy ridges of $["the endless permafrost", "the vast tundra", "the expansive steppes"]`
            ],
            'nomadic group': [
                `that wanders across $["the vast tundra", "the arctic permafrost", "the chilling steppes"]`,
                `that traverses $["the windswept steppes", "the harsh tundra", "the bitter cold glaciers"]`,
                `that hunts beyond the cold stones of $["the lifegiving permafrost", "the stone scattered steppes", "the sacred shrublands"]`,
                `that often camps within $["the cold green permafrosts", "the caribou steppes", "the icy tundra"]`
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
                `in the thick forests of $["the cold lakefronts", "the chilling lakes", "the arctic lakelands"]`,
                `situated close to $["the cold trout lakes", "the icy lakefronts", "the cold lakefronts"]`,
                `near the waters" edge of $["the frigid lakefronts", "the frigid lakelands", "the frozen fjords"]`,
                `found within $["the snow frosted lakes", "the cold lakefronts", "the windy cold lakes"]`
            ],
            'village': [
                `settled in $["the long lakefronts", "the frigid lakes", "the icy lakelands"]`,
                `established within the tall grasses of $["the cold lakefronts", "the windy ice lakes", "the ice covered lakes"]`,
                `beneath the vibrant trees in $["the frost covered lakefronts", "the bone chilling lakelands", "the frigid lakefronts"]`,
                `in the forests above $["the snowy lakefronts", "the arctic lakelands", "the crisp lakelands"]`
            ],
            'small town': [
                `central to $["the formidable cold lakes", "the cold lakefronts", "the glacier fed lakelands"]`,
                `located nearby the $["wide cold lakefronts", "cold lakes", "wild frostful lakelands"]`,
                `resting beside $["the flowing cold lakes", "the snow covered lakefronts", "the frigid lake waters"]`,
                `found amid the $["briarpatch lakesides", "desolate lakefronts", "tranquil lakelands", "icy lakelands"]`
            ],
            'large township': [
                `bordering the edge of $["the cold lakefronts", "the snow covered lakefronts", "the frost-filled lakelands"]`,
                `stretching across $["the cold lakefronts", "the icy lakelands", "the pale ice lakes"]`,
                `encompassed within $["the great cold lakelands", "the inhospitable lakefronts", "the harsh lakelands"]`,
                `surrounded by the temperate grasses at $["the heart of the cold lakelands", "the entrance to icy cold lakes", "the mouth of the trout lake waters"]`
            ],
            'small city': [
                `on the Tanethi greatbarges of $["the chilly lake waters", "the blue ice lakes", "the frigid lake waters"]`,
                `among $["the dark cold lakelands", "the frozen lakefronts", "the snow covered waterfronts"]`,
                `nestled within $["the cold blue lakes", "the placid lakelands", "the arctic lakefronts"]`,
                `near the icy waters of $["the crisp mountain lakes", "the frost lakes", "the cold lakefronts"]`
            ],
            'large city': [
                `central to $["the cold lakelands", "the cold lakefronts", "the great lakefronts", "the full trout lakes"]`,
                `located along $["the icy gravel beaches", "the frozen lake shores", "the arctic lakelands"]`,
                `in the hills above $["the frozen fjords", "the frigid lakelands", "the unforgiving ice lakes"]`,
                `overlooking $["the vast ice lakes", "the inhospitable lakelands", "the snowswept lakefronts"]`
            ],
            'diasporic group': [
                `that has made its home along $["the pale blue lakefronts", "the ice covered lake fields", "the frigid gravel beaches"]`,
                `that has settled on the ice beds of $["the frostful lakelands", "the cold lakefronts", "the snowy lakefronts"]`,
                `settled among $["the frost lakes", "the frozen trout lake waters", "the icy lakesides"]`,
                `that made a lasting home among $["the great frost lakes", "the fierce lakefronts", "the snow waters"]`
            ],
            'nomadic group': [
                `that traverses $["the outstretched cold lakes", "the arctic lakefronts", "the chilling gravel beaches"]`,
                `that hunts the elk rich, $["snowy lakelands", "harsh lakefronts", "bitter cold lakesides"]`,
                `that hunts beyond the cold stones of $["the ice lakes of Hathia", "the frigid lakewaters", "the frozen lakefronts"]`,
                `that often camps within $["the cold lakeside forests", "the frigid lakefronts", "the icy lakelands"]`
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
                `settled in the open ranges of $["the savannah grasslands", "the plains grasses", "the herding grasslands"]`,
                `situated nearby $["the windy northern grasses", "endless grassland hills", "the savannah grasslands"]`,
                `found within $["the wide open grasslands", "the wandering grasslands", "the expansive savannah"]`,
                `located amid $["the outstretched savannah", "the savannah grasslands", "the endless plains"]`
            ],
            'village': [
                `struck near the watering holes in $["the savannah grasslands", "the boundless grasslands", "the sprawling savannah"]`,
                `established within $["the savannah grasslands", "the windswept grasses", "the immense savannah"]`,
                `beneath the endless skies in $["the immense grasslands", "the savannah grasslands", "the wide open plains"]`,
                `along the Gangona ridge, north of $["the boundless savannah", "the flat grasslands", "the great plains"]`
            ],
            'small town': [
                `among the scattered trees of $["the great plains", "the savannah grasslands", "the outstretched grasses"]`,
                `located nearby the $["windswept plains", "boundless savannah", "endless grasslands"]`,
                `resting beside $["the vast, grasscovered flatlands", "the endless great plains", "the herding meadows"]`,
                `established at the epicenter of the $["tall grass plains", "rolling savannah", "vast meadows", "endless grasslands"]`
            ],
            'large township': [
                `edging the borders of $["the savannah grasslands", "the vast great plains", "the windswept meadows"]`,
                `outstretched across $["the savannah grasslands", "the great grassy plains", "the boundless savannah"]`,
                `surrounded by $["the far-reaching flatlands", "the endless flats", "the boundless grassland wilderness"]`,
                `ranging among the great herds of $["the vast savannah", "the immense flatlands", "the boundless plains"]`
            ],
            'small city': [
                `at the ancient boundaries of $["the great grassy meadows", "the endless savannah", "the vast flatlands"]`,
                `within the wide open $["savannah grasslands", "savannah", "plains", "flats", "flatlands"]`,
                `nestled in the endless rolling hills of $["the grass covered savannah", "the windy grasslands", "the vast savannah"]`,
                `near the scattered acacia trees of $["the expansive plains", "the whispering meadows", "the savannah grasslands"]`
            ],
            'large city': [
                `centrally located within $["the windswept plains", "the great flatlands", "the grass covered savannah"]`,
                `located amid the rise of the Gangona ridge in $["the grassy meadows", "the great plains", "the great savannah"]`,
                `found isolated among $["the windy savannah", "the whispering grasslands", "the expansive grasses"]`,
                `built in the north plains of $["the whispering meadows", "the boundless savannah, "the savannah grasslands"]`
            ],
            'diasporic group': [
                `within the lower oasis of $["the windy grasslands", "the expansive savannah", "the windswept meadows"]`,
                `marking the tall reeds of $["the flatland expanses", "the savannah grasslands", "the boundless flatlands"]`,
                `among the water catches of the $["the endless savannah", "the grass filled expanses", "the great plains"]`,
                `that found a sustainable home among $["the great plains", "the whispering meadows", "the windswept savannah"]`
            ],
            'nomadic group': [
                `which wanders $["the great plains", "the vast grasslands", "the windy savannah"]`,
                `overwatching the elephant herds of $["the outstretched grasslands", "the whispering meadows", "the wide open flatlands"]`,
                `that overlooks the greatnecks of $["the flat grasslands", "the boundless grass meadows", "the vast savannah"]`,
                `that follows the lion"s trail through $["the expansive flatlands", "the isolated grasslands", "the windy plains"]`
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
            'hamlet': [
                `settled in the dark expanses of $["the rolling storm plains", "the stormy plains", "the thundercast flats"]`,
                `situated within $["the thunderous storm plains", "harsh storm plains", "the rolling storm plains"]`,
                `found amid $["the bleak storm lands", "the stormy plains", "the lightning fields"]`,
                `located at the heart of $["the bitter storm plains", "the rolling storm plains", "the rough storm lands"]`
            ],
            'village': [
                `at the dark reaches of $["the rolling storm plains", "the thundercast flatlands", "the storm drenched flats"]`,
                `established in the thunderous $["rolling storm plains", "stormy hills", "storm plains"]`,
                `beneath the flashing skies of $["the tempestuous storm lands", "the rolling storm plains", "the dark storm plains"]`,
                `in the strikes of the cloud hills among $["the stormy reaches", "the storm lands", "the great storm lands"]`
            ],
            'small town': [
                `among the storm crystals of $["the lightning plains", "the rolling storm plains", "the thunderous expanses"]`,
                `located within the $["rainy storm plains", "expansive storm lands", "the rolling storm plains"]`,
                `resting along $["the edge of the storm plains", "the thunderous storm lands", "the tempestuous stormy hills"]`,
                `established in the south of the $["great storm lands", "storm flats", "rainy storm lands", "lightning flat lands"]`
            ],
            'large township': [
                `below the cloudhills of $["the storm drenched plains", "the vast storm plains", "the thundercast flats"]`,
                `outstretched across the shortwillows of $["the rolling storm plains", "the storm pressed lands", "the storm plains"]`,
                `surrounded by $["the far-reaching storm plains", "the tempestuous lightning flats", "the expansive storm lands"]`,
                `within the overcast $["rolling storm plains", "immense storm fields", "thunderclap plains"]`
            ],
            'small city': [
                `at the ancient boundaries of $["the great storm plains", "the thunderous storm fields", "the harsh storm lands"]`,
                `within the wide open $["and vast storm plains", "storm lands", "thundercast fields", "lightning flats", "and harsh storm plains"]`,
                `nestled in the endless rolling hills of $["the expansive storm lands", "the storm cast regions", "the storm lands"]`,
                `near the overcast fields of $["the great storm flats", "the expansive storm lands", "the rolling storm plains"]`
            ],
            'large city': [
                `sheltered amid $["the stormswept plains", "the stormy flatlands", "the vast rolling storm lands"]`,
                `central to $["the thunderous and harsh storm lands", "the rolling storm plains", "the storm plains"]`,
                `proudly bordering the cloudhills of $["the lightning fields", "the storm plains", "the expansive storm lands"]`,
                `situated within $["the harsh storm lands", "the tempestuous stormy regions, "the rolling storm plains"]`
            ],
            'diasporic group': [
                `in the heart of $["the rainy storm lands", "the thunderous storm fields", "the overcast storm plains"]`,
                `cloistered on $["the stormy flat lands", "the rolling storm plains", "the expansive lightning fields"]`,
                `spread out amid $["the great storm fields", "the thundercast flats", "the harsh storm plains"]`,
                `among the shortwillows of $["the lightning fields", "the rainy flat lands", "the rainy storm plains"]`
            ],
            'nomadic group': [
                `sprawled out across $["the great storm plains", "the unforgiving storm lands", "the stormswept rolling fields"]`,
                `gathered among $["the rolling storm plains", "the thunderous flat lands", "the wide open storm lands"]`,
                `that patrols $["the tempestuous storm plains", "the rainswept storm fields", "the thundercast flat lands"]`,
                `that chases the lightning across $["the expansive storm lands", "the harsh storm fields", "the stormy plains"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'grassy hills': {
        phrases: {
            'hamlet': [
                `resting upon the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "slopes"]`,
                `situated within $["the lush grassy hills", "the wide verdant slopes", "the verdant rise"]`,
                `nestled behind $["the rolling grassy hills", "the fertile slopes", "the verdant rise"]`,
                `located at the heart of $["the verdant hills", "the grassy hills", "the rolling grass covered hills"]`
            ],
            'village': [
                `in the fertile rise of $["the grassy hills", "the verdant hills", "the rolling hills"]`,
                `established in the expansive $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "slopes"]`,
                `among the fertile reaches of $["the lush hills", "the grassy hills", "the verdant slopes"]`,
                `in the restful, $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`
            ],
            'small town': [
                `among the arable stretches of the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "slopes"]`,
                `located along the fruitful $["and grassy hills", "and flourishing hills", "and arable slopes"]`,
                `resting within the abundant $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `established near the west of the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`
            ],
            'large township': [
                `in the shimmering reeds of the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `in the calm and $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `within the fertile $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `grounded within $["the grassy hills", "the arable slopes", "the calm and flowing hills"]`
            ],
            'small city': [
                `at the bright rich rise of the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `within the bountiful $["verdant hills", "grass hills", "and arable rolling hills", "and lush grassy hills", "grassy slopes"]`,
                `nestled in the arable reaches of the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `rising above the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`
            ],
            'large city': [
                `sheltered amid the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `central to the calm $["and bountiful grassy hills", "and verdant slopes", "restful rolling hills"]`,
                `overlooking the fertile reaches of the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `situated within the fruitful $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`
            ],
            'diasporic group': [
                `situated within $["the forgiving hills", "the plentiful grassy fields", "the misty, verdant hills"]`,
                `settled among the bountiful $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `spread out in the arable $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `gaining a foothold among the fertile, $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`
            ],
            'nomadic group': [
                `that travels across $["the great grass hills", "the fertile slopes", "the bountifull rolling hills"]`,
                `that hunts among the $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `which patrols the shimmering $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`,
                `that illuminates the great $["grassy", "verdant", "bountiful", "flourishing", "lush"] $["hills", "rise", "reaches", "slopes"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the Brolean Expanse ---*/
    "temperate rainforests": {
        phrases: {
            'hamlet': [
                `among the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `hidden within the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `nestled in the thickets beneath the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `located deep within the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ],
            'village': [
                `in the ancestral $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `established in the expansive $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `among the outstretched $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `in the shade of Kalmor"s hands beneath the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ],
            'small town': [
                `among the diverse canopies of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `shaded within the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `protected beneath the lush, $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `established far off among the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ],
            'large township': [
                `in the great canopies of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `crested in the thickets of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `protected by the looming $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `founded among the dense $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ],
            'small city': [
                `in the secluded clearings of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `amid the dense $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `hidden throughout the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `beneath the shaded canopies of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ],
            'large city': [
                `sheltered beneath the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `at the center of the dense $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `shadowed beneath the canopy of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `under the protection of the ancestors in the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ],
            'diasporic group': [
                `settled within the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `hidden among the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `that fled to the heart of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `rebuilding a community within the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ],
            'nomadic group': [
                `that hunts throughout the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `traversing in the grace of the ancestors through the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `that seeks the light of Kalmor within the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`,
                `that camps along the borders of the $["temperate", "balmy", "pleasant", "mild", "peaceful"] $["rainforests", "jungles", "and rainy forests", "rainy wilderness"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'woodlands': {
        phrases: {
            'hamlet': [
                `concealed among the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `bordering the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `nestled in the sylvan growth of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `located far within the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ],
            'village': [
                `in the ancestral clearings of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `established in the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `among the outstretched and $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `in the dimness of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ],
            'small town': [
                `among the breaking canopies of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `obscured within the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `protected beneath the secluded and $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `established far off among the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ],
            'large township': [
                `in the brush of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `covered within the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `guarded by the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `founded across the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ],
            'small city': [
                `in the secluded clearings of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `planted deep within $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `hidden throughout the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `nestled in the growth among the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ],
            'large city': [
                `within the dim brushes of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `at the center of the foreboding and $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `overlooking the clearings of the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `under the protection of the ancestors in the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ],
            'diasporic group': [
                `sequestered within the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `dependent on the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `that migrated within the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `guarded among the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ],
            'nomadic group': [
                `hunting among the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `guided by the deer among the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `seeking the night of Maros within the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`,
                `that camps throughout the $["dense", "shaded", "bleak", "dark", "austere", "dreary", "shadowed"] $["woodlands", "woods", "ancestral forests", "timberlands", "treelands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'fen glades': {
        phrases: {
            'hamlet': [
                `found prominent among the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `nearby the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `in the periphery of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `located beyond the northern edge of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ],
            'village': [
                `within the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `settled along the peat fields of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `amid the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `in the outer valleys of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ],
            'small town': [
                `settled in the heart of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `visible within the treeline arches of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `exposed in the south of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `established deep within the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ],
            'large township': [
                `on the firm grounds of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `stretched throughout the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `claiming vast territory across the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `established in the eastern regions of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ],
            'small city': [
                `beyond the treeline and deep within the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `above the waterways in the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `between the treeline arches of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `seated within the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ],
            'large city': [
                `settled among the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `rising above the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `found at the heart of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `rested within the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ],
            'diasporic group': [
                `at the center of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `settled amid the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `guided by Kalmor to the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `that repopulated among the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ],
            'nomadic group': [
                `that roams the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `that tracks the rivercats of the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `traversing the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`,
                `that treks across the $["life-giving", "lowland", "blissful", "aqueous", "emerald", "grand", "foggy"] $["fen glades", "wetlands", "marshlands", "marsh glades", "bogs", "fens", "glades", "moors"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- Delonian Hinn ---*/
    'deep forest riverlands': {
        phrases: {
            'hamlet': [
                `on the waterside coasts of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `adjacent to the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `amid the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `located along the banks of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ],
            'village': [
                `near the collecting ponds of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `settled along the banks of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `amid the reflecting pools of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `in the outer valleys of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ],
            'small town': [
                `settled in the heart of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `nestled within the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `in the heart of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `established deep within the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ],
            'large township': [
                `high above the scenic waterfalls of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `spread out along the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `beyond the valleys of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `established at the heart of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ],
            'small city': [
                `amid the shale rockfalls of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `beyond the banks of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `along the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `seated deep among the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ],
            'large city': [
                `settled atop the rocky falls of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `resting on the shale cliffs above the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `at the rocky edges of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `high above the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ],
            'diasporic group': [
                `nestled precariously along the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `along the waterside coasts of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `rebuilding a community within the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `that resettled along the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ],
            'nomadic group': [
                `that hunts the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `following the shale rocks of the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `traversing the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`,
                `that treks across the $["deep forest", "birch forest", "dark forest", "thick forest", "oak forest", "pine forest", "longleaf forest"] $["riverlands", "riverways", "claybeds", "waterways", "creeks", "tributaries", "riverlands", "streams"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'meadowlands': {
        phrases: {
            'hamlet': [
                `along the shrub willows in the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `adjacent to the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `amid the rolling $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `located roughly near the center of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ],
            'village': [
                `near the wildflower fields of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `nestled within the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `within the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `in the eastern stretches of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ],
            'small town': [
                `settled within view of the Deloni along the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `found at the edges of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `in the heart of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `central to the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ],
            'large township': [
                `east of the Deloni in the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `stretched across the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `across the rising $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `sparsely settled near the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ],
            'small city': [
                `situated within the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `at a distance from the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `amid the wildflower fields of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `located in the clearings of the central $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ],
            'large city': [
                `in the central $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `beyond the reaches of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `deep within the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `overlooking the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ],
            'diasporic group': [
                `that has established a settlement in the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `that migrated to the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `that is among the first generation to settle in the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `that resettled in the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ],
            'nomadic group': [
                `hunting in the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `traveling from border to border in the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `traversing the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`,
                `guarding the reaches of the $["rich", "vibrant", "colorful", "blossoming", "efflorescent", "herbaceous", "vast"] $["meadowlands", "meadows", "pastures", "prairies", "heaths", "gardens", "meadowlands", "highmeadows"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'mossy shale valleys': {
        phrases: {
            'hamlet': [
                `along the plainrock falls of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `nearby the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `amid the twisting $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `located among the ancient rock flows of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ],
            'village': [
                `concealed within the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `sequestered among the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `within the rock flows of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `among the eastern plainrocks of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ],
            'small town': [
                `settled beyond the plainrocks along the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `out among the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `in the central region of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `beyond the plainrocks and near the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ],
            'large township': [
                `along the plainrocks of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `established in the heart of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `stretching across the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `densely populated within the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ],
            'small city': [
                `beneath the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `beyond the waterfalls of the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `springing from the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `clinging to the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ],
            'large city': [
                `perched on the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `central to the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `settled above the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `overlooking the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ],
            'diasporic group': [
                `that has established a sustainable community within the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `situated within the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `proudly relocated to the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `claiming sovereignty among the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ],
            'nomadic group': [
                `that fishes along the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `that travels north each year to the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `that camps among the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`,
                `that traverses the $["mossy", "plentiful", "breathtaking", "mossgrown", "overgrown", "covered", "mossy", "soggy"] $["shale valleys", "shale gorges", "gorges", "river valleys", "stone gorges", "shale channels", "ancient river gorges", "shale beds"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- New Scorth ---*/
    'craggy northlands': {
        phrases: {
            'hamlet': [
                `lighting the borders of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `located nearby the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `founded amid the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `settled within view of the red rock mines in the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ],
            'village': [
                `languishing in the granite wastes of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `settled by Es"ahn soothsayers in the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `within the south of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `subsisting on the berry greens of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ],
            'small town': [
                `chiseled from the edges of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `found along the extreme hills of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `near the central mines of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `within earshot of the salt mines of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ],
            'large township': [
                `bordering the salt mines of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `established with the mines of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `settled throughout the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `sparsely settled within the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ],
            'small city': [
                `within the sharp shadows of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `beyond the far rise of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `carved into the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `mining the granite beds of the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ],
            'large city': [
                `peering out over the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `embedded deep within the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `seated in the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `overlooking the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ],
            'diasporic group': [
                `relocated to the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `that resettled among the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `which fled to the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `that settled above the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ],
            'nomadic group': [
                `that journeys through the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `that wanders throughout the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `herding goats in the steep $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`,
                `that traverses the ancestral hunting grounds within the $["craggy", "rugged", "jagged", "cragged", "rocky", "bouldered", "harsh", "craggy"] $["northlands", "mountains", "ridgelines", "peaks", "orelands", "deposits", "ridgelands", "northlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'central farmlands': {
        phrases: {
            'hamlet': [
                `resting in the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `joined to the mushroom fields of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `isolated at the edges of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `found within a stone"s throw of the great estates in the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ],
            'village': [
                `thriving in the harvests of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `modestly settled in the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `located amid the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `subsisting on the berry greens of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ],
            'small town': [
                `settled along the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `found along the terraces of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `in the margins of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `that flanks the estates of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ],
            'large township': [
                `at the crossings of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `across the great fields of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `bordering the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `carefully demarcated along the borders of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ],
            'small city': [
                `situated within the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `settled in the middle of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `bordering the great estates of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `located in the fields of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ],
            'large city': [
                `looking out over the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `at the forks north of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `fostered within the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `planted in the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ],
            'diasporic group': [
                `located at the midway of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `that relocated to the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `indentured to the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `rebuilding a community among the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ],
            'nomadic group': [
                `traversing the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `patrolling the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `that guards the borders of the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`,
                `that wanders the periphery of the settlements in the $["assiduous", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "laboring", "well tended"] $["central farmlands", "central farms", "local farmlands", "midway farms", "interior farmlands", "inland farms", "heartlands", "central farmlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'southern wetlands': {
        phrases: {
            'hamlet': [
                `recently settled within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `nestled within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `bordering the villages of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `found within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ],
            'village': [
                `that dances in the reeds of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `flourishing in the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `found peeking through the reeds of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `in the far stretches of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ],
            'small town': [
                `settled within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `found along water's edge of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `tucked away in the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `at the edge of the reeds surrounding the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ],
            'large township': [
                `flourishing with the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `sprouting from the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `resting within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `along the boundaries of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ],
            'small city': [
                `growing out from the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `at the water's edge in the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `springing from the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `located in the fields of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ],
            'large city': [
                `looking out over the waters of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `along the reed beds of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `overlooking the water's edge within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `centered within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ],
            'diasporic group': [
                `isolated within the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `fleeing persecution in the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `safeguarding their culture among the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `relocated to the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ],
            'nomadic group': [
                `traversing the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `guarding the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `guided through the reeds of the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`,
                `traveling north to south across the $["grassy", "sustainable", "seasonal", "marshy", "cool", "muddy", "pristine", "pure"] $["southern wetlands", "southern glades", "southern sloughs", "southern quags", "austral wetlands", "austral marshes", "sloughs", "wetlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the Weyell North ---*/
    'northern temperate hills': {
        phrases: {
            'hamlet': [
                `flourishing for generations within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `hidden within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `cloistered at the edge of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `found within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ],
            'village': [
                `that keeps the flame of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `keeping its fires in the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `erected among the stones of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `bordering the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ],
            'small town': [
                `established in the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `settled humbly beyond the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `deep within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `near the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ],
            'large township': [
                `struggling within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `resting upon the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `stretching across the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `at the outer boundaries of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ],
            'small city': [
                `sustaining within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `ingrained in the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `rising up from the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `centrally positioned within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ],
            'large city': [
                `illuminating the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `along the rocky rise of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `overlooking the standing rocks of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `centered within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ],
            'diasporic group': [
                `rebuilding a community within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `that was relocated to the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `that fled to the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `prominent within the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ],
            'nomadic group': [
                `well known in the regions of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `well traveled throughout the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `prominent among the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`,
                `guarding the sacred hunting grounds of the $["northern", "rocky", "demanding", "extreme", "rugged", "scattered", "northern", "seasonal"] $["temperate hills", "sloping hills", "temperate rise", "hilltop forests", "temperate timberline", "temperate hilltops", "timberline hilltops", "temperate hills"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'forest groves': {
        phrases: {
            'hamlet': [
                `shrouded in the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `deep among the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `cloistered at the heart of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `found among the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ],
            'village': [
                `that fishes in the cool brooks of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `that was established within the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `found beyond the briars of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `in the south of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ],
            'small town': [
                `milling the logs of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `settled far away in the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `standing among the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `within the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ],
            'large township': [
                `struggling within the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `resting upon the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `stretching across the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `at the outer boundaries of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ],
            'small city': [
                `sustaining within the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `ingrained in the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `rising up from the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `cloistered within the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ],
            'large city': [
                `overlooking the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `secluded in the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `sheltered in the garden clearings of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `sequestered within the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ],
            'diasporic group': [
                `interspersed among the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `that resettled among the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `that fled to the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `hidden within the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ],
            'nomadic group': [
                `wandering through the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `hunting among the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `who patrols the perimeter of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`,
                `that serves as the guardian of the $["whispering", "isolated", "tranquil", "cool", "murmuring", "pastoral", "peaceful", "whispering"] $["forest groves", "shaded groves", "fir groves", "evergreen forests", "cedar groves", "tall cedars", "evergreen groves", "forest groves"]`
            ]
        },
        provincePhrases: [
            'in'
        ]
    },
    'lakelands': {
        phrases: {
            'hamlet': [
                `out among the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `deep within the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `in a cluster of settlements among the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `found thriving within the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ],
            'village': [
                `that watches over the north waters of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `that predates the Empire within the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `in the reaches of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `in the central forest of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ],
            'small town': [
                `flourishing among the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `growing within the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `central to the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `newly settled within the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ],
            'large township': [
                `marking the borders of the old kingdom in the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `with deep ancestral ties in the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `sparsely populated among the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `in the west of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ],
            'small city': [
                `fishing the waters of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `ingrained in the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `rising up from the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `cloistered within the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ],
            'large city': [
                `located at the shores of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `standing within the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `at the shores of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `populating the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ],
            'diasporic group': [
                `well known throughout the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `relocated to the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `at the shores of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `rebuilding among the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ],
            'nomadic group': [
                `wandering throughout the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `that hunts throughout the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `that guards the perimiter of the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`,
                `that traverses the $["plentiful", "bountiful", "widespread", "placid", "rich", "serene", "prosperous", "lush"] $["lakelands", "lochs", "lakes", "basins", "spring fed lakes", "lakelands", "inland waterways", "central lakes"]`
            ]
        },
        provincePhrases: [
            'in'
        ]
    },
/*--- Northern Valadagal ---*/
    'cloudless hot deserts': {
        phrases: {
            'hamlet': [
                `found stranded within the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `settled in the unforgiving, $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `in a cloister of aquifers among the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `found baking within the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ],
            'village': [
                `built among the lower dunes of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `braving the sands of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `in the only shaded locality of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `near the Moghul wells in the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ],
            'small town': [
                `defying the harsh climate of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `cursed to be within the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `bordering the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `baking in the sun of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ],
            'large township': [
                `sprawled throughout the edge of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `located south of the Moghul regions of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `sparsely populated among the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `in the west of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ],
            'small city': [
                `in the dusty and $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `in the wastes of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `in the wilds of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `isolated within the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ],
            'large city': [
                `looking out over the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `that is bermed within the rocky dunes of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `sequestered in the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `that stands as a central beacon within the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ],
            'diasporic group': [
                `centered in the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `defiantly settled out among the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `that was banished to the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `reclaiming a foothold in the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ],
            'nomadic group': [
                `traversing the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `that hunts the roaming sandsnakes of the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `leading travelers across the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`,
                `that traverses the $["cloudless", "azure", "barren", "desolate", "lifeless", "cloudless", "rainless", "parched", "arid"] $["hot deserts", "scorching deserts", "blistering deserts", "fiery wastelands", "fiery deserts", "hot deserts", "scorching dunes", "fiery wastes"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'lush southern dunes': {
        phrases: {
            'hamlet': [
                `located within the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `isolated on the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `located near the flowering cacti of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `gathered in the midst of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ],
            'village': [
                `settled long ago in the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `thriving in the white sands of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `at the heart of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `near the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ],
            'small town': [
                `farming the cactus of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `settled deep in the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `nestled in the sunsets of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `sustaining itself in the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ],
            'large township': [
                `bordering the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `spread across the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `sparsely populated among the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `among the Moghul clanships of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ],
            'small city': [
                `in the dusty and $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `in the wastes of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `in the wilds of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `isolated within the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ],
            'large city': [
                `cresting the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `overlooking the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `bordering the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `that thrives among the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ],
            'diasporic group': [
                `rebuilding among the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `settled atop the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `that reclaimed their ancestral homeland in the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `forging a new community out in the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ],
            'nomadic group': [
                `guarding the monuments across the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `navigating the bleached sands of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `traversing the rifts of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`,
                `traversing the dunes of the $["lush", "delightful", "opulent", "rich", "ornate", "blooming", "lush", "lively"] $["southern dunes", "southern badlands", "south barchans", "southern oasis", "south dunes", "lower dunes", "desert hills", "bromeliad hills"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'clay fields': {
        phrases: {
            'hamlet': [
                `near the mines in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `set out on the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `located among the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `found exposed near the trenches of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ],
            'village': [
                `situated within the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `located far out in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `panning at the edge of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `still stuck within the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ],
            'small town': [
                `that remains productive in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `settled in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `central to the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `of miners in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ],
            'large township': [
                `marking the edge of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `dependent on the resources in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `stretched across the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `among the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ],
            'small city': [
                `within the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `dependent on the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `grounded in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `settled beneath the gas clouds of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ],
            'large city': [
                `that oversees operations in the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `that looms above the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `in the mists of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `resting on the mines of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ],
            'diasporic group': [
                `relocated to the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `cursed to mine the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `hoping to rebuild among the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `indentured to the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ],
            'nomadic group': [
                `that wades along the perimiter of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `that hunts north along the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `that traverses the corridors of the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`,
                `that searches for the Moghul secrets buried within the $["turbid", "smoggy", "thick", "immense", "murky", "polluted", "dismal", "contaminated", "gloomy"] $["clay fields", "clay deposits", "mineral fields", "clay quarries", "clay pits", "clay quagmires", "mineral deposits", "ore fields"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- Mainland Schelk ---*/
    'warm woodlands': {
        phrases: {
            'hamlet': [
                `resting in the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `gathered among the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `located in the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `founded by the common tribes of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ],
            'village': [
                `founded within the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `located beyond the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `in the central groves of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `sequestered among the hill tribes of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ],
            'small town': [
                `settled among the nobles of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `founded ages ago in the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `secluded within the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `of millers in the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ],
            'large township': [
                `within the humid clearings of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `well established in the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `bordering the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `far among the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ],
            'small city': [
                `basking in the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `cast among the nobility of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `among the long-eared fox of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `in the central clearings of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ],
            'large city': [
                `among the privileged $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `within the noble $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `that stems from the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `that branches from the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ],
            'diasporic group': [
                `relocated among the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `thriving deep within the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `claiming their noble birthright among the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `inheriting the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ],
            'nomadic group': [
                `that hunts in the shade of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `that camps along the borders of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `from one of the foraging tribes of the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`,
                `that follows the gray fox across the $["warm", "gentle", "sunny", "radiant", "bright", "crimson", "sunlit", "shining", "luminous", "warm"] $["woodlands", "woods", "oak forests", "wealdlands", "timberlands", "oak thickets", "oaky groves", "woodlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'overcast gardens': {
        phrases: {
            'hamlet': [
                `planted within the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `huddled in the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `located in the isolated spaces of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `newly settled in the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ],
            'village': [
                `founded in the wildflower fields of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `located within the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `in the outer edges of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `settled among the central streams of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ],
            'small town': [
                `settled within the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `along the windy path to the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `beneath the skies of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `located far out in the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ],
            'large township': [
                `across the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `in the open spaces of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `within the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `that sets the boundary of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ],
            'small city': [
                `blooming within the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `flourishing within the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `illuminating the central streams of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `that stems from the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ],
            'large city': [
                `that rises above the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `that overlooks the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `along the central streams of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `that borders the wildflowers of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ],
            'diasporic group': [
                `indentured within the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `tending to the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `relocated to the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `rebuilding a fractured community among the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ],
            'nomadic group': [
                `that hunts under the low clouds of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `that traverses the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `that thrives from foraging across the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`,
                `that hides in the mists of the $["overcast", "gloomy", "dreary", "hazy", "foggy", "misty", "gray", "grim", "overcast"] $["gardens", "meadows", "fields", "wildgardens", "acres", "pastures", "grassy fields", "gardens"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'rice paddies': {
        phrases: {
            'hamlet': [
                `growing within the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `gathered in the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `sprouting in the waters of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `settled long ago among the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ],
            'village': [
                `founded in the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `located among the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `in the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `in the lengthy stretch of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ],
            'small town': [
                `settled among the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `in the shadow of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `beneath the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `settled along the waters of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ],
            'large township': [
                `bordering the wide reaching $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `across the expansive and $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `under noble purview within the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `along the northern rise of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ],
            'small city': [
                `crucial to the success of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `subsisting on the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `soaking in the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `sequestered within the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ],
            'large city': [
                `central to the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `protecting the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `thriving within the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `standing among the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ],
            'diasporic group': [
                `that lives within the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `indentured in the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `that has been integral to the development of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `that cultivates a new community among the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ],
            'nomadic group': [
                `that travels between the warm woodlands and the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `that camps in the reach north of the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `that traverses the seasonal $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`,
                `that hunts beyond the $["glistening", "terraced", "cultivated", "verdant", "fertile", "silken", "soggy", "numerous", "terraced"] $["rice paddies", "paddy fields", "rice fields", "flooded fields", "corm paddies", "crop fields", "crop paddies", "rice paddies"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- New Voland ---*/
    'redwoods': {
        phrases: {
            'hamlet': [
                `branching out at the edge of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `obscured among the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `within the ancient and $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `at the heart of the ancestral cloister of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ],
            'village': [
                `canopied beneath the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `formed deep within the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `settled far out among the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `nestled within the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ],
            'small town': [
                `shadowed by the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `carved from the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `beneath the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `located among the treetops of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ],
            'large township': [
                `surrounded by the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `spanning the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `that serves as the southern border of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `along the western edge of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ],
            'small city': [
                `hidden within the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `in the shadows of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `in the thick of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `hanging from the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ],
            'large city': [
                `central among the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `protected by the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `located under the canopy of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `standing at the center of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ],
            'diasporic group': [
                `sequestered within the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `hidden within the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `branching among the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `rebuilding amid the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ],
            'nomadic group': [
                `that hunts throughout the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `who are the guardians of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `that camps along the borders of the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`,
                `that tracks through the $["looming", "massive", "great", "giant", "colossal", "mammoth", "enormous", "immense", "gigantic"] $["redwoods", "sequoias", "redwealds", "densewealds", "greatwoods", "thickwoods", "redwoods", "redwealds"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'hilly expanses': {
        phrases: {
            'hamlet': [
                `gathered within the thickets of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `exposed out on the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `within the vast and $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `found along the northern rise of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ],
            'village': [
                `resting within the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `founded at the heart of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `settled long ago in the wide and $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `cloistered at the edge of the vast and $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ],
            'small town': [
                `based in the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `stationed at the mouth of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `centrally located within the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `found within the rocky and $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ],
            'large township': [
                `draped across the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `across the reaches of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `that spans the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `that marks the boundary into the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ],
            'small city': [
                `that is resting in the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `situated within the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `at the mouth of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `in the depths of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ],
            'large city': [
                `crowning the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `looking out over the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `located far within the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `standing in the north of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ],
            'diasporic group': [
                `embedded in the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `bermed in the edges of the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `relocated among the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `hiding in the desolate and $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ],
            'nomadic group': [
                `that crosses the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `that guards the vast and $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `that hunts within the rugged and $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`,
                `that tracks through the $["hilly", "rolling", "sloping", "rugged", "mountainous", "hilly", "craggy", "rocky", "highland"] $["expanses", "wilderness", "cairns", "cliffs", "rise", "wilds", "expanses", "steppes"]`
            ]
        },
        provincePhrases: [
            'of',
            'of central',
            'in the central region of'
        ]
    },
    'mild shrublands': {
        phrases: {
            'hamlet': [
                `located near the tree cloisters of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `found along the seasonal rivers of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `located in $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `settled within the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ],
            'village': [
                `resting beneath the stars within the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `located out along the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `newly founded in the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `found within the wide open, $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ],
            'small town': [
                `occupying the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `out in the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `settled within the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `found in the wide-stretching, $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ],
            'large township': [
                `in the midst of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `spanning the great herds of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `bordering the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `found at the gateway to the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ],
            'small city': [
                `central to the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `situated among the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `at the heart of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `at the pale reaches of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ],
            'large city': [
                `standing above the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `in the midst of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `towering above the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `bordering the brown brush of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ],
            'diasporic group': [
                `situated among the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `that fled to the sparse edges of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `recreating their fractured community within the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `exiled into the central regions of the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ],
            'nomadic group': [
                `that forages across the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `that gathers seasonally from north to south among the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `that tracks the antelope through the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`,
                `that follows the winds across the $["mild", "breezy", "mellow", "warm", "gentle", "rolling", "peaceful", "mild", "vast"] $["shrublands", "prairies", "grasslands", "shrubscapes", "bushlands", "outback", "chaparral", "shrublands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the Djenndan Protectorate ---*/
    'wide plains and foothills': {
        phrases: {
            'hamlet': [
                `set under Swuskwah's guidance in the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `found near the mountain streams in the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `located out among $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `cloistered in the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ],
            'village': [
                `in the north of the vast and $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `located in the north of the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `settled among the herders of the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `set out in the vast, $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ],
            'small town': [
                `tucked away in the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `located deep within the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `among an isolated group of settlements in the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `beyond the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ],
            'large township': [
                `located amid the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `founded among the northgrasses of the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `at the mountainous rise among the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `bounded across the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ],
            'small city': [
                `in the Central Corridor beneath the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `out among the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `beyond the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `lost out among the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ],
            'large city': [
                `standing upon the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `fortified within the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `situated between the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `isolated out on the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ],
            'diasporic group': [
                `restoring their ancestral community in the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `relocated to the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `scattered across the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `spawned from refugees who fled beyond the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ],
            'nomadic group': [
                `that travels between the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `that hunts beyond the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `that follows the path of Swuskwah through the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`,
                `that follows winds north through the $["wide", "expansive", "immense", "ranged", "wide-ranging", "rolling", "ample", "far-reaching", "wide"] $["plains and foothills", "piedmont", "mountain foothills", "upland foothills", "upland jumphills", "foothill rise", "piedmont rise", "plains and foothills"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'temperate steppes': {
        phrases: {
            'hamlet': [
                `huddled in the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `settled in the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `scattered out among the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `within the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ],
            'village': [
                `set out among the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `founded by miscreants in the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `overlooking the ancestral lakes of the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `gathered at the heart of the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ],
            'small town': [
                `found deep within the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `settled at the reaches of the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `in the wilds of the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `located among the rocky boundaries of the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ],
            'large township': [
                `bordering the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `at the gateway to the wilds in the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `begotten of the patriarchs in the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `famed among the houses of the Totality in the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ],
            'small city': [
                `blessed by the gods of the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `honored among the patriarchs of the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `found in the grand, $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `cast out in the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ],
            'large city': [
                `erected within the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `fortified atop the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `central to the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `settled within the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ],
            'diasporic group': [
                `that emigrated to the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `forging a lasting hold within the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `recently relocated to the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `cast out beyond the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ],
            'nomadic group': [
                `that guides travelers to the wall beyond the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `that hunts through the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `that traverses the wide, $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`,
                `that follows the buffalo across the $["temperate", "seasonal", "brisk", "icy", "great", "windy", "stone covered", "open", "temperate"] $["steppes", "plateaus", "grasslands", "basin", "flats", "steppes"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'farmlands': {
        phrases: {
            'hamlet': [
                `grounded in the labors of the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `planted within the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `settled out among the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `dependent on the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ],
            'village': [
                `working within the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `founded in the old ways near the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `of patriarchs who work in the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `located in the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ],
            'small town': [
                `resolved to the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `historically found in the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `that works the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `located beyond the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ],
            'large township': [
                `spread across the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `central to the operations of the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `located where the waters meet the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `in the apex of the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ],
            'small city': [
                `bound to the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `set within the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `located beyond the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `settled in the center of the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ],
            'large city': [
                `fortified above the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `neighboring the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `oathbound to the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `overseeing operations in the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ],
            'diasporic group': [
                `indentured to labor within the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `put to work among the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `relocated to the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `newly planted in the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ],
            'nomadic group': [
                `that camps north of the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `that traverses the hills north of the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `that guards the laborers among the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`,
                `that depends on the seasonal cultivation of the $["fertile", "sustainable", "arable", "cultivated", "crop-bearing", "productive", "abundant", "rich", "cultivated"] $["farmlands", "acreage", "landscapes", "fields", "country", "farm fields", "cropfields", "farmlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- coastal Bosen ---*/
    'olive forests': {
        phrases: {
            'hamlet': [
                `growing within the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `in the shade of the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `resting in the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `aligned with the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ],
            'village': [
                `working within the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `settled near the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `out in the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `in the hills surrounding $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ],
            'small town': [
                `nestled within the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `located in the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `standing with the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `found beyond the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ],
            'large township': [
                `demarcating the boundaries of the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `that harvests the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `spanning the hills beneath the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `at the boundary of the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ],
            'small city': [
                `planted among the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `next to the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `overlooking the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `just beyond the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ],
            'large city': [
                `vital to the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `dependent on the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `caretaking the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `amid the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ],
            'diasporic group': [
                `rebuilding a community within the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `relocated to the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `tending to the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `scattered out among the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ],
            'nomadic group': [
                `that camps amid the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `foraging across the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `that camps beyond the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`,
                `that migrates each season beyond the $["aromatic", "pungent", "plump", "savory", "green", "red", "black", "fragrant", "sweet"] $["olive forests", "olive orchards", "caper forests", "caper fields", "olive farms", "olive hills", "caper farms", "olive forests"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'nut groves': {
        phrases: {
            'hamlet': [
                `scattered among the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `in the shade of the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `nestled in the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `hidden within the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ],
            'village': [
                `laboring along the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `gathered near the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `far beyond the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `deep in the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ],
            'small town': [
                `packed within the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `found among the architectural marvels within the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `settled amid the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `found within the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ],
            'large township': [
                `that marks the breadth of the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `that borders the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `encompassing the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `along the edge of the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ],
            'small city': [
                `ritually dependent on the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `next to the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `overlooking the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `just beyond the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ],
            'large city': [
                `central to the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `shaped by the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `watching over the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `that serves the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ],
            'diasporic group': [
                `centered within the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `tasked with caretaking the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `that remains hidden among the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `that has become vital to the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ],
            'nomadic group': [
                `that travels between the beaches and the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `that forages south along the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `that hunts the falcon's trail in the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`,
                `that patrols the perimeter of the $["earthy", "peppery", "life-giving", "plentiful", "mellow", "delicate", "large", "oily", "waxy"] $["nut groves", "nut trees", "nut forests", "almond groves", "beech groves", "hazelnut groves", "walnut groves", "nut groves"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'mild coastlands': {
        phrases: {
            'hamlet': [
                `central to the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `well within the boundaries of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `constructed along the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `deep within the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ],
            'village': [
                `at the horizons of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `out beyond the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `within view of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `of fishers along the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ],
            'small town': [
                `historically settled in the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `positioned centrally in the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `found along the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `sustaining itself in the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ],
            'large township': [
                `that divides the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `that borders the sands of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `stretching across the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `inland from the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ],
            'small city': [
                `located along the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `near the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `at the waters' edge in the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `thriving as a heritage community among the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ],
            'large city': [
                `full of ancient architecture and located in the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `isolated upon the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `resting along the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `overlooking the shores of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ],
            'diasporic group': [
                `that emigrated to the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `forging a new society at the edge of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `that was forcibly relocated to the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `that long ago settled the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ],
            'nomadic group': [
                `that floats the water's edge of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `that sails the outer rocks of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `that depends on the water fowl of the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`,
                `that traverses the tides across the $["mild", "balmy", "peaceful", "calm", "mellow", "breezy", "tropical", "salt wind", "mild"] $["coastlands", "coasts", "coastal regions", "shorelines", "shores", "coastlines", "coasts", "coastlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'balmy seas': {
        phrases: {
            'hamlet': [
                `floating off the coast in the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `beyond reach of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `settled nearby the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `next to the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ],
            'village': [
                `afloat on the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `looking out across the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `at the edge of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `at the fishing docks of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ],
            'small town': [
                `settled ages ago in the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `greeting the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `within the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `floating near the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ],
            'large township': [
                `adjacent to the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `that enters the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `divided by the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `navigable by the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ],
            'small city': [
                `along the beachhead of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `within view of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `located adjacent to the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `struggling in the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ],
            'large city': [
                `found near the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `overlooking the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `bordering the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `at the mouth of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ],
            'diasporic group': [
                `among the coastal docks of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `that fled to the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `that relocated on the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `that now represents one of the largest fishing communities of the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ],
            'nomadic group': [
                `that sails the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `that navigates the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `that traverses the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`,
                `that patrols the $["balmy", "tropical", "blissful", "humid", "equatorial", "warm", "tropical", "tropical", "balmy"] $["seas", "lagoons", "ocean pools", "tidal ponds", "swells", "crests", "seas", "lagoons"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- Siadagal ---*/
    'lush farmlands': {
        phrases: {
            'hamlet': [
                `in the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `found in the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `settled ages ago in the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `growing in the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ],
            'village': [
                `in the open center of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `among the free centers of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `within the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `at the commerce edge of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ],
            'small town': [
                `newly settled in the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `contributing to the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `recently constructed in the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `situated in proximity to the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ],
            'large township': [
                `consisting of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `bordering the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `separated by the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `devoted to the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ],
            'small city': [
                `found at the heart of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `overlooking the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `in the reaches of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `flourishing in the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ],
            'large city': [
                `standing above the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `located within the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `amid the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `along the leg of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ],
            'diasporic group': [
                `that is indentured to the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `relocated to the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `that rebuilt among the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `crucial to the sustainability of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ],
            'nomadic group': [
                `that camps north of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `that guards the delicate and $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `that migrates through the winters of the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`,
                `that keeps its distance from the $["lush", "fertile", "plentiful", "abundant", "bounteous", "bountiful", "productive", "fruitful", "lush"] $["farmlands", "farming fields", "orchards", "vineyards", "crop lands", "estates", "plantations", "farmlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'fields': {
        phrases: {
            'hamlet': [
                `found in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `hidden in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `closed off in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `cloistered on the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ],
            'village': [
                `in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `among the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `on the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `nearby the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ],
            'small town': [
                `located in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `found among the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `stagnated in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `close to the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ],
            'large township': [
                `sequestered within the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `still honoring the old kingdom boundaries of the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `marking the edge of the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `stretching across the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ],
            'small city': [
                `at the gathering of the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `that peers out on the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `that hearkens to the old kingdoms in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `long ago settled in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ],
            'large city': [
                `in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `above the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `amid the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `central within the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ],
            'diasporic group': [
                `that is planted in the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `scattered across the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `that emigrated to the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `that has a fortified hold in the center of the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ],
            'nomadic group': [
                `that ranges across the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `traversing across the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `herding along the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`,
                `that hunts beyond the $["open", "lonely", "wide", "grassy", "vast", "lonesome", "flowing", "rolling", "grassy"] $["fields", "landscapes", "lands", "meadows", "prairies", "grasslands", "plains", "fields"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'rainy coasts': {
        phrases: {
            'hamlet': [
                `in the caves along the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `sheltered in the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `huddled on the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `settled on the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ],
            'village': [
                `on the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `within the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `at the heart of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `within view of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ],
            'small town': [
                `settled on the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `central to the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `providing shelter on the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `near the water flows of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ],
            'large township': [
                `bridging the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `at the intersection of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `near the borders of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `in the inland flows of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ],
            'small city': [
                `on the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `under the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `overlooking the caves of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `situated at the edge of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ],
            'large city': [
                `within the winds of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `standing within the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `providing shelter in the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `standing over the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ],
            'diasporic group': [
                `in the craggy and $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `relocated to the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `that fled to the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `scattered along the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ],
            'nomadic group': [
                `that hunts across the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `that serves as the roaming caretakers of the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `that traverses the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`,
                `that moves across the $["rainy", "storm-ridden", "storm-soaked", "rain-soaked", "gloomy", "precipitous", "rain-drenched", "stormy", "rainy"] $["coasts", "shorelines", "gravel beaches", "coastlines", "shores", "coastal region", "coast", "coasts"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'summer storms': {
        phrases: {
            'hamlet': [
                `at the edges of the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `standing among the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `gathered for the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `basking in the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ],
            'village': [
                `thriving among the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `settled in the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `at the borders of the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `amid the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ],
            'small town': [
                `settled past the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `apart of the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `located among the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `found at the brink of the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ],
            'large township': [
                `marking the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `within the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `beyond the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `at the heart of the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ],
            'small city': [
                `resting beneath the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `beyond the clearings of the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `out under the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `settled long ago within the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ],
            'large city': [
                `at the evocation of the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `central to the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `watching over the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `that grew from the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ],
            'diasporic group': [
                `central to the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `rebuilding among the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `that fled south beyond the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `reclaiming their ancestral homeland on the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ],
            'nomadic group': [
                `traversing the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `that hunts amid the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `that guides travelers across the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`,
                `that moves through the $["calm", "pleasant", "lulling", "peaceful", "relaxing", "reliable", "drizzling", "serene", "calm"] $["summer storms", "summer rains", "seasonal storms", "seasonal rains", "summer showers", "Bailiean rains", "summer mists", "summer storms"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the forests of Creona ---*/
    'stormy woodlands': {
        phrases: {
            'hamlet': [
                `spread out among the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `huddled in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `located amid the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `within the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ],
            'village': [
                `set among the collecting ponds of the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `protected among the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `far out in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `deep amid the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ],
            'small town': [
                `beyond the rise in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `collected in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `sheltered in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `set out in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ],
            'large township': [
                `stretching across the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `found amid the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `just beyond the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `segmenting the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ],
            'small city': [
                `beneath the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `beyond the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `settled in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `found within the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ],
            'large city': [
                `in the sanctuary of the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `sheltered in the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `watching over the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `that stands within the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ],
            'diasporic group': [
                `relocated to the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `that recently emigrated to the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `that long ago resettled among the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `resettled on the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ],
            'nomadic group': [
                `traversing the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `that follows the winds through the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `that guards the trees throughout the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`,
                `that travels through the $["stormy", "overcast", "cloudy", "dreary", "weathered", "misty", "foggy", "overcast", "cloudy"] $["woodlands", "woods", "bosk", "thickets", "groves", "brambles", "woods", "woodlands"]`
            ]
        },
        provincePhrases: [
            'in'
        ]
    },
    'rocky coasts': {
        phrases: {
            'hamlet': [
                `found at the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `cloistered at the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `sheltered along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `beyond view of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ],
            'village': [
                `serving the shipwrights of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `at the wharfs of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `closely positioned along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `in the salt winds of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ],
            'small town': [
                `settled along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `at the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `overlooking the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ],
            'large township': [
                `serving as the council site for shipwrights of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `bordering the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `at the edge of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `above the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ],
            'small city': [
                `of shipbuilders at the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `in the hills above the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `settled by shipwrights along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `found along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ],
            'large city': [
                `along the shipbuilders' wharfs of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `in view of the high waves of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `watching over the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `standing over the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ],
            'diasporic group': [
                `beneath the plateaus at the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `that recently found a home along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `establishing a new community within the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `resettled on the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ],
            'nomadic group': [
                `that oversees the stretches of the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `that travels from the plateaus to the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `that hunts along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`,
                `that venerates the waves along the $["rocky", "craggy", "jagged", "bluffed", "stony", "limestone", "granite", "gravel", "rocky"] $["coasts", "coastlands", "harbors", "dockyards", "coastlines", "coasts", "coastland", "shores"]`
            ]
        },
        provincePhrases: [
            'among'
        ]
    },
    'lush river valleys': {
        phrases: {
            'hamlet': [
                `far out among the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `protected within the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `barely noticeable in the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `beyond the ridges north of the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ],
            'village': [
                `spread out in the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `found in the quiet spaces of the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `sustainably fishing the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `amid the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ],
            'small town': [
                `located in the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `at the rise above the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `thriving within the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `deep within the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ],
            'large township': [
                `at the gathering of the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `found along the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `adjoining the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `encompassing the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ],
            'small city': [
                `at the mouth of the plateaus in the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `within the tranquil clearings of the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `in the hidden spaces of the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `deep within the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ],
            'large city': [
                `standing in the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `among the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `thriving within the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `watching over the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ],
            'diasporic group': [
                `settled within the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `central to the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `relocated to the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `that long ago settled in the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ],
            'nomadic group': [
                `traveling across the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `that navigates the tall ridges and low waters of the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `that fishes along the great rivers of the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`,
                `that tends to the Joza roots in the $["lush", "rich", "prosperous", "flourishing", "pristine", "placid", "serene", "sacred", "lush"] $["river valleys", "riverlands", "valleys", "river canyons", "river gorges", "gorges", "ravines", "waterfalls"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- Plenith South ---*/
    'tropical coasts and forests': {
        phrases: {
            'hamlet': [
                `among the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `resting among the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `basking in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `beyond the muddy and $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ],
            'village': [
                `among the tall leaves of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `in the thick of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `settled deep in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `at the edges of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ],
            'small town': [
                `located in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `in the lost depths of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `unknown in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `deep within the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ],
            'large township': [
                `separating the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `found within the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `bordering the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `enclosed within the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ],
            'small city': [
                `in the reaches of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `among the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `found far out in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ],
            'large city': [
                `deep within the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `settled within the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `thriving within the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `standing in the ancient spaces of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ],
            'diasporic group': [
                `that long since settled in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `that recently relocated to the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `that now claims a home in the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `that is lost and scattered among the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ],
            'nomadic group': [
                `that hunts in the thick vegetation of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `that traverses across the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `that roams the perimeter of the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`,
                `that travels within the $["torrid", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["coasts and forests", "jungles and rivers", "jungles", "river beds", "rivers and thickets", "hills and jungles", "rivers and jungles", "coasts and forests"]`
            ]
        },
        provincePhrases: [
            'in'
        ]
    },
    'rainforests': {
        phrases: {
            'hamlet': [
                `among the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `resting among the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `glowing in the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `beyond the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ],
            'village': [
                `among the canopied thickets of the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `in the thick of the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `settled deep in the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `at the edges of the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ],
            'small town': [
                `located in the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `in the lost depths of the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `unknown in the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `deep within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ],
            'large township': [
                `separating the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `found within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `bordering the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `enclosed within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ],
            'small city': [
                `in the reaches of the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `among the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `in the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `found far out in the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ],
            'large city': [
                `deep within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `settled within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `thriving within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `vital to the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ],
            'diasporic group': [
                `relocated within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `hidden deep within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `fleeing war deep within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `reclaiming a lost society within the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ],
            'nomadic group': [
                `that hunts in the thick vegetation of the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `that traverses across the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `that is dependent on the migrant dwellers of the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`,
                `that wanders through the $["sweltering", "hot", "tropical", "equatorial", "sweltering", "humid", "blistering", "tropical", "torrid"] $["rainforests", "jungle forests", "rain-soaked jungles", "rain-soaked forests", "rainforests", "jungle basin", "tangles", "primeval forests"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'palm fields': {
        phrases: {
            'hamlet': [
                `emerging from the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `settled among the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `thriving among the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `resting beyond the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ],
            'village': [
                `among the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `in the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `settled in the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `at the boundaries of the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ],
            'small town': [
                `located in the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `at the center of the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `lost in the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `deep within the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ],
            'large township': [
                `sprawling out among the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `found within the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `bordering the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `enclosed within the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ],
            'small city': [
                `in the clearings of the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `among the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `in the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `found far out in the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ],
            'large city': [
                `overlooking the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `standing above the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `emerging from the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `dependent on the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ],
            'diasporic group': [
                `that has resettled among the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `that is hidden within the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `that long ago emigrated to the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `forging a new community among the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ],
            'nomadic group': [
                `that travels through the heart of the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `that traverses the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `that follows the ape trails throughout the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`,
                `that forages across the $["dense", "thick", "tropical", "impenetrable", "cloistered", "compact", "extensive", "dense", "thick"] $["palm fields", "palm thickets", "palms", "palm brush", "palmettos", "palmetto fields", "palmetto forests", "palmetto brush"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- Reviak Proper ---*/
    'steppes': {
        phrases: {
            'hamlet': [
                `newly organized in the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `created among the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `struggling among the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `resting beyond the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ],
            'village': [
                `at the heart of the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `in the populous corridor of the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `found in the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `at the edge of the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ],
            'small town': [
                `settled the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `central to the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `in the remote reaches of the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `far out among the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ],
            'large township': [
                `ruling over the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `claiming a foothold in the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `at the outer borders of the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `encompassed within the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ],
            'small city': [
                `found on the mesas of the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `sitting atop the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `located in the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `found within the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ],
            'large city': [
                `overlooking the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `crested upon the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `standing atop the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `dominant over the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ],
            'diasporic group': [
                `indentured among the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `forcibly relocated to the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `defiantly settled atop the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `currently in power over the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ],
            'nomadic group': [
                `that herds across the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `that traverses the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `that migrates near the ram herds in the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`,
                `that hunts antelope across the $["dry", "outstretched", "noble", "disputed", "rugged", "dusty", "dry salt", "parched", "arid"] $["steppes", "wastes", "flats", "badlands", "purple hills", "canyons", "steppes", "wasteland", "gullies"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'flatlands': {
        phrases: {
            'hamlet': [
                `stuck in the center of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `exposed out within the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `bermed in the clay ridges of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `set within the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ],
            'village': [
                `settled within the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `in the broad boundaries of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `found in the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `at the edge of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ],
            'small town': [
                `settled the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `central to the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `at the edge of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `far out where outlaws rule the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ],
            'large township': [
                `comprised of the lawless, $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `claiming a foothold in the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `at the outer borders of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `encompassed within the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ],
            'small city': [
                `settled in the ash pools among the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `sitting atop the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `located in the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `found within the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ],
            'large city': [
                `near the borders of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `within the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `out in the lawless and $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `boldly rising from the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ],
            'diasporic group': [
                `from the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `from the wild and $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `that recently settled in the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `reclaiming their birthright in the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ],
            'nomadic group': [
                `that travels the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `that traverses the lawless and $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `that raids the settlements of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`,
                `that hunts the reptiles of the $["purple", "Marendian", "warring", "struggling", "inclement", "rocky", "strained", "barren", "lifeless"] $["flatlands", "wastes", "wasteland", "salt flats", "salt pan", "wastefields", "flatlands", "dust fields", "flats"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'lightning stormlands': {
        phrases: {
            'hamlet': [
                `sequestered within the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `thriving within the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `newly settled in the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `burning their fires among the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ],
            'village': [
                `founded within the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `of ancestor worshippers near the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `found among the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `at the heart of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ],
            'small town': [
                `settled in the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `central to the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `at the edge of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `far out where outlaws rule the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ],
            'large township': [
                `in the central region of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `of several warring Houses within the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `at the noble borders of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `at the boundaries of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ],
            'small city': [
                `marking the edge of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `populated in the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `unknown to all but the locals of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `found settled in the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ],
            'large city': [
                `that shelters travelers in the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `that stands within the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `that rises above the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `found central to the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ],
            'diasporic group': [
                `shaping a new community within the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `situated at the heart of the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `that was relocated to the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `that conquered the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ],
            'nomadic group': [
                `that travels through the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `that traverses the volatile and $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `that guides travelers through the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`,
                `that caravans through the $["rain soaked", "stormy", "unstable", "thundering", "rainy", "stormswept", "vociferous", "turbulent", "rain soaked"] $["lightning stormlands", "lightning stormfields", "lightning stormflats", "lightning stormplains", "lightning stormlands", "electrifying stormlands", "skyfire stormlands", "skyfire stormplains", "stormlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'sandy plains': {
        phrases: {
            'hamlet': [
                `in the shadows of the dunes within the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `boldly settled in the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `founded within the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `quenching in the oasis of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ],
            'village': [
                `founded within the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `located in the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `at the dry riverbeds of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `in the east of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ],
            'small town': [
                `settled in the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `central to the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `at the edge of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `in the vast and $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ],
            'large township': [
                `in the central region of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `at the edge of the Joza forests near the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `within the tumblegrasses of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `at the edges of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ],
            'small city': [
                `sequestered on the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `settled long ago in the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `near the great wells of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `located in the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ],
            'large city': [
                `that rises above the dunes of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `overlooking the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `central to the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `found at the heart of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ],
            'diasporic group': [
                `indentured on the ridge surrounding the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `relocated to the harsh and $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `that emigrated long ago to the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `that keeps the Renkian secrets of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ],
            'nomadic group': [
                `that herds the large cattle of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `that traverses north across $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `that guards the ancient rock dwellings in the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`,
                `that hunts the reptiles of the $["parched", "sandy", "desert", "arid", "bare", "wide", "desolate", "barren", "sandy"] $["plains", "expanse", "flats", "plateaus", "landscapes", "wilderness", "wastes", "plains", "lowlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the Weyell Groves ---*/
    'temperate wetlands': {
        phrases: {
            'hamlet': [
                `spread out in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `reliant on fishing in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `settled in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `gathered among the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ],
            'village': [
                `in the margins of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `located in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `central to the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `in the east of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ],
            'small town': [
                `dependent on the waterfowl of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `farming in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `at the edge of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ],
            'large township': [
                `in the central waters of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `at the edge of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `near the water's edge of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `found beyond the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ],
            'small city': [
                `situated prominently in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `settled recently in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `illuminating the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `found next to the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ],
            'large city': [
                `rising over the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `culturally prominent in the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `safely located within the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `found deep within the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ],
            'diasporic group': [
                `settled among the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `seeking spiritual enlightenment within the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `rekindling a ritual way of life among the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `that guards the ancient gateways of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ],
            'nomadic group': [
                `that hunts the entire stretch of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `that traverses the seasons of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `that camps along the borders of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`,
                `that raids the farmlands south of the $["temperate", "warm", "seasonal", "plentiful", "fauna-rich", "breezy", "calm", "mild", "temperate"] $["wetlands", "marshes", "muskegs", "glades", "waterways", "lakelands", "freshwaters", "wetlands", "inlets"]`
            ]
        },
        provincePhrases: [
            'in'
        ]
    },
    'pine thrushes': {
        phrases: {
            'hamlet': [
                `nestled within the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `hidden in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `settled in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `found among the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ],
            'village': [
                `cloaked among the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `settled in the peaceful and $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `centered in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `located in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ],
            'small town': [
                `veiled within the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `sequestered in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `at the edges of the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `found in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ],
            'large township': [
                `in the western clearings of the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `bordering the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `marking the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `encompassed in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ],
            'small city': [
                `founded in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `virtually unheard of, deep in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `serving the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `found in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ],
            'large city': [
                `overlooking the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `standing among the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `erected ages ago within the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `crucial to the protection of the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ],
            'diasporic group': [
                `hidden from the winds within the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `seeking solace in the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `that has tamed the wild soils of the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `that guards the ancient gateways of the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ],
            'nomadic group': [
                `among the greater peoples of the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `traversing the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `that travels with the seasons throughout the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`,
                `that follows the small game native to the $["tall", "aromatic", "coniferous", "towering", "fragrant", "soaring", "secluded", "great", "aromatic"] $["pine hedges", "cedar hedges", "douglas hedges", "fir hedges", "longleaf hedges", "pines", "cedars", "hedges", "pine hedges"]`
            ]
        },
        provincePhrases: [
            'in'
        ]
    },
    'swamps': {
        phrases: {
            'hamlet': [
                `out among the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `deep within the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `in a cypress cluster among the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `formed in the waters of the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ],
            'village': [
                `located in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `newly formed by Thelean nobles in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `thriving in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `located in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ],
            'small town': [
                `far off in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `afloat within the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `newly founded in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `situated in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ],
            'large township': [
                `intersecting the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `bordering the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `stretched out across the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `central to the wood bridges of the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ],
            'small city': [
                `at the boundaries of the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `found in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `central to the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `located in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ],
            'large city': [
                `illuminating the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `settled among the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `looking out over the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `built in the dry fields central to the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ],
            'diasporic group': [
                `settled among the cypress trees in the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `relocated to the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `that has scattered across the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `that fled to the far reaches of the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ],
            'nomadic group': [
                `dependent on the waterbeasts of the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `that travels frequently by longboat across the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `that traverses the barely navigable and $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`,
                `that hunts the $["foggy", "murky", "green", "cool", "black", "dreary", "muddy", "foggy", "mossy"] $["swamps", "bayous", "marshes", "bogs", "marshland", "moors", "holms", "swamps", "bogs"]`
            ]
        },
        provincePhrases: [
            'southeast of'
        ]
    },
    'mangroves': {
        phrases: {
            'hamlet': [
                `far out among the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `isolated within the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `shaded within the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `settled in the cool waters of the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ],
            'village': [
                `found among the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `of Thelean defectors the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `struggling in the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `settled in the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ],
            'small town': [
                `unknown among the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `scarcely populated within the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `thriving among the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `buried in the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ],
            'large township': [
                `shaped by the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `among the wide trees in the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `sprawling through the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `bisecting the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ],
            'small city': [
                `at the boundaries of the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `found in the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `central to the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `settled in the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ],
            'large city': [
                `overlooking the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `looming above the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `in the rise above the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `standing among the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ],
            'diasporic group': [
                `that long ago relocated to the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `recently settled among the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `that fled across the Empire to the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `that hides within the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ],
            'nomadic group': [
                `that hunts along the path of the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `that traverses the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `that guards the treasures within the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`,
                `that spear hunts across the $["brackish", "enchanting", "sunkissed", "waterlogged", "soggy", "swampy", "muddy", "sunkissed", "dancing"] $["mangroves", "seagrasses", "water shrubs", "sea ferns", "cypress trees", "fens", "swales", "mangroves"]`
            ]
        },
        provincePhrases: [
            'in'
        ]
    },
/*--- southwest Hinn ---*/
    'coastal wetlands': {
        phrases: {
            'hamlet': [
                `dotting the landscapes of the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `living outside Delonian influence in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `immersed in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `settled in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ],
            'village': [
                `set out in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `flourishing in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `fishing in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `long resting in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ],
            'small town': [
                `hiding among the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `located within the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `laboring among the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `found within the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ],
            'large township': [
                `across the seasonal fields of the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `among the inlets of the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `beyond Delonian influence in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `stretched out along the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ],
            'small city': [
                `overlooking the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `sustainably settled in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `central to the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `settled in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ],
            'large city': [
                `among the harbors of the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `bordering the standing waters in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `standing above the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `at the edge of the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ],
            'diasporic group': [
                `among the harbors of the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `living among the foreigners in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `recently settled along the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `that fled Thelean influence within the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ],
            'nomadic group': [
                `that hunts from Fennan to the Sorals Gully in the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `that guards the outstretched $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `that follows the tides along the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`,
                `that sails along the $["coastal", "peninsular", "seaside", "bayside", "tidal", "shoreline", "seaboard", "beachline", "coastal"] $["wetlands", "marshes", "swamps", "sloughs", "swampland", "fens", "marshes", "wetlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'southern flatlands': {
        phrases: {
            'hamlet': [
                `huddled in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `at the edge of the borderlands in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `found on the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `still thriving in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ],
            'village': [
                `among the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `succeeding in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `close to the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `out in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ],
            'small town': [
                `cast in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `found within the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `trading across the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `central to the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ],
            'large township': [
                `at the edge of the salted fields in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `marking the border of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `bound across the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `along the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ],
            'small city': [
                `at the crest of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `north of the stormplains in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `south of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `far out within the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ],
            'large city': [
                `south of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `looking out on the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `standing above the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `near the edge of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ],
            'diasporic group': [
                `settled near the fields of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `relocated to the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `defiantly maintaining an outpost in the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `recently settled within the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ],
            'nomadic group': [
                `that raids travelers along the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `that herds in the wide stretches of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `that travels with the winds across the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`,
                `that hunts in the shrubs of the $["clay-rich", "salt-rich", "lawless", "harsh", "rugged", "cold", "arid", "crisp", "lawless"] $["south flatlands", "rainshadow deserts", "flatlands", "deserts", "inland steppes", "rainshadow flatlands", "south deserts", "rainshadow deserts"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'eastern borderlands': {
        phrases: {
            'hamlet': [
                `central to the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `stranded within the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `lost in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ],
            'village': [
                `reliant on trade from the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `set out in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `found within the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `settled in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ],
            'small town': [
                `beneath the plateaued forests in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `long settled within the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `unknown to the Empire in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `far within the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ],
            'large township': [
                `within the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `along the border of the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `separating the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `along the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ],
            'small city': [
                `in the Balendian region of the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `settled in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `near the Joza forests of the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `outside Thelean influence in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ],
            'large city': [
                `overlooking the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `beneath the Vokain forests of the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `near the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `near the edge of the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ],
            'diasporic group': [
                `that has fled to the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `fortified within the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `hoping to rebuild their society in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `recently settled along the Balendian coasts in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ],
            'nomadic group': [
                `traversing the high forests west of the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `that hunts south near Scorchstone in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `that sails the channel in the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`,
                `that raids across the $["lawless", "anarchic", "turbulent", "independent", "ancestral", "self-reliant", "Balendian", "disputed", "lawless"] $["eastern borderlands", "borderlands", "fringes", "frontier", "eastern fringes", "eastern frontier", "borderlands", "eastern borderlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the Schelk Islands ---*/
    'warm inlets': {
        phrases: {
            'hamlet': [
                `set inland above the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `nestled within the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `bordering the villages in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ],
            'village': [
                `of laborers who fish the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `of proud Islanders living in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `set within the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `settled recently among the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ],
            'small town': [
                `basking in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `settled in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `fishing the coasts and $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `far out in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ],
            'large township': [
                `within the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `along the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `emerging from the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `across the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ],
            'small city': [
                `above the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `settled among the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `near the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `inland beyond the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ],
            'large city': [
                `looking out over the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `on the coast of the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `near the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `overlooking the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ],
            'diasporic group': [
                `that labors within the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `recently settled within the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `preserving their culture in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `harbored in the south of the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ],
            'nomadic group': [
                `traversing the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `fishing the waterways and $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `traveling the sand bars and the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`,
                `sailing the briny waters in the $["warm", "temperate", "sunny", "sunlit", "salt air", "brackish", "bright", "coastal", "emerald"] $["inlets", "riverways", "estuaries", "fjords", "waterways", "channels", "fjords", "inlets"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'volcanic crags': {
        phrases: {
            'hamlet': [
                `tucked within the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `on the edge of the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `near the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `in the foothills of the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ],
            'village': [
                `settled in the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `established among the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `deep within the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `beyond the geysers in the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ],
            'small town': [
                `central to the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `recently settled in the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `founded long ago in the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `far out in the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ],
            'large township': [
                `beneath the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `embedded within the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `stretching across the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `among the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ],
            'small city': [
                `in the secluded regions of the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `nestled in the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `carved into the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `under the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ],
            'large city': [
                `jutting out of the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `high within the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `settled in the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `erected within the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ],
            'diasporic group': [
                `recently relocated to the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `long ago settled among the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `forged within the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `chiseled into the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ],
            'nomadic group': [
                `that traverses the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `that hunts the terror birds of the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `bound to the low winds around the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`,
                `making their home in the caves around the $["heated", "fiery", "active", "rumbling", "blazing", "smoldering", "burning", "fierce", "glowing"] $["volcanic crags", "volcanic rockfalls", "basalt crags", "magma rocks", "volcanic mountains", "inland volcano", "volcano crags", "obsidian hills"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'coral reefs': {
        phrases: {
            'hamlet': [
                `dependent on the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `at the boundary of the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `near the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `along the beaches of the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ],
            'village': [
                `in symbiosis with the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `settled near the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `beyond the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `inland above the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ],
            'small town': [
                `central to the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `found north of the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `founded long ago in the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `in view of the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ],
            'large township': [
                `connected to the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `encompassing the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `from across the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `reliant on the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ],
            'small city': [
                `afloat near the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `nearby the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `watching over the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `above the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ],
            'large city': [
                `looking out over the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `inland over the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `settled in the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `erected within the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ],
            'diasporic group': [
                `that ages ago relocated to the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `that fulfilled a prophecy by settling in the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `dependent on the delicate sea life in the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `relocated to the coasts near the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ],
            'nomadic group': [
                `that fishes across the waters of the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `that traverses the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `that wanders the north coasts of the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`,
                `that safeguards the $["great", "extensive", "abundant", "bountiful", "elaborate", "massive", "beautiful", "tropical", "great"] $["coral reefs", "corals", "reefs", "underwater corals", "ocean corals", "turtle reefs", "reefs", "coral reefs"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'sandy beaches': {
        phrases: {
            'hamlet': [
                `illuminating the borders of the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `found nearby the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `within reach of the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `founded in the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ],
            'village': [
                `in proximity to the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `cresting the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `buried in the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `inland from the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ],
            'small town': [
                `central to the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `found south of the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `founded recently in the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `beyond the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ],
            'large township': [
                `connected to the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `encompassing the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `from across the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `close to the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ],
            'small city': [
                `which represents one of the oldest settlements along the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `which emerged from the lasting pirate presence on the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `on the flat, $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `resting on the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ],
            'large city': [
                `overlooking the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `at the rise above the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `sequestered on the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `bustling at the edge of the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ],
            'diasporic group': [
                `recently settled along the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `relocated to the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `scattered throughout the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `rebuilding a community near the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ],
            'nomadic group': [
                `that travels along the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `that hunts the boar of the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `that camps along the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`,
                `that raids the trading boats along the $["sandy", "gravel", "limestone", "privateer", "cutthroat", "smoothstone", "marauding", "gravel", "sandy"] $["beaches", "coasts", "shores", "shorelines", "beachheads", "beachfronts", "beaches", "shores"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- central Bosen ---*/
    'rocky highlands': {
        phrases: {
            'hamlet': [
                `lighting its fires among the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `in the shadow of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `within view of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `settled in the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ],
            'village': [
                `high among the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `bermed into the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `in the sloping foothills of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `deep within $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ],
            'small town': [
                `central to the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `found bordering the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `tucked away in the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `close to the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ],
            'large township': [
                `with territory across the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `in the foothills of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `founded north of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `nearby the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ],
            'small city': [
                `within the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `settled in the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `sequestered within the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `that is difficult to find in the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ],
            'large city': [
                `atop the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `in the high reaches of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `shadowed by the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `carved into the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ],
            'diasporic group': [
                `in the middlemost settlements of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `that carved a new community into the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `that were long ago brought to the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `that found a new home in the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ],
            'nomadic group': [
                `that travels along the high roads of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `that chases the clouds high in the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `that hunts the deer of the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`,
                `that travels the $["cold", "windy", "cloud-covered", "rocky", "crisp", "cold and windy", "rocky", "majestic", "cloudy"] $["highlands", "mountains", "ranges", "cliffs", "crags", "mountain ranges", "mountains", "highlands"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'river valleys': {
        phrases: {
            'hamlet': [
                `deep within the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `beyond the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `along the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ],
            'village': [
                `settled deep among the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `out among the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `thriving in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `at the heart of the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ],
            'small town': [
                `amid the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `fishing the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `along the ravines above the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `beyond the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ],
            'large township': [
                `claiming borders in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `stretching across the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `founded along the edges of the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `within the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ],
            'small city': [
                `sustaining the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `crucial to the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `celebrated in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `prominent within the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ],
            'large city': [
                `erected within the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `among the distant banks of the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `far out along the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `standing in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ],
            'diasporic group': [
                `among the caves in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `retaining their ancestral culture in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `hoping to resettle in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `that found a new home in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ],
            'nomadic group': [
                `that traverses the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `that moves with the seasons through the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `that hunts in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`,
                `that fishes in the $["winding", "twisting", "fertile", "verdant", "emerald", "abundant", "sloping", "winding", "abundant"] $["river valleys", "riverways", "waterways", "river gorges", "river channels", "streams", "river gorges", "river valleys"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'terraced vine fields': {
        phrases: {
            'hamlet': [
                `among the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `adjacent to the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `amid the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `out within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ],
            'village': [
                `working within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `of matriarchs located in the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `flourishing in the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `within the high hills of the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ],
            'small town': [
                `nestled in the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `situated near the heart of the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `near the low hills of the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `beyond the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ],
            'large township': [
                `twisting through the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `climbing above the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `founded along the edges of the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ],
            'small city': [
                `struggling within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `taming the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `far within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `centrally located within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ],
            'large city': [
                `out among the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `standing within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `overlooking the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `erected in the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ],
            'diasporic group': [
                `indentured as laborers in the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `that found a new hope in the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `hoping to reclaim their lost legacy within the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `in the midst of the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ],
            'nomadic group': [
                `that remains dedicated to navigating the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `that travels through the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `that hunts the small game native to the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`,
                `that guides travelers through the $["terraced", "sloping", "cultivated", "sprawling", "graded", "wide-ranging", "productive", "terraced", "sloping"] $["vine fields", "vineyards", "grape fields", "orchards", "grapevines", "vines", "vine fields", "vineyards"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the Northern Wilds ---*/
    'icy steppes': {
        phrases: {
            'hamlet': [
                `historically located in the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `in the grasses south of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `deep within $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `among the windy and $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ],
            'village': [
                `settled out in the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `braving the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `that lights its fires out among the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `cornering the standing stones of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ],
            'small town': [
                `nestled in the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `situated near the heart of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `at the crevasses north of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `beyond the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ],
            'large township': [
                `encompassing the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `comprising the center of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `founded at the boundaries of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `across the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ],
            'small city': [
                `self-sustaining within the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `unknown to the Empire out in the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `far beyond the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `located within the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ],
            'large city': [
                `out among the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `alone in the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `overlooking the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `isolated in the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ],
            'diasporic group': [
                `that has long thrived since emigrating to the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `cast out and scattered along the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `that fled the Empire's reach within the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `that settled in the midst of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ],
            'nomadic group': [
                `that follows the caribou across the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `that traverses each summer to the north of the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `that hunts the herding game native to the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`,
                `that stays far from Thelean politics out in the $["icy", "frigid", "frozen", "bleak", "freezing", "arctic", "frost covered", "frozen", "icy"] $["steppes", "tundra", "taiga", "glaciers", "expanse", "wastes", "tundra", "steppes"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'extreme hills': {
        phrases: {
            'hamlet': [
                `settled near the caves in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `in sloping centers of the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `lost out within the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `thriving among the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ],
            'village': [
                `settled out in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `crested upon the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `located among the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `found within the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ],
            'small town': [
                `located among the Kimenian bird tribes in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `of standing stones in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `consisting of subterranean dwellings in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `located beyond the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ],
            'large township': [
                `encompassed within the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `that meanders across the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `that sets a border along the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `in the open space of the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ],
            'small city': [
                `among the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `distinguished within the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `beyond the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `located among the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ],
            'large city': [
                `at the standing stones south of the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `standing among the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `facing the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `thriving in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ],
            'diasporic group': [
                `whose elders have recently settled in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `hoping to farm away from the Empire out in the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `that has relocated to the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `that fled to the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ],
            'nomadic group': [
                `that hunts throughout the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `that navigates the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `that camps south of the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`,
                `that migrates seasonally through the $["extreme", "harsh", "rugged", "bitter", "rough", "unforgiving", "snow covered", "wintry", "extreme"] $["hills", "tundra", "taiga", "slopes", "hillsides", "foothills", "taiga", "hills"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'frozen forests': {
        phrases: {
            'hamlet': [
                `central to the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `well within the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `lost among the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `found within the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ],
            'village': [
                `settled out in the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `hidden within the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `located among the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `in the placid clearings central to the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ],
            'small town': [
                `nestled in the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `in the quiet and $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `near the hot wellsprings of the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `located within the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ],
            'large township': [
                `encompassed within the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `bisecting the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `bordering the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `in the rolling and $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ],
            'small city': [
                `among the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `protected in the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `beyond the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `located among the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ],
            'large city': [
                `in the west of the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `built among the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `settled in the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `isolated in the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ],
            'diasporic group': [
                `that resettled in the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `that fled to the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `that has relocated to the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `that rebuilt its culture at the edge of the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ],
            'nomadic group': [
                `that hunts the large game that roams the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `that camps within the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `that travels through the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`,
                `that migrates seasonally through the $["frozen", "frigid", "icy", "arctic", "winter", "harsh", "desolate", "evergreen", "frozen"] $["forests", "groves", "taiga", "woodlands", "timberlands", "thickets", "taiga", "forests"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'wastelands': {
        phrases: {
            'hamlet': [
                `centered within the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `overlooking the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `fortified upon the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `deep within the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ],
            'village': [
                `settled in the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `among the spirits of Vu'ur Barahk in the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `situated within the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `near the shrublands of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ],
            'small town': [
                `in the west of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `located near the western mountains in the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `resting within the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `found centered in the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ],
            'large township': [
                `stretched across the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `found located in the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `adjacent to the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `among the western mountains of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ],
            'small city': [
                `in the lower foothills of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `beyond the shoreline at the icefields in the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `beyond the cold valleys in the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `at the arctic edge of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ],
            'large city': [
                `warming the ridge of the arctic edge of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `located central to the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `at the glacier's edge of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `still braving the cold winds of $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ],
            'diasporic group': [
                `that escaped genocide by hiding among the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `relocated to the south of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `found hidden deep within the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `braving the icy ridges of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ],
            'nomadic group': [
                `that traverses the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `that guides expeditions across the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `that hunts from the frozen forests to the edges of the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`,
                `that often camps within the $["frozen", "frigid", "icy", "arctic", "desolate", "harsh", "frozen", "lifeless", "deadly"] $["wastelands", "wastes", "barrens", "wastelands", "wastes"]`
            ]
        },
        provincePhrases: [
            'of'
        ]
    }
}