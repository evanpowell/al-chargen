/*
    How this fits into the layout:

    [CHARACTER NAME] [SETTLEMENT PREPOSITION] [SETTLEMENT TYPE] [BIOME PREPOSITION] [BIOME] [PROVINCE PREPOSITION] [PROVINCE]

    Example 1: "Kiskuja grew up in a hamlet deep within the spruce forests north of the Ommultic Front."
    Example 2: "Sairdunel hails from a large city along the rainy coast of Siadagal
*/

// TODO: 1) finish assigining types to settlements
//       2) flesh out settlement prepositons

export const settlements = {
    'diasporic group': {
        type: 'group'
    },
    'hamlet': {
        type: 'location'
    },
    'village': {
        type: 'location'
    },
    'small town': {
        type: 'location'
    },
    'large township': {
        type: 'location'
    },
    'small city': {
        type: 'location'
    },
    'large city': {
        type: 'location'
    },
    'nomadic group': {
        type: 'group'
    }
}


export const settlementPrepositions = {
    neutral: [
        'hails from a',
        'is from a',
        'comes from a'
    ],
    group: [
        'was born into a',
        'is a member of a'
    ],
    location: [
        'grew up in a',
        'spent their early years in a'
    ]
}