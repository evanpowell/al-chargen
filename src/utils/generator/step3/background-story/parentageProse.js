/*
Examples:   [A foundling, he was raised by adoptive parents]
            [He was born a ward and brought up by foster parents]
            [Spawned by a mysterious progenitor, he spent his impressionable years]
*/

export const parentageProse = {
  'orphan': [		// (abandoned, or no memory, GM rolls status) 
        `Being $["orphaned", "abandoned", "deserted", "lost", "estranged"] $["at a young age", "as an infant", "as a child"], but having no memory of $["where $PRONOUN_SUBJECT came from", "$PRONOUN_POSSESSIVE past", "$PRONOUN_POSSESSIVE true origins"], $PRONOUN_SUBJECT $["lived", "came up", "wandered"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["orphaned", "abandoned", "deserted", "lost", "estranged"] $["at a young age", "as an infant", "as a child"] and $["made $PRONOUN_POSSESSIVE own way", "$VERB_PAST brought up communally", "$VERB_PAST taken in", "$VERB_PAST sheltered"]`
    ],

    'progenitor': [ 	// (has [d6] parents with 1 blood relation) 
        `$["Born", "Bred", "Spawned", "Conceived"] by $["a prominent", "a traditional", "a distinguished", "a conventional", "a Thelean", "a mysterious"] $["progenitor", "ancestor", "progenitor", "forebear"], $PRONOUN_SUBJECT $["$VERB_PAST raised", "$VERB_PAST brought up", "$VERB_PAST cared for", "$VERB_PAST guarded", "$VERB_PAST looked after", "came up", "spent $PRONOUN_POSSESSIVE $<"early", "formative", "developing", "impressionable"> years"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born", "bred", "spawned", "conceived", "created"] by $["a prominent", "a traditional", "a distinguished", "a conventional", "a Thelean", "a mysterious"] $["progenitor", "ancestor", "progenitor", "forebear"] and $["raised", "reared", "guarded", "brought up", "spent $PRONOUN_POSSESSIVE $<"early", "formative", "developing", "impressionable"> years"]`
    ],

    'communityParentage': [ 	// (raised by locality) 
        `$["Raised", "Reared", "Brought up", "Fostered", "Mentored", "Parented"] $["by $PRONOUN_POSSESSIVE community", "in the communal way", "in the traditional way", "on the streets of $PRONOUN_POSSESSIVE $COMMUNITY", "by $PRONOUN_POSSESSIVE extended family", "by $PRONOUN_POSSESSIVE local community"], $PRONOUN_SUBJECT $["lived", "matured", "came up", "developed", "grew", "learned"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["raised", "reared", "brought up", "fostered", "parented", "guarded", "instructed"] $["by $PRONOUN_POSSESSIVE community", "in the communal way", "in the traditional way", "on the streets of $PRONOUN_POSSESSIVE $COMMUNITY", "by $PRONOUN_POSSESSIVE extended family", "by $PRONOUN_POSSESSIVE local community"] and $["lived", "matured", "came up", "developed", "grew", "learned"]`
    ],

    'singleParentage': [ 	// (roll single parent’s characteristics)
        `$["As a child of", "Raised by", "Reared by", "Brought up by", "The child of", "Looked after by", "Cared for by"] $["a single", "a solitary", "a sole", "a singular", "one"] $["parent", "guardian", "caretaker", "attendant", "keeper"], $PRONOUN_SUBJECT $["$VERB_PAST secluded", "$VERB_PAST spoiled", "$VERB_PAST ostracized", "$VERB_PAST sheltered", "$VERB_PAST ostracized", "$VERB_PAST well known", "$VERB_PAST honored"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born to", "raised by", "reared by", "cared for by", "the child of", "looked after by"] $["a single", "a solitary", "a sole", "a singular", "one"] $["parent", "guardian", "caretaker", "attendant", "keeper"], spending $PRONOUN_POSSESSIVE $["early", "formative", "developing", "impressionable"] $["years", "days", "upbringing", "experiences"]"`
    ],

    'spiritualTutelage': [ 	// (raised by [d6] spiritual leaders) 
        `$["Maturing", "Growing", "Being raised", "As a student"] under the $["tutelage", "guidance", "fostership", "care"] of $["respected", "traditional", "enigmatic", "conventional", "Thelean", "cryptic"] $["spiritual leaders", "priests", "shamans", "clerics", "spritual elders", "spiritual guardians", "ritual guardians"], $PRONOUN_SUBJECT $["found $PRONOUN_SELF", "$VERB_PAST indoctrinated", "$VERB_PAST educated", "spent $PRONOUN_POSSESSIVE $<"early", "formative", "developing", "impressionable"> years"]`,
        `$PRONOUN_SUBJECT spent $PRONOUN_POSSESSIVE $["early", "formative", "developing", "impressionable"] years" under the $["tutelage", "guidance", "fostership", "care"] of $["respected", "traditional", "enigmatic", "conventional", "Thelean", "cryptic"] $["spiritual leaders", "priests", "shamans", "clerics", "spritual elders", "spiritual guardians", "ritual guardians"] and $["$VERB_PAST raised", "matured", "$VERB_PAST brought up", "studied", "grew", "learned"]`
    ],

    'foundling': [ 	// ([d6] parents of no biological relation) 
        `A $["foundling", "castaway", "waif", "ward"], $PRONOUN_SUBJECT $["$VERB_PAST raised by", "$VERB_PAST brought up by", "$VERB_PAST cared for by"] $["adoptive parents", "foster parents", "kind guardians"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["born a ward", "born a waif", "born an orphan", "born a foundling", "found just outside the $COMMUNITY"] and $["raised by", "reared by", "guarded by", "brought up by", "looked after by"] $["adoptive parents", "foster parents", "kind guardians"]`
    ],

    'matriarchalOrder': [ 	// (raised by [d6] matriarchs) 
        `$["A member", "An initiate", "The scion", "A child", "An inheritor", "The scion", "A descendant", "The heir", "The offspring", "The progeny", "The scion"] of $["a respected", "an enigmatic", "a once noble", "a clandestine", "a generational", "a longstanding", "a feared", "a mysterious"] matriarchal $["order", "house", "lineage", "heritage", "community", "order"], $PRONOUN_SUBJECT $["$VERB_PAST raised", "grew up", "came up", "matured", "advanced"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["raised by", "raised as the heir to", "raised to be the scion of", "reared by", "born into", "brought up by", "accepted by", "initiated into"] $["a respected", "an enigmatic", "a once noble", "a clandestine", "a generational", "a longstanding", "a feared", "a mysterious"] matriarchal $["order", "house", "lineage", "heritage", "community", "order"] that $["prospered", "shined", "languished", "weakened", "felt threatened", "felt supported"]`
    ],

    'patriarchalOrder': [ 	// (raised by [d6] patriarchs)
        `$["A member", "An initiate", "The heir", "A child", "An inheritor", "The scion", "A descendant", "The heir", "The offspring", "The progeny", "The scion"] of $["a respected", "an enigmatic", "a once noble", "a clandestine", "a generational", "a longstanding", "a feared", "a mysterious"] patriarchal $["order", "house", "lineage", "heritage", "community", "order"], $PRONOUN_SUBJECT $["$VERB_PAST raised", "grew up", "came up", "matured", "advanced"]`,
        `$PRONOUN_SUBJECT $VERB_PAST $["raised by", "raised as the heir to", "raised to be the scion of", "reared by", "born into", "brought up by", "accepted by", "initiated into"] $["a respected", "an enigmatic", "a once noble", "a clandestine", "a generational", "a longstanding", "a feared", "a mysterious"] patriarchal $["order", "house", "lineage", "heritage", "community", "order"] that $["prospered", "shined", "languished", "weakened", "felt threatened", "felt supported"]`
    ]
}