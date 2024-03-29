import Attributes from "./attributes";

export default class Character {
  attributes = new Attributes();
  name = "";
  ancestry = "";
  sex = "";
  appearance = {
    initial: {
      height: null,
      weight: null,
      age: null,
    },
    final: {
      height: null,
      weight: null,
      age: null,
    },
    presentation: "",
    distinguishingFeatures: [],
  };
  backgroundStory = "";
  origins = {
    birthdate: "",
    lineage: "",
    region: "",
    primaryLanguage: "",
    settlement: "",
    parentage: "",
    relations: {},
    reputation: "",
    community: {
      id: null,
      description: "",
      areasofExpertise: [],
    },
    culturalValues: "",
    connection: null,
  };
  languages = [];
  isLiterate = false;
  aptitude = "";
  advantage = {
    name: "",
    description: "",
  };
  expertise = "";
  vocation = "";
  abilities = {
    assessThreat: 0,
    collectInformation: 0,
    find: 0,
    haggle: 0,
    navigate: 0,
    takeNotice: 0,
  };
  resistances = {
    addiction: 0,
    aversion: 0,
    debility: 0,
    explosion: 0,
    infection: 0,
    toxin: 0,
  };
  conditioning = {
    poise: 0,
    avoidance: 0,
    capacity: 0,
  };
  skills = [];
  proficiencies = [];
  inventory = [];
  title = "";
  term = {
    years: 0,
    outcome: {
      description: "",
      modifications: [],
    },
  };
  masteries = [];
  recognition = [];
  palestoneEncounter = {
    prose: "",
    outcome: {
      description: "",
      modifications: [],
      notes: "",
    },
  };
  notes = [];
  wealth = 0;
}
