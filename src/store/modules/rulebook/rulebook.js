export const rulebook = {
  namespaced: true,
  state: {
    character: {
      characterName: '',
      attributes: {
        initialScores: null, // object with attribute keys
        adjustedScores: null,
        bonusPenalties: null
      },
      ancestry: '',
      sex: '',
      detailedAppearance: {
        initial: null, // object with appearance detail keys
        final: null
      },
      distinguishingFeatures: [], // string array of distinguishing features
      literacy: '',
      
      origins: {
        birthDate: null, // object with keys for month, week, and weekday
        provincialOrigins: null, // object with region, regional languages array, and prevalent biomes,
        originalSettlement: '',
        parentage: {
          type: '',
          numberOfParent: null,
          statuses: null // object with status keys and number values
        },
        otherRelations: null, // object with keys for type of relations
        personalReputation: '',
        connection: '',
        homeCommunity: '',
        culturalValues: '',
      },
    }
  }
}
