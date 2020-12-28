/*
Examples:
  `$PRONOUN_POSSESSIVE distinction earned $PRONOUN_OBJECT regard as $TITLE`,
  `Through $PRONOUN_POSSESSIVE laurels $PRONOUN_SUBJECT became known as $TITLE`,

  $TITLE can be used anywhere in the sentence

  'All Numbers Distinct' and 'One Equaled Pair' result in no title (create sentences for them is optional)
*/


export const titleAccoladesPhrases = {
  'All Numbers Distinct': [ // lack of motivation, NO TITLE
   `$PRONOUN_POSSESSIVE $["circumstances", "lack of resources", "relatively few assets", "experiences"] $["offered", "afforded", "allowed"] no title or recognition in $PRONOUN_POSSESSIVE field.`,
   `$PRONOUN_POSSESSIVE $["training", "discipline", "practice", "instruction"], while personally $["enriching", "edifying", "beneficial", "advantageous"], $["pressed against convention", "bucked the system", "opposed elder expectations", "went against tradition"] and distanced $PRONOUN_OBJECT from $PRONOUN_POSSESSIVE peers within the field.`,
   `The lack of distinction in $PRONOUN_POSSESSIVE field meant that $PRONOUN_SUBJECT would have to set out to $["make a name for", "forge a new path for", "find a new direction for", "build a new practice for", "create a new tradition for"] $PRONOUN_SELF.`
  ],
  'Sequential Numbers': [ // disrepected, held in disdain
    `These experiences led $PRONOUN_OBJECT to adopt the unfortunate $["title", "nickname", "handle", "snub"] of $TITLE.`,
    `$PRONOUN_SUBJECT earned the $["title", "nickname", "handle", "snub"] $TITLE, which branded $PRONOUN_OBJECT within $PRONOUN_POSSESSIVE field.`,
    `Before long $PRONOUN_SUBJECT became affiliated with the $["title", "nickname", "handle", "snub"] of $TITLE.`,
    `This led others to refer to $PRONOUN_OBJECT as $TITLE, the unfortunate $["title", "nickname", "handle", "snub"] that hangs like a shadow over $PRONOUN_POSSESSIVE interactions.`
  ],
  'One Equaled Pair': [ // showed drive/dedication, earned respect, NO TITLE
    `$PRONOUN_POSSESSIVE devotedness was well recieved in $PRONOUN_POSSESSIVE field, but earned $PRONOUN_OBJECT no official $["titles", "nicknames", "epithets", "monikers", "sobriquets"].`,
    `$["With no $<"issued", "earned", "awarded">", "After $<"earning", "receiving", "being granted"> no", "Since $PRONOUN_SUBJECT $<"received", "were granted", "were awarded"> no"] $["titles", "nicknames", "epithets", "monikers", "sobriquets"] during $PRONOUN_POSSESSIVE term, $PRONOUN_SUBJECT realized that $PRONOUN_SUBJECT would need to set out to $["make a name for", "forge a new path for", "find a new direction for", "build a new practice for", "create a new tradition for"] $PRONOUN_SELF.`, 
    `$PRONOUN_POSSESSIVE $["experiences", "deeds", "actions", "feats", "known exploits"] within $PRONOUN_POSSESSIVE $["field", "area of expertise", "training"] earned $PRONOUN_OBJECT recognition among $PRONOUN_POSSESSIVE peers.`,
    `$PRONOUN_SUBJECT had a $["singular experience", "unique time", "privileged time"] training in $PRONOUN_POSSESSIVE field of expertise, and impressed $PRONOUN_POSSESSIVE peers with $PRONOUN_POSSESSIVE single-mindedness.`,
    `$PRONOUN_SUBJECT never set out to earn $["titles", "honorifics", "official positions", "ranks"] in $PRONOUN_POSSESSIVE field, and focused instead on $["developing", "advancing", "growing", "building", "creating"] $[a useful", "a reliable", "a dependable", "an advanced", "a strong"] $["practice", "skill set", "set of skills", "collection of skills", "training portfolio, "proficiency in the field"].`,
    `$PRONOUN_SUBJECT favored $["the development of", "the advancement of", "the building of", "the progression of", "the improvement of"] $[a useful", "a reliable", "a dependable", "an advanced", "a strong"] $["practice", "skill set", "set of skills", "collection of skills", "training portfolio, "proficiency in the field"] over any need for an official $["rank", "title", "promotion", "recognition"].`
  ],
  'Three Equal Numbers': [ // highly regarded
    `Through $PRONOUN_POSSESSIVE laurels $PRONOUN_SUBJECT became known as $TITLE, $["a title", "a nickname", "an epithet", "a moniker", "a sobriquet", "an honorific"] that commands respect.`,
    `$PRONOUN_POSSESSIVE achievements bound $PRONOUN_OBJECT to the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE.`,
    `$PRONOUN_POSSESSIVE accomplishments bestowed $PRONOUN_OBJECT with the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE.`,
    `$PRONOUN_POSSESSIVE $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE speaks to $PRONOUN_POSSESSIVE many accomplishments in the field.`
  ],
  'Two Equaled Pairs': [ // exceptional prowess
    `Over time $PRONOUN_POSSESSIVE deeds inspired the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE.`,
    `$PRONOUN_POSSESSIVE actions earned $PRONOUN_OBJECT esteemed recognition as $TITLE.`,
    `The merit of this work led $PRONOUN_OBJECT to become hailed as $TITLE, $["a title", "a nickname", "an epithet", "a moniker", "a sobriquet", "an honorific"] of esteem.`,
    `$PRONOUN_SUBJECT $VERB_PAST blessed with the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE, so all could recognize $PRONOUN_POSSESSIVE deeds.`
  ],
  'All Equal Numbers': [ // unrivaled expertise
    `$PRONOUN_POSSESSIVE distinction earned $PRONOUN_OBJECT regard as $TITLE.`,
    `As a legend in $PRONOUN_POSSESSIVE field, $PRONOUN_SUBJECT became known as $TITLE.`,
    `Regarded as $TITLE, $["a title", "an appellation", "a designation", "a delegation", "a cognomen"] of honor, afforded $PRONOUN_OBJECT recognition by the Empire's elite.`,
    `$PRONOUN_SUBJECT grew to be known by the $["title", "appellation", "designation", "delegation", "cognomen"] of $TITLE for $PRONOUN_POSSESSIVE impressive accolades.`
  ]
}
