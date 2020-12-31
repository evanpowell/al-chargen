/* Remapping Home Community based on biome and region

  'caretakers and healers': [],
  'cultists and mystics': [],
  'entertainers and artists': [],
  'farmers and fishers': [],
  'gardeners and shepherds': [],
  'guardians and sellswords': [],
  'laborers and servants': [],
  'dyers and weavers': [],
  'paupers and beggars': [],
  'veterans and enforcers': [],
  'fortune tellers and diviners': [],
  'dock workers and cargo haulers': [],
  'artisans and makers': [],
  'intellectuals and architects': [],
  'luminaries and nobles': [],
  'merchants and curio peddlers': [],
  'philosophers and scholars': [],
  'curio traders and smugglers': [],
  'traders and innkeepers': [],
  'travelers and adventurers': []

*/

export const communityTypesGeneric = {
  'caretakers and healers': [`$["caretakers", "healers", "physicians", "caretakers and healers", "healers and physicians"]`],
  'cultists and mystics': [`$["cultists", "mystics", "ritualists", "cultists and mystics", "Finojan worshippers"]`],
  'entertainers and artists': [`$["entertainers", "artists", "tailors", "musicians", "entertainers and artists"]`],
  'farmers and fishers': [`$["farmers", "fishers", "farmhands", "trawlers", "farmers and fishers", "fishers and farmhands"]`],
  'gardeners and shepherds': [`$["gardeners", "shepherds", "herders", "soil tenders", "gardeners and shepherds"]`],
  'guardians and sellswords': [`$["guardians", "sellswords", "guardians and sellswords", "mercenaries", "protectors"]`],
  'laborers and servants': [`$["laborers", "servants", "stewards", "servants and laborers", "laborers and servants"]`],
  'dyers and weavers': [`$["dyers", "weavers", "dyers and weavers", "loom workers", "thread dyers"]`],
  'paupers and beggars': [`$["paupers", "beggars", "panhandlers", "vagabonds", "paupers and beggars"]`],
  'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Thelean soldiers"]`],
  'fortune tellers and diviners': [`$["fortune tellers", "diviners", "prophets", "clairvoyants", "augurs", "fortune tellers and diviners"]`],
  'dock workers and cargo haulers': [`$["cargo haulers", "boat workers", "cargo carriers", "shipment movers", "suppliers"]`],
  'artisans and makers': [`$["artisans", "makers", "artisans and makers", "builders", "masons", "carpenters", "builders and masons"]`],
  'intellectuals and architects': [`$["intellectuals", "architects", "shapers", "academics", "intellectuals and academics"]`],
  'luminaries and nobles': [`$["luminaries", "nobles", "celebrities", "dignitaries", "aristocrats", "luminaries and nobles"]`],
  'merchants and curio peddlers': [`$["merchants", "curio peddlers", "peddlers", "sundry traders", "merchants and curio peddlers", "sundry merchants"]`],
  'philosophers and scholars': [`$["philosophers", "scholars", "thinkers", "problem solvers", "analysts", "philosophers and scholars"]`],
  'curio traders and smugglers': [`$["cloaked merchants", "curio traders", "smugglers", "thieves", "swindlers"]`],
  'traders and innkeepers': [`$["traders", "innkeepers", "proprietors", "cooks", "cooks and innkeepers"]`],
  'travelers and adventurers': [`$["travelers", "adventurers", "hikers", "pilgrims", "travelers and adventurers"]`]
}

