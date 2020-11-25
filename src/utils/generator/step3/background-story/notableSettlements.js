/*

  SETTLEMENT TYPES:

  'diasporic group',
  'hamlet',
  'village',
  'small town',
  'large township',
  'small city',
  'large city',
  'nomadic group'

  ----------------------------

  'province' property must draw from the 'region' property of step3/provincialOrigins.js

  ie. province must be represented in the same way as it is on the 'Roll Settlement' chart.
  there is no 'Bosen' but there is a 'Central Bosen', no 'Hinn', but 'Delonian Hinn'.
  
  Here it will not represent exactly where the notable settlement is, but the closest matching location
  available from the 'region' of the provincial origins chart.
  
  The 'location' property of the notable settlement will then replace the 'region' that would otherwise be
  used in the character's backstory.

  For example if the only notable settlement 'X' in Wendajii was described as being located in North Wendajii,
  and the character can only roll 'Central Wendajii' as a possible region, there needs to be a way to:
  
  - link notable settlement 'X' to 'Central Wendajii' in order for it to be a possible home location of character via the generator, AND
  - replace 'Central Wendajii' with the more accurate location of notable settlement 'X' to stay true to the description of that settlement.

  Even if the region rolled matches well with the location of the notable settlement, the 'location' property can be
  used to replace the region with a more detailed description (see Heksaag below).
*/
e

export const notableSettlements = [
  {
    name: `Heksaag`,
    type: `village`,
    region: `the Djenndan Protectorate`, // match exactly with wording in step3/provincialOrigins.js
    location: `at the apex of the foothills of the Djenndan Protectorate`
  },
  {
    name: ``,
    type: ``,
    region: ``,
    location: ``
  }
]