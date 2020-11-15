import { alldedanNames } from './names-partials/alldedan';
import { ardonicNames } from './names-partials/ardonic';
import { broleanNames } from './names-partials/brolean';
import { bwantaalNames } from './names-partials/bwantaal';
import { chenachuaNames } from './names-partials/chenachua';
import { creonicNames } from './names-partials/creonic';
import { delonianNames } from './names-partials/delonian';
import { elmecianNames } from './names-partials/elmecian';
import { esahnNames } from './names-partials/esahn';
import { kimenianNames } from './names-partials/kimenian';
import { lorosianNames } from './names-partials/lorosian';
import { ommulticNames } from './names-partials/ommultic';
import { taluanNames } from './names-partials/taluan';
import { theleanNames } from './names-partials/thelean';
import { torlishNames } from './names-partials/torlish';
import { uskelianNames } from './names-partials/uskelian';
import { volaaniNames } from './names-partials/volaani';

/*

The 'genderFlipChance' property represents the probability in one thousand (x / 1000)
that a person would have a gendered name that is not aligned with their sex (male with
feminine name or female with masculine name).

Only languages with masculine and feminine names have a 'genderFlipChance' property.

*/

export const names = {
    'Alldedan': {
        nameList: alldedanNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 5 },
        ]
    },
    'Ardonic': {
        nameList: ardonicNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 15 },
            { type: 'neutral', probability: 10 }
        ]
    },
    'Brolean': {
        nameList: broleanNames,
        probabilities: [
            { type: 'shamanic', probability: 15 }
        ]
    },
    'Bwantaal': {
        nameList: bwantaalNames,
        isCommunityBased: true
    },
    'Chenachua': {
        nameList: chenachuaNames,
    },
    'Creonic': {
        nameList: creonicNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 20 }
        ]
    },
    'Delonian': {
        nameList: delonianNames,
        probabilities: [
            { type: 'genderFlip', probability: 15 },
            { type: 'spiritual', probability: 10 }
        ]
    },
    'Elmecian': {
        nameList: elmecianNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 15 },
            { type: 'neutral', probability: 10 },
        ]
    },
    [`Es'ahn`]: {
        nameList: esahnNames,
        isCommunityBased: true
    },
    'Kimenian': {
        nameList: kimenianNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 20 },
            { type: 'neutral', probability: 20 }
        ]
    },
    'Lorosian': {
        nameList: lorosianNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 15 },
            { type: 'neutral', probability: 10 }
        ]
    },
    'Ommultic': {
        nameList: ommulticNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 10 },
            { type: 'neutral', probability: 15 }
        ]
    },
    'Taluan': {
        nameList: taluanNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 20 },
            { type: 'neutral', probability: 10 }
        ]
    },
    'Thelean': {
        nameList: theleanNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 5 },
            { type: 'neutral', probability: 15 }
        ]
    },
    'Torlish': {
        nameList: torlishNames,
        isGendered: true,
        probabilities: [
            { type: 'genderFlip', probability: 35 }
        ]
    },
    'Uskelian': {
        nameList: uskelianNames,
        isCommunityBased: true
    },
    'Volaani': {
        nameList: volaaniNames,
    }
}