/*
  Example: Alchemy - Two Equaled Pairs

  (the phrase is brackets is what is provided from this file)

 Kishietta [found little facility with ingredients and alembics while apprenticing] as a Ritualist.
 
 
 Kishietta [was widely known for her deep knowledge] as a Ritualist {and is renowned as a "Shaper"}.

 !!!! I wonder if we can change the wording of the "title" portion, such as {and is renowned as a Shaper}. !!!

  With the full sentence describing the character's distinctive experience with a vocation, I'm feeling like 
  tacking on an additional "and" or comma splice for the addition of a Title feels like too much. 
  
  My recommendation is that we just create a new sentence for the Titles (or a semicolon splice). 
  e.g.: "and is renowned as a" should instead be organized as "Their accolades earned them the title of"-- 
  and other variants such as--
    `$PRONOUN_POSSESSIVE distinction earned $PRONOUN_OBJECT regard as a`,
    `Through $PRONOUN_POSSESSIVE laurels $PRONOUN_SUBJECT became known as a`,
    `$PRONOUN_POSSESSIVE achievements bound $PRONOUN_OBJECT to the $['title', 'nickname', 'epithet', 'moniker', 'sobriquet', 'honorific']`,
    `$PRONOUN_POSSESSIVE accomplishments bestowed $PRONOUN_OBJECT with the $['title', 'nickname', 'epithet', 'moniker', 'sobriquet', 'honorific']`,
    `These activities led $PRONOUN_OBJECT to adopt the $['title', 'nickname', 'epithet', 'moniker', 'sobriquet', 'honorific']`,
    `Over time $PRONOUN_SUBJECT deeds inspired the $['title', 'nickname', 'epithet', 'moniker', 'sobriquet', 'honorific']`,
    `$PRONOUN_POSSESSIVE actions earned $PRONOUN_OBJECT recognition as a`,
    `The merit of this work led $PRONOUN_OBJECT to become known as a`

    The 'All Numbers Distinct' option for every expertise could just be a sentence that reads:
    "$PRONOUN_POSSESSIVE deeds have earned $PRONOUN_OBJECT no titles or recognition."
    Or perhaps no sentence at all, similar to the 'One Equaled Pair' option.

    Note: A semi-colon splice might be easier than a new sentence if capitalizing pronouns would be difficult.
*/

