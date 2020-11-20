import { DiceRoller } from '../diceRoller';
import Attributes from './attributes';

export default class Character {
  attributes = new Attributes();
  ancestry = '';
  sex = '';
  appearance = {
    initial: {
      height: null,
      weight: null,
      age: null
    },
    final: {
      height: null,
      weight: null,
      age: null
    },
    distinguishingFeatures: []
  };
  origins = {
    provincialOrigins: {
      region: '',
      regionalLanguages: [],
      biomes: []
    },
    settlement: '',
    parentage: {
      type: '',
      statuses: {}
    },
    relations: {},
    reputation: '',
    community: {
      description: '',
      areasofExpertise: []
    },
    culturalValues :'',
    connection: null,
  };
  languages = [];
  isLiterate = false;
  aptitude = '';
  advantage = '';
  expertise = '';
  vocation = '';
  abilities = {
    assessThreat: 0,
    collectInformation: 0,
    find: 0,
    haggle: 0,
    navigate: 0,
    takeNotice: 0
  };
  resistances = {
    addiction: 0,
    aversion: 0,
    debility: 0,
    explosion: 0,
    infection: 0,
    toxin: 0
  };
  conditioning = {
    poise: 0,
    avoidance: 0,
    capacity: 0
  };
  skills = [];
  proficiencies = [];
  inventory = [];
  titles = [];
  term = {
    years: 0,
    outcome: {
      description: '',
      modifications: {}
    }
  };
  palestoneEncounter = {
    description: '',
    encounterLocale: '',
    sharedExposure: '',
    impact: '',
    outcome: {
      description: '',
      modifications: []
    }
  }
  wealth = 0;
}
