/*
  Use "$COMMUNITY" for now to indicate the placeholder for the community descriptor.

  Descriptor should call to the home community roll result, and add the following based on result:
  'diasporic group': ["cloister", "group"],
  'hamlet': ["hamlet", "encampment"],
  'village': ["village", "settlement"],
  'small town': ["town", "hometown", ],
  'large township': ["township", "locality", "homeland"],
  'small city': ["city", "neighborhood"],
  'large city': ["locale", "district"],
  'nomadic group': ["encampment", "company"]
  
  Examples:
    `Ever since $["an incident in $PRONOUN_POSSESSIVE youth", "the accident", "the lost horses"],
    $PRONOUN_SUBJECT became $["mistrusted", "feared"] within $PRONOUN_POSSESSIVE $COMMUNITY.`
    
    (e.g.: Ever since an incident in his youth, he became feared within his hometown.)
    //
    `Ever since $["a questionable", "a shocking", "a mysterious", "a distasteful", "an unsavory"] 
    $["incident in $PRONOUN_POSSESSIVE youth", "social faux pas", "blunder in $PRONOUN_POSSESSIVE social circles", "and unforeseen event unfolded"], 
    many in $PRONOUN_POSSESSIVE $COMMUNITY came to regard $PRONOUN_OBJECT with 
    $["mistrust", "fear", "uncertainty", "skepticism", "apprehension", "misgiving", "distrust", "suspicion"], 
    causing a rift between $PRONOUN_OBJECT and $PRONOUN_POSSESSIVE home.`
    
    (e.g.: Ever since a shocking incident in his youth, many in his hometown came to regard him with skepticism, causing a rift between him and his home.)
*/

