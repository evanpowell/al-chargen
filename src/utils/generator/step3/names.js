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
            { type: 'standard', probability: 95 },
            { type: 'genderFlip', probability: 5 }
        ]
    },
    'Ardonic': {
        nameList: ardonicNames,
        isGendered: true,
        probabilities: [
            { type: 'standard', probability: 75 },
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
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'classless'
    },
    2: {
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'lowClass'
    },
    3: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'lowClass'
    },
    4: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'lowClass'
    },
    5: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'lowClass'
    },
    6: {
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'lowClass'
    },
    7: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'lowClass'
    },
    8: {
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'highClass'
    },
    9: {
        'Bwantaal': 'neutral',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'classless'
    },
    10: {
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'highClass'
    },
    11: {
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'ancient',
        'Uskelian': 'classless'
    },
    12: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'mundane',
        'Uskelian': 'lowClass'
    },
    13: {
        'Bwantaal': 'neutral',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'highClass'
    },
    14: {
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'ancient',
        'Uskelian': 'highClass'
    },
    15: {
        'Bwantaal': 'elemental',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'highClass'
    },
    16: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'classless'
    },
    17: {
        'Bwantaal': 'neutral',
        [`Es'ahn`]: 'ancient',
        'Uskelian': 'highClass'
    },
    18: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'lowClass'
    },
    19: {
        'Bwantaal': 'animal',
        [`Es'ahn`]: 'hallowed',
        'Uskelian': 'highClass'
    },
    20: {
        'Bwantaal': 'neutral',
        [`Es'ahn`]: 'ancient',
        'Uskelian': 'highClass'
    },
}