export const expertiseAccoladesPhrases = {
  'Alchemy': {
    'All Numbers Distinct': [ // lack of motivation
      `found little facility with ingredients and alembics while apprenticing`,
      `was poorly motivated to connect with herbs and potions when in training`,
      `felt distance and disinterest for $PRONOUN_POSSESSIVE mentor while apprenticing`,
      `showed a complete lack of motivation for studying herbalism while apprenticing`
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `showed an unhealthy interest in the dark tendencies of alchemy while training`,
      `became regarded with fear by $PRONOUN_POSSESSIVE peers while studying`,
      `found an uncanny facility with dangerous and illegal ingredients while practicing`,
      `was shunned for experimenting with taboo recipes and outlawed supplies while training`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `showed a dedication in the natural world of plants and $PRONOUN_POSSESSIVE properties while apprenticing`,
      `built an enjoyable practice working with alembics and ingredients while in training`,
      `earned respect as an authority in the domain of plants, herbs, and medicines when training`,
      `demonstrated a willful drive toward mastering the alchemical arts during $PRONOUN_POSSESSIVE apprenticeship`
    ],
    'Three Equal Numbers': [ // highly regarded
      `stood out from $PRONOUN_POSSESSIVE peers as a brilliant herbalist during $PRONOUN_POSSESSIVE apprenticeship`,
      `became highly regarded as a masterful alchemist and alembicist throughout $PRONOUN_POSSESSIVE training`,
      `developed recognizeable skill and knowledge with plants and $PRONOUN_POSSESSIVE properties while in training`,
      `was recognized as an exceptional practitioner in $PRONOUN_POSSESSIVE field while serving in apprenticeship`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `gained a remarkable prestige for $PRONOUN_POSSESSIVE exceptional prowess in alchemy while training`,
      `swiftly surpassed $PRONOUN_POSSESSIVE peers and instructors while studying and training`,
      `earned respect and became an impressive example for $PRONOUN_POSSESSIVE peers while serving in apprenticeship`,
      `found an ease and expertise in $PRONOUN_POSSESSIVE practice of alchemy when in training`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `stood out as an unrivaled practitioner of alchemy and plant study when in training`,
      `gained a celebrity for $PRONOUN_POSSESSIVE brilliant expertise while apprenticing`,
      `amazed $PRONOUN_POSSESSIVE peers and instructors with an unrivaled talent during $PRONOUN_POSSESSIVE apprenticeship`,
      `surpassed all expectations by quickly showing an unparalleled alchemical ability while training`
    ]
  },

  'Combat': {
    'All Numbers Distinct': [ // lack of motivation
      `failed to meet the expectations of $PRONOUN_POSSESSIVE combat instructors while training`,
      `found little interest in martial techniques and little motivation to train`,
      `felt a struggle and disconnect during $PRONOUN_POSSESSIVE combat training, simply abiding $PRONOUN_POSSESSIVE time`,
      `endured $PRONOUN_POSSESSIVE combat training as a chore more than a study, which revealed $PRONOUN_POSSESSIVE lack of motivation`
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `earned disdain from $PRONOUN_POSSESSIVE peers for $PRONOUN_POSSESSIVE tendency to employ dishonorable techniques in $PRONOUN_POSSESSIVE training`,
      `became rather disrespected as a combatant for $PRONOUN_POSSESSIVE foul fighting techniques during $PRONOUN_POSSESSIVE martial training`,
      `was held with disdain by fellow combatants, primarily because of the unethical techniques $PRONOUN_SUBJECT employed while training`,
      `gained a fearful reputation while training with $PRONOUN_POSSESSIVE peers, and were denounced for $PRONOUN_POSSESSIVE cruel tactics`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `showed a dedication to the practice of technique and tactices during $PRONOUN_POSSESSIVE time training`,
      `worked tirelessly to build a steady, reliable reputation as a skilled combatant during $PRONOUN_POSSESSIVE training`,
      `earned respect among $PRONOUN_POSSESSIVE peers as a skilled combatant in the years $PRONOUN_SUBJECT spent training`,
      `built a lasting and respected practice in combat techniques and tactics while training`
    ],
    'Three Equal Numbers': [ // highly regarded
      `excelled among $PRONOUN_POSSESSIVE fellow combatants as a formidable opponent and skilled tactician during $PRONOUN_POSSESSIVE training`,
      `became highly respected with $PRONOUN_POSSESSIVE peers and sparring partners, showing a deep understanding and facility in $PRONOUN_POSSESSIVE training`,
      `advanced beyond the basic understanding of technique and tactics, and demonstrated a keen martial comprehension and awareness during $PRONOUN_POSSESSIVE training`,
      `was given numerous accolades for $PRONOUN_POSSESSIVE sharp technique and tireless stamina for $PRONOUN_POSSESSIVE training`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `impressively outpaced $PRONOUN_POSSESSIVE peers and rivals in both technique and strategy during $PRONOUN_POSSESSIVE training`,
      `showed an intense facility for combat awareness and martial technique during $PRONOUN_POSSESSIVE training`,
      `developed an exceptional prowess in combat tactics and techniques, earning a noteworthy distinction in $PRONOUN_POSSESSIVE training`,
      `gained an impressive mastery of martial techniques and rose to be respected by $PRONOUN_POSSESSIVE peers during $PRONOUN_POSSESSIVE training`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `demonstrated an almost innate facility for combat techniques and tactics and was regarded without rival while training`,
      `excelled beyond the skill level of $PRONOUN_POSSESSIVE peers and developed a remarkable mastery of combat while training`,
      `surpassed the finest combatants in $PRONOUN_POSSESSIVE field and established a new martial standard during $PRONOUN_POSSESSIVE training`,
      `established an unrivaled expertise in the area of combat techniques and tactics, dominating $PRONOUN_POSSESSIVE field of training`
    ]
  },

  'Crafts': {
    'All Numbers Distinct': [ // lack of motivation
      `showed little to no facility with $PRONOUN_POSSESSIVE work in crafts and found no connection to $PRONOUN_POSSESSIVE training`,
      `felt a lack of motivation regarding $PRONOUN_POSSESSIVE work in crafts, offering nothing of value to $PRONOUN_POSSESSIVE field while working`,
      `had little to no support in $PRONOUN_POSSESSIVE field and thus became quickly surpassed by $PRONOUN_POSSESSIVE peers during $PRONOUN_POSSESSIVE training`,
      `found $PRONOUN_SUBJECT had a lack of interest in the lifelong pursuit of crafts and only retained the basics of knowledge when training`
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `created experimental designs that were hailed by $PRONOUN_POSSESSIVE peers as heretical and disdainful during $PRONOUN_POSSESSIVE work`,
      `was known to manipulate dangerous mechanisms and working parts that branded $PRONOUN_POSSESSIVE work as alarming during training`,
      `stood out as a maker of unstable devices and mechanisms, which encouraged $PRONOUN_POSSESSIVE peers to keep a distance during $PRONOUN_POSSESSIVE training`,
      `seemed unlucky in crafts, mechanisms, and salvage, often constructing costly and potentially dangerous blunders while working`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `presented dedicated work in $PRONOUN_POSSESSIVE crafts that earned $PRONOUN_SUBJECT respect and local regard while training`,
      `showed drive and initiative in construction and crafts, through which $PRONOUN_SUBJECT earned the recognition and admiration of $PRONOUN_POSSESSIVE peers during training`,
      `found joy and connection through working in crafts, earned the respect of $PRONOUN_POSSESSIVE peers, and benefited from $PRONOUN_POSSESSIVE training`,
      `certainly demonstrated a drive and dedication for $PRONOUN_POSSESSIVE work in crafts, but always felt as if there could be more than $PRONOUN_POSSESSIVE work`
    ],
    'Three Equal Numbers': [ // highly regarded
      `became highly regarded as a maker of some renown, and saw several of $PRONOUN_POSSESSIVE innovative ideas become integral to $PRONOUN_POSSESSIVE training`,
      `established a respected facility with salvage and crafts, gaining the recognition and envy of $PRONOUN_POSSESSIVE peers while working`,
      `stood out for $PRONOUN_POSSESSIVE ingenuity and creativity in salvage and crafts in $PRONOUN_POSSESSIVE time training`,
      `gained notoriety as widely renowned in $PRONOUN_POSSESSIVE field in salvage and crafts during $PRONOUN_POSSESSIVE time working`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `almost intuitively mastered the arts and mechanics of crafts, and amazed $PRONOUN_POSSESSIVE mentors with $PRONOUN_POSSESSIVE brilliant work`,
      `excelled in all $PRONOUN_POSSESSIVE work in salvage and mechanisms, and showed exceptional prowess in $PRONOUN_POSSESSIVE field while working`,
      `demonstrated amazing promise and skill, surpassing $PRONOUN_POSSESSIVE peers in the field of crafts during $PRONOUN_POSSESSIVE time working`,
      `showed remarkable competence in salvage, mechanisms, and crafts, and served to be an example for $PRONOUN_POSSESSIVE peers when training`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `transcended all expectations in $PRONOUN_POSSESSIVE field, and demonstrated unprecedented mastery while working`,
      `displayed an unrivaled proficiency within the fields of salvage and crafts, and surpassed $PRONOUN_POSSESSIVE mentors while training`,
      `emerged as a widely regarded expert in the field of crafts, and found no equal in $PRONOUN_POSSESSIVE work`,
      `was unmatched in skill and knowledge in the fields of salvage and crafts, and held an incomparable expertise in $PRONOUN_POSSESSIVE work`
    ]
  },

  'Influence': {
    'All Numbers Distinct': [ // lack of motivation
      `was pooh-poohed by socialites for failing to hobnob appropriately among the prominent elite while seasoning`,
      `found $PRONOUN_SELF ostracized among social circles for showing a lack of interest in charismatic networking when in training`,
      `was overlooked for $PRONOUN_POSSESSIVE lacking motivation among circles of political prestige when studying`,
      `stagnated in realms of influence and found that $PRONOUN_POSSESSIVE practice failed to inspire engagement during $PRONOUN_POSSESSIVE studies`
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `challenged others with $PRONOUN_POSSESSIVE unforgiving retorts and remorseless methods while $PRONOUN_SUBJECT advanced $PRONOUN_POSSESSIVE studies`,
      `became quietly disrespected and held in disdain by $PRONOUN_POSSESSIVE peers as $PRONOUN_SUBJECT established a disreputable network in $PRONOUN_POSSESSIVE time`,
      `saw $PRONOUN_POSSESSIVE approach shunned by $PRONOUN_POSSESSIVE mentors during $PRONOUN_POSSESSIVE time in guided instruction`,
      `had little regard for conventional methods, which placed $PRONOUN_OBJECT at odds with typical modes of advancement`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `stood out as a dedicated student of politics and heraldry, and earned respect throughout $PRONOUN_POSSESSIVE studies`,
      `took quickly to the work of influence in social circles and found tangible rewards in $PRONOUN_POSSESSIVE dedicated study`,
      `embraced $PRONOUN_POSSESSIVE studies in influence with dedication and passion, greatly impressing $PRONOUN_POSSESSIVE mentors in $PRONOUN_POSSESSIVE time`,
      `showed drive and ingenuity in $PRONOUN_POSSESSIVE circles of political and social influence while studying`
    ],
    'Three Equal Numbers': [ // highly regarded
      `gained wide notoriety among $PRONOUN_POSSESSIVE peers at various levels of social prominence during $PRONOUN_POSSESSIVE time`,
      `became highly regarded as a socialite of some renown, and found that $PRONOUN_POSSESSIVE particular methods afforded $PRONOUN_OBJECT acclaim`,
      `found celebrity and respect with $PRONOUN_POSSESSIVE peers in notable social circles during $PRONOUN_POSSESSIVE extensive practice`,
      `developed a noteworthy network of social influence and political experience during the course of $PRONOUN_POSSESSIVE practice`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `excelled in many centers of public prestige, and fashioned an elaborate and interdependent network of influence during $PRONOUN_POSSESSIVE time`,
      `surpassed $PRONOUN_POSSESSIVE peers through the use of exceptional methods of influence over the course of $PRONOUN_POSSESSIVE studies`,
      `demonstrated exceptional prowess in the realms of social intrigue and political influence in $PRONOUN_POSSESSIVE study`,
      `built a towering network of social informants and specialists during $PRONOUN_POSSESSIVE successful apprenticeship`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `created unrivaled methods of social influence and demonstrated a prodigious facility for political success while practicing`,
      `stood out as an unparalleled expert in the field of influence during $PRONOUN_POSSESSIVE time studying`,
      `amazed $PRONOUN_POSSESSIVE peers, mentors, and influencers in elite circles for $PRONOUN_POSSESSIVE poise and poignancy in $PRONOUN_POSSESSIVE practice`,
      `established unrivaled methods of convention-setting influence in $PRONOUN_POSSESSIVE practice`
    ]
  },

  'Lore': {
    'All Numbers Distinct': [ // lack of motivation
      `found little interest in the lore of the Empire and drew little inspiration from available sources in $PRONOUN_POSSESSIVE time`,
      `failed to see any lasting importance in the conventional tomes and archives of $PRONOUN_POSSESSIVE field, and were secluded in $PRONOUN_POSSESSIVE studies`,
      `never learned more than the basic histories and contexts of Thelean lore, finding a lack of motivation to perform deeper research while studying`,
      `had little support and few resources when undertaking $PRONOUN_POSSESSIVE studies in lore, which impacted $PRONOUN_POSSESSIVE experiences and opportunities`
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `was drawn toward the banished and heretical texts of Thelean lore, which adversely marked $PRONOUN_POSSESSIVE research and studies`,
      `was known to have disregarded the warnings of Thelean scholars concerning the taboos of altering sacred tomes, which ostracized $PRONOUN_OBJECT`,
      `became partial to all manner of unofficial texts in $PRONOUN_POSSESSIVE research, and was held in disdain by $PRONOUN_POSSESSIVE peers during $PRONOUN_POSSESSIVE studies`,
      `developed a reputation for disrespecting the validity of the work of $PRONOUN_POSSESSIVE elders, which besmirched $PRONOUN_POSSESSIVE reputation`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `showed drive and dedication in the research of Thelean lore and found a remarkable facility for accessing tomes and scrolls in $PRONOUN_POSSESSIVE time`,
      `earned respect for $PRONOUN_POSSESSIVE novel interpretations of Thelean texts and excelled in $PRONOUN_POSSESSIVE studies`,
      `demonstrated a keen understanding and awareness of the tomes and scrolls of the Empire during $PRONOUN_POSSESSIVE time studying`,
      `excelled in reading and accessing the narratives and texts which contain the Empire's vast stores of knowledge, and was devoted to $PRONOUN_POSSESSIVE studies`      
    ],
    'Three Equal Numbers': [ // highly regarded
      `stood out among $PRONOUN_POSSESSIVE colleagues through $PRONOUN_POSSESSIVE wisdom and distinction during the course of $PRONOUN_POSSESSIVE studies`,
      `was regarded with esteem among the scholarly halls of $PRONOUN_POSSESSIVE order throughout the duration of $PRONOUN_POSSESSIVE extensive studies`,
      `cultivated a dedicated practice of time-honored lore, and became highly recognized among $PRONOUN_POSSESSIVE colleagues while studying`,
      `established $PRONOUN_SELF as an honored loremaster with extensive practice and knowledge from a wide array of sources while studying`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `distinguished $PRONOUN_SELF as a highly respected loremaster among $PRONOUN_POSSESSIVE colleagues, and demonstrated exceptional knowledge in $PRONOUN_POSSESSIVE studies`,
      `established a reputation for having a deeply respected approach to Thelean lore and maintained a collection of favored texts during $PRONOUN_POSSESSIVE studies`,
      `marked $PRONOUN_POSSESSIVE time studying lore with incredible distinction, and developed a lifelong connection to recorded knowledge in $PRONOUN_POSSESSIVE time`,
      `became highly regarded in $PRONOUN_POSSESSIVE field and deeply respected by $PRONOUN_POSSESSIVE colleagues during $PRONOUN_POSSESSIVE studies`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `outshined $PRONOUN_POSSESSIVE tutors and colleagues with an unrivaled command of Thelean literature during $PRONOUN_POSSESSIVE studies`,
      `made a name for $PRONOUN_SELF as a loremaster without equal, and $PRONOUN_SUBJECT earned renown through careful research during $PRONOUN_POSSESSIVE studies`,
      `surpassed even the most celebrated mentors in $PRONOUN_POSSESSIVE order, and developed a highly respected practice in $PRONOUN_POSSESSIVE study`,
      `astonished the scholarly world with $PRONOUN_POSSESSIVE extensive knowledge and understanding of Thelean lore during $PRONOUN_POSSESSIVE time studying`
    ]
  },

  'Manipulation': {
    'All Numbers Distinct': [ // lack of motivation
      `showed a lack of initiative and drive in practicing the clandestine arts, never learning beyond the basics of $PRONOUN_POSSESSIVE discipline`,
      `found little movivation for leveraging $PRONOUN_POSSESSIVE underground connections, leading to a very elemental experience in $PRONOUN_POSSESSIVE training`,
      `was poorly equipped for working in underground circuits, which resulted in a hindrance for connecting with $PRONOUN_POSSESSIVE discipline`,
      `found $PRONOUN_POSSESSIVE discipline unsustainable in terms of actual practice, which led to chaotic implications during $PRONOUN_POSSESSIVE time`
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `spent much of $PRONOUN_POSSESSIVE training colluding with nefarious individuals and known criminals, which led to a disdainful reputation among others in $PRONOUN_POSSESSIVE discipline`,
      `experienced a costly blunder that earned $PRONOUN_OBJECT the distrust and disrespect of several influential counsels during $PRONOUN_POSSESSIVE time`,
      `found few trustworthy allies in the realms of political intrigue, and developed a scornful reptutation for the informants $PRONOUN_SUBJECT kept in $PRONOUN_POSSESSIVE time`,
      `cut many corners in the early years of $PRONOUN_POSSESSIVE apprenticeship, which pit $PRONOUN_OBJECT against many of $PRONOUN_POSSESSIVE comrades and left $PRONOUN_OBJECT with many obstacles`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `seemed to thrive in environments of political intrigue and clandestine encounters, and $PRONOUN_SUBJECT stood out as dedicated to $PRONOUN_POSSESSIVE comrades during $PRONOUN_POSSESSIVE time`,
      `showed a drive and dedication in $PRONOUN_POSSESSIVE field that set an example for many of $PRONOUN_POSSESSIVE comrades during $PRONOUN_POSSESSIVE mentorship`,
      `earned the respect of $PRONOUN_POSSESSIVE comrades in the realms of the clandestine arts for $PRONOUN_POSSESSIVE clever use of kits and leveraging of useful information during $PRONOUN_POSSESSIVE time`,
      `was a dutiful practitioner of the clandestine arts, which became respected in streetwise circles where $PRONOUN_POSSESSIVE experiences proved useful for other pupils training`
    ],
    'Three Equal Numbers': [ // highly regarded
      `became highly regarded in the realms of the clandestine arts for $PRONOUN_POSSESSIVE clever employment of kits and leveraging of information during $PRONOUN_POSSESSIVE time`,
      `benefited greatly from $PRONOUN_POSSESSIVE time training in the clandestine arts and felt as if $PRONOUN_SUBJECT were perfectly suited to represent $PRONOUN_POSSESSIVE discipline`,
      `drew the attention of elite cloaks among the clandestine arts who took $PRONOUN_OBJECT under their tutelage and offered $PRONOUN_OBJECT highly specialized training`,
      `found a strong affinity for the clandestine arts, which became a circulated topic among streetwise cloaks who followed $PRONOUN_POSSESSIVE work`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `developed an exceptional mastery in $PRONOUN_POSSESSIVE training in the clandestine arts, and stood as an example for many others in $PRONOUN_POSSESSIVE discipline`,
      `gathered a great deal more from $PRONOUN_POSSESSIVE training in the clandestine arts than most of $PRONOUN_POSSESSIVE comrades, and found $PRONOUN_SUBJECT stood out`,
      `exhibited a natural affinity for the clandestine arts, and spent just as much time honing $PRONOUN_POSSESSIVE own skills as $PRONOUN_SUBJECT did guiding $PRONOUN_POSSESSIVE comrades`,
      `chartered $PRONOUN_POSSESSIVE prominence in the clandestine arts with ease and sophistication among streetwise circles during $PRONOUN_POSSESSIVE time training`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `stunned $PRONOUN_POSSESSIVE mentors and rivals with an unrivaled mastery of the clandestine arts, and became a prominent figure within $PRONOUN_POSSESSIVE discipline`,
      `outmatched the complex intrigue that $PRONOUN_POSSESSIVE mentors had set out as a challenge, and developed an unparalleled expertise among clandestine circles in $PRONOUN_POSSESSIVE discipline`,
      `exceeded $PRONOUN_POSSESSIVE comrades and mentors in the realms of the clandestine arts, and matured into an unequaled counsel within $PRONOUN_POSSESSIVE discipline`,
      `refined unprecedented measures of intrigue within the clandestine arts, honing $PRONOUN_POSSESSIVE own skills and serving as a bastion of intelligence`
    ]
  },

  'Spellwork': {
    'All Numbers Distinct': [ // lack of motivation
      `rejected the tenets of the primordial grimoires which mandated distinct ceremonies for the joining of components, and this led $PRONOUN_OBJECT to a hurried observance`,
      `drew little guidance from $PRONOUN_POSSESSIVE advisers, and found $PRONOUN_SUBJECT had a lack of motivation for committing formulae to memory during $PRONOUN_POSSESSIVE time`,
      `became withdrawn into $PRONOUN_POSSESSIVE own studies, finding little time to practice formulae under the guidance of $PRONOUN_POSSESSIVE advisers, which led to a stifled experience`,
      `found little connection to the ceremonial spellwork formulae of $PRONOUN_POSSESSIVE advisers' practice, which resulted in a cursory experience`  
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `developed a reputation for disrupting $PRONOUN_POSSESSIVE colleagues and prying into forbidden grimoires during $PRONOUN_POSSESSIVE advancement`,
      `was held in suspicion and disdain for $PRONOUN_POSSESSIVE dark tendencies toward heretical Torlish spellwork, and found little respect in $PRONOUN_POSSESSIVE time`,
      `was shunned in $PRONOUN_POSSESSIVE adviser circles for $PRONOUN_POSSESSIVE proclivity toward working with volatile or forbidden components in $PRONOUN_POSSESSIVE time`,
      `shifted from one order to the next, never earning the lasting respect of $PRONOUN_POSSESSIVE colleagues or advisers during $PRONOUN_POSSESSIVE advancement`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `stood out as a committed member of $PRONOUN_POSSESSIVE order, learning the appropriate ceremonies and spellwork formulae that earned $PRONOUN_OBJECT respect`,
      `earned the respect of $PRONOUN_POSSESSIVE colleagues in the order through the dedicated practice and development of time-honored spellwork, which granted $PRONOUN_OBJECT successful advancement`,
      `was seen by $PRONOUN_POSSESSIVE colleagues as a dedicated member of the order, and $PRONOUN_SUBJECT became well respected in $PRONOUN_POSSESSIVE time`,
      `followed in the footsteps of many other dedicated members of $PRONOUN_POSSESSIVE order, and obtained the respect and admiration of $PRONOUN_POSSESSIVE colleagues during $PRONOUN_POSSESSIVE observance`
    ],
    'Three Equal Numbers': [ // highly regarded
      `quickly became regarded as an adviser of spellwork within $PRONOUN_POSSESSIVE order and earned a respected position in $PRONOUN_POSSESSIVE advancement`,
      `refined $PRONOUN_POSSESSIVE spellwork with meticulous precision, and advanced $PRONOUN_POSSESSIVE position in high regard during $PRONOUN_POSSESSIVE time`,
      `developed a keen facility for components and formulae, which ensured $PRONOUN_POSSESSIVE practice was highly regarded among $PRONOUN_POSSESSIVE colleagues under $PRONOUN_POSSESSIVE observance`,
      `enjoyed a respected position among $PRONOUN_POSSESSIVE advisers and colleagues, which led to the overwhelming success of $PRONOUN_POSSESSIVE practice`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `showed an exceptional awareness and expertise in spellwork, components, and formulae, one that outshined the advisers of $PRONOUN_POSSESSIVE order during $PRONOUN_POSSESSIVE advancement`,
      `surpassed the expectations of $PRONOUN_POSSESSIVE advisers by demonstrating a remarkable talent for spellwork, and earned the respect of $PRONOUN_POSSESSIVE colleagues during $PRONOUN_POSSESSIVE observance`,
      `moved to the upper echelons of $PRONOUN_POSSESSIVE order through $PRONOUN_POSSESSIVE facility for spellwork formulae, and achieved more than most do during $PRONOUN_POSSESSIVE advancement`,
      `amazed $PRONOUN_POSSESSIVE order with $PRONOUN_POSSESSIVE vast knowledge of Thelean grimoires, spells, and formulae, and earned great accomplishments in $PRONOUN_POSSESSIVE time`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `eclipsed the other members of $PRONOUN_POSSESSIVE order by achieving far more than $PRONOUN_POSSESSIVE colleagues could during $PRONOUN_POSSESSIVE advancement`,
      `invented unprecedented formulae and innovative useage of components with a variety of magics, which marked $PRONOUN_OBJECT an unrivaled expert in $PRONOUN_POSSESSIVE observance`,
      `advanced the nature of spellwork and magics within $PRONOUN_POSSESSIVE order, earning an unparalleled expertise in $PRONOUN_POSSESSIVE field during $PRONOUN_POSSESSIVE observance`,
      `developed an instinctive connection to the magics described in the ancient grimoires of $PRONOUN_POSSESSIVE order, and gained an unrivaled expertise of spellwork during $PRONOUN_POSSESSIVE advancement`
    ]
  },

  'Stewardship': {
    'All Numbers Distinct': [ // lack of motivation
      `was overworked and underappreciated in $PRONOUN_POSSESSIVE stewardship labors, which led to a lack of motivation in $PRONOUN_POSSESSIVE cultivation`,
      `gathered little or no joy from expressing $PRONOUN_POSSESSIVE labors in the field, and this resulted in a rather fruitless experience`,
      `found few opportunities as $PRONOUN_SUBJECT labored in $PRONOUN_POSSESSIVE field of expertise and had little motivation to challenge $PRONOUN_SELF`,
      `had little support and no broader community in $PRONOUN_POSSESSIVE field of expertise, and never found $PRONOUN_POSSESSIVE labors very instructive during $PRONOUN_POSSESSIVE time`
    ],
    'Sequential Numbers': [ // disrepected, held in disdain
      `became regarded with disdain during $PRONOUN_POSSESSIVE labors as a steward due to $PRONOUN_POSSESSIVE penchant for control and rationing of supplies in $PRONOUN_POSSESSIVE time`,
      `felt little to no connection with $PRONOUN_POSSESSIVE community during the labors of $PRONOUN_POSSESSIVE field, which resulted in an isolated existence during $PRONOUN_POSSESSIVE labors`,
      `showed a lack of respect and loyalty for the basic provisions under $PRONOUN_POSSESSIVE charge, and as a result became disrespected for $PRONOUN_POSSESSIVE labors`,
      `found that $PRONOUN_SUBJECT had more in common with the animals in $PRONOUN_POSSESSIVE charge than with the peoples in $PRONOUN_POSSESSIVE community, and did little else but bide $PRONOUN_POSSESSIVE time`
    ],
    'One Equaled Pair': [ // showed drive/dedication, earned respect
      `yielded great things from $PRONOUN_POSSESSIVE stewardship, and $PRONOUN_POSSESSIVE dedication earned $PRONOUN_OBJECT the respect of $PRONOUN_POSSESSIVE community during $PRONOUN_POSSESSIVE labors`,
      `gathered a great deal of knowledge and experience from $PRONOUN_POSSESSIVE time learning as a steward, and showed an impressive drive during $PRONOUN_POSSESSIVE labors`,
      `presented $PRONOUN_POSSESSIVE labors with drive and dedication, earning the respect of $PRONOUN_POSSESSIVE community and $PRONOUN_POSSESSIVE overseers in $PRONOUN_POSSESSIVE time`,
      `showed an impressive dedication to $PRONOUN_POSSESSIVE labors and $PRONOUN_POSSESSIVE community, which earned the respect of $PRONOUN_POSSESSIVE overseers during $PRONOUN_POSSESSIVE time`
    ],
    'Three Equal Numbers': [ // highly regarded
      `became highly regarded among $PRONOUN_POSSESSIVE community for $PRONOUN_POSSESSIVE impressive command of the flow and function of $PRONOUN_POSSESSIVE labors`,
      `was acknowledged with respect and praise for $PRONOUN_POSSESSIVE tireless labors and skillful expertise during $PRONOUN_POSSESSIVE labors`,
      `showed a rare talent and promise through the labors of $PRONOUN_POSSESSIVE community, demonstrating an ease and awareness that earned $PRONOUN_OBJECT respect for $PRONOUN_POSSESSIVE labors`,
      `was recognized as an impressive steward within $PRONOUN_POSSESSIVE community, which opened many doors of opportunity and experience in $PRONOUN_POSSESSIVE labors`
    ],
    'Two Equaled Pairs': [ // exceptional prowess
      `manifested exceptional progress in $PRONOUN_POSSESSIVE labors as a steward, and became recognized among $PRONOUN_POSSESSIVE community for the merit of $PRONOUN_POSSESSIVE labors`,
      `showed an unparalleled expertise with the intricacies of stewardship, and found $PRONOUN_POSSESSIVE overseers would often look to $PRONOUN_OBJECT for guidance during $PRONOUN_POSSESSIVE time`,
      `gained a great deal from $PRONOUN_POSSESSIVE training in the field and found very little that $PRONOUN_SUBJECT could not handle during $PRONOUN_POSSESSIVE labors`,
      `had immense support and many resources during $PRONOUN_POSSESSIVE stewardship in the field, which led to many benefits and opportunities`
    ],
    'All Equal Numbers': [ // unrivaled expertise
      `found no equal during $PRONOUN_POSSESSIVE labors in the field, and gained the respect and admiration of $PRONOUN_POSSESSIVE community and $PRONOUN_POSSESSIVE overseers during $PRONOUN_POSSESSIVE time`,
      `demonstrated an unrivaled expertise in $PRONOUN_POSSESSIVE field of stewardship, which opened many doors for $PRONOUN_OBJECT to excel`,
      `displayed peerless expertise in $PRONOUN_POSSESSIVE field of stewardship, and earned the adoration of $PRONOUN_POSSESSIVE community for $PRONOUN_POSSESSIVE meticulous labors`,
      `felt a profound connection to $PRONOUN_POSSESSIVE field of stewardship and developed an exceptional expertise during $PRONOUN_POSSESSIVE labors`
    ]
  }

}