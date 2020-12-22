/*
Examples:
  `$PRONOUN_POSSESSIVE distinction earned $PRONOUN_OBJECT regard as a $TITLE`,
  `Through $PRONOUN_POSSESSIVE laurels $PRONOUN_SUBJECT became known as a $TITLE`,

  $TITLE can be used anywhere in the sentence

  'All Numbers Distinct' and 'One Equaled Pair' result in no title (create sentences for them is optional)
*/


export const titleAccoladesPhrases = {
  'All Numbers Distinct': [ // lack of motivation, NO TITLE
   `$PRONOUN_POSSESSIVE circumstances offered no title or recognition in $PRONOUN_POSSESSIVE field.`,
   `The lack of distinction in $PRONOUN_POSSESSIVE field meant that $PRONOUN_SUBJECT would have to set out to make a name for $PRONOUN_SELF.`
  ],
  'Sequential Numbers': [ // disrepected, held in disdain
    `These experiences led $PRONOUN_OBJECT to adopt the unfortunate $["title", "nickname", "handle", "snub"] of $TITLE.`,
    `$PRONOUN_SUBJECT earned the $["title", "nickname", "handle", "snub"] $TITLE, which branded $PRONOUN_OBJECT within $PRONOUN_POSSESSIVE field.`,
    `Before long $PRONOUN_SUBJECT became affiliated with the $["title", "nickname", "handle", "snub"] of $TITLE.`,
    `This led others to refer to $PRONOUN_OBJECT as a $TITLE, the unfortunate $["title", "nickname", "handle", "snub"] that hangs like a shadow over $PRONOUN_POSSESSIVE interactions.`
  ],
  'One Equaled Pair': [ // showed drive/dedication, earned respect, NO TITLE
    `$PRONOUN_POSSESSIVE devotedness was well recieved in $PRONOUN_POSSESSIVE field, but earned $PRONOUN_OBJECT no official $["titles", "nicknames", "epithets", "monikers", "sobriquets"].`,
    `With no official $["titles", "nicknames", "epithets", "monikers", "sobriquets"] earned during $PRONOUN_POSSESSIVE term, $PRONOUN_SUBJECT realized that $PRONOUN_SUBJECT would need to set out to make a name for $PRONOUN_SELF.`
  ],
  'Three Equal Numbers': [ // highly regarded
    `Through $PRONOUN_POSSESSIVE laurels $PRONOUN_SUBJECT became known as a $TITLE, $["a title", "a nickname", "an epithet", "a moniker", "a sobriquet", "an honorific"] that commands respect.`,
    `$PRONOUN_POSSESSIVE achievements bound $PRONOUN_OBJECT to the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE.`,
    `$PRONOUN_POSSESSIVE accomplishments bestowed $PRONOUN_OBJECT with the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE.`,
    `$PRONOUN_POSSESSIVE $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE speaks to $PRONOUN_POSSESSIVE many accomplishments in the field.`
  ],
  'Two Equaled Pairs': [ // exceptional prowess
    `Over time $PRONOUN_POSSESSIVE deeds inspired the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE.`,
    `$PRONOUN_POSSESSIVE actions earned $PRONOUN_OBJECT esteemed recognition as a $TITLE.`,
    `The merit of this work led $PRONOUN_OBJECT to become hailed as a $TITLE, $["a title", "a nickname", "an epithet", "a moniker", "a sobriquet", "an honorific"] of esteem.`,
    `$PRONOUN_SUBJECT $VERB_PAST blessed with the $["title", "nickname", "epithet", "moniker", "sobriquet", "honorific"] $TITLE, so all could recognize $PRONOUN_POSSESSIVE deeds.`
  ],
  'All Equal Numbers': [ // unrivaled expertise
    `$PRONOUN_POSSESSIVE distinction earned $PRONOUN_OBJECT regard as a $TITLE.`,
    `As a legend in $PRONOUN_POSSESSIVE field, $PRONOUN_SUBJECT became known as $TITLE.`,
    `Regarded as a $TITLE, $["a title", "an appellation", "a designation", "a delegation", "a cognomen"] of honor, afforded $PRONOUN_OBJECT recognition by the Empire's elite.`,
    `Grew to be known by the $["title", "appellation", "designation", "delegation", "cognomen"] of $TITLE for $PRONOUN_POSSESSIVE impressive accolades.`
  ]
}
