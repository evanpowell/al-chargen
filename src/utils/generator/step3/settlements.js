/*
    How this fits into the layout:

    [CHARACTER NAME] [VERB/SETTLEMENT PREPOSITION] [SETTLEMENT] [BIOME PREPOSITION] [BIOME] [PROVINCE PREPOSITION] [PROVINCE]

    Example 1: [Kiskuja] [grew up in a] [hamlet] [deep within the] [spruce forests] [north of] [the Ommultic Front]
    Example 2: [Sairdunel] [hails from a] [large city] [along the] [rainy coasts] [of] [Siadagal]

    NOTE: Settlements are categorized further by settlement type. This allows for a greater variety of
          both settlement prepositions and biome prepositions.
*/

// settlements correspond to 'SETTLEMENT'
export const settlements = [
    'diasporic group',
    'hamlet',
    'village',
    'small town',
    'large township',
    'small city',
    'large city',
    'nomadic group'
];


//     'diasporic group': {
//         type: 'group'
//     },
//     'hamlet': {
//         type: 'location'
//     },
//     'village': {
//         type: 'location'
//     },
//     'small town': {
//         type: 'location'
//     },
//     'large township': {
//         type: 'location'
//     },
//     'small city': {
//         type: 'location'
//     },
//     'large city': {
//         type: 'location'
//     },
//     'nomadic group': {
//         type: 'nomadic'
//     }
// }


// // settlementPrepositions correspond to 'VERB/SETTLEMENT PREPOSITION'
// // -- prepositions that work well for any settlement type are 'neutral'.
// export const settlementPrepositions = {
//     neutral: [
//         'hails from a',
//         'is from a',
//         'comes from a',
//         'stems from a',
//         'springs from a'
//     ],
//     group: [
//         'was born into a',
//         'is the child of a',
//         'was born among the refugees of a',
//         'is from the first generation of a',
//         'is from the second generation of a'
//     ],
//     nomadic: [
//         'was born into a',
//         'was raised in a',
//         'was cared for among the hunters of a',
//         'was reared among the herders of a',
//         'is a member of a'
//     ],
//     location: [
//         'grew up in a',
//         'was brought up in a',
//         'hails from a community locality within a',
//         'is from an archaic community in a',
//         'is from the central district within a'
//     ]
// }