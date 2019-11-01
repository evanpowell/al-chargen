/*
    How this fits into the layout:

    [CHARACTER NAME] [PAST TENSE VERB] in a [SETTLEMENT TYPE] [BIOME PREPOSITION] [BIOME] [PROVINCE PREPOSITION] [PROVINCE]

    Example 1: "Kiskuja grew up in a hamlet deep within a spruce forest in the Ommultic Front."
    Example 2: "Sairdunel hails from a large city along the rainy coast of Siadagal"
*/

export const biomes = {
    'spruce forest': {
        biomePrepositions: [
            'nestled within a',
            'deep within a',
            'neighboring a',
            'in the middle of a vast',
            'carved out of a'
        ],
        provincePrepositions: [
            'in'
        ]
    },
    'rainy coast': {
        biomePrepositions: [
            'along the',
            'looking of over the',
            'overlooking the'
        ],
        provincePrepositions: [
            'of'
        ]
    }
}