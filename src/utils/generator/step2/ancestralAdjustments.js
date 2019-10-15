import { ancestryConstants } from '../../../constants/rulebookConstants';

export const ancestralAdjustments = {
    [ancestryConstants.H]: {
        str: -1,
        end: 1,
        agi: 0,
        pre: 1,
        int: 0,
        wis: -1,
        per: 0,
        cha: 1
    },

    [ancestryConstants.A]: {
        str: 0,
        end: 2,
        agi: -2,
        pre: 0,
        int: -1,
        wis: 1,
        per: 2,
        cha: 0
    },

    [ancestryConstants.V]: {
        str: -2,
        end: -1,
        agi: 2,
        pre: 2,
        int: 1,
        wis: 0,
        per: 0,
        cha: 0
    },

    [ancestryConstants.D]: {
        str: 2,
        end: 2,
        agi: -1,
        pre: -2,
        int: 0,
        wis: 0,
        per: 1,
        cha: 0
    },

    [ancestryConstants.K]: {
        str: -1,
        end: -2,
        agi: 2,
        pre: 0,
        int: 2,
        wis: 0,
        per: 1,
        cha: 0
    },

    [ancestryConstants.P]: {
        str: 0,
        end: 0,
        agi: 1,
        pre: 1,
        int: 1,
        wis: -1,
        per: -1,
        cha: 0
    }
}