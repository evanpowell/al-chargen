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
    name: `Akal`,
    type: `large township`,
    region: `the Djenndan Protectorate`, // match exactly with wording in step3/provincialOrigins.js
    location: `in the eastern rolling hills and forests of the Djenndan Protectorate`,
    prepositions: [
      `the large township of`
    ]
  },
  {
    name: `Asnarat`,
    type: `large city`,
    region: `the Weyell Groves`,
    location: `along the coast southeast of the Weyell Groves`,
    prepositions: [
      `the impressive port city of`,
      `the port city of`
    ]
  },
  {
    name: `Bright Reach`,
    type: `small city`,
    region: `Southwest Hinn`,
    location: `along the Balendian channel inside the peninsula of Hinn`,
  },
  {
    name: `Burunu`,
    type: `small city`,
    region: `Southwest Hinn`,
    location: `on the tropical Isle of Undan off the coast of mainland Hinn`
  },
  {
    name: `The Central Corridor`,
    type: `large township`,
    region: `the Djenndan Protectorate`,
    location: `in the large glacial valley across the center of the Djenndan Protectorate`
  },
  {
    name: `Cho Kassal`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the vast township of Deridian Standing, west of the bogs near the Central Corridor in the Djenndan Protectorate`,
    prepositions: [
      `the city of peat,`
    ]
  },
  {
    name: `Cyopolda`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the forested and rocky hills of the northern Djenndan Protectorate`
  },
  {
    name: `Dhentin`,
    type: `small city`,
    region: `Reviak Proper`,
    location: `along Reviak's flatland coasts on the mainland of the Balendian Channel`
  },
  {
    name: `Dragonsands`,
    type: `small town`,
    region: `Northern Valadagal`,
    location: `deep within the deserts and dunes of Valadagal`
  },
  {
    name: `Drynnia`,
    type: `small town`,
    region: `Delonian Hinn`,
    location: `at the edge of the stormplains on the coasts of the Delonian Gulf in Hinn`
  },
  {
    name: `Dunaajii`,
    type: `large township`,
    region: `Central Wendajii`,
    location: `at the gateway to the Eastern pass within the grasslands of Central Wendajii`
  },
  {
    name: `Durdu'un`,
    type: `small city`,
    region: `New Voland`,
    location: `among the temperate forests east of the grand mountains of New Voland`
  },
  {
    name: `Finder's Wharf`,
    type: `small city`,
    region: `coastal Bosen`,
    location: `scattered beyond the docks and tethered along the coasts of Bosen`
  },
  {
    name: `The Forklands`,
    type: `large township`,
    region: `New Scorth`,
    location: `within the borderlands between the Djenndan Protectorate, New Scorth, and Valadagal`
  },
  {
    name: `Galtiere`,
    type: `large township`,
    region: `Delonian Hinn`,
    location: `in the Delonian river gorges, where the Deloni splits in two directions`
  },
  {
    name: `Gladesh`,
    type: `large township`,
    region: `the Brolean Expanse`,
    location: `among the pristine ancient ruins at the edge of the great forests of the Brolean Expanse`
  },
  {
    name: `Heksaag`,
    type: `village`,
    region: `the Djenndan Protectorate`,
    location: `at the apex of the foothills of the Djenndan Protectorate`
  },
  {
    name: `Jelekron`,
    type: `village`,
    region: `coastal Bosen`,
    location: `adjacent to the jagged cliffs and bluffs that overlook the great reefs of coastal Bosen`
  },
  {
    name: `Kriidar`,
    type: `large city`,
    region: `Plenith South`,
    location: `in the dense rainforests between Greenlook River and the Jodhra Ocean in Plenith`
  },
  {
    name: `Lirkammer`,
    type: `small city`,
    region: `Siadagal`,
    location: `at the center of the commerce exchange in the rolling fields of Siadagal`
  },
  {
    name: `Lirrus`,
    type: `large city`,
    region: `the Brolean Expanse`,
    location: `in the foliage and flowers at the edge of the Pinerush Gates at the farthest point of the Brolean Expanse`
  },
  {
    name: `Mahrkonat`,
    type: `large city`,
    region: `central Bosen`, // I feel like we need to revisit this particular entry because it is owned by Bosen but it is on the border of Reviak
    location: `atop the rocky plateus north of the Pale Spires at the mouth of the Balendian Channel`
  },
    {
    name: `Meiartu'uv`,
    type: `village`,
    region: `New Voland`,
    location: `atop the karst topography amid the green wetlands of New Voland`
  },
  {
    name: `Minnevikaro`,
    type: `small city`,
    region: `the Weyell Groves`,
    location: `in the calm and temperate south of the Weyell Groves`
  },
  {
    name: `Pale Point`,
    type: `small town`,
    region: `Plenith South`,
    location: `at the coast of the glimmering blue waters of Plenith South`
  },
  {
    name: `Pelmora`,
    type: `small city`,
    region: `the Weyell North`,
    location: `at the edge of the Northern Pass near the treeline of the Weyell North`
  },
  {
    name: `Polek`,
    type: `large township`,
    region: `Reviak Proper`,
    location: `atop the rocky plateaus of Western Reviak`
  },
  {
    name: `Raelian`,
    type: `large city`,
    region: `the Ommultic Front`,
    location: `high among the mountains among the grand Torlish relics of the Ommultic Front`
  },
  {
    name: `Rendalenn`,
    type: `small city`,
    region: `the Djenndan Protectorate`,
    location: `in the remote regions between the mountains and Rendal's Wall in the northwest of the Djenndan Protectorate`
  },
  {
    name: `Reviak City`,
    type: `large city`,
    region: `Reviak Proper`,
    location: `in the fertile and warm towers along the plateaus of Reviak Proper`
  },
  {
    name: `Sar du Plagg`,
    type: `large city`,
    region: `the forests of Creona`,
    location: `at the water's edge of the vasts forests of southern Creona`
  },
  {
    name: `Torvv`,
    type: `large city`,
    region: `New Voland`,
    location: `stretching across the great redbark forests of central New Voland`
  },
  {
    name: `Veilin`,
    type: `small city`,
    region: `Mainland Schelk`,
    location: `in the isolated central oak forests at the heart of mainland Schelk`
  },
  {
    name: `Veragem`,
    type: `small city`,
    region: `the forests of Creona`,
    location: `nestled atop the great plateau northeast of The Rise in mainland Creona`
  },
  {
    name: `Vor'umi`,
    type: `small city`,
    region: `Northern Valadagal`,
    location: `within the lush deserts and shaded oasis of Moghul Valadagal`
  },
  {
    name: `Vordigar City`,
    type: `small city`,
    region: `New Scorth`,
    location: `far south of the forklands in the shadowed coniferous forests of New Scorth`
  },
  {
    name: `Water's Edge`,
    type: `large township`,
    region: `Southwest Hinn`,
    location: `where the Deloni flows into the great Sea of Thrennum`
  },
  {
    name: `Wirost`,
    type: `large city`,
    region: `Northern Valadagal`,
    location: `at the edge of the great desert of Valadagal where the Moghul clans remain`
  },
  {
    name: `Xiapitis`,
    type: `large township`,
    region: `Southwest Hinn`, // also, Southwest Hinn is the opposite side of the province so that region doesn't quite work, but neither does Delonian Hinn, so, maybe omit this?
    location: `in the rainy and immense greatwood forests among the viantu clanships of southern Hinn`
  },
  {
    name: `Yivihalo`,
    type: `small city`,
    region: `the islands of Schelk`,
    location: `at the heart of the Schelk islander tradeway in the Sea of Thrennum`
  },
  // I'm adding one here because the Northern Wilds are not represented with notable settlements in the rulebook
  {
    name: `Ad'tai`,
    type: `village`,
    region: `the Northern Wilds`,
    location: `far north of Weyell in the Kimenian freecamps of the Northern Wilds`
  }
  
]