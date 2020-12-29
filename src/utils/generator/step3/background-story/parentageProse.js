/*
Examples:   [A foundling, he was raised by adoptive parents]
            [He was born a ward and brought up by foster parents]
*/

export const parentageProse = {
  'orphan': [		// (abandoned, or no memory, GM rolls status) 
        `Being $["orphaned", "abandoned", "deserted", "lost", "estranged"] $["at a young age", "as an infant", "as a child"], but having no memory of $["where $PRONOUN_SUBJECT came from", "$PRONOUN_POSSESSIVE past", "$PRONOUN_POSSESSIVE true origins"], $PRONOUN_SUBJECT $["lived", "came up", "wandered"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["orphaned", "abandoned", "deserted", "lost", "estranged"] $["at a young age", "as an infant", "as a child"] and $["made $PRONOUN_POSSESSIVE own way", "$VERB_PAST brought up communally", "$VERB_PAST taken in", "$VERB_PAST sheltered"]`
    ],

    'progenitor': [ 	// (has [d6] parents with 1 blood relation) 
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ],

    'communityParentage': [ 	// (raised by locality) 
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ],

    'singleParentage': [ 	// (roll single parent’s characteristics)
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ],

    'spiritualTutelage': [ 	// (raised by [d6] spiritual leaders) 
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ],

    'foundling': [ 	// ([d6] parents of no biological relation) 
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ],

    'matriarchalOrder': [ 	// (raised by [d6] matriarchs) 
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ],

    'patriarchalOrder': [ 	// (raised by [d6] patriarchs)
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ]
}