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
        isGendered: true,
        isReversed: true,
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
        isReversed: true,
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


export const communityNameInfluences = {
    1: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'mundane',
        uskelian: 'classless'
    },
    2: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'hallowed',
        uskelian: 'lowClass'
    },
    3: {
        bwantaal: 'animal',
        [`es'ahn`]: 'mundane',
        uskelian: 'lowClass'
    },
    4: {
        bwantaal: 'animal',
        [`es'ahn`]: 'mundane',
        uskelian: 'lowClass'
    },
    5: {
        bwantaal: 'animal',
        [`es'ahn`]: 'mundane',
        uskelian: 'lowClass'
    },
    6: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'hallowed',
        uskelian: 'lowClass'
    },
    7: {
        bwantaal: 'animal',
        [`es'ahn`]: 'mundane',
        uskelian: 'lowClass'
    },
    8: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'mundane',
        uskelian: 'highClass'
    },
    9: {
        bwantaal: 'neutral',
        [`es'ahn`]: 'mundane',
        uskelian: 'classless'
    },
    10: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'hallowed',
        uskelian: 'highClass'
    },
    11: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'ancient',
        uskelian: 'classless'
    },
    12: {
        bwantaal: 'animal',
        [`es'ahn`]: 'mundane',
        uskelian: 'lowClass'
    },
    13: {
        bwantaal: 'neutral',
        [`es'ahn`]: 'hallowed',
        uskelian: 'highClass'
    },
    14: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'ancient',
        uskelian: 'highClass'
    },
    15: {
        bwantaal: 'elemental',
        [`es'ahn`]: 'hallowed',
        uskelian: 'highClass'
    },
    16: {
        bwantaal: 'animal',
        [`es'ahn`]: 'hallowed',
        uskelian: 'classless'
    },
    17: {
        bwantaal: 'neutral',
        [`es'ahn`]: 'ancient',
        uskelian: 'highClass'
    },
    18: {
        bwantaal: 'animal',
        [`es'ahn`]: 'hallowed',
        uskelian: 'lowClass'
    },
    19: {
        bwantaal: 'animal',
        [`es'ahn`]: 'hallowed',
        uskelian: 'highClass'
    },
    20: {
        bwantaal: 'neutral',
        [`es'ahn`]: 'ancient',
        uskelian: 'highClass'
    },
}