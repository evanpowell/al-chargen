// EP: for each description, avoid using enter key to go to a new line, but if it wraps around naturally in the editor that's fine.
// RW: hopefully the way I organized this will work for running the code, I just wanted to keep things findable/organizable. 

export const vocations = {
// STRONGARM VOCATIONS
'Salvager': `Able to make something from seemingly nothing, the Salvager has a deep connection to the useful elements of the natural world, ingredients, recipies, and concotions.`,
'Brewer': `Hauling barrels, swinging hammers, and gathering supplies before and after the harvest, the Brewer also knows how to craft a quality beverage or two.`, 

'Warrior': `A fearsome fighter, expert in melee weaponry, armors, and combat maneuvers, striking fear into the heart of their opponents through powerful strikes and heavy weapons.`,
'Vanguard': `At the front lines, these combatants are skilled in defensive and control techniques as well as weapons and tactics, setting the tone for advancement and victory in battle.`, 

'Smith': `A prized crafter who specializes in creating armors, weapons, and personal equipment from refined metals and specialty alloys, both as functional protection and as symbols of social status.`,
'Forgemaster': `Skilled at making large and heavy, but nonetheless useful items from everyday supplies, and having the know-how to oversee and maintain equipment that will last.`,

'Stalwart': `Serves as a community or organization's muscle, setting the tone for loyalty in values such as honesty and consistency; the stalwart is well known for being able to garner cooperation from the locals.`,
'Wrangler': `A reliable representative whose presence garners the support of locals, laborers, and liveries, the wrangler is a gatherer of crowds and a source of social and communal stability.`,

'Pilgrim': `A storied traveler, an unrelenting walker and patient climber, either among the teeming cities of Thelea, or in the distant mountains where pilgrims must haul their gear.`,
'Mountaineer': `A competent climber and patient guide in rough terrain, particularly in rocky high altitude regions where conditions are harsh and points of reference are few.`, 

'Rockclimber': `A seasoned climber who knows their way around ropes and riggins, the rockclimber often uses their calm power to navigate obstacles that no one else can.`,
'Shipman': `A steady, strong hand, often on the deck of a sailing ship or near the docks, the shipman is able to expertly craft and disassemble a varity of ropes, knots, and levers.`, 

'Awakener': `With a shocking grasp, these spellworkers manipulate transference with unrivaled confrontation, which often affects their countenance and demeanor in intimidating ways.`,
'Blackguard': `Adept in the magical manipulations that would make another's skin wilt, these spellworkers dig their hands into their work, often leaving their skin and arms discolored and hard.`, 

'Stablehand': `Caretakers of the savage, the stablehand is a capable ropemender, vehicle operator, and tack specialist whose care for and handling of domesticated animals facilitates the core of travel and settlement.`,
'Chamberlain': `Caretakers of the civilized, the chamberlain is a master of procuring and maintaining the necessities in life, building sustainable stores of goods, gear, and supplies for communities and traveling parties.`,

// SURVIVALIST VOCATIONS
'Gatherer': `The gatherer makes use of the wealth of treasures found hidden across Thelea's natural landscapes, and is prized for their ability to gather useful supplies in the harshest climates.`,
'Witch': `Exploring the flora of the wilds, often spending weeks or months alone and apart from civilization as they practice their craft, the witch is a skilled alchemist unyielding to the concerns of social convention.`, 

'Bulwark': `An impenetrable force in battle, the bulwark can withstand a heavy onslaught and still hold their ground; they train extensively to increase their capacity and retain control no matter the conflict.`,
'Grappler': `Relentless and hardy, the grappler draws opponents into their grasp to immobilize and control them during combat; their tactics depend on absorbing and mitigating their opponent's attacks.`, 

'Trapper': `With a command of the surrounding landscapes, the trapper can spot the patterns of anything moving through the wilds and devise effective, inconspicuous traps to set along those paths.`,
'Prepper': `The master of conversions, the prepper can make effective use of their natural surroundings and build shelters, vehicles, and mechanisms that aid adventurers even when miles from civilization.`, 

'Beastmaster': `The beastmaster often prefers the company of animals more than most, and tends to develop effective techniques for communicating with and domesticating animal companions who aid in various tasks.`,
'Tracker': `Often seen as the insightful survivalist, the tracker is known for an unrivaled ability to follow and locate anyone moving across the landscape, regardless of the weather or climate.`,

'Cartographer': `With a keen sense of their surroundings and the fortitude to travel from mountaintop to ridge, the cartographer creates accurate maps of entire regions, helping travelers stay on course.`,
'Storyteller': `The storyteller often travels from settlement to settlement, sharing and gathering regional knowledge, history, myths, and tall tales that articulate the heart of cultural and social understanding.`, 

'Prowler': `A street-wise ruffian, the prowler can navigate the structural and social boundaries of the Empire's most populous settlements, gathering intelligence and securing power in cutthroat neighborhoods.`,
'Ranger': `A world-wise explorer, the ranger can trek across the Empire's roads and wild places in search of their goal; they are often skilled with ranged weapons, quick on their feet, and comfortable enduring the rigors of the wilds.`, 

'Druid': `A student of nature and the elements, the druid practices spellwork as an evocation of balance and an excitation of power; they often are overly protective of nature and overly condemning of the exploitations of society.`,
'Whisperer': `An elusive area of expertise, the whisperer is a spellworker full of intrigue who shape components in the natural world to create reactive phenomena, bending the elements to their will.`, 

'Steward': `An ever-loyal attendant, capable in providing for any community, from a traveling army to a flourishing farming settlement; they are considered highly skilled in a variety of areas, providing the right support at the right time.`,
'Gatekeeper': `Known for their perseverence in hearth and home, the gatekeeper will persevere to keep watch for their kin and help navigating travelers trek safely over great distances.`,

// ACROBAT VOCATIONS
'Sleeper': `The sleeper trains as an alchemist specializing in compounds and in quietly active ingredients that have a rapid and noticable effect on the body.`,
'Ritualist': `An alchemist with a penchant for flair, the ritualist works quickly with ingredients and finds a visible, often public application for their concoctions.`, 

'Duelist': `A hardy and capable combatant, the duelist thrives in close-quarters melee fights where technique and endurance join to produce an unstoppable force; the duelist never backs down from a fight.`,
'Archer': `Skilled in a litany of rapid techniques and maneuvers, the archer excels in finesse and carefully placed strikes and is often skilled with ranged weapons that require patience and endurance.`, 

'Scaffolder': `Born of balance and ingenuity, the scaffolder finds heights agreeable, and tends to use their extensive knowledge of architecture to scale or dismantle the many buildings and structures across the Empire.`,
'Weaver': `A weaver thrives in crafts that benefit motion and integration, such as machinations and mechanisms; they can apply their craft to the smallest threads or the most massive working structures of civilization.`, 

'Entertainer': `At the front of the crowd, the entertainer is often a celebrity in their own right, able to wow a crowd of attentive onlookers, or encourage them to divert their attention at the right moment.`,
'Juggler': `The juggler combines intricate displays and deft technique to accomplish a variety of tasks; traditionally, a juggler works in less public forums than an entertainer, but often calls on the same set of skills.`, 

'Chronicler': `Using captivating performance traditions in music, movement, or various techniques of rhetoric and lore, the chronicler creates effective and compelling connections to knowledge and convention in the Empire.`,
'Dancer': `Often experienced with ritual and incantations, a dancer will always have a story to accompany their every move; they have unrivaled body awareness and tend to excel in mimicry.`, 

'Scout': `With their ear always to the ground, the scout leans toward the distant roads and the wilds less traveled and finds they have skills and awareness that most others would never imagine.`,
'Ghost': `Spending their training within the unspoken realms of society, a ghost moves unseen in plain sight, mastering techniques of stealth and manipulation that allow them to achieve their goals anonymously.`, 

'Shadowdancer': `Wielders of profane and powerful magics, a shadowdancer will make a flashy, loud show of their spellwork, hoping to evoke the awe or fear of those who witness their acts.`,
'Sorcerer': `Casters of components, the sorcerer possesses volatile magics that yield rapid, effective results in wide areas, but that also provoke the superstition and garner the ire of other members of society.`, 

'Shepherd': `The shepherd is adept at managing herds of animals, and has been known to make an honorable living domesticating animals and mounts for travel and work in various settlements throughout the Empire.`,
'Farmhand': `The farmhand is adept at maintaining a thriving, sustainable site of agriculture for a community or settlement, often producing a surplus of food and supplies for both comfort and income.`,

// SEEKER VOCATIONS
'Distiller': `With the precision to seek the essence of all natural things, the distiller is known for finding the rarest ingredients and discovering their worth for the body and mind.`,
'Medicine Maker': `An alchemist who seeks to heal, the medicine maker prefers compounds, elixirs, salves, and tonics that mend injury and serve the health and well being of their communities.`, 

'Assassin': `Often working for larger interests beyond the pressing moment, an assassin is more than a killer; they exact precise and decisive actions in high-stress scenarios with only their goal or the goal of their guild in mind.`,
'Scorpion': `A scorpion is a combatant who excels in ranged weapons, precise shots, and crippling blows; they know how to meet a target with a single strike at maximum effectiveness, which makes them feared and respected.`, 

'Mechanic': `Always keen to tinker with working parts and get any broken thing working again, the mechanic is adept at repairs and valued for a highly developed awareness of machines, devices, and moving things.`,
'Jeweler': `Having the dexterity to create miniature and complex crafts, the jeweler is known for tinkering and building fine pieces of great beauty, amazing utility, and typically lucrative returns.`, 

'Diplomat': `With a keen understanding of their public, the diplomat makes a living through negotiation, dialogue, and the formulating of complex plans; they have the connections that can tip the scales of 'power.`,
'Tactician': `Adept at complex plans either on the battlefield, in games, or in fields of commerce, the tactician is valued socially for their leverage over others and their ability to develop a lasting influence.`, 

'Sleeper': `A quiet observer and careful interpreter, the sleeper builds their knowledge through focused study, often proving extremely influential behind the scenes at shaping awareness and understanding.`,
'Sage': `Immersed in the histories of the Empire, the sage has formed the knowledge and cunning necessary to use their information to understand and interpret the mysteries of the Empire, past and present.`,

'Fox': `Known for their cunning and deftness, the fox navigates the fringes of society until they find the right moment to make their move; they may be noticed for their deviousness, but they never press beyond their means.`,
'Pickpocket': `The pickpocket tends to live at the edge of their social boundaries, taking advantage of sleight of hand and intelligence to make their way; the most skilled are never noticed at all.`,

'Coldrunner': `Using a combination of devastating ranged and close-range spells, the coldrunner excels in confrontational wizardry intended to cause the most lasting harm where the uninitiated might feel their blood run cold.`,
'Sandman': `Maintaining a reverent connection to their power, the sandman tends to interperet their magic through the stories of the primordial gods, and often makes a devastating display of wielding their dark powers.`, 

'Hunter': `A guide in the wilderness and a friend to the lost, the hunter interprets their stewardship through a deep connection to the Empire's wildlife, tracking prey and taking precise shots, taking only what is needed.`,
'Forager': `A guide in the wilderness and a friend to the lost, the forager broadens their sense of stewardship through an unrivaled understanding of the natural world, gathering edibles and supplies in any environment.`,

// DEVISER VOCATIONS
'Brewmaster': `Often working with the labor of a brewer in extended projects, the brewmaster formulates and dispenses the recipes of various pleasurable and medicinal potions, and tends to be deeply interested in alchemical discovery.`,
'Apothecary': `An apothecary excels in combining ingredients from complex recipes to create deeply nuanced results; they often serve as community experts and authorities in creating and distributing powerful potions.`, 

'Strategist': `A combatant with a keen eye for strategy, the strategist's approach is known for its command of the battle plan, and often using controversial, even cruel, yet effective tactics.`,
'Viper': `Relying on careful technique and finesse, the viper is often an underestimated combatant; what they lack in physical fortitude, they always make up for in effective results, and they never hesitate to forgo honor in place of victory.`, 

'Spider': `Always angling for a mechanical edge, the spider focuses their craft expertise toward small working parts that provide a protective advantage, and have been known to build elaborate traps to keep items hidden, or keep people out.`,
'Engineer': `The engineer is the unrivaled builder who excels in crafting the machines and equipment that form civilization, a clever practitioner of complex workings and movable parts.`, 

'Savant': `Those who know the savant count themselves among the lucky; the savant has an unrivaled expertise in rallying a communal response due to their seemingly divine skills in diplomacy and their powerful community connections.`,
'Mystic': `Often using their connections to maintain an air of mystery, the mystic is a celebrated influencer whose identity is only generally known but whose effectiveness often inspires cooperation through reputation alone.`, 

'Ambassador': `Important negotiators between opposing borders and disparate cultures, an ambassador uses ritual and rhetoric to build awareness and influence over others.`,
'Oracle': `A careful attention to history and its recording makes the oracle seem to possess knowledge over the past, present, and future, which provides insight into a group's travel and adventures.`, 

'Mentalist': `With an uncanny leverage over key figures in society, the mentalist is both a strategist and manipulator whose command over others is mistrusted, but also respected.`,
'Cryptographer': `The cryptographer is known for secrets and intelligence, which makes them feared and distrusted, yet sought after all the same for their ability to decipher strange languages and obscure codes.`, 

'Battlemage': `Trained in clandestine schools that use magic as a means of war, the battlemage seeks victory through spellwork, and will often combine components and martial techniques.`,
'Wizard': `The wizard uses their magical practices to evoke the fear and allegiance of common folk; they can mercilessly destroy or willfully protect others through a seemingly relentless mythical power.`, 

'Scavenger': `Experts in complex operations and difficult procurement, the scavenger will make an important contribution in the path of any steward, in that they excel acquiring goods even in the harshes locales.`,
'Delegator': `Masters of provisions as well as inventory, trade, shipping, and supplies negotiation, the delegator often works for years perfecting the art of pragmatic support work, which often primes them to excel in travel caravans.`,

// SCHOLAR VOCATIONS
'Herbalist': `With a deep, knowledgeable relationship to all manner of flora, the herbalist studies and understands the power of ingredients that grow across the Empire, as well as how to apply those ingredients for their benefit.`,
'Healer': `A healer tracks and records the effects of plants and ingredients on various injuries and ailments, and knows how to create conventional treatments using only what can be gathered in their surroundings.`, 

'Monk': `Skilled in time honored martial arts and dedicated to isolated orders of duty and discipline, monks see combat and military endeavors as a mode of protection and a path toward peace.`,
'Cleric': `Bound to represent the temple of a primordial god or worship a lesser diety, the cleric fights to serve a higher calling, and is well versed in Yelvelak's Bestiary, that details how to defeat the creatures of the wilds.`,
'Paladin': `Charged with lifelong oaths that adhere them to specific heraldry and conduct, the paladin is a respected and highly trained warrior who cannot engage in combat unless it serves their greater mandate.`, 

'Maker': `Preserving the crafting techniques from throughout the Empire, these scholars excel in producing goods of a meaningful, as much as a useful nature; with the right materials, they can make anything useful.`,
'Tailor': `With fabrics and textiles at their disposal, the tailor can craft anything from elaborate clothes to seaworthy sails; they carry with them knowledge of heraldry and a lucrative set of skills.`, 

'Advisor': `Known as interpreters and noble guides, the advisor often makes their living guiding the powerful and authoritative members of society; their proximity to nobility keeps them living above their station.`,
'Augur': `The augur is much like the advisor in that they guide powerful members of society through interpretations, yet they often seem to predict the future far beyond the scope of noble need, setting chance into motion for future gain.`, 

'Historian': `A scholar in the truest sense, the historian keeps the secrets of the realm past and present, ensuring that the knowledge of civilization will survive far into the future.`,
'Elder': `Trained in ritual and guidance, an elder is often seen as the unnamed scholarly title of an erudite philosopher; yet the elder is often versed in ritual and incantations useful in precarious situations.`, 

'Diviner': `Unbound to any particular code or convention, the diviner uses the skills of manipulation to profound effect over individuals, discerning or inventing future possibilities that shape the actions of others.`,
'Antagonist': `This scholar revels in using information to effect personal gains, and is often known to explore complex plans and discern ways to bend their rules to achieve a desired outcome.`, 

'Evoker': `An elemental wielder of magic, the evoker tends to favor fields of hot, cold, putrid, or electrifying to maximize their magical evocations; some occassionally align their practice with a lesser diety.`,
'Thaumaturge': `A tempered wielder of magic, though none more accepted by society at large, the thaumaturge believes magic simply to be a useful tool, and thus work to study, respect, and venerate its power.`, 

'Caretaker': `Trained in preparing or preserving the dead, the caretaker sometimes remains dedicated to a silent order, but always gains a wealth of knowledge and skills centered in meditative, calm awareness.`,
'Mender': `Overseeing those in need, the mender often forms the backbone of support for society, helping people remain together in communities, especially when unforseen circumstances are dire.`,

// WATCHER VOCATIONS
'Alchemist': `The most comprehensive practitioner of natural power, the alchemist in the broadest sense tries to unify all aspects of alchemical practice under a single tradition, often representing generational conventions.`,
'Botanist': `A true appreciator of the power imbued in the natural world, the botanist pays special attention to patterns in both plant growth and in the reactions of their alembic experiments.`, 

'Militia Leader': `While skilled in numerous martial art forms, this watcher also fosters a keen understanding of conflict on the field of battle, inspiring confidence and direction during combat.`,
'Rival': `Often acting as a mirror to their attacker, the rival uses extensive combat training to follow the movements of others, knowing innately how to exploit the weakness of opponents.`, 

'Architect': `The most effective designers are the most perceptive, and these watchers have studied the greatest architectural minds in all the Empire; they are adept at turning ideas into realities.`,
'Builder': `Using their craft on large scales, the builder melds observation and construction in the most celebrated skill sets of the Empire; they set raw materials into form and understand the functional aspects of society.`, 

'Spymaster': `Using the art of espionage and an innate sense of focus, the spymaster does behind the scenes what politicians do in the public eye; they master intelligence and information gathering.`,
'Politician': `Masters of the art of façade and chicanery, the politician uses the social expectations of others and their command of information and connections to gain an advantage, whether practical or financial.`, 

'Priest': `Observers of life, ritual, and spirituality, the priest oversees important aspects of transition and transformation; they are often respected for the perceived authority they seem to evoke.`,
'Shaman': `Unlike priests, the shaman is unconcerned with the concerns of public society, instead focusing on powerful rituals that explain the essence of life transcendent of cultural expectations.`, 

'Puppeteer': `Often maintaining an elaborate network of hirelings and specialists in their employ, the puppeteer manipulates through carefully planning the actions of their network, sometimes sacrificing others for their own gain.`,
'Overseer': `With a sense of command and manipulation, the overseer uses cunning and intrigue coupled with an unrivaled observation of their surroundings, to press others into completing tasks on their behalf.`, 

'Enchanter': `Workers of magical transformations both inspiring and terrifying, the enchanter keeps their distance from the public eye, where they can perform their experiments without interruption.`,
'Artificer': `Dedicated to artifice and emergence, the artificer explores the innate power in all things and uses that knowledge to create powerful magical devices or devastating elemental eruptions.`, 

'Chef': `Valued no matter where one travels in the Empire, the chef combines all manner of foods into delicious recipes that provide joy and sustinence for communities; their skills can boost morale and earn wealth and prestige.`,
'Provisioner': `From agriculture to bookkeeping, the provisioner is the master and procurer of sustainable existence; they tend to develop skills useful to traveling groups and distant upstart communities.`,

// OPPORTUNIST VOCATIONS
'Nostrumist': `The nostrumist typically makes their living collecting ingredients for others, and practicing unsanctioned alchemy or experimenting with unqualified techniques; they often have a marginal appreciation of flora.`,
'Perfumer': `Overly concerned with superstitions and the lasting effects of various ingredients, the perfumer makes their living selling soothing remedies and sensual oils, gathered and prepared with skill, and sold with a sense of flair.`, 

'Sellsword': `Sometimes called mercenaries with a conscience, the sellsword is known to offer their protection and services to anyone who has the coin to pay; they often live by their own code, but are ostracized in the Empire.`,
'Freerider': `Skilled in various martial forms, though often without an order or discipline, the freerider makes what coin they can by serving as caravan guards, drivers, or even torturers for whoever can make the best offer.`, 

'Trader': `Often a respected profession, many traders began their craft working as crafters and repairers for enterprising merchants, learning skills of trade and negotiation along the way.`,
'Peddler': `A life of wandering or getting by on the merits of their good graces, the peddler is often a skilled crafter who knows how to make a living selling various self-made items.`, 

'Ringleader': `These opportunists are connected to important members of society, and often serve as the go-between for rogues and thieves; their practice is often chaotic, but imparts proficiency in wit and leadership.`,
'Fence': `Essential even though they are admonished for their trade, the fence offers coin for stolen goods and items, and often redistributes wealth among inequitable settlements; they master influence and often masquerade as curio traders.`, 

'Traveler': `Over the course of their journeys, the traveler gains a wealth of history, heraldry, and social awareness that becomes a lasting way of life; they rarely like to settle in one place for very long.`,
'Bard': `With a keen ability to perform incantations and sing recognizable songs, these opportunists make the coin they need to travel from town to town; they often know more than they let on.`, 

'Rogue': `Master manipulators who gained their edge through trial and error, the rogue often seems far less capable and connected than they actually are; they are shunned by society, yet seem to thrive in settlements across the Empire.`,
'Thief': `Unscrupulous and adept with their hands, the thief often uses cons and misdirection to “acquire” valuable goods or information; they make their living in the shadows of society and with the help of a trusted fence.`, 

'Conjurer': `Though they are ostracized by the Empire's insular orders of primordial magic, the conjurer practices a spoken form of ancestral spellwork that can manifest an overwhelming pool of power.`,
'Warlock': `Often undisciplined in the ways of magic, the warlock is seen as a curse on society according to some, but a powerful ally for others; in truth, they are powerful magicians only shunned by traditional practitioners of wizardry.`, 

'Acolyte': `Aligned with whatever work will suit their needs, the acolyte is a dedicated and well rounded steward who never likes to stay tied to the same job for long.`,
'Squire': `The life of a traveling steward is often one of great demand, but these opportunists work a life of service as a means to an end; they always endeavor to capitalize on opportunity.`
};
