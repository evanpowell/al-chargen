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
    3: 'village',
    4: 'small town',
    5: 'large township',
    6: 'small city',
    7: 'large city',
    8: 'nomadic group',
}


export const settlementPrepositions = {
    neutral: [
        'hails from',
    ],
    group: [
        'was born into a'
    ],
    location: [

    ]
}