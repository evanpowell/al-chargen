export const deathChart = [
  {
    phrases: [
      `$NAME died under the physical trauma of $PRONOUN_POSSESSIVE Pale Stone encounter, yet as $PRONOUN_SUBJECT rested in the hand of Maros, the Pale Stone merged within $PRONOUN_POSSESSIVE consciousness, resurrecting $PRONOUN_OBJECT as a 'Halekar.' $PRONOUN_SUBJECT $VERB_PRESENT now aware of $PRONOUN_POSSESSIVE intrisic connection to Pale Stone.`
    ],
    masteries: [
      '+2 healing rate (Pale Stone Encounter)'
    ],
    notes: [
      `$NAME is a Halekar: $PRONOUN_SUBJECT will never age`
    ]
  },
  {
    phrases: [
      `Death came slowly, and several times $NAME slipped away only to awaken again in pain. Finally, after nearly a month of struggling at the brink, $NAME died in the arms of $PRONOUN_POSSESSIVE caretaker.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `$NAME had found $PRONOUN_POSSESSIVE way to a lonely death. $["Even though $PRONOUN_SUBJECT passed while surrounded by others,", "No one was there to mourn $PRONOUN_POSSESSIVE passing, and"] in the weeks that followed $PRONOUN_POSSESSIVE death few if anyone continued to speak the name of $NAME.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `$NAME died knowingly and with acceptance, giving an intriguing gift as $PRONOUN_SUBJECT passed on. Those close to $PRONOUN_OBJECT as $PRONOUN_SUBJECT passed felt as if divinely blessed.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `$NAME succumbed, painfully, and once unconscious was left for dead. However sometime later, $PRONOUN_SUBJECT awakened groggily in the bed of a kindly citizen who happened to see there was life still within $PRONOUN_OBJECT. The coma lasted for ten years.`
    ],
    modifications: [
      {
        type: 'age',
        years: 10
      }
    ]
  },
  {
    phrases: [
      `A healer made their way to the dying $NAME, and in a taboo display cut and twisted at $PRONOUN_POSSESSIVE injury. As the healer worked at their profane craft, several superstitious commoners bludgeoned them to death and left $NAME to the same fate.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `$NAME was presumed dead, but was actually unconscious. When $PRONOUN_SUBJECT awakened days later, $PRONOUN_SUBJECT had mysteriously`,
    ],
    senses: [
      {
        type: 'sight',
        phrase: `lost $PRONOUN_POSSESSIVE sight`,
        feature: `Blind`
      },
      {
        type: 'hearing',
        phrase: `lost $PRONOUN_POSSESSIVE hearing`,
        feature: `Deaf`
      },
      {
        type: 'smellTaste',
        smell: {
          phrase: `lost $PRONOUN_POSSESIVE sense of smell`,
          feature: `No sense of smell`
        },
        taste: {
          phrase: `lost $PRONOUN_POSSESIVE ability to taste`,
          feature: `No ability to taste`
        },
        both: {
          phrase: `lost $PRONOUN_POSSESIVE ability to taste and smell`,
          feature: `No sense of smell or taste`
        }
      },
      {
        type: 'touchPain',
        touch: {
          phrase: `lost $PRONOUN_POSSESSIVE sense of touch`,
          feature: `No sense of touch`
        },
        pain: {
          phrase: `lost the ability to feel pain`,
          feature: `Can't feel pain`
        }
      },
    ]
  },
  {
    phrases: [
      `$NAME's death $["was devastating and demoralizing", "stirred fear and outrage"], catalyzing a sweep of panic and rioting in the surrounding area which led to more casualties.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `As $NAME lay dying, $PRONOUN_SUBJECT attempted to call out to $["a stranger nearby", "a trusted friend", "a blurry figure before them"]. Unfortunately $["$PRONOUN_SUBJECT couldn't muster the strength to speak", "$PRONOUN_POSSESSIVE injuries were too great"], and $PRONOUN_SUBJECT $VERB_PAST unable to make a sound as $PRONOUN_SUBJECT slipped into Maros's grasp, leaving behind only a cold, blank stare.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `A healer found their way to the dying $NAME, and in a taboo display cut and twisted at $PRONOUN_POSSESSIVE injury. The healer managed to saved $PRONOUN_POSSESSIVE life, but at the expense $PRONOUN_POSSESSIVE`
    ],
    limbs: [
      `left arm`,
      `right arm`,
      `left leg`,
      `right leg`
    ]
  },
  {
    phrases: [
      `$NAME faced what seemed an honorable or worthy death, and a traveling bard even composed $["a song of paired versicles", "$<"an emotional", "a heart-felt"> ballad"] featuring $PRONOUN_POSSESSIVE name about the context surrounding the events of $PRONOUN_POSSESSIVE demise, which $["became a favorite local song", "became popular throughout the region", "continues to be sung to this day in parts of the empire"].`
    ],
    isDeath: true
  },
  {
    phrases: [
      `Time, space, and energy seemed to decay into $["one everlasting moment", "an eternity"] of emptiness and void as $NAME became trapped inside a shard of Pale Stone.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `$NAME's death had the dubious effect of seeming magical. Days later, several individuals who had been noticed inspecting the site of $PRONOUN_POSSESSIVE death were imprisoned by a local authority under suspicion of inciting an unnatural death.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `From an outside glance, $NAME seemed to pass quietly, but actually burned from within by an unholy fire that has begun to awaken an ancient and distant evil...`
    ],
    isDeath: true
  },
  {
    phrases: [
      `In a suffocating panic, $NAME seemed to disappear into $PRONOUN_POSSESSIVE own mind where $PRONOUN_SUBJECT witnessed $PRONOUN_POSSESSIVE own gruesome death. Moments before it was about to happen, $PRONOUN_SUBJECT came back to awareness...`
    ],
    rollAgain: true
  },
  {
    phrases: [
      `As $NAME began to succumb, a cultist covered in tattoos approached $PRONOUN_POSSESSIVE body and began to chant. Unable to move but hearing everything, $NAME began to feel a tingling all over $PRONOUN_POSSESSIVE skin and opened $PRONOUN_POSSESSIVE eyes as someone else...`
    ],
    isDeath: true
  },
  {
    phrases: [
      `As $NAME succumbed to agonizing pain, $PRONOUN_SUBJECT cried out for Maros's mercy. Lightning struck the earth, the ground shook, and $NAME's body fell limp. Miles away, $PRONOUN_SUBJECT opened $PRONOUN_POSSESSIVE eyes again, awakening in the form of an animal.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `$NAME died tragically but with a noble dignity, so much so that a nearby youth was deeply inspired to pursue their own adventure in $PRONOUN_POSSESSIVE honor, even assuming $PRONOUN_POSSESSIVE name.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `As $NAME lay dying, $PRONOUN_SUBJECT recognized someone standing nearby. As $PRONOUN_POSSESSIVE breathing began to fail, $NAME handed them parchment to the closest person near them. This 'Letter of Whispers,' is a sacred writ blessed by Caretakers that bequeaths the deceased's belongings to another.`
    ],
    isDeath: true
  },
  {
    phrases: [
      `$NAME died under the physical trauma of $PRONOUN_POSSESSIVE Pale Stone encounter, yet as $PRONOUN_SUBJECT rested in the hand of Maros, the Pale Stone merged within $PRONOUN_POSSESSIVE consciousness, resurrecting $PRONOUN_OBJECT as a 'Halekar.' $PRONOUN_SUBJECT $VERB_PRESENT now aware of $PRONOUN_POSSESSIVE intrisic connection to Pale Stone.`
    ],
    masteries: [
      '+2 healing rate (Pale Stone Encounter)'
    ],
    notes: [
      `$NAME is a Halekar: $PRONOUN_SUBJECT will never age`
    ]
  },
]