export const communityTypesBiomeSpecific = {
/*--- the Ommultic Front ---*/
  'spruce forests': {
    'cultists and mystics': [`$["Old World mystics", "Old Kingdom loyalists", "anti-Thelean anarchists", "Tannith worshippers", "Finojan worshippers"]`],
    'farmers and fishers': [`$["gatherers", "hunters", "hunters and foragers", "foragers"]`],
    'gardeners and shepherds': [`$["elk hunters", "caribou hunters", "berry gatherers", "community hunters", "bear hunters"]`],
    'dyers and weavers': [`$["dyers", "elk weavers", "dyers and weavers", "loom workers", "thread dyers"]`],
    'paupers and beggars': [`$["stewards", "carriers", "squires", "hermits", "wildfolk"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "Tannith Guards", "abolitionists", "Tannith soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "sled workers", "military suppliers", "caravan and sled workers", "dog sled drivers"]`],
    'artisans and makers': [`$["loggers", "arborists", "millers", "loggers and millers", "sawmillers", "carpenters", "loggers and carpenters"]`]
  },
  'expansive tundra': {
    'cultists and mystics': [`$["Old World mystics", "Old Kingdom loyalists", "anti-Thelean anarchists", "Tannith worshippers", "Finojan worshippers"]`],
    'farmers and fishers': [`$["gatherers", "hunters", "hunters and foragers", "foragers"]`],
    'gardeners and shepherds': [`$["elk hunters", "caribou hunters", "berry gatherers", "community hunters", "bear hunters"]`],
    'dyers and weavers': [`$["dyers", "elk weavers", "dyers and weavers", "loom workers", "thread dyers"]`],
    'paupers and beggars': [`$["stewards", "carriers", "squires", "hermits", "wildfolk"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "Tannith Guards", "abolitionists", "Tannith soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "sled workers", "military suppliers", "caravan and sled workers", "dog sled drivers"]`],
    'artisans and makers': [`$["salt miners", "miners", "rock haulers", "sculptors", "bridge makers", "masons", "miners and masons"]`]
  },
  'cold lakefronts': {
    'cultists and mystics': [`$["Old World mystics", "Old Kingdom loyalists", "anti-Thelean anarchists", "Tannith worshippers", "Finojan worshippers"]`],
    'farmers and fishers': [`$["ice fishers", "hunters", "fishers", "fishers and foragers"]`],
    'gardeners and shepherds': [`$["elk hunters", "caribou hunters", "berry gatherers", "community hunters", "bear hunters"]`],
    'dyers and weavers': [`$["dyers", "elk weavers", "dyers and weavers", "loom workers", "thread dyers"]`],
    'paupers and beggars': [`$["stewards", "carriers", "squires", "hermits", "wildfolk"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "Tannith Guards", "abolitionists", "Tannith soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "sled workers", "military suppliers", "caravan and sled workers", "dog sled drivers"]`],
    'artisans and makers': [`$["loggers", "bridge makers", "millers", "loggers and millers", "masons", "carpenters", "loggers and carpenters"]`]
  },
/*--- central Wendajii ---*/
  'savannah grasslands': {
    'entertainers and artists': [`$["jugglers", "artists", "dancers", "musicians", "musicians and dancers"]`],
    'farmers and fishers': [`$["farmers", "herders", "field tenders", "ranchers", "shepherds", "farmers and field tenders"]`],
    'dyers and weavers': [`$["dyers", "weavers", "dyers and weavers", "designers", "dye farmers", "dye merchants"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Thelean soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan leaders", "merchant transports", "warehouse attendants", "warehouse workers", "caravan haulers"]`],
    'luminaries and nobles': [`$["luminaries", "nobles", "celebrities", "dignitaries", "aristocrats", "luminaries and nobles"]`],
    'philosophers and scholars': [`$["Torlish philosophers", "Torlish scholars", "tomb raiders", "artifact seekers", "philosophers", "philosophers and scholars"]`],
    'travelers and adventurers': [`$["road runners", "expeditionists", "wanderers", "pilgrims", "travelers and adventurers"]`]
  },
  'rolling storm plains': {
    'entertainers and artists': [`$["jugglers", "artists", "dancers", "musicians", "musicians and dancers"]`],
    'farmers and fishers': [`$["farmers", "herders", "field tenders", "ranchers", "shepherds", "farmers and field tenders"]`],
    'dyers and weavers': [`$["dyers", "weavers", "dyers and weavers", "designers", "dye farmers", "dye merchants"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Thelean soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan leaders", "merchant transports", "warehouse attendants", "warehouse workers", "caravan haulers"]`],
    'luminaries and nobles': [`$["luminaries", "nobles", "celebrities", "dignitaries", "aristocrats", "luminaries and nobles"]`],
    'philosophers and scholars': [`$["Torlish philosophers", "Torlish scholars", "tomb raiders", "artifact seekers", "philosophers", "philosophers and scholars"]`],
    'travelers and adventurers': [`$["road runners", "expeditionists", "wanderers", "pilgrims", "travelers and adventurers"]`]
  },
  'grassy hills': {
    'caretakers and healers': [`$["surgeons", "healers", "wizards", "alchemists", "healers and surgeons"]`],
    'entertainers and artists': [`$["jugglers", "artists", "dancers", "musicians", "musicians and dancers"]`],
    'farmers and fishers': [`$["farmers", "herders", "field tenders", "ranchers", "shepherds", "farmers and field tenders"]`],
    'dyers and weavers': [`$["dyers", "weavers", "dyers and weavers", "designers", "dye farmers", "dye merchants"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Thelean soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan leaders", "merchant transports", "warehouse attendants", "warehouse workers", "caravan haulers"]`],
    'luminaries and nobles': [`$["luminaries", "nobles", "celebrities", "dignitaries", "aristocrats", "luminaries and nobles"]`],
    'philosophers and scholars': [`$["Torlish philosophers", "Torlish scholars", "tomb raiders", "artifact seekers", "philosophers", "philosophers and scholars"]`],
    'travelers and adventurers': [`$["road runners", "expeditionists", "wanderers", "pilgrims", "travelers and adventurers"]`]
  },
/*--- the Brolean Expanse ---*/
  "temperate rainforests": {
    'farmers and fishers': [`$["foragers", "gatherers", "hunters", "wildtenders", "wildsowers", "hunters and foragers"]`],
    'gardeners and shepherds': [`$["wildsowers", "tenders", "herders", "wildtenders", "gatherers"]`],
    'laborers and servants': [`$["storytellers", "community stewards", "tree tenders", "forest watchers", "speakers", "animal diviners"]`],
    'dyers and weavers': [`$["tailors", "weavers", "sewists", "embroiders", "weavers and tailors", "tanners", "leather workers"]`],
    'paupers and beggars': [`$["storytellers", "community stewards", "forest watchers", "speakers", "animal diviners"]`],
    'fortune tellers and diviners': [`$["fortune tellers", "diviners", "prophets", "clairvoyants", "augurs", "fortune tellers and diviners"]`],
    'dock workers and cargo haulers': [`$["shipping traders", "trail guides", "trail walkers", "traders", "suppliers"]`],
    'intellectuals and architects': [`$["interpreters", "readers and interpreters", "shapers", "readers", "intellectuals and interpreters"]`],
    'philosophers and scholars': [`$["philosophers", "scholars", "thinkers", "problem solvers", "analysts", "philosophers and scholars"]`],
    'travelers and adventurers': [`$["travelers", "adventurers", "expedition leaders", "pilgrims", "travelers and adventurers"]`]
  },
  'woodlands': {
    'farmers and fishers': [`$["foragers", "gatherers", "hunters", "wildtenders", "wildsowers", "hunters and foragers"]`],
    'gardeners and shepherds': [`$["loggers", "arborists", "millers", "loggers and millers", "sawmillers", "carpenters", "loggers and carpenters"]`],
    'laborers and servants': [`$["storytellers", "community stewards", "tree tenders", "forest watchers", "speakers", "animal diviners"]`],
    'dyers and weavers': [`$["tailors", "weavers", "sewists", "embroiders", "weavers and tailors", "tanners", "leather workers"]`],
    'paupers and beggars': [`$["storytellers", "community stewards", "forest watchers", "speakers", "animal diviners"]`],
    'dock workers and cargo haulers': [`$["shipping traders", "trail guides", "trail walkers", "traders", "suppliers"]`],
    'intellectuals and architects': [`$["interpreters", "readers and interpreters", "shapers", "readers", "intellectuals and interpreters"]`],
    'philosophers and scholars': [`$["philosophers", "scholars", "thinkers", "problem solvers", "analysts", "philosophers and scholars"]`],
    'travelers and adventurers': [`$["travelers", "adventurers", "expedition leaders", "pilgrims", "travelers and adventurers"]`]
  },
  'fen glades': {
    'farmers and fishers': [`$["foragers", "gatherers", "fishers", "gladefishers", "water tenders", "fishers and tenders"]`],
    'gardeners and shepherds': [`$["wildsowers", "tenders", "avian herders", "wildtenders", "gatherers"]`],
    'laborers and servants': [`$["storytellers", "community stewards", "tree tenders", "forest watchers", "speakers", "animal diviners"]`],
    'dyers and weavers': [`$["tailors", "weavers", "sewists", "embroiders", "weavers and tailors", "tanners", "leather workers"]`],
    'paupers and beggars': [`$["storytellers", "community stewards", "forest watchers", "speakers", "animal diviners"]`],
    'dock workers and cargo haulers': [`$["shipping traders", "boat drivers", "shippers", "water traders", "goods suppliers"]`],
    'intellectuals and architects': [`$["interpreters", "readers and interpreters", "shapers", "readers", "intellectuals and interpreters"]`],
    'philosophers and scholars': [`$["philosophers", "scholars", "thinkers", "problem solvers", "analysts", "philosophers and scholars"]`],
    'travelers and adventurers': [`$["travelers", "adventurers", "expedition leaders", "pilgrims", "travelers and adventurers"]`]
  },
/*--- Delonian Hinn ---*/
  'deep forest riverlands': {
    'cultists and mystics': [`$["tribalists", "occultists", "ritualists", "tribalists and occultists", "Renkian worshippers"]`],
    'farmers and fishers': [`$["tenders", "fishers", "river tenders", "trawlers", "fishers and tenders", "water tenders"]`],
    'paupers and beggars': [`$["helpers", "visionaries", "boat watchers", "spotters", "spotters and helpers"]`],
    'artisans and makers': [`$["artisans", "makers", "carvers", "builders", "loggers", "carpenters", "carvers and builders"]`],
    'luminaries and nobles': [`$["Deloni luminaries", "Delonian nobles", "Delonians", "Delonian dignitaries", "Old Kingdom aristocrats", "luminaries and nobles"]`]
  },
  'meadowlands': {
    'cultists and mystics': [`$["tribalists", "occultists", "ritualists", "tribalists and occultists", "Renkian worshippers"]`],
    'paupers and beggars': [`$["helpers", "visionaries", "boat watchers", "spotters", "spotters and helpers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "caravan workers", "cargo carriers", "road travelers", "shipment movers", "suppliers"]`],
    'artisans and makers': [`$["artisans", "makers", "carvers", "builders", "loggers", "carpenters", "carvers and builders"]`],
    'luminaries and nobles': [`$["Deloni luminaries", "Delonian nobles", "Delonians", "Delonian dignitaries", "Old Kingdom aristocrats", "luminaries and nobles"]`]
  },
  'mossy shale valleys': {
    'cultists and mystics': [`$["tribalists", "occultists", "ritualists", "tribalists and occultists", "Renkian worshippers"]`],
    'farmers and fishers': [`$["tenders", "fishers", "river tenders", "trawlers", "fishers and tenders", "water tenders"]`],
    'paupers and beggars': [`$["helpers", "visionaries", "boat watchers", "spotters", "spotters and helpers"]`],
    'artisans and makers': [`$["artisans", "makers", "carvers", "builders", "loggers", "carpenters", "carvers and builders"]`],
    'luminaries and nobles': [`$["Deloni luminaries", "Delonian nobles", "Delonians", "Delonian dignitaries", "Old Kingdom aristocrats", "luminaries and nobles"]`]
  },
/*--- New Scorth ---*/
  'craggy northlands': {
    'veterans and enforcers': [`$["soldiers", "armored guards", "fighters", "military guard", "mountain guard"]`],
    'dock workers and cargo haulers': [`$["expedition leaders", "mountaineers", "mountain guides", "hikers", "caravan leaders"]`],
    'artisans and makers': [`$["shapers", "sculptors", "stonemasons", "miners", "ore miners", "rock workers", "miners and masons"]`],
    'intellectuals and architects': [`$["storytellers", "historians", "thinkers", "analysts", "storytellers and analysts"]`],
    'merchants and curio peddlers': [`$["traders", "barterers", "merchants", "suppliers", "negotiators", "suppliers and traders"]`],
    'curio traders and smugglers': [`$["cloaked merchants", "enchanters", "jewelers", "fences", "smugglers", "thieves", "swindlers"]`],
    'travelers and adventurers': [`$["expedition leaders", "mountaineers", "mountain guides", "hikers", "caravan leaders"]`]
  },
  'central farmlands': {
    'farmers and fishers': [`$["farmers", "field hands", "plowers", "farm hands", "agriculturalists", "field tenders"]`],
    'gardeners and shepherds': [`$["gardeners", "sheep herders", "cow herders", "goat herders", "garden tenders", "bean gardeners"]`],
    'dock workers and cargo haulers': [`$["expedition leaders", "mountaineers", "mountain guides", "hikers", "caravan leaders"]`],
    'intellectuals and architects': [`$["storytellers", "historians", "thinkers", "analysts", "storytellers and analysts"]`],
    'merchants and curio peddlers': [`$["traders", "barterers", "merchants", "suppliers", "negotiators", "suppliers and traders"]`],
    'curio traders and smugglers': [`$["cloaked merchants", "enchanters", "jewelers", "fences", "smugglers", "thieves", "swindlers"]`],
    'travelers and adventurers': [`$["expedition leaders", "mountaineers", "mountain guides", "hikers", "caravan leaders"]`]
    },
  'southern wetlands': {
    'intellectuals and architects': [`$["storytellers", "historians", "thinkers", "analysts", "storytellers and analysts"]`],
    'merchants and curio peddlers': [`$["traders", "barterers", "merchants", "suppliers", "negotiators", "suppliers and traders"]`],
    'curio traders and smugglers': [`$["cloaked merchants", "enchanters", "jewelers", "fences", "smugglers", "thieves", "swindlers"]`],
    'travelers and adventurers': [`$["expedition leaders", "mountaineers", "mountain guides", "hikers", "caravan leaders"]`]
  },
/*--- the Weyell North ---*/
  'northern temperate hills': {
    'guardians and sellswords': [`$["Pelmoran guard", "sellswords", "Pelmoran knights", "Pelmoran soldiers", "Pelmoran protectors"]`],
    'veterans and enforcers': [`$["Pelmoran knights", "enforcers", "Pelmoran guard", "Peacekeepers", "Thelean soldiers"]`],
    'fortune tellers and diviners': [`$["Ad'tai elders", "seers", "oracles", "interpreters", "augurs", "Ad'tai seers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "mountain guides", "expedition leaders", "shippers", "suppliers"]`],
    'merchants and curio peddlers': [`$["traders", "enterprisers", "business owners", "supply traders", "merchants and curio peddlers", "sundry merchants"]`],
    'philosophers and scholars': [`$["dream interpreters", "diviners", "thinkers", "advisers", "analysts", "interpreters and advisers"]`]
  },
  'forest groves': {
    'guardians and sellswords': [`$["Pelmoran guard", "sellswords", "Pelmoran knights", "Pelmoran soldiers", "Pelmoran protectors"]`],
    'veterans and enforcers': [`$["Pelmoran knights", "enforcers", "Pelmoran guard", "Peacekeepers", "Thelean soldiers"]`],
    'fortune tellers and diviners': [`$["Ad'tai elders", "seers", "oracles", "interpreters", "augurs", "Ad'tai seers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "forest guides", "expedition leaders", "shippers", "suppliers"]`],
    'merchants and curio peddlers': [`$["traders", "enterprisers", "business owners", "supply traders", "merchants and curio peddlers", "sundry merchants"]`],
    'philosophers and scholars': [`$["dream interpreters", "diviners", "thinkers", "advisers", "analysts", "interpreters and advisers"]`]
  },
  'lakelands': {
    'guardians and sellswords': [`$["Pelmoran guard", "sellswords", "Pelmoran knights", "Pelmoran soldiers", "Pelmoran protectors"]`],
    'veterans and enforcers': [`$["Pelmoran knights", "enforcers", "Pelmoran guard", "Peacekeepers", "Thelean soldiers"]`],
    'fortune tellers and diviners': [`$["Ad'tai elders", "seers", "oracles", "interpreters", "augurs", "Ad'tai seers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "roadway guides", "expedition leaders", "shippers", "suppliers"]`],
    'merchants and curio peddlers': [`$["traders", "enterprisers", "business owners", "supply traders", "merchants and curio peddlers", "sundry merchants"]`],
    'philosophers and scholars': [`$["dream interpreters", "diviners", "thinkers", "advisers", "analysts", "interpreters and advisers"]`]
  },
/*--- Northern Valadagal ---*/
  'cloudless hot deserts': {
    'entertainers and artists': [`$["entertainers", "dancers", "firemakers", "musicians", "firemakers and dancers"]`],
    'farmers and fishers': [`$["tenders", "foragers", "gatherers", "lizard hunters", "water gatherers", "foragers and hunters"]`],
    'gardeners and shepherds': [`$["cactus tenders", "tanners", "lizard tanners", "flower tenders", "gatherers and tanners"]`],
    'laborers and servants': [`$["laborers", "toilers", "sand stewards", "toilers and stewards"]`],
    'dyers and weavers': [`$["linen dyers", "weavers", "tapestry makers", "sewists", "linen weavers"]`],
    'veterans and enforcers': [`$["Moghul guards", "enforcers", "guards and enforcers", "Moghul servants", "Moghul soldiers"]`],
    'dock workers and cargo haulers': [`$["camel haulers", "caravan workers", "caravan leaders", "desert suppliers", "suppliers"]`],
    'intellectuals and architects': [`$["intellectuals", "interpreters", "shapers", "dream interpreters", "intellectuals and interpreters"]`],
    'luminaries and nobles': [`$["luminaries", "desert nobles", "Moghuls", "dignitaries", "aristocrats", "luminaries and nobles"]`],
    'travelers and adventurers': [`$["sand walkers", "tomb raiders", "trekkers", "desert walkers", "desert explorers"]`]
  },
  'lush southern dunes': {
    'entertainers and artists': [`$["entertainers", "dancers", "firemakers", "musicians", "firemakers and dancers"]`],
    'farmers and fishers': [`$["tenders", "foragers", "gatherers", "lizard hunters", "water gatherers", "foragers and hunters"]`],
    'gardeners and shepherds': [`$["cactus tenders", "tanners", "lizard tanners", "flower tenders", "gatherers and tanners"]`],
    'laborers and servants': [`$["laborers", "toilers", "sand stewards", "toilers and stewards"]`],
    'dyers and weavers': [`$["linen dyers", "weavers", "tapestry makers", "sewists", "linen weavers"]`],
    'veterans and enforcers': [`$["Moghul guards", "enforcers", "guards and enforcers", "Moghul servants", "Moghul soldiers"]`],
    'dock workers and cargo haulers': [`$["camel haulers", "caravan workers", "caravan leaders", "desert suppliers", "suppliers"]`],
    'intellectuals and architects': [`$["intellectuals", "interpreters", "shapers", "dream interpreters", "intellectuals and interpreters"]`],
    'luminaries and nobles': [`$["luminaries", "desert nobles", "Moghuls", "dignitaries", "aristocrats", "luminaries and nobles"]`],
    'travelers and adventurers': [`$["sand walkers", "tomb raiders", "trekkers", "desert walkers", "desert explorers"]`]
  },
  'clay fields': {
    'entertainers and artists': [`$["entertainers", "dancers", "firemakers", "musicians", "firemakers and dancers"]`],
    'farmers and fishers': [`$["tenders", "foragers", "gatherers", "lizard hunters", "water gatherers", "foragers and hunters"]`],
    'gardeners and shepherds': [`$["cactus tenders", "tanners", "lizard tanners", "flower tenders", "gatherers and tanners"]`],
    'laborers and servants': [`$["laborers", "toilers", "clay stewards", "toilers and stewards"]`],
    'dyers and weavers': [`$["linen dyers", "weavers", "tapestry makers", "sewists", "linen weavers"]`],
    'veterans and enforcers': [`$["Moghul guards", "enforcers", "guards and enforcers", "Moghul servants", "Moghul soldiers"]`],
    'dock workers and cargo haulers': [`$["camel haulers", "caravan workers", "caravan leaders", "desert suppliers", "suppliers"]`],
    'intellectuals and architects': [`$["intellectuals", "interpreters", "shapers", "dream interpreters", "intellectuals and interpreters"]`],
    'luminaries and nobles': [`$["luminaries", "desert nobles", "Moghuls", "dignitaries", "aristocrats", "luminaries and nobles"]`],
    'travelers and adventurers': [`$["clay walkers", "ruin seekers", "trekkers", "walkers", "field explorers"]`]
  },
/*--- Mainland Schelk ---*/
  'warm woodlands': {
    'farmers and fishers': [`$["farmers", "hunters", "farmhands", "trackers", "wildsowers", "hunters and wildsowers"]`],
    'gardeners and shepherds': [`$["trackers", "ranchers", "tenders", "garden tenders", "trackers and tenders"]`],
    'guardians and sellswords': [`$["Pelmoran guards", "Peacekeepers", "soldiers", "mercenaries", "guardians"]`],
    'laborers and servants': [`$["laborers", "servants", "stewards", "servants and laborers", "laborers and servants"]`],
    'dyers and weavers': [`$["textile traders", "weavers", "wool spindlers", "wool workers", "wool dyers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "tree haulers", "pulley operators", "caravan trekkers", "roadway suppliers"]`],
  },
  'overcast gardens': {
    'farmers and fishers': [`$["farmers", "hunters", "farmhands", "trackers", "wildsowers", "hunters and wildsowers"]`],
    'gardeners and shepherds': [`$["gardeners", "field tenders", "goatherds", "garden tenders", "gardeners and tenders"]`],
    'guardians and sellswords': [`$["Pelmoran guards", "Peacekeepers", "soldiers", "mercenaries", "guardians"]`],
    'laborers and servants': [`$["laborers", "servants", "stewards", "servants and laborers", "laborers and servants"]`],
    'dyers and weavers': [`$["textile traders", "weavers", "wool spindlers", "wool workers", "wool dyers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "suppliers", "shipping workers", "road surveyers", "roadway suppliers"]`],
  },
  'rice paddies': {
    'farmers and fishers': [`$["farmers", "hunters", "farmhands", "trackers", "wildsowers", "hunters and wildsowers"]`],
    'gardeners and shepherds': [`$["trackers", "ranchers", "tenders", "garden tenders", "trackers and tenders"]`],
    'guardians and sellswords': [`$["Pelmoran guards", "Peacekeepers", "soldiers", "mercenaries", "guardians"]`],
    'laborers and servants': [`$["laborers", "servants", "stewards", "servants and laborers", "laborers and servants"]`],
    'dyers and weavers': [`$["flax traders", "weavers", "paper merchants", "flax workers", "flax dyers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "suppliers", "shipping workers", "rice traders", "roadway suppliers"]`],
  },
/*--- New Voland ---*/
  'redwoods': {
    'cultists and mystics': [`$["traditionalists", "tribalists", "forest ritualists", "tree mystics", "Kalmor worshippers"]`],
    'entertainers and artists': [`$["entertainers", "storytellers", "dancers", "musicians", "storytellers and musicians"]`],
    'farmers and fishers': [`$["foragers", "bird catchers", "gatherers", "birders", "wildsowers", "mushroom gatherers"]`],
    'gardeners and shepherds': [`$["mushroom gardeners", "tree tenders", "insect gatherers", "wild tenders", "forest gardeners"]`],
    'laborers and servants': [`$["forest laborers", "forest servants", "forest stewards", "servants and laborers", "laborers and servants"]`],
    'paupers and beggars': [`$["watchers", "squires", "climbers", "water gatherers", "rubbish cleaners"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Thelean soldiers"]`],
    'dock workers and cargo haulers': [`$["suppliers", "tree workers", "cargo haulers", "cargo movers", "shipping suppliers"]`],
    'artisans and makers': [`$["artisans", "makers", "artisans and makers", "architects", "carpenters", "builders and carpenters"]`],
    'traders and innkeepers': [`$["hosts", "innkeepers", "proprietors", "cooks", "chefs and hosts"]`],
    'travelers and adventurers': [`$["forest travelers", "adventurers", "trekkers", "pilgrims", "trekkers and pilgrims"]`]
  },
  'hilly expanses': {
    'cultists and mystics': [`$["traditionalists", "tribalists", "forest ritualists", "tree mystics", "Kalmor worshippers"]`],
    'entertainers and artists': [`$["entertainers", "storytellers", "dancers", "musicians", "storytellers and musicians"]`],
    'farmers and fishers': [`$["hunters", "foragers", "gatherers", "collecters", "scavengers", "field gatherers"]`],
    'gardeners and shepherds': [`$["mushroom gardeners", "wild tenders", "insect gatherers", "tenders", "hill gardeners"]`],
    'laborers and servants': [`$["forest laborers", "forest servants", "forest stewards", "servants and laborers", "laborers and servants"]`],
    'paupers and beggars': [`$["watchers", "squires", "climbers", "water gatherers", "rubbish cleaners"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Thelean soldiers"]`],
    'dock workers and cargo haulers': [`$["suppliers", "field workers", "cargo haulers", "cargo movers", "shipping suppliers"]`],
    'artisans and makers': [`$["artisans", "makers", "artisans and makers", "architects", "carpenters", "builders and carpenters"]`],
    'traders and innkeepers': [`$["hosts", "innkeepers", "proprietors", "cooks", "chefs and hosts"]`],
    'travelers and adventurers': [`$["road travelers", "adventurers", "trekkers", "pilgrims", "trekkers and pilgrims"]`]
  },
  'mild shrublands': {
    'cultists and mystics': [`$["traditionalists", "tribalists", "forest ritualists", "tree mystics", "Kalmor worshippers"]`],
    'entertainers and artists': [`$["entertainers", "storytellers", "dancers", "musicians", "storytellers and musicians"]`],
    'farmers and fishers': [`$["hunters", "foragers", "gatherers", "collecters", "scavengers", "field gatherers"]`],
    'gardeners and shepherds': [`$["mushroom gardeners", "wild tenders", "insect gatherers", "tenders", "hill gardeners"]`],
    'laborers and servants': [`$["forest laborers", "forest servants", "forest stewards", "servants and laborers", "laborers and servants"]`],
    'paupers and beggars': [`$["watchers", "squires", "climbers", "water gatherers", "rubbish cleaners"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Thelean soldiers"]`],
    'dock workers and cargo haulers': [`$["suppliers", "field workers", "cargo haulers", "cargo movers", "shipping suppliers"]`],
    'artisans and makers': [`$["artisans", "makers", "artisans and makers", "architects", "carpenters", "builders and carpenters"]`],
    'traders and innkeepers': [`$["hosts", "innkeepers", "proprietors", "cooks", "chefs and hosts"]`],
    'travelers and adventurers': [`$["road travelers", "adventurers", "trekkers", "pilgrims", "trekkers and pilgrims"]`]
  },
/*--- the Djenndan Protectorate ---*/
  'wide plains and foothills': {
    'cultists and mystics': [`$["cultists", "traditionalists", "ritualists", "cultists and traditionalists", "Swuskwah worshippers"]`],
    'entertainers and artists': [`$["entertainers", "dancers", "speakers", "musicians", "speakers and dancers"]`],
    'farmers and fishers': [`$["farmers", "foragers", "gatherers", "hunters", "hunters and foragers", "trackers"]`],
    'gardeners and shepherds': [`$["wildsowers", "plainsfarmers", "herders", "hill gatherers", "wild gardeners"]`],
    'guardians and sellswords': [`$["warriors", "champions", "protectors and warriors", "sellswords", "protectors"]`],
    'dyers and weavers': [`$["painters", "weavers", "painters and weavers", "fabric workers", "clothing makers", "leatherworkers"]`],
    'paupers and beggars': [`$["paupers", "ruffians", "outcasts", "vagabonds", "ruffians and outcasts"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Djenndan soldiers"]`],
    'fortune tellers and diviners': [`$["oracles", "diviners", "prophets", "seers", "augurs", "augurs and prophets"]`],
    'dock workers and cargo haulers': [`$["expedition leaders", "trekkers", "merchant carriers", "caravan leaders", "suppliers"]`],
    'luminaries and nobles': [`$["luminaries", "patricians", "noble houses", "blood kin", "blood nobles", "patricians and blood nobles"]`]
  },
  'temperate steppes': {
    'cultists and mystics': [`$["cultists", "traditionalists", "ritualists", "cultists and traditionalists", "Swuskwah worshippers"]`],
    'entertainers and artists': [`$["entertainers", "dancers", "speakers", "musicians", "speakers and dancers"]`],
    'farmers and fishers': [`$["farmers", "foragers", "gatherers", "hunters", "hunters and foragers", "trackers"]`],
    'gardeners and shepherds': [`$["wildsowers", "plainsfarmers", "herders", "hill gatherers", "wild gardeners"]`],
    'guardians and sellswords': [`$["warriors", "champions", "protectors and warriors", "sellswords", "protectors"]`],
    'dyers and weavers': [`$["painters", "weavers", "painters and weavers", "fabric workers", "clothing makers", "leatherworkers"]`],
    'paupers and beggars': [`$["paupers", "ruffians", "outcasts", "vagabonds", "ruffians and outcasts"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Djenndan soldiers"]`],
    'fortune tellers and diviners': [`$["oracles", "diviners", "prophets", "seers", "augurs", "augurs and prophets"]`],
    'dock workers and cargo haulers': [`$["expedition leaders", "trekkers", "merchant carriers", "caravan leaders", "suppliers"]`],
    'luminaries and nobles': [`$["luminaries", "patricians", "noble houses", "blood kin", "blood nobles", "patricians and blood nobles"]`]
  },
  'farmlands': {
    'cultists and mystics': [`$["cultists", "traditionalists", "ritualists", "cultists and traditionalists", "Swuskwah worshippers"]`],
    'entertainers and artists': [`$["entertainers", "dancers", "speakers", "musicians", "speakers and dancers"]`],
    'farmers and fishers': [`$["farmers", "farmhands", "goatherds", "hunters", "hunters and foragers", "trackers"]`],
    'gardeners and shepherds': [`$["gardeners", "shepherds", "herders", "hill gatherers", "wild gardeners"]`],
    'guardians and sellswords': [`$["warriors", "champions", "protectors and warriors", "sellswords", "protectors"]`],
    'dyers and weavers': [`$["painters", "weavers", "painters and weavers", "fabric workers", "clothing makers", "leatherworkers"]`],
    'paupers and beggars': [`$["paupers", "ruffians", "outcasts", "vagabonds", "ruffians and outcasts"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Djenndan soldiers"]`],
    'fortune tellers and diviners': [`$["oracles", "diviners", "prophets", "seers", "augurs", "augurs and prophets"]`],
    'dock workers and cargo haulers': [`$["expedition leaders", "trekkers", "merchant carriers", "caravan leaders", "suppliers"]`],
    'luminaries and nobles': [`$["luminaries", "patricians", "noble houses", "blood kin", "blood nobles", "patricians and blood nobles"]`]
  },
/*--- coastal Bosen ---*/
  'olive forests': {
    'veterans and enforcers': [`$["veterans", "protectors", "veterans and protectors", "Peacekeepers", "Elmecian soldiers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "dock workers", "dock attendants", "ship loaders", "dock suppliers"]`]
  },
  'nut groves': {
    'veterans and enforcers': [`$["veterans", "protectors", "veterans and protectors", "Peacekeepers", "Elmecian soldiers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "dock workers", "dock attendants", "ship loaders", "dock suppliers"]`]
  },
  'mild coastlands': {
    'veterans and enforcers': [`$["veterans", "protectors", "veterans and protectors", "Peacekeepers", "Elmecian soldiers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "dock workers", "dock attendants", "ship loaders", "dock suppliers"]`]
  },
  'balmy seas': {
    'caretakers and healers': [`$["shiphands", "medics", "surgeons", "shiphands and medics", "surgeons and medics"]`],
    'veterans and enforcers': [`$["veterans", "protectors", "veterans and protectors", "Peacekeepers", "Elmecian soldiers"]`],
    'dock workers and cargo haulers': [`$["shipping suppliers", "dock workers", "shiphands", "ship loaders", "dock suppliers"]`],
    'farmers and fishers': [`$["kelp farmers", "fishers", "gatherers", "shrimp farmers", "trawlers", "gatherers and fishers"]`]
  },
/*--- Siadagal ---*/
  'lush farmlands': {
    'entertainers and artists': [`$["entertainers", "musicians", "tailors", "storytellers", "musicians and storytellers"]`],
    'farmers and fishers': [`$["farmers", "agriculturalists", "farmhands", "growers", "harvesters", "planters"]`],
    'gardeners and shepherds': [`$["ranch herds", "shepherds", "herders", "planters", "plowers"]`],
    'dyers and weavers': [`$["tailors", "textile merchants", "spinners", "threaders", "sewists"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'fortune tellers and diviners': [`$["fortune tellers", "diviners", "listeners", "divine listeners", "augurs", "fortune tellers and diviners"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "wagon loaders", "wagon drivers", "trade suppliers", "suppliers"]`]
  },
  'fields': {
    'entertainers and artists': [`$["entertainers", "musicians", "tailors", "storytellers", "tailors and storytellers"]`],
    'farmers and fishers': [`$["farmers", "agriculturalists", "farmhands", "growers", "harvesters", "planters"]`],
    'gardeners and shepherds': [`$["ranch herds", "shepherds", "herders", "planters", "plowers"]`],
    'dyers and weavers': [`$["tailors", "textile merchants", "spinners", "threaders", "sewists"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'fortune tellers and diviners': [`$["fortune tellers", "diviners", "listeners", "divine listeners", "augurs", "fortune tellers and diviners"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "wagon loaders", "wagon drivers", "trade suppliers", "suppliers"]`]
  },
  'rainy coasts': {
    'entertainers and artists': [`$["entertainers", "storytellers", "tailors", "painters", "entertainers and storytellers"]`],
    'farmers and fishers': [`$["farmers", "agriculturalists", "farmhands", "growers", "harvesters", "planters"]`],
    'gardeners and shepherds': [`$["ranch herds", "shepherds", "herders", "planters", "plowers"]`],
    'dyers and weavers': [`$["tailors", "textile merchants", "spinners", "threaders", "sewists"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'fortune tellers and diviners': [`$["fortune tellers", "diviners", "listeners", "storm listeners", "augurs", "fortune tellers and diviners"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "boat loaders", "dock workers", "ship suppliers", "suppliers"]`]
  },
  'summer storms': {
    'entertainers and artists': [`$["entertainers", "storytellers", "tailors", "painters", "entertainers and storytellers"]`],
    'farmers and fishers': [`$["farmers", "agriculturalists", "farmhands", "growers", "harvesters", "planters"]`],
    'gardeners and shepherds': [`$["ranch herds", "shepherds", "herders", "planters", "plowers"]`],
    'dyers and weavers': [`$["tailors", "textile merchants", "spinners", "threaders", "sewists"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'fortune tellers and diviners': [`$["fortune tellers", "diviners", "listeners", "storm listeners", "augurs", "fortune tellers and diviners"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "wagon loaders", "wagon drivers", "trade suppliers", "suppliers"]`]
  },
/*--- the forests of Creona ---*/
  'stormy woodlands': {
    'cultists and mystics': [`$["cultists", "traditionalists", "ritualists", "Enthaadians", "Ohm'Veshi"]`],
    'farmers and fishers': [`$["farmers", "foragers", "farmhands", "gatherers", "mushroom farmers", "wildsowers"]`],
    'laborers and servants': [`$["laborers", "tree haulers", "tree fellers", "tree haulers and laborers", "laborers and tree haulers"]`],
    'veterans and enforcers': [`$["veterans", "Proudsong", "veterans and protectors", "protectors", "Peacekeepers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "wagon drivers", "cargo carriers", "wagon suppliers", "suppliers"]`],
    'artisans and makers': [`$["lumberjacks", "ship makers", "shipbuilders", "shipwrights", "smiths", "metalsmiths", "shipbuilders and metalsmiths"]`]
  },
  'rocky coasts': {
    'cultists and mystics': [`$["cultists", "traditionalists", "ritualists", "Enthaadians", "Ohm'Veshi"]`],
    'farmers and fishers': [`$["farmers", "foragers", "farmhands", "gatherers", "mushroom farmers", "wildsowers"]`],
    'laborers and servants': [`$["laborers", "tree haulers", "tree fellers", "tree haulers and laborers", "laborers and tree haulers"]`],
    'veterans and enforcers': [`$["veterans", "Proudsong", "veterans and protectors", "protectors", "Peacekeepers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "dock workers", "cargo carriers", "ship suppliers", "suppliers"]`],
    'artisans and makers': [`$["lumberjacks", "ship makers", "shipbuilders", "shipwrights", "smiths", "metalsmiths", "shipbuilders and metalsmiths"]`]
  },
  'lush river valleys': {
    'cultists and mystics': [`$["cultists", "traditionalists", "ritualists", "Enthaadians", "Ohm'Veshi"]`],
    'farmers and fishers': [`$["hunters", "foragers", "fishers", "gatherers", "hunters and fishers", "wildsowers"]`],
    'laborers and servants': [`$["laborers", "tree haulers", "tree fellers", "tree haulers and laborers", "laborers and tree haulers"]`],
    'veterans and enforcers': [`$["veterans", "Proudsong", "veterans and protectors", "protectors", "Peacekeepers"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "wagon drivers", "cargo carriers", "wagon suppliers", "suppliers"]`],
    'artisans and makers': [`$["lumberjacks", "ship makers", "shipbuilders", "shipwrights", "smiths", "metalsmiths", "shipbuilders and metalsmiths"]`]
  },
/*--- Plenith South ---*/
  'tropical coasts and forests': {
    'caretakers and healers': [`$["herbalists", "healers", "shamans", "menders", "healers and herbalists"]`],
    'cultists and mystics': [`$["cultists", "mystics", "ritualists", "worshippers of Finojan", "Finojan worshippers"]`],
    'entertainers and artists': [`$["entertainers", "artists", "dancers", "musicians", "musicians and dancers"]`],
    'farmers and fishers': [`$["wildsowers", "fishers", "foragers", "coastal fishers", "forest hunters"]`],
    'gardeners and shepherds': [`$["fruit gardeners", "gardeners", "collectors", "fern gatherers", "bird catchers"]`],
    'dyers and weavers': [`$["dyers", "weavers", "tailors", "jewelry makers", "gem setters"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Proudsong"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "boat workers", "cargo carriers", "shipment movers", "suppliers"]`],
    'artisans and makers': [`$["artisans", "makers", "artisans and makers", "jewlers", "metalworkers", "enchanters", "gem cutters"]`],
    'luminaries and nobles': [`$["luminaries", "Gazta loyalists", "Hohepan loyalists", "noble dignitaries", "aristocrats", "luminaries and nobles"]`],
    'traders and innkeepers': [`$["traders", "brokers", "proprietors", "entrepreneurs", "organizers"]`]
  },
  'rainforests': {
    'caretakers and healers': [`$["herbalists", "healers", "shamans", "menders", "healers and herbalists"]`],
    'cultists and mystics': [`$["cultists", "mystics", "ritualists", "worshippers of Finojan", "Finojan worshippers"]`],
    'entertainers and artists': [`$["entertainers", "artists", "dancers", "musicians", "musicians and dancers"]`],
    'farmers and fishers': [`$["wildsowers", "fishers", "foragers", "coastal fishers", "forest hunters"]`],
    'gardeners and shepherds': [`$["fruit gardeners", "gardeners", "collectors", "fern gatherers", "bird catchers"]`],
    'dyers and weavers': [`$["dyers", "weavers", "tailors", "jewelry makers", "gem setters"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Proudsong"]`],
    'dock workers and cargo haulers': [`$["cargo laborers", "supply workers", "wagon caravaners", "supply movers", "suppliers"]`],
    'artisans and makers': [`$["artisans", "makers", "artisans and makers", "jewlers", "metalworkers", "enchanters", "gem cutters"]`],
    'luminaries and nobles': [`$["luminaries", "Gazta loyalists", "Hohepan loyalists", "noble dignitaries", "aristocrats", "luminaries and nobles"]`],
    'traders and innkeepers': [`$["traders", "brokers", "proprietors", "entrepreneurs", "organizers"]`]
  },
  'palm fields': {
    'caretakers and healers': [`$["herbalists", "healers", "shamans", "menders", "healers and herbalists"]`],
    'cultists and mystics': [`$["cultists", "mystics", "ritualists", "worshippers of Finojan", "Finojan worshippers"]`],
    'entertainers and artists': [`$["entertainers", "artists", "dancers", "musicians", "musicians and dancers"]`],
    'farmers and fishers': [`$["wildsowers", "fishers", "foragers", "coastal fishers", "forest hunters"]`],
    'gardeners and shepherds': [`$["fruit gardeners", "gardeners", "collectors", "fern gatherers", "bird catchers"]`],
    'dyers and weavers': [`$["dyers", "weavers", "tailors", "jewelry makers", "gem setters"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Proudsong"]`],
    'dock workers and cargo haulers': [`$["caravan traders", "traveling merchants", "merchants and suppliers", "wagon movers", "suppliers"]`],
    'artisans and makers': [`$["artisans", "makers", "artisans and makers", "jewlers", "metalworkers", "enchanters", "gem cutters"]`],
    'luminaries and nobles': [`$["luminaries", "Gazta loyalists", "Hohepan loyalists", "noble dignitaries", "aristocrats", "luminaries and nobles"]`],
    'traders and innkeepers': [`$["traders", "brokers", "proprietors", "entrepreneurs", "organizers"]`]
  },
/*--- Reviak Proper ---*/
  'steppes': {
    'farmers and fishers': [`$["growers", "foragers", "plowers", "gatherers", "tenders", "growers and foragers"]`],
    'gardeners and shepherds': [`$["tenders", "antelope herders", "herders", "toilers", "goat herders"]`],
    'guardians and sellswords': [`$["provicial guardians", "sellswords", "guardians and sellswords", "mercenaries", "soldiers"]`],
    'veterans and enforcers': [`$["war veterans", "Reviak enforcers", "Reviak guard", "Reviak military", "Reviak protectors"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "supply workers", "supply carriers", "supply movers", "suppliers"]`],
    'luminaries and nobles': [`$["luminaries", "nobles", "influencers", "dignitaries", "theists", "luminaries and nobles"]`],
    'merchants and curio peddlers': [`$["merchants", "curio peddlers", "cloaked traders", "Uskelian sundry traders", "Uskelian merchants", "traveling merchants"]`],
    'philosophers and scholars': [`$["advisers", "scholars", "counselors", "nostrumists", "analysts", "advisers and counselors"]`],
    'curio traders and smugglers': [`$["fences", "crooks", "rogues", "smugglers", "thieves", "swindlers"]`],
    'traders and innkeepers': [`$["traders", "innkeepers", "proprietors", "cooks", "cooks and innkeepers"]`],
    'travelers and adventurers': [`$["bards", "chroniclers", "trekkers", "pilgrims", "wandering minstrels"]`]
  },
  'flatlands': {
    'farmers and fishers': [`$["growers", "foragers", "plowers", "gatherers", "tenders", "growers and foragers"]`],
    'gardeners and shepherds': [`$["tenders", "antelope herders", "herders", "toilers", "goat herders"]`],
    'guardians and sellswords': [`$["provicial guardians", "sellswords", "guardians and sellswords", "mercenaries", "soldiers"]`],
    'veterans and enforcers': [`$["war veterans", "Reviak enforcers", "Reviak guard", "Reviak military", "Reviak protectors"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "supply workers", "supply carriers", "supply movers", "suppliers"]`],
    'luminaries and nobles': [`$["luminaries", "nobles", "influencers", "dignitaries", "theists", "luminaries and nobles"]`],
    'merchants and curio peddlers': [`$["merchants", "curio peddlers", "cloaked traders", "Uskelian sundry traders", "Uskelian merchants", "traveling merchants"]`],
    'philosophers and scholars': [`$["advisers", "scholars", "counselors", "nostrumists", "analysts", "advisers and counselors"]`],
    'curio traders and smugglers': [`$["fences", "crooks", "rogues", "smugglers", "thieves", "swindlers"]`],
    'traders and innkeepers': [`$["traders", "innkeepers", "proprietors", "cooks", "cooks and innkeepers"]`],
    'travelers and adventurers': [`$["bards", "chroniclers", "trekkers", "pilgrims", "wandering minstrels"]`]
  },
  'lightning stormlands': {
    'farmers and fishers': [`$["growers", "foragers", "plowers", "gatherers", "tenders", "growers and foragers"]`],
    'gardeners and shepherds': [`$["tenders", "antelope herders", "herders", "toilers", "goat herders"]`],
    'guardians and sellswords': [`$["provicial guardians", "sellswords", "guardians and sellswords", "mercenaries", "soldiers"]`],
    'veterans and enforcers': [`$["war veterans", "Reviak enforcers", "Reviak guard", "Reviak military", "Reviak protectors"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "supply workers", "supply carriers", "supply movers", "suppliers"]`],
    'luminaries and nobles': [`$["luminaries", "nobles", "influencers", "dignitaries", "theists", "luminaries and nobles"]`],
    'merchants and curio peddlers': [`$["merchants", "curio peddlers", "cloaked traders", "Uskelian sundry traders", "Uskelian merchants", "traveling merchants"]`],
    'philosophers and scholars': [`$["advisers", "scholars", "counselors", "nostrumists", "analysts", "advisers and counselors"]`],
    'curio traders and smugglers': [`$["fences", "crooks", "rogues", "smugglers", "thieves", "swindlers"]`],
    'traders and innkeepers': [`$["traders", "innkeepers", "proprietors", "cooks", "cooks and innkeepers"]`],
    'travelers and adventurers': [`$["bards", "chroniclers", "trekkers", "pilgrims", "wandering minstrels"]`]
  },
  'sandy plains': {
    'farmers and fishers': [`$["growers", "foragers", "plowers", "gatherers", "tenders", "growers and foragers"]`],
    'gardeners and shepherds': [`$["tenders", "antelope herders", "herders", "toilers", "goat herders"]`],
    'guardians and sellswords': [`$["provicial guardians", "sellswords", "guardians and sellswords", "mercenaries", "soldiers"]`],
    'veterans and enforcers': [`$["war veterans", "Reviak enforcers", "Reviak guard", "Reviak military", "Reviak protectors"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "supply workers", "supply carriers", "supply movers", "suppliers"]`],
    'luminaries and nobles': [`$["luminaries", "nobles", "influencers", "dignitaries", "theists", "luminaries and nobles"]`],
    'merchants and curio peddlers': [`$["merchants", "curio peddlers", "cloaked traders", "Uskelian sundry traders", "Uskelian merchants", "traveling merchants"]`],
    'philosophers and scholars': [`$["advisers", "scholars", "counselors", "nostrumists", "analysts", "advisers and counselors"]`],
    'curio traders and smugglers': [`$["fences", "crooks", "rogues", "smugglers", "thieves", "swindlers"]`],
    'traders and innkeepers': [`$["traders", "innkeepers", "proprietors", "cooks", "cooks and innkeepers"]`],
    'travelers and adventurers': [`$["bards", "chroniclers", "trekkers", "pilgrims", "wandering minstrels"]`]
  },
/*--- the Weyell Groves ---*/
  'temperate wetlands': {
    'farmers and fishers': [`$["foragers", "fishers", "gatherers", "trappers", "fishers and trappers", "fishers and foragers"]`],
    'gardeners and shepherds': [`$["tenders", "wildsowers", "gatherers", "wildsowers", "finders"]`],
    'guardians and sellswords': [`$["Pelmoran guard", "sellswords", "Pelmoran knights", "Pelmoran soldiers", "Pelmoran protectors"]`],
    'veterans and enforcers': [`$["Pelmoran knights", "enforcers", "Pelmoran guard", "Peacekeepers", "Thelean soldiers"]`],
    'fortune tellers and diviners': [`$["Ad'tai elders", "seers", "oracles", "interpreters", "augurs", "Ad'tai seers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "forest guides", "expedition leaders", "supply runners", "shippers", "suppliers"]`],
    'merchants and curio peddlers': [`$["traders", "enterprisers", "business owners", "supply traders", "merchants and curio peddlers", "sundry merchants"]`],
    'philosophers and scholars': [`$["dream interpreters", "diviners", "thinkers", "advisers", "dreamers", "interpreters and advisers"]`]
  },
  'pine thrushes': {
    'farmers and fishers': [`$["foragers", "fishers", "gatherers", "trappers", "fishers and trappers", "fishers and foragers"]`],
    'gardeners and shepherds': [`$["mushroom farmers", "wildsowers", "gatherers", "wildsowers", "mushroom foragers"]`],
    'guardians and sellswords': [`$["Pelmoran guard", "sellswords", "Pelmoran knights", "Pelmoran soldiers", "Pelmoran protectors"]`],
    'veterans and enforcers': [`$["Pelmoran knights", "enforcers", "Pelmoran guard", "Peacekeepers", "Thelean soldiers"]`],
    'fortune tellers and diviners': [`$["Ad'tai elders", "seers", "oracles", "interpreters", "augurs", "Ad'tai seers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "forest guides", "expedition leaders", "supply runners", "shippers", "suppliers"]`],
    'merchants and curio peddlers': [`$["traders", "enterprisers", "business owners", "supply traders", "merchants and curio peddlers", "sundry merchants"]`],
    'philosophers and scholars': [`$["dream interpreters", "diviners", "thinkers", "advisers", "dreamers", "interpreters and advisers"]`]
  },
  'swamps': {
    'farmers and fishers': [`$["foragers", "fishers", "gatherers", "trappers", "fishers and trappers", "fishers and foragers"]`],
    'gardeners and shepherds': [`$["tenders", "wildsowers", "gatherers", "wildsowers", "finders"]`],
    'guardians and sellswords': [`$["Pelmoran guard", "sellswords", "Pelmoran knights", "Pelmoran soldiers", "Pelmoran protectors"]`],
    'veterans and enforcers': [`$["Pelmoran knights", "enforcers", "Pelmoran guard", "Peacekeepers", "Thelean soldiers"]`],
    'fortune tellers and diviners': [`$["Ad'tai elders", "seers", "oracles", "interpreters", "augurs", "Ad'tai seers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "forest guides", "expedition leaders", "supply runners", "shippers", "suppliers"]`],
    'merchants and curio peddlers': [`$["traders", "enterprisers", "business owners", "supply traders", "merchants and curio peddlers", "sundry merchants"]`],
    'philosophers and scholars': [`$["dream interpreters", "diviners", "thinkers", "advisers", "dreamers", "interpreters and advisers"]`]
  },
  'mangroves': {
    'guardians and sellswords': [`$["Pelmoran guard", "sellswords", "Pelmoran knights", "Pelmoran soldiers", "Pelmoran protectors"]`],
    'veterans and enforcers': [`$["Pelmoran knights", "enforcers", "Pelmoran guard", "Peacekeepers", "Thelean soldiers"]`],
    'fortune tellers and diviners': [`$["Ad'tai elders", "seers", "oracles", "interpreters", "augurs", "Ad'tai seers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "forest guides", "expedition leaders", "supply runners", "shippers", "suppliers"]`],
    'merchants and curio peddlers': [`$["traders", "enterprisers", "business owners", "supply traders", "merchants and curio peddlers", "sundry merchants"]`],
    'philosophers and scholars': [`$["dream interpreters", "diviners", "thinkers", "advisers", "dreamers", "interpreters and advisers"]`]
  },
/*--- southwest Hinn ---*/
  'coastal wetlands': {
    'caretakers and healers': [`$["herbalists", "healers", "surgeons", "herbalists and healers", "surgeons and healers"]`],
    'cultists and mystics': [`$["cultists", "traditionalists", "Joza ritualists", "ceremonialists", "Vokian worshippers"]`],
    'entertainers and artists': [`$["acrobats", "artists", "dancers", "musicians", "acrobats and dancers"]`],
    'dyers and weavers': [`$["dye traders", "dye harvesters", "dye farmers", "dye preparers", "thread dyers"]`],
    'paupers and beggars': [`$["outcasts", "wanderers", "leeches", "vagabonds", "thieves"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "soldiers"]`],
    'dock workers and cargo haulers': [`$["cargo shippers", "boat haulers", "channel sailors", "supply shippers", "suppliers"]`],
    'artisans and makers': [`$["artisans", "tailors", "textile embroiderers", "carvers", "millers", "carpenters", "carvers and millers"]`],
    'curio traders and smugglers': [`$["cloaked merchants", "curio traders", "enterprisers", "opportunists", "gamblers"]`],
    'traders and innkeepers': [`$["traders", "surveyors", "negotiators", "inn owners", "traders and surveyors"]`],
    'travelers and adventurers': [`$["freeriders", "adventurers", "trekkers", "expeditioners", "freeriders and adventurers"]`]
  },
  'southern flatlands': {
    'caretakers and healers': [`$["herbalists", "healers", "surgeons", "herbalists and healers", "surgeons and healers"]`],
    'cultists and mystics': [`$["cultists", "traditionalists", "Joza ritualists", "ceremonialists", "Renkian worshippers"]`],
    'entertainers and artists': [`$["acrobats", "artists", "dancers", "musicians", "acrobats and dancers"]`],
    'dyers and weavers': [`$["dye traders", "dye harvesters", "dye farmers", "dye preparers", "thread dyers"]`],
    'paupers and beggars': [`$["outcasts", "wanderers", "leeches", "vagabonds", "thieves"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "soldiers"]`],
    'dock workers and cargo haulers': [`$["cargo shippers", "wagon haulers", "supply trekkers", "supply drivers", "suppliers"]`],
    'artisans and makers': [`$["artisans", "sculptors", "stonemasons", "carvers", "masons", "fencers", "sculptors and masons"]`],
    'curio traders and smugglers': [`$["cloaked merchants", "curio traders", "enterprisers", "opportunists", "gamblers"]`],
    'traders and innkeepers': [`$["traders", "surveyors", "negotiators", "inn owners", "traders and surveyors"]`],
    'travelers and adventurers': [`$["freeriders", "adventurers", "trekkers", "expeditioners", "freeriders and adventurers"]`]
  },
  'eastern borderlands': {
    'caretakers and healers': [`$["herbalists", "healers", "surgeons", "herbalists and healers", "surgeons and healers"]`],
    'cultists and mystics': [`$["cultists", "traditionalists", "Joza ritualists", "ceremonialists", "Renkian worshippers"]`],
    'entertainers and artists': [`$["acrobats", "artists", "dancers", "musicians", "acrobats and dancers"]`],
    'dyers and weavers': [`$["dye traders", "dye harvesters", "dye farmers", "dye preparers", "thread dyers"]`],
    'paupers and beggars': [`$["outcasts", "wanderers", "leeches", "vagabonds", "thieves"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "soldiers"]`],
    'dock workers and cargo haulers': [`$["cargo shippers", "wagon haulers", "supply trekkers", "supply drivers", "suppliers"]`],
    'artisans and makers': [`$["artisans", "sculptors", "stonemasons", "carvers", "masons", "fencers", "sculptors and masons"]`],
    'curio traders and smugglers': [`$["cloaked merchants", "curio traders", "enterprisers", "opportunists", "gamblers"]`],
    'traders and innkeepers': [`$["traders", "surveyors", "negotiators", "inn owners", "traders and surveyors"]`],
    'travelers and adventurers': [`$["freeriders", "adventurers", "trekkers", "expeditioners", "freeriders and adventurers"]`]
  },
/*--- the Schelk Islands ---*/
  'warm inlets': {
    'cultists and mystics': [`$["tribalists", "traditionalists", "ritualists", "tribalists and traditionalists", "Finojan worshippers"]`],
    'laborers and servants': [`$["laborers", "stewards", "stewards and laborers", "laborers and stewards"]`],
    'dyers and weavers': [`$["laborers", "attendants", "helpers", "stewards", "communalists"]`],
    'paupers and beggars': [`$["swimmers", "helpers", "panhandlers", "watchers", "haulers"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'dock workers and cargo haulers': [`$["cargo shippers", "dock workers", "shipment workers", "shiphands", "ship suppliers"]`],
    'intellectuals and architects': [`$["intellectuals", "listeners", "dreamers", "counselors", "dreamers and listeners"]`],
    'luminaries and nobles': [`$["outcasts", "pariahs", "delegitimized nobles", "communal elders", "councilists", "oligarchs"]`],
    'travelers and adventurers': [`$["sailors", "adventurers", "shipriders", "gliders", "sailors and adventurers"]`]
  },
  'volcanic crags': {
    'cultists and mystics': [`$["tribalists", "traditionalists", "ritualists", "tribalists and traditionalists", "Finojan worshippers"]`],
    'laborers and servants': [`$["laborers", "stewards", "stewards and laborers", "laborers and stewards"]`],
    'dyers and weavers': [`$["laborers", "attendants", "toilers", "stewards", "communalists"]`],
    'paupers and beggars': [`$["sitters", "laborers", "panhandlers", "watchers", "haulers"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'dock workers and cargo haulers': [`$["cargo shippers", "dock workers", "shipment workers", "shiphands", "ship suppliers"]`],
    'intellectuals and architects': [`$["intellectuals", "listeners", "dreamers", "counselors", "dreamers and listeners"]`],
    'luminaries and nobles': [`$["outcasts", "pariahs", "delegitimized nobles", "communal elders", "councilists", "oligarchs"]`],
    'travelers and adventurers': [`$["hikers", "adventurers", "expeditionists", "walkers", "hikers and adventurers"]`]
  },
  'coral reefs': {    
    'farmers and fishers': [`$["fishers", "netcasters", "divers", "trawlers", "divers and netcasters", "fishers and trawlers"]`],
    'gardeners and shepherds': [`$["seaweed farmers", "netcasters", "whalers", "algae tenders", "whalers and netcasters"]`],
    'cultists and mystics': [`$["tribalists", "traditionalists", "ritualists", "tribalists and traditionalists", "Finojan worshippers"]`],
    'laborers and servants': [`$["laborers", "stewards", "stewards and laborers", "laborers and stewards"]`],
    'dyers and weavers': [`$["laborers", "attendants", "helpers", "stewards", "communalists"]`],
    'paupers and beggars': [`$["swimmers", "helpers", "panhandlers", "watchers", "haulers"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'dock workers and cargo haulers': [`$["cargo shippers", "dock workers", "shipment workers", "shiphands", "ship suppliers"]`],
    'intellectuals and architects': [`$["intellectuals", "listeners", "dreamers", "counselors", "dreamers and listeners"]`],
    'luminaries and nobles': [`$["outcasts", "pariahs", "delegitimized nobles", "communal elders", "councilists", "oligarchs"]`],
    'travelers and adventurers': [`$["sailors", "adventurers", "shipriders", "gliders", "sailors and adventurers"]`]
  },
  'sandy beaches': {
    'farmers and fishers': [`$["fishers", "netcasters", "divers", "trawlers", "divers and netcasters", "fishers and trawlers"]`],
    'gardeners and shepherds': [`$["seaweed farmers", "netcasters", "whalers", "algae tenders", "whalers and netcasters"]`],
    'farmers and fishers': [`$["farmers", "fishers", "farmhands", "trawlers", "farmers and fishers", "fishers and farmhands"]`],
    'gardeners and shepherds': [`$["gardeners", "shepherds", "herders", "soil tenders", "gardeners and shepherds"]`],
    'cultists and mystics': [`$["tribalists", "traditionalists", "ritualists", "tribalists and traditionalists", "Finojan worshippers"]`],
    'laborers and servants': [`$["laborers", "stewards", "stewards and laborers", "laborers and stewards"]`],
    'dyers and weavers': [`$["laborers", "attendants", "helpers", "stewards", "communalists"]`],
    'paupers and beggars': [`$["swimmers", "helpers", "panhandlers", "watchers", "haulers"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "military servants", "Peacekeepers"]`],
    'dock workers and cargo haulers': [`$["cargo shippers", "dock workers", "shipment workers", "shiphands", "ship suppliers"]`],
    'intellectuals and architects': [`$["intellectuals", "listeners", "dreamers", "counselors", "dreamers and listeners"]`],
    'luminaries and nobles': [`$["outcasts", "pariahs", "delegitimized nobles", "communal elders", "councilists", "oligarchs"]`],
    'travelers and adventurers': [`$["sailors", "adventurers", "shipriders", "gliders", "sailors and adventurers"]`]
  },
/*--- central Bosen ---*/
  'rocky highlands': {
    'caretakers and healers': [`$["medics", "healers", "physicians", "medics and healers", "healers and physicians"]`],
    'entertainers and artists': [`$["entertainers", "storytellers", "dancers", "musicians", "dancers and artists"]`],
    'farmers and fishers': [`$["farmers", "foragers", "plowers", "gatherers", "farmhands", "foragers and farmers"]`],
    'gardeners and shepherds': [`$["goat herders", "shepherds", "herders", "mountain goat herders", "foragers"]`],
    'laborers and servants': [`$["miners", "rock breakers", "salt miners", "ore miners", "ore merchants"]`],
    'dyers and weavers': [`$["spinners", "weavers", "spinners and weavers", "loom workers", "wool spinners"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "soldiers", "Proudsong"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "mountain workers", "cargo carriers", "road suppliers", "suppliers"]`],
    'artisans and makers': [`$["engineers", "makers", "engineers and makers", "machinists", "masons", "stonemasons", "machinists and masons"]`],
    'travelers and adventurers': [`$["mountaineers", "adventurers", "climbers", "hikers", "explorers", "mountaineers and explorers"]`]
  },
  'river valleys': {
    'caretakers and healers': [`$["medics", "healers", "physicians", "medics and healers", "healers and physicians"]`],
    'entertainers and artists': [`$["entertainers", "storytellers", "dancers", "musicians", "dancers and artists"]`],
    'farmers and fishers': [`$["farmers", "fishers", "gatherers", "nut gatherers", "wildsowers", "fishers and wildsowers"]`],
    'gardeners and shepherds': [`$["rabbit herders", "shepherds", "herders", "gardeners", "wildflower gardeners"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "soldiers", "Proudsong"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "mountain workers", "cargo carriers", "road suppliers", "suppliers"]`],
    'artisans and makers': [`$["engineers", "makers", "engineers and makers", "machinists", "masons", "stonemasons", "machinists and masons"]`],
    'travelers and adventurers': [`$["trekkers", "adventurers", "riverwalkers", "explorers", "trekkers and explorers"]`]
  },
  'terraced vine fields': {
    'caretakers and healers': [`$["medics", "healers", "physicians", "medics and healers", "healers and physicians"]`],
    'entertainers and artists': [`$["entertainers", "storytellers", "dancers", "musicians", "dancers and artists"]`],
    'farmers and fishers': [`$["tenders", "vineyard tenders", "beekeepers", "gatherers", "bee tenders", "tenders and gatherers"]`],
    'gardeners and shepherds': [`$["beekeepers", "gardeners", "tenders", "beekeepers", "foragers"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "veterans and enforcers", "soldiers", "Proudsong"]`],
    'dock workers and cargo haulers': [`$["cargo haulers", "mountain workers", "cargo carriers", "road suppliers", "suppliers"]`],
    'artisans and makers': [`$["engineers", "makers", "engineers and makers", "machinists", "masons", "stonemasons", "machinists and masons"]`]
  },
/*--- the Northern Wilds ---*/
  'icy steppes': {
    'cultists and mystics': [`$["Kimenian mystics", "Kimenian traditionalists", "tribalists", "Vallicast worshippers", "pagans"]`],
    'farmers and fishers': [`$["gatherers", "hunters", "hunters and foragers", "foragers"]`],
    'gardeners and shepherds': [`$["elk hunters", "caribou hunters", "berry gatherers", "community hunters", "bear hunters"]`],
    'dyers and weavers': [`$["dyers", "elk weavers", "dyers and weavers", "loom workers", "thread curers", "tanners"]`],
    'paupers and beggars': [`$["stewards", "carriers", "squires", "hermits", "wildfolk", "wildkin"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "Proudsong", "navigators", "soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "sled workers", "military suppliers", "caravan and sled workers", "dog sled drivers"]`],
    'artisans and makers': [`$["salt miners", "miners", "rock haulers", "sculptors", "bridge makers", "masons", "miners and masons"]`]
  },
  'extreme hills': {
    'cultists and mystics': [`$["Kimenian mystics", "Kimenian traditionalists", "tribalists", "Vallicast worshippers", "pagans"]`],
    'farmers and fishers': [`$["gatherers", "hunters", "hunters and foragers", "foragers"]`],
    'gardeners and shepherds': [`$["elk hunters", "caribou hunters", "berry gatherers", "community hunters", "bear hunters"]`],
    'dyers and weavers': [`$["dyers", "elk weavers", "dyers and weavers", "loom workers", "thread curers", "tanners"]`],
    'paupers and beggars': [`$["stewards", "carriers", "squires", "hermits", "wildfolk", "wildkin"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "Proudsong", "navigators", "soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "sled workers", "military suppliers", "caravan and sled workers", "dog sled drivers"]`],
    'artisans and makers': [`$["salt miners", "miners", "rock haulers", "sculptors", "bridge makers", "masons", "miners and masons"]`]
  },
  'frozen forests': {
    'cultists and mystics': [`$["Kimenian mystics", "Kimenian traditionalists", "tribalists", "Vallicast worshippers", "pagans"]`],
    'farmers and fishers': [`$["gatherers", "hunters", "hunters and foragers", "foragers"]`],
    'gardeners and shepherds': [`$["elk hunters", "caribou hunters", "berry gatherers", "community hunters", "bear hunters"]`],
    'dyers and weavers': [`$["dyers", "elk weavers", "dyers and weavers", "loom workers", "thread curers", "tanners"]`],
    'paupers and beggars': [`$["stewards", "carriers", "squires", "hermits", "wildfolk", "wildkin"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "Proudsong", "navigators", "soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "sled workers", "military suppliers", "caravan and sled workers", "dog sled drivers"]`],
    'artisans and makers': [`$["salt miners", "miners", "rock haulers", "sculptors", "bridge makers", "masons", "miners and masons"]`]
  },
  'wastelands': {
    'cultists and mystics': [`$["Kimenian mystics", "Kimenian traditionalists", "tribalists", "Vallicast worshippers", "pagans"]`],
    'farmers and fishers': [`$["gatherers", "hunters", "hunters and foragers", "foragers"]`],
    'gardeners and shepherds': [`$["elk hunters", "caribou hunters", "berry gatherers", "community hunters", "bear hunters"]`],
    'dyers and weavers': [`$["dyers", "elk weavers", "dyers and weavers", "loom workers", "thread curers", "tanners"]`],
    'paupers and beggars': [`$["stewards", "carriers", "squires", "hermits", "wildfolk", "wildkin"]`],
    'veterans and enforcers': [`$["veterans", "enforcers", "Proudsong", "navigators", "soldiers"]`],
    'dock workers and cargo haulers': [`$["caravan haulers", "sled workers", "military suppliers", "caravan and sled workers", "dog sled drivers"]`],
    'artisans and makers': [`$["salt miners", "miners", "rock haulers", "sculptors", "bridge makers", "masons", "miners and masons"]`]
  }
}