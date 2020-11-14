export const character = {
  namespaced: true,
  state: {

    character: {
      characterName: '',
      attributes: {
        initialScores: {
          str: null,
          end: null,
          agi: null,
          pre: null,
          int: null,
          wis: null,
          per: null,
          cha: null
        },
        adjustments: {
          str: null,
          end: null,
          agi: null,
          pre: null,
          int: null,
          wis: null,
          per: null,
          cha: null
        },
        bonusPenalties: null
      },
      ancestry: '',
      sex: '',
      detailedAppearance: {
        height: {
          initial: null,
          final: null
        },
        weight: {
          initial: null,
          final: null
        },
        age: {
          initial: null,
          final: null
        },
      },
      distinguishingFeatures: [], // string array of distinguishing features
      literacy: '',
      origins: {
        birthDate: null, // object with dateString, holidayArray, and isMoonday boolean
        provincialOrigins: null, // object with region, regional languages array, and prevalent biomes,
        originalSettlement: '',
        parentage: {
          type: '',
          statuses: {
            deceased: 2,
            total: null
          } // object with status keys and number values
        },
        otherRelations: {
          siblings: {},
          kin: {},
          mentors: {},
          companions: {},
          mates: {},
          rivals: {},
          patrons: {},
          pets: {}
        }, // object with keys for type of relations
        personalReputation: '',
        connection: '',
        homeCommunity: {
          description: '',
          expertises: []
        },
        culturalValues: '',
        optionalConnections: {
          description: '',
          notes: '',
          modifications: {}
        }
      },
      aptitude: '',
      advantage: '',
      expertise: '',
      vocation: '',
      abilities: {
        assessThreat: null,
        collectInformation: null,
        find: null,
        haggle: null,
        navigate: null,
        takeNotice: null
      },
      resistances: {
        addiction: null,
        aversion: null,
        debility: null,
        explosion: null,
        infection: null,
        toxin: null
      },
      conditioning: {
        poise: null,
        avoidance: null,
        capacity: null
      },
      skills: {},
      proficiencies: {},
      inventory: {

      },
      titles: [
        {
          title: '',
          description: '',
          notes: '',
          modifications: {}
        }
      ],
      term: {
        years: null,
        outcome: {
          description: '',
          modifications: {}
        }
      },
      palestone: {
        description: '',
        encounterLocale: '',
        sharedExposure: '',
        impact: '',
        outcome: {
          description: '',
          notes: '',
          modifications: {

          }
        }
      },
      wealth: null
    }

  }
}
