export const palestoneEncounter = {
  description: {
    1: `a fist-sized shard, translucent and radiant`,
    2: `several small, pebble-sized, mysterious stones`,
    3: `a cluster of glowing, radiant crystals thin as twigs`,
    4: `a carved, radiant trinket joined to metal or bone`,
    5: `a flat, rough, disc-like shard with a pale green hue`,
    6: `an eight-pointed 'singing stone' with a strange audible glow`
  },
  locale: {
    1: `$['near', 'within'] $PRONOUN_POSSESIVE hometown.`,
    2: `along the road far outside a settlement.`,
    3: `$['near', 'within'] a nearby settlement.`,
    4: `$['near', 'at'] the outskirts of a strange ruin.`,
    5: `in a body of water, deep below the surface.`,
    6: `within the wilderness in the trunk of a tree.`
  },
  sharedExposure: {
    1: `$NAME was completely alone when $PRONOUN_SUBJECT`,
    2: `$NAME was witnessed by an unknown party as $PRONOUN_SUBJECT`,
    3: `Fear spread among the locals as $NAME`,
    4: `Attention was brought to the authorities when $NAME`,
    5: `$NAME became $['famous', 'infamous'] throughout the region when $PRONOUN_SUBJECT`,
    6: `$NAME was utterly alone when $PRONOUN SUBJECT`
  },
  impact: {
    1: (sharedExposureRoll) => {
      if (sharedExposureRoll === 1 || sharedExposureRoll === 2) {
        return ``
      } else {
        return `Those who were present during the encounter shared the same outcome.`
      }
    },
    2: `Visions of $['subterranean locales', 'eerie cavernous spaces far below ground'] momentarily haunted $NAME's psyche.`,
    3: `For just a moment, $PRONOUN_SUBJECT became aware of other Pale Stone nearby.`,
    4: `As $PRONOUN_SUBJECT inspected the stone, it suddenly burst into fragments.`,
    5: `$NAME closed $PRONOUN_POSSESSIVE eyes for only a moment, but when $PRONOUN_SUBJECT opened them, $PRONOUN_SUBJECT strangely found $PRONOUN_SELF miles from home.`,
    6: (sharedExposureRoll) => {
      if (sharedExposureRoll === 1 || sharedExposureRoll === 2) {
        return ``
      } else {
        return `Those who were present during the encounter shared the same outcome.`
      }
    }
  },
  discoveryVerbs: [
    'discovered',
    'uncovered',
    'happened upon',
    'encountered',
    'found',
    'spotted',
    'noticed',
    'layed eyes upon'
  ],
  outcomes: {
    'All Numbers Distinct': {
      description: `$NAME's encounter was painful, haunting, and traumatic.`,
      modifications: [
        {
          type: 'resistance',
          name: 'debility',
          points: -2 
        }
      ]
    },
  
    'Sequential Numbers': {
      description: `$NAME narrowly escaped death, and the encounter left a lasting detrimental effect.`,
      modifications: [
        {
          type: 'attribute',
          name: 'end',
          points: -2
        }
      ]
    },
  
    'One Equaled Pair': {
      description: `$NAME formed a deep connection to Pale Stone and can now harness its energy.`,
      notes: '+1 healing'
    },
  
    'Three Equal Numbers': {
      description: `$NAME's exposure caused painful lesions, internal bleeding, then death.`,
      modifications: [
        {
          type: 'death'
        }
      ]
    },
  
    'Two Equaled Pairs': {
      description: `$NAME discovered an affinity for Pale Stone and can now harness its energy.`,
      notes: '+2 healing'
    },
  
    'All Equal Numbers': {
      description: `$NAME formed an intrinsic bond with Pale Stone, and has since ceased to age.`,
      notes: `+2 healing, never ages`
    }
  }
};
