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
                `settled in the open ranges of $['the savannah grasslands', 'the plains grasses', 'the herding grasslands']`,
                `situated nearby $['the windy northern grasses', 'endless grassland hills', 'the savannah grasslands']`,
                `found within $['the wide open grasslands', 'the wandering grasslands', 'the expansive savannah']`,
                `located amid $['the outstretched savannah', 'the savannah grasslands', 'the endless plains']`
            ],
            'village': [
                `struck near the watering holes in $['the savannah grasslands', 'the boundless grasslands', 'the sprawling savannah']`,
                `established within $['the savannah grasslands', 'the windswept grasses', 'the immense savannah']`,
                `beneath the endless skies in $['the immense grasslands', 'the savannah grasslands', 'the wide open plains']`,
                `along the Gangona ridge, north of $['the boundless savannah', 'the flat grasslands', 'the great plains']`
            ],
            'small town': [
                `among the scattered trees of $['the great plains', 'the savannah grasslands', 'the outstretched grasses']`,
                `located nearby the $['windswept plains', 'boundless savannah', 'endless grasslands']`,
                `resting beside $['the vast, grasscovered flatlands', 'the endless great plains', 'the herding meadows']`,
                `established at the epicenter of the $['tall grass plains', 'rolling savannah', 'vast meadows', 'endless grasslands']`
            ],
            'large township': [
                `edging the borders of $['the savannah grasslands', 'the vast great plains', 'the windswept meadows']`,
                `outstretched across $['the savannah grasslands', 'the great grassy plains', 'the boundless savannah']`,
                `surrounded by $['the far-reaching flatlands', 'the endless flats', 'the boundless grassland wilderness']`,
                `ranging among the great herds of $['the vast savannah', 'the immense flatlands', 'the boundless plains']`
            ],
            'small city': [
                `at the ancient boundaries of $['the great grassy meadows', 'the endless savannah', 'the vast flatlands']`,
                `within the wide open $['savannah grasslands', 'savannah', 'plains', 'flats', 'flatlands']`,
                `nestled in the endless rolling hills of $['the grass covered savannah', 'the windy grasslands', 'the vast savannah']`,
                `near the scattered acacia trees of $['the expansive plains', 'the whispering meadows', 'the savannah grasslands']`
            ],
            'large city': [
                `centrally located within $['the windswept plains', 'the great flatlands', 'the grass covered savannah']`,
                `located amid the rise of the Gangona ridge in $['the grassy meadows', 'the great plains', 'the great savannah']`,
                `found isolated among $['the windy savannah', 'the whispering grasslands', 'the expansive grasses']`,
                `built in the north plains of $['the whispering meadows', 'the boundless savannah, 'the savannah grasslands']`
            ],
            'diasporic group': [
                `within the lower oasis of $['the windy grasslands', 'the expansive savannah', 'the windswept meadows']`,
                `marking the tall reeds of $['the flatland expanses', 'the savannah grasslands', 'the boundless flatlands']`,
                `among the water catches of the $['the endless savannah', 'the grass filled expanses', 'the great plains']`,
                `that found a sustainable home among $['the great plains', 'the whispering meadows', 'the windswept savannah']`
            ],
            'nomadic group': [
                `which wanders $['the great plains', 'the vast grasslands', 'the windy savannah']`,
                `overwatching the elephant herds of $['the outstretched grasslands', 'the whispering meadows', 'the wide open flatlands']`,
                `that overlooks the greatnecks of $['the flat grasslands', 'the boundless grass meadows', 'the vast savannah']`,
                `that follows the lion's trail through $['the expansive flatlands', 'the isolated grasslands', 'the windy plains']`
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
                `settled in the dark expanses of $['the rolling storm plains', 'the stormy plains', 'the thundercast flats']`,
                `situated within $['the thunderous storm plains', 'harsh storm plains', 'the rolling storm plains']`,
                `found amid $['the bleak storm lands', 'the stormy plains', 'the lightning fields']`,
                `located at the heart of $['the bitter storm plains', 'the rolling storm plains', 'the rough storm lands']`
            ],
            'village': [
                `at the dark reaches of $['the rolling storm plains', 'the thundercast flatlands', 'the storm drenched flats']`,
                `established in the thunderous $['rolling storm plains', 'stormy hills', 'storm plains']`,
                `beneath the flashing skies of $['the tempestuous storm lands', 'the rolling storm plains', 'the dark storm plains']`,
                `in the strikes of the cloud hills among $['the stormy reaches', 'the storm lands', 'the great storm lands']`
            ],
            'small town': [
                `among the storm crystals of $['the lightning plains', 'the rolling storm plains', 'the thunderous expanses']`,
                `located within the $['rainy storm plains', 'expansive storm lands', 'the rolling storm plains']`,
                `resting along $['the edge of the storm plains', 'the thunderous storm lands', 'the tempestuous stormy hills']`,
                `established in the south of the $['great storm lands', 'storm flats', 'rainy storm lands', 'lightning flat lands']`
            ],
            'large township': [
                `below the cloudhills of $['the storm drenched plains', 'the vast storm plains', 'the thundercast flats']`,
                `outstretched across the shortwillows of $['the rolling storm plains', 'the storm pressed lands', 'the storm plains']`,
                `surrounded by $['the far-reaching storm plains', 'the tempestuous lightning flats', 'the expansive storm lands']`,
                `within the overcast $['rolling storm plains', 'immense storm fields', 'thunderclap plains']`
            ],
            'small city': [
                `at the ancient boundaries of $['the great storm plains', 'the thunderous storm fields', 'the harsh storm lands']`,
                `within the wide open $['and vast storm plains', 'storm lands', 'thundercast fields', 'lightning flats', 'and harsh storm plains']`,
                `nestled in the endless rolling hills of $['the expansive storm lands', 'the storm cast regions', 'the storm lands']`,
                `near the overcast fields of $['the great storm flats', 'the expansive storm lands', 'the rolling storm plains']`
            ],
            'large city': [
                `sheltered amid $['the stormswept plains', 'the stormy flatlands', 'the vast rolling storm lands']`,
                `central to $['the thunderous and harsh storm lands', 'the rolling storm plains', 'the storm plains']`,
                `proudly bordering the cloudhills of $['the lightning fields', 'the storm plains', 'the expansive storm lands']`,
                `situated within $['the harsh storm lands', 'the tempestuous stormy regions, 'the rolling storm plains']`
            ],
            'diasporic group': [
                `in the heart of $['the rainy storm lands', 'the thunderous storm fields', 'the overcast storm plains']`,
                `cloistered on $['the stormy flat lands', 'the rolling storm plains', 'the expansive lightning fields']`,
                `spread out amid $['the great storm fields', 'the thundercast flats', 'the harsh storm plains']`,
                `among the shortwillows of $['the lightning fields', 'the rainy flat lands', 'the rainy storm plains']`
            ],
            'nomadic group': [
                `sprawled out across $['the great storm plains', 'the unforgiving storm lands', 'the stormswept rolling fields']`,
                `gathered among $['the rolling storm plains', 'the thunderous flat lands', 'the wide open storm lands']`,
                `that patrols $['the tempestuous storm plains', 'the rainswept storm fields', 'the thundercast flat lands']`,
                `that chases the lightning across $['the expansive storm lands', 'the harsh storm fields', 'the stormy plains']`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'grassy hills': {
        phrases: {
            'hamlet': [
                `resting upon the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'slopes']`,
                `situated within $['the lush grassy hills', 'the wide verdant slopes', 'the verdant rise']`,
                `nestled behind $['the rolling grassy hills', 'the fertile slopes', 'the verdant rise']`,
                `located at the heart of $['the verdant hills', 'the grassy hills', 'the rolling grass covered hills']`
            ],
            'village': [
                `in the fertile rise of $['the grassy hills', 'the verdant hills', 'the rolling hills']`,
                `established in the expansive $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'slopes']`,
                `among the fertile reaches of $['the lush hills', 'the grassy hills', 'the verdant slopes']`,
                `in the restful, $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`
            ],
            'small town': [
                `among the arable stretches of the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'slopes']`,
                `located along the fruitful $['and grassy hills', 'and flourishing hills', 'and arable slopes']`,
                `resting within the abundant $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `established near the west of the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`
            ],
            'large township': [
                `in the shimmering reeds of the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `in the lush and distant $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `within the fertile $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `grounded within $['the grassy hills', 'the arable slopes', 'the calm and flowing hills']`
            ],
            'small city': [
                `at the bright rich rise of the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `within the bountiful $['verdant hills', 'grass hills', 'and arable rolling hills', 'and lush grassy hills', 'grassy slopes']`,
                `nestled in the arable reaches of the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `rising above the distant $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`
            ],
            'large city': [
                `sheltered amid the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `central to the calm $['and bountiful grassy hills', 'and verdant slopes', 'restful rolling hills']`,
                `overlooking the fertile reaches of the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `situated within the fruitful $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`
            ],
            'diasporic group': [
                `situated within $['the forgiving hills', 'the plentiful grassy fields', 'the misty, verdant hills']`,
                `settled among the bountiful $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `spread out in the arable $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `gaining a foothold among the fertile, $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`
            ],
            'nomadic group': [
                `that travels across $['the great grass hills', 'the fertile slopes', 'the bountifull rolling hills']`,
                `that hunts among the $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `which patrols the shimmering $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`,
                `that illuminates the great $['grassy', 'verdant', 'bountiful', 'flourishing', 'lush'] $['hills', 'rise', 'reaches', 'slopes']`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
/*--- the Brolean Expanse ---*/
    'temperate rainforests': {
        phrases: {
            'hamlet': [
                `among the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `hidden within the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `nestled in the thickets beneath the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `located deep within the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ],
            'village': [
                `in the ancestral $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `established in the expansive $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `among the outstretched $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `in the shade of Kalmor's hands beneath the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ],
            'small town': [
                `among the diverse canopies of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `shaded within the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `protected beneath the lush, $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `established far off among the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ],
            'large township': [
                `in the great canopies of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `crested in the thickets of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `protected by the looming $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `founded among the dense $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ],
            'small city': [
                `in the secluded clearings of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `amid the dense $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `hidden throughout the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `beneath the shaded canopies of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ],
            'large city': [
                `sheltered beneath the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `at the center of the dense $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `shadowed beneath the canopy of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `under the protection of the ancestors in the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ],
            'diasporic group': [
                `settled within the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `hidden among the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `that fled to the heart of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `rebuilding a community within the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ],
            'nomadic group': [
                `that hunts throughout the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `traversing in the grace of the ancestors through the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `that seeks the light of Kalmor within the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`,
                `that camps along the borders of the $['temperate', 'balmy', 'pleasant', 'mild', 'peaceful'] $['rainforests', 'jungles', 'and rainy forests', 'rainy wilderness']`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'woodlands': {
        phrases: {
            'hamlet': [
                `concealed among the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `bordering the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `nestled in the sylvan growth of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `located far within the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ],
            'village': [
                `in the ancestral clearings of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `established in the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `among the outstretched and $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `in the dimness of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ],
            'small town': [
                `among the breaking canopies of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `obscured within the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `protected beneath the secluded and $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `established far off among the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ],
            'large township': [
                `in the brush of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `covered within the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `guarded by the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `founded across the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ],
            'small city': [
                `in the secluded clearings of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `planted deep within $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `hidden throughout the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `nestled in the growth among the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ],
            'large city': [
                `within the dim brushes of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `at the center of the foreboding and $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `overlooking the clearings of the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `under the protection of the ancestors in the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ],
            'diasporic group': [
                `sequestered within the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `dependent on the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `that migrated within the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `guarded among the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ],
            'nomadic group': [
                `hunting among the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `guided by the deer among the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `seeking the night of Maros within the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`,
                `that camps throughout the $['dense', 'shaded', 'bleak', 'dark', 'austere', 'dreary', 'shadowed'] $['woodlands', 'woods', 'ancestral forests', 'timberlands', 'treelands']`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'fen glades': {
        phrases: {
            'hamlet': [
                `found prominent among the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `nearby the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `in the periphery of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `located beyond the northern edge of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
            ],
            'village': [
                `within the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `settled along the peat fields of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `amid the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `in the outer valleys of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
            ],
            'small town': [
                `settled in the heart of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `visible within the treeline arches of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `exposed in the south of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `established deep within the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
            ],
            'large township': [
                `on the firm grounds of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `stretched throughout the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `claiming vast territory across the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `established in the eastern regions of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
            ],
            'small city': [
                `beyond the treeline and deep within the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `above the waterways in the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `between the treeline arches of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `seated within the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
            ],
            'large city': [
                `settled among the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `rising above the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `gleaming at the heart of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `rested within the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
            ],
            'diasporic group': [
                `at the center of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `settled amid the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `guided by Kalmor to the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `that repopulated among the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
            ],
            'nomadic group': [
                `that roams the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `that tracks the rivercats of the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `traversing the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`,
                `that treks across the $['life-giving', 'lowland', 'blissful', 'aqueous', 'emerald', 'grand', 'foggy'] $['fen glades', 'wetlands', 'marshlands', 'marsh glades', 'bogs', 'fens', 'glades', 'moors']`
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
                `on the waterside coasts of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `adjacent to the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `amid the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `located along the banks of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ],
            'village': [
                `near the collecting ponds of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `settled along the banks of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `amid the reflecting pools of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `in the outer valleys of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ],
            'small town': [
                `settled in the heart of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `nestled within the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `in the heart of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `established deep within the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ],
            'large township': [
                `high above the scenic waterfalls of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `spread out along the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `beyond the valleys of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `established at the heart of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ],
            'small city': [
                `amid the shale rockfalls of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `beyond the banks of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `along the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `seated deep among the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ],
            'large city': [
                `settled atop the rocky falls of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `resting on the shale cliffs above the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `at the rocky edges of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `high above the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ],
            'diasporic group': [
                `nestled precariously along the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `along the waterside coasts of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `rebuilding a community within the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `that resettled along the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ],
            'nomadic group': [
                `that hunts the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `following the shale rocks of the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `traversing the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`,
                `that treks across the $['deep forest', 'birch forest', 'dark forest', 'thick forest', 'oak forest', 'pine forest', 'longleaf forest'] $['riverlands', 'riverways', 'claybeds', 'waterways', 'creeks', 'tributaries', 'riverlands', 'streams']`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'meadowlands': {
        phrases: {
            'hamlet': [
                `along the shrub willows in the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `adjacent to the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `amid the rolling $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `located roughly near the center of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ],
            'village': [
                `near the wildflower fields of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `nestled within the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `within the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `in the eastern stretches of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ],
            'small town': [
                `settled within view of the Deloni along the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `found at the edges of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `in the heart of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `central to the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ],
            'large township': [
                `east of the Deloni in the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `stretched across the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `across the rising $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `sparsely settled near the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ],
            'small city': [
                `situated within the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `at a distance from the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `amid the wildflower fields of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `located in the clearings of the central $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ],
            'large city': [
                `in the central $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `beyond the reaches of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `deep within the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `overlooking the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ],
            'diasporic group': [
                `that has established a settlement in the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `that migrated to the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `that is among the first generation to settle in the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `that resettled in the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ],
            'nomadic group': [
                `hunting in the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `traveling from border to border in the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `traversing the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`,
                `guarding the reaches of the $['rich', 'vibrant', 'colorful', 'blossoming', 'efflorescent', 'herbaceous', 'vast'] $['meadowlands', 'meadows', 'pastures', 'prairies', 'heaths', 'gardens', 'meadowlands', 'highmeadows']`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'mossy shale valleys': {
        phrases: {
            'hamlet': [
                `along the plainrock falls of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `nearby the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `amid the twisting $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `located among the ancient rock flows of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
            ],
            'village': [
                `concealed within the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `sequestered among the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `within the rock flows of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `among the eastern plainrocks of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
            ],
            'small town': [
                `settled beyond the plainrocks along the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `out among the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `in the central region of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `beyond the plainrocks and near the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
            ],
            'large township': [
                `along the plainrocks of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `established in the heart of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `stretching across the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `densely populated within the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
            ],
            'small city': [
                `beneath the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `beyond the waterfalls of the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `springing from the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `clinging to the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
            ],
            'large city': [
                `perched on the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `central to the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `settled above the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `overlooking the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
            ],
            'diasporic group': [
                `that has established a sustainable community within the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `situated within the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `proudly relocated to the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `claiming sovereignty among the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
            ],
            'nomadic group': [
                `that fishes along the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `that travels north each year to the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `that camps among the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`,
                `that traverses the $['mossy', 'plentiful', 'breathtaking', 'mossgrown', 'overgrown', 'covered', 'mossy', 'soggy'] $['shale valleys', 'shale gorges', 'gorges', 'river valleys', 'stone gorges', 'shale channels', 'ancient river gorges', 'shale beds']`
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
                `lighting the borders of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `located nearby the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `founded amid the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `settled within view of the red rock mines in the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ],
            'village': [
                `languishing in the granite wastes of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `settled by Es'ahn soothsayers in the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `within the south of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `subsisting on the berry greens of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ],
            'small town': [
                `chiseled from the edges of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `found along the extreme hills of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `near the central mines of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `within earshot of the salt mines of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ],
            'large township': [
                `bordering the salt mines of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `established with the mines of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `settled throughout the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `sparsely settled within the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ],
            'small city': [
                `within the sharp shadows of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `beyond the distant rise of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `carved into the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `mining the granite beds of the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ],
            'large city': [
                `peering out over the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `embedded deep within the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `seated in the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `overlooking the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ],
            'diasporic group': [
                `relocated to the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `that resettled among the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `which fled to the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `that settled above the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ],
            'nomadic group': [
                `that journeys through the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `that wanders throughout the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `herding goats in the steep $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`,
                `that traverses the ancestral hunting grounds within the $['craggy', 'rugged', 'jagged', 'cragged', 'rocky', 'bouldered', 'harsh', 'craggy'] $['northlands', 'mountains', 'ridgelines', 'peaks', 'orelands', 'deposits', 'ridgelands', 'northlands']`
            ]
        },
        provincePhrases: [
            'of'
        ]
    },
    'central farmlands': {
        phrases: {
            'hamlet': [
                `resting in the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `joined to the mushroom fields of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `isolated at the edges of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `found within a stone's throw of the great estates in the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
            ],
            'village': [
                `thriving in the harvests of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `modestly settled in the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `located amid the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `subsisting on the berry greens of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
            ],
            'small town': [
                `settled along the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `found along the terraces of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `in the margins of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `that flanks the estates of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
            ],
            'large township': [
                `at the crossings of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `across the great fields of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `bordering the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `carefully demarcated along the borders of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
            ],
            'small city': [
                `situated within the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `settled in the middle of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `bordering the great estates of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `located in the fields of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
            ],
            'large city': [
                `looking out over the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `at the forks north of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `fostered within the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `planted in the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
            ],
            'diasporic group': [
                `located at the midway of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `that relocated to the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `indentured to the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `rebuilding a community among the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
            ],
            'nomadic group': [
                `traversing the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `patrolling the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `that guards the borders of the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`,
                `that wanders the periphery of the settlements in the $['assiduous', 'sustainable', 'arable', 'cultivated', 'crop-bearing', 'productive', 'laboring', 'well tended'] $['central farmlands', 'central farms', 'local farmlands', 'midway farms', 'interior farmlands', 'inland farms', 'heartlands', 'central farmlands']`
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