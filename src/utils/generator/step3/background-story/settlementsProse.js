export const settlementsProse = {
  'hamlet': {
    verbs: {
      past: [
        `was raised in`,
        `grew up among`,
        `grew up in`,
        `was born in`
      ],
      present: [
        `is from`
      ]
    },
    phrases: [
      `$["a sleepy", "an industrious", "a south-facing", "a bustling", "a small"] $["hamlet", "clanship", "group of cabins", "collection of huts"]`,
      `$["a central", "a forgotten", "a mystic", "a bright", "a small"] $["hamlet", "clanship", "community", "settlement"]`,
      `$["a small", "a sizeable", "a backward", "a central", "an upstart"] $["hamlet", "clanship", "community", "settlement"]`,
      `$["a sparse", "a dense", "a traditional", "a sleepy", "a cultural"] $["hamlet", "clanship", "community", "settlement"]`
    ]
  },
  'village': {
    verbs: {
      past: [
        `grew up in`,
        `was raised in`,
        `found $PRONOUN_POSSESSIVE home outside`
      ],
      present: [
        `is a child of`
      ]
    },
    phrases: [
      `$["a traditional", "a noble", "an abandoned", "a distant", "a small"] $["village", "redoubt", "crossroads", "community"]`,
      `$["a central", "a northern", "a southern", "a western", "an eastern"] $["village", "redoubt", "crossroads", "community"]`,
      `$["a well positioned", "a stone ", "a walled", "a separated", "a newly formed"] $["village", "redoubt", "crossroads", "community"]`,
      `$["a traditional", "a walled", "a guarded", "an empty", "a sparse"] $["village", "redoubt", "crossroads", "community"]`
    ]
  },
  'small town': {
    verbs: {
      past: [
        `grew up in`,
        `was brought up in`,
        `was raised within`,
      ],
      present: [
        `comes from`
      ]
    },
    phrases: [
      `$["a quiet", "a busy", "an abandoned", "a forgotten", "a willful"] $["small town", "town", "township", "colony"]`,
      `$["a sprawling", "a sparsely populated", "an irregular", "a sustainable", "a diligent"] $["small town", "town", "township", "colony"]`,
      `$["a gated", "a sleepy", "a provincial", "an isolated", "a quiet"] $["small town", "town", "township", "colony"]`,
      `$["a rocky", "an underwhelming", "an energetic", "a populous", "a busy"] $["small town", "town", "township", "colony"]`
    ],
  },
  'large township': {
    verbs: {
      past: [
        `was born into`,
        `was raised in`
      ],
      present: [
        `comes from the descendants of`,
        `hails from`,
        `is a child of`
      ]
    },
    phrases: [
      `$["a generational", "a widespread", "a contested", "an isolated", "a broadly established"] $["large township", "large town", "township", "district"]`,
      `$["a centrally positioned", "a noble", "an abandoned", "a sparsely populated", "a failing"] $["large township", "large town", "township", "district"]`,
      `$["a sprawling", "a populous", "a lonely", "a western", "an eastern"] $["town", "large town", "township", "district"]`,
      `$["an expansive", "a walled", "a guarded", "an empty", "a sparse"] $["town", "large town", "township", "district"]`
    ]
  },
  'small city': {
    verbs: {
      past: [
        `grew up in`,
        `was raised in`,
        `was born in`
      ],
      present: [
        `hails from`,
        `comes from`
      ]
    },
    phrases: [
      `$["a tranquil", "a guarded", "a gleaming", "an ancestral", "a singular"] $["small city", "city", "municipality", "locality"]`,
      `$["a disparate", "a densely packed", "a populous", "an isolated", "a withering"] $["small city", "city", "municipality", "locality"]`,
      `$["a traditional", "an energetic", "an ancient", "an upstart", "a difficult to find"] $["small city", "city", "municipality", "locality"]`,
      `$["a tourist", "a transient", "a resource-starved", "a resource-rich", "a wild"] $["small city", "city", "municipality", "locality"]`
    ]
  },
  'large city': {
    verbs: {
      past: [
        `was born into`,
        `was raised in`
      ],
      present: [
        `is from`,
        `hails from`
      ]
    },
    phrases: [
      `$["a community locality", "a locality"] within $["a densely populated", "a diverse", "a traditional", "a newly formed", "a Thelean-funded"] $["large city", "great city", "metropolis", "urban center"]`,
      `$["an archaic community", "a locality"] in $["an ancestral", "a provincial", "a forgotten", "a conventional", "a Torlish-inspired"] $["large city", "great city", "metropolis", "urban center"]`,
      `$["the central", "the labor", "the western", "the eastern", "an historical"] borough of $["a large city", "a great city", "a metropolis", "an urban center"]`,
      `$["the central", "the north", "the south", "the west", "the east"] district within $["a large city", "a great city", "a metropolis", "an urban center"]`
    ]
  },
  'diasporic group': {
    verbs: {
      past: [
        `was born into`,
        `was born among`,
        `was raised within`
      ],
      present: [
        `is from the $["first", "second", "third"] generation of`
      ]
    },
    phrases: [
      `$["an ancestral", "a wandering", "a newly founded", "a remote", "a war-torn"] $["diasporic group", "refugee camp", "cultural redoubt", "diasporic citadel"]`,
      `$["a poor", "a populous", "a displaced", "a western", "an eastern"] $["diasporic group", "refugee camp", "cultural redoubt", "diasporic citadel"]`,
      `$["a proud", "a disenfranchised", "a resilient", "an isolated", "a little known"] $["diasporic group", "refugee camp", "cultural redoubt", "diasporic citadel"]`,
      `$["a longstanding", "a war torn", "a culturally traditional", "a diverse", "a recent"] $["diasporic group", "refugee camp", "cultural redoubt", "diasporic citadel"]`
    ]
  },
  'nomadic group': {
    verbs: {
      past: [
        `was born into`,
        `was born as a member of`,
        `was raised $["hunting with", "on the move by"]`,
        `grew up $["hunting with", "on the move with", "traveling with"]`
      ],
      present: [
        `hails from`,
        `comes from`
      ]
    },
    phrases: [
      `$["an intentional", "a hidden", "a sustainable", "a hardy", "a communal"] $["nomadic group", "hunting party", "group of nomads", "nomadic community"]`,
      `$["a traditional", "a singular", "a little known", "a remote", "a well known"] $["nomadic group", "hunting party", "group of nomads", "nomadic community"]`,
      `$["the ancestral", "the agrarian", "a disheveled", "an overpopulated", "a dissolving"] $["nomadic group", "hunting party", "group of nomads", "nomadic community"]`,
      `$["the inspirational", "a wandering", "a generational", "a successful", "a resilient"] $["nomadic group", "hunting party", "group of nomads", "nomadic community"]`
    ]
  },
}

