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

TODO: fine tune the 'genderFlipChance' values

*/

export const names = {
    'Alldedan': {
        nameList: alldedanNames,
        genderFlipChance: 1
    },
    'Ardonic': {
        nameList: ardonicNames,
        genderFlipChance: 10
    },
    'Brolean': {
        nameList: broleanNames
    },
    'Bwantaal': {
        nameList: bwantaalNames
    },
    'Chenachua': {
        nameList: chenachuaNames,
    },
    'Creonic': {
        nameList: creonicNames,
        genderFlipChance: 10
    },
    'Delonian': {
        nameList: delonianNames,
        genderFlipChance: 10
    },
    'Elmecian': {
        nameList: elmecianNames,
        genderFlipChance: 10
    },
    [`Es'ahn`]: {
        nameList: esahnNames,
        genderFlipChance: 10
    },
    'Kimenian': {
        nameList: kimenianNames,
        genderFlipChance: 10
    },
    'Lorosian': {
        nameList: lorosianNames,
        genderFlipChance: 10
    },
    'Ommultic': {
        nameList: ommulticNames,
        genderFlipChance: 10
    },
    'Taluan': {
        nameList: taluanNames,
        genderFlipChance: 10
    },
    'Thelean': {
        nameList: theleanNames,
        genderFlipChance: 10
    },
    'Torlish': {
        nameList: torlishNames,
        genderFlipChance: 10
    },
    'Uskelian': {
        nameList: uskelianNames,
        genderFlipChance: 10
    },
    'Volaani': {
        nameList: volaaniNames,
    }
}