export const reputationProse = {
  'despisedReviled': [
    `Locals in $PRONOUN_POSSESSIVE $COMMUNITY $["despised", "reviled", "abhorred", "detested", "hated", "loathed", "showed contempt toward", "directed rancor toward", "expressed enmity toward"] $PRONOUN_OBJECT $["after a stolen item was found in $PRONOUN_POSSESSIVE possession", "$PRONOUN_SUBJECT $VERB_PAST wrongly accused of someone's disappearance", "$PRONOUN_SUBJECT discovered the cursed entrance to the catacombs", "after $PRONOUN_SUBJECT $VERB_PAST involved in a tragic event", "since $PRONOUN_SUBJECT never seemed to be in the right place at the right time"].`,
    `After $["an incident $PRONOUN_SUBJECT rarely will discuss", "the suspicious death of $PRONOUN_POSSESSIVE childhood friend", "$PRONOUN_POSSESSIVE youthful misadventures", "the accident", "the Great Fire that started near $PRONOUN_POSSESSIVE home"], $NAME could tell that the locals $["despised $PRONOUN_OBJECT", "reviled $PRONOUN_OBJECT", "abhorred $PRONOUN_OBJECT", "detested $PRONOUN_OBJECT", "hated $PRONOUN_OBJECT", "loathed $PRONOUN_OBJECT", "regarded $PRONOUN_OBJECT with contempt", "regarded $PRONOUN_OBJECT with rancor", "regarded $PRONOUN_OBJECT with enmity"].`,
    `$NAME was $["despised", "reviled", "abhorred", "detested", "hated", "loathed", "treated with contempt", "regarded with rancor", "treated with enmity"] in $PRONOUN_POSSESSIVE $COMMUNITY ever since $PRONOUN_POSSESSIVE involvement in $["the calamitous loss of the Five Pillars", "the tragic stampede of Kalmor's Bright Mist", "the costly crop fire of Seed's Rise", "the ruining of the Dawn's Edge Celebration", "the disastrous provocation of the nearby shadow walkers", "the defense of a local who was branded as 'Liyuve'"].`,
    `$["Sadly", "Unfortunately", "Lamentably", "Regrettably"], having become associated with $["a series of tragic local events", "the tainted water supply after a fateful Rite of Ressek", "a local $<"Pariah", "outlaw", "brigand", "criminal", "witch">", "a nearby enchanter", "the death of a cloaked merchant", "the emergence of the Eloko"], $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["despised", "reviled", "abhorred", "detested", "hated", "loathed", "regarded with contempt", "regarded with rancor", "regarded with enmity"] by $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `$NAME's $COMMUNITY $["sadly", "truly", "unfortunately", "lamentably", "reluctantly", "regrettably"] $["despised $PRONOUN_OBJECT", "reviled $PRONOUN_OBJECT", "abhorred $PRONOUN_OBJECT", "detested $PRONOUN_OBJECT", "hated $PRONOUN_OBJECT", "loathed $PRONOUN_OBJECT", "treated $PRONOUN_OBJECT with contempt", "regarded $PRONOUN_OBJECT with rancor", "showed enmity toward $PRONOUN_OBJECT"] following $PRONOUN_POSSESSIVE connection to $["the Tragedy of the Commons, which few mention", "an incident involving local worshippers of Kisdi'iri", "the disastrous crop fire of Water's Fall", "the betrayal of a locally beloved curio trader", "a disruptive gambling ring"].`,
    `$["Following", "After", "Ever since", "In the aftermath of"] $["a deadly", "a calamitous", "a tragic", "an appalling", "a fateful"] $["circumstance", "event", "incident", "misadventure", "catastrophe", "accident", "occurrence"] in $PRONOUN_POSSESSIVE $COMMUNITY, $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["despised", "reviled", "abhorred", "detested", "hated", "loathed", "regarded with contempt", "regarded with rancor", "regarded with enmity"], $["regularly hearing hushed whispers", "often encountering open ridicule", "finding little comfort"] in $["public", "open", "crowded", "communal"] spaces.`
  ],
  'mistrustedFeared': [
    `Ever since $["a questionable", "a shocking", "a mysterious", "a distasteful", "an unsavory"] $["incident in $PRONOUN_POSSESSIVE youth", "social faux pas", "blunder in $PRONOUN_POSSESSIVE social circles", "and unforeseen event unfolded"], many in $PRONOUN_POSSESSIVE $COMMUNITY came to regard $PRONOUN_OBJECT with $["mistrust", "fear", "uncertainty", "skepticism", "apprehension", "misgiving", "distrust", "suspicion"], causing a rift between $PRONOUN_OBJECT and $PRONOUN_POSSESSIVE home.`,
    `Influential $["locals", "nobles", "Peacekeepers", "scholars"] in $NAME's $COMMUNITY convinced many $["to mistrust", "to fear", "to harbor uncertainty toward", "to remain skeptical about", "to feel apprehension toward", "to express misgivings about", "to distrust", "to hold suspicion toward"] $PRONOUN_OBJECT, because $["of an incident in $PRONOUN_POSSESSIVE youth", "$PRONOUN_SUBJECT misplaced the local sage's medallion", "of the accident during Vostiar's Renewal", "of the livery's lost horses"], a reputation that haunts $PRONOUN_OBJECT still.`,
    `Due to $["$PRONOUN_POSSESSIVE social status", "$PRONOUN_POSSESSIVE various associations", "$PRONOUN_POSSESSIVE disregard for many of the region's taboos", "the circumstances of $PRONOUN_POSSESSIVE upbringing"], the locals of $NAME's $COMMUNITY $["began to harbor", "felt a good deal of", "expressed"] $["mistrust", "fear", "uncertainty", "skepticism", "apprehension", "misgiving", "distrust", "suspicion"] toward $PRONOUN_OBJECT, which led to $["a sense of resentment", "a distance", "never feeling accepted", "$PRONOUN_POSSESSIVE withdrawn nature at home"].`,
    `$NAME was widely $["mistrusted", "feared", "regarded with uncertainty", "held with skepticism", "greeted with apprehension", "met with misgiving", "distrusted", "considered suspicious"] in $PRONOUN_POSSESSIVE $COMMUNITY $["due to", "because of", "as a result of", "ever since"] $["the events that led to the disappearance of a local stonemason", "a local elder's angry public disavowal", "the salting of a nearby field", "the destruction of some local property"], for which many of $NAME's peers were also $["implicated", "accused", "believed to have been involved", "responsible"].`,
    `When the locals in $NAME's $COMMUNITY $["came to learn of", "learned about", "became aware of", "were informed of", "found out about"] $["$PRONOUN_POSSESSIVE behavior toward a local Protector", "$PRONOUN_POSSESSIVE alleged involvement in a scandal", "$PRONOUN_POSSESSIVE alleged involvement in a bribe", "$PRONOUN_POSSESSIVE alleged involvement in the disappearance of a local hero"], most residents responded with $["mistrust", "fear", "uncertainty", "skepticism", "apprehension", "misgiving", "distrust", "suspicion"], and $NAME found it $["difficult", "impossible", "frustrating"] to challenge that reputation.`,
    `$["In the years after", "In the wake of", "Since the time of", "In the aftermath of"] $["a scandalous", "a shocking", "a disgraceful", "a shameful", "a horrifying"] $["circumstance", "event", "incident", "misadventure", "calamity", "happening", "occurrence"], $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["mistrusted", "feared", "regarded with uncertainty", "seen with skepticism", "regarded with apprehension", "regarded with misgivings", "distrusted", "seen with suspicion"] in $PRONOUN_POSSESSIVE $COMMUNITY, which $["impacted", "damaged", "affected", "troubled"] $PRONOUN_OBJECT socially.`
  ],
  'castoutShunned': [
    `Locals $["cast out", "shunned", "exiled", "rejected", "eschewed", "dismissed", "banished", "ostracized", "ousted"] $NAME $["because of $PRONOUN_POSSESSIVE connection to", "after", "following", "in the months after"] $["the quandary of the Great Rose", "the season of Chotznal's Doom", "the suspicious death of a local political rival", "the halfhollows incident", "the cattle blight blamed on $PRONOUN_POSSESSIVE negligence", "advocating for a murderous shapeshifter"], a $["reputation", "disreputableness", "disgrace"] that followed $PRONOUN_OBJECT $["throughout the region", "for nearly a decade", "into $PRONOUN_POSSESSIVE training"].`,
    `$["Due to", "Because of", "Ever since"] $["the failure of the summer fires", "the spiteful influence of the Order of Anesh", "the political enemies of $PRONOUN_POSSESSIVE family", "the cataclysmic events of Thrennum's Journey some years past"] in $PRONOUN_POSSESSIVE $COMMUNITY, $NAME was $["cast out", "shunned", "exiled", "rejected", "eschewed", "dismissed", "banished", "ostracized", "ousted"] from the region, $["never to return", "vowing to return one day", "glad to move on", "forced to leave $PRONOUN_POSSESSIVE past behind them"].`,
    `$NAME was $["sadly", "unfortunately", "lamentably", "regrettably", "unsurprisingly"] $["cast out", "shunned", "exiled", "rejected", "eschewed", "dismissed", "banished", "ostracized", "ousted"] from $PRONOUN_POSSESSIVE $COMMUNITY after being $["involved with", "associated with", "culpable for", "branded among", "an apologist for"] $["a dangerous group of Finojan cultists", "a series of arsons that led to the deaths of several important people", "a group of anti-Thelean anarchists content to ignore the Regent and commit blasphemy", "a despised local enchanter", "a group of local brigands who terrorized the nearby roads"].`,
    `$["Much to $PRONOUN_POSSESSIVE surprise", "In the cloister of $PRONOUN_POSSESSIVE $COMMUNITY", "On a fateful moon day in The Warming Night"], $["several superstitious locals surrounded $NAME", "a group of prominent merchants cornered $NAME", "a cadre of enchanters gathered around $NAME", "a spiteful band of Peacekeepers abducted $NAME"], $["casting $PRONOUN_OBJECT out", "exiling $PRONOUN_OBJECT", "banishing $PRONOUN_OBJECT", "imprisoning $PRONOUN_OBJECT", "ousting $PRONOUN_OBJECT"] and leaving $PRONOUN_OBJECT estranged from $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `Prominent locals $["cast out", "shunned", "exiled", "rejected", "eschewed", "dismissed", "banished", "ostracized", "ousted"] $NAME for $["$PRONOUN_POSSESSIVE involvement with", "nothing other than being accused of participating in", "simply mentioning", "arguing against", "defending several people who were implicated in"] $["the local cult of Finojan", "the group of brigands responsible for the merchant fires", "the theft of the noble seal", "the razing of a Thelean temple"] nearby $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `$["Following", "After", "Ever since", "In the aftermath of"] $["a deadly", "a calamitous", "a tragic", "an appalling", "a horrifying"] $["blunder", "event", "incident", "misadventure", "catastrophe", "accident", "occurrence"], $NAME $["was", "found $PRONOUN_SELF"] $["cast out", "shunned", "exiled", "rejected", "eschewed", "dismissed", "banished", "ostracized", "ousted"] from $PRONOUN_POSSESSIVE $COMMUNITY, $["never to return", "and vowed to seek retribution", "leaving $PRONOUN_OBJECT with a checkered past", "but vowed to one day clear $PRONOUN_POSSESSIVE name"].`  
  ],
  'unnoticedDisregarded': [
    `$["Locals", "Residents", "Most people"] in $PRONOUN_POSSESSIVE $COMMUNITY $["did not notice $NAME", "failed to notice $NAME", "disregarded $NAME", "found $NAME forgettable", "ignored $NAME", "overlooked $NAME", "regarded $NAME as unseen", "treated $NAME as unrecognized", "discounted $NAME"], leaving $PRONOUN_OBJECT $["with a resentment for $PRONOUN_POSSESSIVE community", "with few connections in $PRONOUN_POSSESSIVE community", "a need to distance $PRONOUN_SELF from $PRONOUN_POSSESSIVE community", "a desire for revenge", "a deep need to feel recognized"].`,
    `$["In the wake of", "As a result of", "Because of"] $["the tragic lack of local resources around the $COMMUNITY", "the celebrated heroes and protectors of the $COMMUNITY", "a great disease that swept through the $COMMUNITY", "the social structure of the $COMMUNITY", "the hierarchies within the class structure of the $COMMUNITY"], $NAME's $["own", "individual", "varied", "dutiful"] achievements $["went unnoticed", "were disregarded", "were ultimately forgettable", "were all but ignored", "were overlooked", "went unseen", "were left unrecognized", "were discounted"].`,
    `$["Unfortunately", "With no specific reasons", "In $PRONOUN_POSSESSIVE adulthood", "For reasons unknown to $PRONOUN_OBJECT"], $NAME $["went", "typically went", "was often", "found $PRONOUN_SELF"] $["unnoticed", "disregarded", "forgotten", "ignored", "overlooked", "unseen", "unrecognized", "discounted"] $["in the various political realms", "in the social spaces", "among important and influential people", "in the public eye", "among the many places nearby"] $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `After $["the Peacekeepers arrived in", "commerce entered the region of", "the Proudsong descended upon", "a great depression swept over", "a prophecy drew the attention and superstition of"] $PRONOUN_POSSESSIVE $COMMUNITY, $NAME's $["own", "individual", "varied", "dutiful"] actions $["went unnoticed", "were disregarded", "became forgettable", "were ignored", "were overlooked", "went unseen", "were unrecognized", "were discounted"], leaving $PRONOUN_OBJECT with a sense of detachment.`,
    `$NAME $["was often", "was typically", "over time became", "tended to be"] $["unnoticed", "disregarded", "forgettable", "ignored", "overlooked", "unseen", "unrecognized", "discounted"] in $PRONOUN_POSSESSIVE $COMMUNITY, $["which left $PRONOUN_OBJECT with a profound sense of", "which instilled in $PRONOUN_OBJECT a deep", "which contributed to feelings of", "which did little but encourage"] $["sadness", "resentment", "detachment", "regret", "anger", "self-reliance"].`,
    `$["Despite", "Due to", "Given"] $["the company $PRONOUN_SUBJECT kept in", "the local culture of", "the varied social arrangements within", "the political nature of", "the kind of opportunities only available in", "the class structure of"] $PRONOUN_POSSESSIVE $COMMUNITY locality, $NAME was $["surprisingly", "sadly", "unfortunately", "uncharacteristically", "purposefully", "shamefully"] $["unnoticed", "disregarded", "forgotten", "ignored", "overlooked", "unseen", "unrecognized", "discounted"], $["and, in turn, has few good things to say about $PRONOUN_POSSESSIVE locality", "earning little validation from others in $PRONOUN_POSSESSIVE locality", "finding little nostalgia for $PRONOUN_POSSESSIVE locality"].`
  ],
  'misunderstoodUnappreciated': [
    `The $COMMUNITY surrounding $NAME $["typically", "often", "predominantly", "generally"] $["misunderstood", "underappreciated", "misconstrued", "gave no praise to", "brushed aside", "invalidated"] $PRONOUN_POSSESSIVE $["sincere", "individual", "heartfelt", "dutiful", "intentional", "careful", "honest"] $["achievements", "accomplishments", "deeds", "actions", "activities"], which in turn inspired $["resentment", "anger", "disgust", "disapproval", "denunciation", "dissatisfaction"] for $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `Since the $["days", "night", "weeks", "months"] following the $["loss of the central livery", "appearance of a great comet above $PRONOUN_POSSESSIVE $COMMUNITY", "a wandering troupe took up camp in the center of $PRONOUN_POSSESSIVE $COMMUNITY", "a local fervent cult became influential in $PRONOUN_POSSESSIVE $COMMUNITY", "a bleak loss of morale infected the $COMMUNITY"], $NAME $["became", "found $PRONOUN_SELF", "grew to be"] $["misunderstood", "unappreciated", "misconceived", "brushed aside", "invalidated"] in daily life, and grew $["resentful of", "angry with", "disgusted with", "disapproving of", "dissatisfied with"] home.`,
    `$NAME $["became", "found $PRONOUN_SELF", "was", "usually felt"] $["misunderstood", "unappreciated", "misconceived", "underappreciated", "brushed aside", "invalidated"] by the $["locals", "residents", "members", "citizens", "inhabitants"] of $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `Overshadowed by the $["traveling champions who sequestered themselves in a local arena", "regional nobles who had little use for $PRONOUN_POSSESSIVE achievements", "influential merchants who found no profit in $PRONOUN_POSSESSIVE goals", "intentional stewards who encourage residents to adhere to traditional values and customs"], $NAME $["sadly", "unfortunately", "lamentably", "regrettably", "unsurprisingly"] became $["misunderstood", "unappreciated", "misconceived", "underappreciated", "brushed aside", "invalidated"] by most $["members of", "locals of", "citizens of"] $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `In $PRONOUN_POSSESSIVE early days, $NAME was $["misunderstood", "unappreciated", "misconceived", "given no praise", "brushed aside", "invalidated"] by most of the $["locals", "residents", "members", "citizens", "inhabitants"] of $PRONOUN_POSSESSIVE $COMMUNITY, which $["caused a rift to form in $PRONOUN_POSSESSIVE locality", "inspired $PRONOUN_OBJECT to find a more accepting community within the Empire", "encouraged a detachment from $PRONOUN_POSSESSIVE $COMMUNITY", "bothers $PRONOUN_OBJECT to this day", "never bothered $PRONOUN_OBJECT as much as people imagined it would"].`,
    `$["Even with", "Even considering", "Even after", "Despite"] $["the hardships", "the challenges", "the labors", "the criticisms", "the trials"] that $NAME $["endured", "underwent", "suffered", "experienced", "persevered", "persisted through", "encountered"] in $PRONOUN_POSSESSIVE $COMMUNITY, $PRONOUN_SUBJECT $["still found $PRONOUN_SELF", "were still", "still grew to be", "still were"] $["misunderstood", "unappreciated", "misconceived", "given no praise", "brushed aside", "invalidated"], $["in $PRONOUN_POSSESSIVE early years", "in $PRONOUN_POSSESSIVE formative years", "during $PRONOUN_POSSESSIVE childhood"].`
  ],
  'controversialHeroicEvent': [
    `Members of $NAME's $COMMUNITY $["drew $PRONOUN_OBJECT into a", "forced $PRONOUN_OBJECT into a", "became preoccupied with $PRONOUN_POSSESSIVE"] $["controversial", "contentious", "divisive", "polemical", "heroic", "celebrated", "amazing", "bold", "courageous"] $["actions", "achievements", "deeds", "acts"], which left $PRONOUN_OBJECT with a lasting $["reputation", "notoriety", "recognition"].`,
    `On the $["first", "second", "third", "fourth", "fifth", "last"] $["Rehan", "Thelehan", "Middhan", "Leddhan", "Estehan"] of $["Bailiea's Dawn", "Star of the Morning", "Seed's Rise", "Dance of Etia", "Water's Rise", "Vostiar's Renewal", "The Warming Night", "Kalmor's Bright Mist", "Song of Ithera", "Water's Fall", "Star of the Evening", "Thrennum's Journey"], $NAME $["was drawn into a", "was central to a", "was influential among a", "instigated a", "brought about a", "initiated a"] $["controversial", "contentious", "divisive", "polemical", "heroic", "celebrated", "amazing", "bold", "courageous"] event, and $["was thereafter", "became", "grew to be"] $["recognized", "ostracized", "celebrated", "appreciated", "questioned", "considered volatile", "venerated", "admired", "accepted"] within $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `$NAME $["was involved in", "was pivotal to", "was central to", "found $PRONOUN_SELF amid"] $["a controversial", "a contentious", "a divisive", "a polemical", "a heroic", "a celebrated", "an amazing", "a bold", "a courageous"] $["series of events", "and historic incident", "local rescue", "local arrest", "local adventure"] in $PRONOUN_POSSESSIVE $COMMUNITY, which earned $PRONOUN_OBJECT considerable $["recognition", "local leverage", "local prestige", "local attention"].`,
    `$["During", "As a part of", "As a result of", "Throughout the course of", "In the course of"] $["a deadly", "a calamitous", "a tragic", "an appalling", "a horrifying", "a dangerous", "a challenging", "a reckless"] $["incident", "event", "circumstance", "adventure", "experience"] within $PRONOUN_POSSESSIVE $COMMUNITY, $NAME's $["actions", "achievements", "deeds", "acts", "participation", "contributions"] proved to be $["controversial", "contentious", "divisive", "polemical", "heroic", "celebrated", "amazing", "bold", "courageous"].`,
    `$NAME $["took part in", "orchestrated", "participated in", "caused"] $["a controversial", "a contentious", "a divisive", "a polemical", "a heroic", "a celebrated", "an amazing", "a bold", "a courageous"] $["plot", "deed", "adventure", "local rescue"] in $PRONOUN_POSSESSIVE $COMMUNITY, which earned $PRONOUN_OBJECT $["recognition", "ostracization", "celebrity", "appreciation", "an inquisition", "veneration", "admiration", "acceptance"] by many.`,
    `$["Following", "After", "Ever since", "In the aftermath of"] the $["realization", "fulfillment", "bringing about", "effecting"] of $["a controversial", "a contentious", "a divisive", "a polemical", "a heroic", "an amazing", "a bold", "a courageous"] $["circumstance", "event", "incident", "adventure", "investigation", "prophecy", "occurrence"] in $PRONOUN_POSSESSIVE $COMMUNITY, $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["recognized", "ostracized", "celebrated", "appreciated", "questioned", "considered volatile", "venerated", "admired", "accepted"] in $["public", "open", "local", "communal"] social gatherings.`
  ],
  'overworkedExploited': [
    `In $PRONOUN_POSSESSIVE $COMMUNITY, $NAME found $PRONOUN_SELF $["overworked", "exploited", "overburdened", "strained", "abused", "oppressed", "indentured"], which led to $["a resilient", "a volatile", "an unsettled", "a pushover's", "a frustrated"] reputation and $["a hindered", "a burdened", "an obstructed", "a precluded"] regional recognition.`,
    `$["In the wake of the Empire's war efforts", "In the aftermath of the regional war", "Due to a decade-long drought", "As an extension of the Empire's commerce", "As an expectation of Thelean tribute"], $NAME's early years in $PRONOUN_POSSESSIVE $COMMUNITY were $["overworked", "exploited", "overburdened", "strained", "abused", "oppressed", "indentured"], fostering $["a sense of duty to", "a profound resentment toward", "a political interest in", "a great need to distance $PRONOUN_SELF from", "many difficult questions for"] the Empire.`,
    `$NAME was $["overworked", "exploited", "overburdened", "strained", "abused", "oppressed", "a pushover", "indentured"] in $PRONOUN_POSSESSIVE $COMMUNITY, which $["hindered $PRONOUN_POSSESSIVE growth and reputation", "ensured a well respected local reputation", "ingratiated $PRONOUN_OBJECT to the regional $<"nobles", "merchants", "soldiers", "farmers", "artisans", "innkeepers", "smiths", "leatherworkers", "loggers", "healers", "stewards">"].`,
    `$["Due to $PRONOUN_POSSESSIVE $<"family", "$COMMUNITY"> $<"contacts", "expectations", "influence", "service">", "Given the Empire's hold on the region", "According to the expectations of $PRONOUN_POSSESSIVE $<"family", "$COMMUNITY">",""] $NAME spent $PRONOUN_POSSESSIVE early years $["overworked", "exploited", "overburdened", "strained", "abused", "oppressed", "indentured"], $["and often $<"underappreciated", "unrecognized", "exhausted", "angry", "resentful">", "and typically $<"underappreciated", "unrecognized", "exhausted", "angry", "resentful">", "but $<"still", "generally", "usually"> $<"hopeful", "content", "in good spirits">"].`,
    `$NAME's $COMMUNITY $["sadly", "unfairly", "unfortunately", "lamentably", "reluctantly", "regrettably", "callously", "fiercely", "unforgivingly", "dutifully", "unwittingly", "intentionally"] $["overworked", "exploited", "overburdened", "strained", "abused", "oppressed", "indentured"] $PRONOUN_OBJECT to service in the name of their region and of the Empire, which $["eventually garnered regional sympathy", "ultimately led to $<"a strong", "a unique", "an evasive", "a cantankerous"> work ethic", "developed into $<"a sense of duty to", "a deep resentment for", "a plan to escape the influence of", "many questions about the nature of service for"> the Empire"].`,
    `$["In the wake of", "During", "Because of", "In the aftermath of"] $["an overworked", "an exploited", "an overburdened", "a strained", "an abused", "an oppressed", "an indentured"] life within $PRONOUN_POSSESSIVE $COMMUNITY, $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["widely respected for", "generally ignored concerning", "highly skilled in", "ostracized for", "envied for", "appreciated for", "regarded with apprehension"] for $PRONOUN_POSSESSIVE labors.`
  ],
  'wantedForCrimes': [
    `$NAME was $["wanted for crimes", "a fugitive", "a deserter", "an outcast", "an outlaw", "wanted for questioning", "a defector", "a lawbreaker"] in $PRONOUN_POSSESSIVE $COMMUNITY following $PRONOUN_POSSESSIVE $["implication in", "association with"] $["the storage fires that left two merchants dead", "the culling of the Water's Fall", "the stolen talisman of the Viceroy's $<"daughter", "son", "child", "sibling">", "a $<"shocking", "heinous", "shameful", "disquieting"> regional $<"theft", "murder", "crime", "immorality", "violation">"].`,
    `Following $["the Empire's investigation of several $<"missing", "murdered", "tortured"> Peacekeepers", "the cult of Finojan's abduction of a local $<"elder", "merchant", "child", "horse">", "a $<"shocking", "heinous", "shameful", "disquieting"> regional $<"theft", "murder", "crime", "immorality", "violation">"], $NAME's $COMMUNITY branded $PRONOUN_OBJECT $["a criminal", "a fugitive", "a suspect", "an outcast", "an outlaw", "as suspicious"].`,
    `Since the $["days", "night", "weeks", "months"] following the $["tragic burn", "poisoning of the region's water supply", "incident with Vallicast's Tears", "tragic death of a local celebrity", "theft of a cloaked merchant's prized dagger"], $NAME has been $["wanted for crimes", "branded a fugitive", "seen as a deserter", "considered an outcast", "thought of as an outlaw", "wanted for questioning", "treated like a defector", "branded as a lawbreaker"] among $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `$["During", "As a part of", "As a result of", "Throughout the course of", "In the course of"] $PRONOUN_POSSESSIVE years of $["spending time in mixed company", "consorting with criminals", "dabbling in taboo practices", "disregarding local ordinances"], $NAME became $["wanted for crimes", "a fugitive", "a deserter", "an outcast", "an outlaw", "wanted for questioning", "a defector", "a lawbreaker"] among $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `Since that tragic night on the $["first", "second", "third", "fourth", "fifth", "last"] $["Rehan", "Thelehan", "Middhan", "Leddhan", "Estehan"] of $["Bailiea's Dawn", "Star of the Morning", "Seed's Rise", "Dance of Etia", "Water's Rise", "Vostiar's Renewal", "The Warming Night", "Kalmor's Bright Mist", "Song of Ithera", "Water's Fall", "Star of the Evening", "Thrennum's Journey"], $NAME has been $["wanted for crimes", "considered a fugitive", "treated as a deserter", "branded an outcast", "branded an outlaw", "wanted for questioning", "treated like a defector", "seen as a lawbreaker"] in $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `$["Following", "After", "Ever since", "In the aftermath of"] $["a deadly", "a calmitous", "a tragic", "an appalling", "a fateful", "a corrupt", "an illegal", "a deplorable", "an illicit"] $["circumstance", "event", "incident", "misadventure", "catastrophe", "accident", "occurrence"] in $PRONOUN_POSSESSIVE $COMMUNITY, $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["wanted for crimes", "known as a fugitive", "known as a deserter", "known as an outcast", "known as an outlaw", "wanted for questioning", "known as a defector", "known as a lawbreaker"], $["regularly hearing hushed whispers", "often encountering suspicion", "usually attracting Peacekeeper scrutiny"] in $["public", "open", "crowded", "populated"] areas.`
  ],
  'respectedTrusted': [
    `$["Locals", "Residents", "Most people"] in $NAME's $COMMUNITY $["developed a lasting respect for", "found a reliable trust in", "showed clear admiration for", "felt a beloved connection to $PRONOUN_OBJECT for", "deeply appreciated $PRONOUN_OBJECT for", "saw a trustworthy neighbor in $PRONOUN_OBJECT for", "acknowledged $PRONOUN_OBJECT for"] $PRONOUN_POSSESSIVE $["dependable", "dignified", "charitable", "careful", "thoughtful", "helpful", "kindhearted", "courageous", "integrous"] $["actions", "attention", "acts", "deeds", "adventures", "feats", "accomplishments"].`,
    `$["After the harvests of the tireless moon", "Following the victory over High Hill", "In the wake of the Empire's noble recognition", "For the honor of the local merchants' corps", "In the eyes of the scholars"] in $PRONOUN_POSSESSIVE $COMMUNITY, $NAME became widely $["respected", "trusted", "admired", "beloved", "appreciated", "relied upon", "acknowledged"] across the region.`,
    `$NAME was $["deeply respected", "well trusted", "fondly admired", "earnestly beloved", "fully appreciated", "widely relied upon", "considered trustworthy", "fervently acknowledged"] for $PRONOUN_POSSESSIVE $["dependable", "dignified", "charitable", "careful", "thoughtful", "helpful", "kindhearted", "courageous", "integrous"] $["actions", "attention", "acts", "deeds", "adventures", "feats", "accomplishments"] within $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `In the $["days", "night", "weeks", "months"] following a $["celebrated harvest", "discovery of resources", "virtuous recovery", "season of plenty", "new invention"], $NAME was privileged and $["respected", "trusted", "admired", "beloved", "appreciated", "relied upon", "trustworthy", "acknowledged"] among $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `Members of $NAME's $COMMUNITY $["respected", "trusted", "admired", "appreciated", "relied upon", "acknowledged"] the many $["dependable", "dignified", "charitable", "careful", "thoughtful", "helpful", "kindhearted", "courageous", "integrous"] $["actions", "attention", "acts", "deeds", "adventures", "feats", "accomplishments"] $PRONOUN_SUBJECT brought to the $["region", "area", "land", "province", "Empire"].`,
    `$["For", "As a result of", "Because of", "In recognition of"] $PRONOUN_POSSESSIVE $["dependable", "dignified", "charitable", "careful", "thoughtful", "helpful", "kindhearted", "courageous", "integrous"] $["actions", "attention", "acts", "deeds", "adventures", "feats", "accomplishments"] within $PRONOUN_POSSESSIVE $COMMUNITY, $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["respected", "trusted", "admired", "beloved", "appreciated", "relied upon", "trusted", "well acknowledged"], and $["received the praise and tributes of", "embraced the celebratory generosity of", "found comfort in"] $PRONOUN_POSSESSIVE $["public", "regional", "local", "communal"] acclaim.`
  ],
  'lovedVenerated': [
    `Influential $["locals", "nobles", "Peacekeepers", "scholars"] in $NAME's $COMMUNITY praised $PRONOUN_OBJECT for $PRONOUN_POSSESSIVE $["honored", "noble", "selfless", "conscientious", "painstaking", "fastidious", "meticulous", "tenacious", "valiant"] $["actions", "attention", "efforts", "deeds", "adventures", "feats", "accomplishments"], inspiring a reputation for being $["loved", "honored", "venerated", "cherished", "esteemed", "idolized", "adored", "beloved"] across the region.`,
    `$NAME was well $["loved", "honored", "venerated", "cherished", "esteemed", "idolized", "adored", "beloved"] for $PRONOUN_POSSESSIVE $["honored", "noble", "selfless", "conscientious", "painstaking", "fastidious", "meticulous", "tenacious", "valiant"] $["actions", "attention", "acts", "deeds", "adventures", "feats", "accomplishments"] throughout $PRONOUN_POSSESSIVE $COMMUNITY.`,
    `Ever since that blessed $["day", "night", "week"] in $["Bailiea's Dawn", "Star of the Morning", "Seed's Rise", "Dance of Etia", "Water's Rise", "Vostiar's Renewal", "The Warming Night", "Kalmor's Bright Mist", "Song of Ithera", "Water's Fall", "Star of the Evening", "Thrennum's Journey"], $NAME has been $["loved", "honored", "venerated", "cherished", "esteemed", "idolized", "adored", "beloved"] by $PRONOUN_POSSESSIVE $COMMUNITY and respected across the region.`,
    `$["In praise of", "In celebration of", "Because of", "In observance of"] $PRONOUN_POSSESSIVE $["honored", "noble", "selfless", "conscientious", "painstaking", "fastidious", "meticulous", "tenacious", "valiant"] $["actions", "attention", "efforts", "deeds", "adventures", "feats", "accomplishments"] within $PRONOUN_POSSESSIVE $COMMUNITY, $NAME $["was thereafter", "became", "grew to be", "found $PRONOUN_SELF"] $["loved", "honored", "venerated", "cherished", "esteemed", "idolized", "adored", "beloved"] by all throughout the region.`
  ],
}