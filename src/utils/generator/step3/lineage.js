import { RegionsEnum } from "./regions";

export const lineage = {
  [`Ais'lun`]: [
    {
      lineage: "Farrak",
      region: RegionsEnum.NEW_SCORTH,
      languages: [`Es'ahn`],
    },
    {
      lineage: "Loriss",
      region: RegionsEnum.MAINLAND_SCHELK,
      languages: [`Lorosian`],
    },
    {
      lineage: "Ujeren",
      region: RegionsEnum.REVIAK_PROPER,
      languages: [`Uskelian`],
    },
    {
      lineage: "Weyellian",
      region: RegionsEnum.WEYELL_GROVES,
      languages: [`Thelean`],
    },
    {
      lineage: "Oran",
      region: RegionsEnum.HINN_DELTA,
      languages: [`Thelean`],
    },
    "DIASPORIC",
  ],
  [`Djenndan`]: [
    {
      lineage: `Melg'huur`,
      region: RegionsEnum.NORTH_VALADAGAL,
      languages: [`Melg'huur`],
    },
    {
      lineage: "Djenash",
      region: RegionsEnum.DJENNDAN_PROTECTORATE,
      languages: [`Alldedan`],
    },
    {
      lineage: "Gorak",
      region: RegionsEnum.CENTRAL_BOSEN,
      languages: [`Alldedan`],
    },
    {
      lineage: "Djellak",
      region: RegionsEnum.NORTHERN_WILDS,
      languages: [`Kimenian`],
    },
    {
      lineage: "Kridat",
      region: RegionsEnum.FORKLANDS,
      languages: [`Alldedan`],
    },
    "DIASPORIC",
  ],
  [`Human`]: [
    {
      lineage: `Varawak`,
      region: RegionsEnum.OMMULTIC_FRONT,
      languages: [`Ommultic`],
    },
    {
      lineage: "Sarpendii",
      region: RegionsEnum.NORTH_WENDAJII,
      languages: [`Bwantaal`],
    },
    {
      lineage: "Delonian",
      region: RegionsEnum.DELONIAN_HINN,
      languages: [`Delonian`],
    },
    {
      lineage: "Kimenian",
      region: RegionsEnum.WEYELL_NORTH,
      languages: [`Kimenian`],
    },
    {
      lineage: "Bosenite",
      region: RegionsEnum.COASTAL_BOSEN,
      languages: [`Alldedan`],
    },
    {
      lineage: "Fierlann",
      region: RegionsEnum.SIADAGAL,
      languages: [`Ardonic`],
    },
    {
      lineage: "Creonan",
      region: RegionsEnum.FORESTS_OF_CREONA,
      languages: [`Creonic`],
    },
    {
      lineage: "Reineika",
      region: RegionsEnum.PLENITH_SOUTH,
      languages: [`Taluan`],
    },
    {
      lineage: "Balendian",
      region: RegionsEnum.STORMPLAINS,
      languages: [`Uskelian`, `Elmecian`],
    },
    {
      lineage: "Islander",
      region: RegionsEnum.SCHELK_ISLANDS,
      languages: [`Lorosian`],
    },
    {
      lineage: "Woldarkin",
      region: RegionsEnum.NORTHERN_WILDS,
      languages: [`Kimenian`, `Alldedan`],
    },
    "DIASPORIC",
  ],
  [`Kahlnissá`]: [
    {
      lineage: `Kalmorian`,
      region: RegionsEnum.BROLEAN_EXPANCE,
      languages: [`Brolean`],
    },
    {
      lineage: "Grasslander",
      region: RegionsEnum.EAST_WENDAJII,
      languages: [`Bwantaal`],
    },
    {
      lineage: "Sulossi",
      region: RegionsEnum.SHIMMERING_GULF,
      languages: [`Brolean`],
    },
    {
      lineage: "Varawak",
      region: RegionsEnum.OMMULTIC_FRONT,
      languages: [`Ommultic`],
    },
    {
      lineage: "Icewalker",
      region: RegionsEnum.NORTH_WENDAJII,
      languages: [`Delonian`, `Brolean`],
    },
    "DIASPORIC",
  ],
  [`Viantu`]: [
    {
      lineage: `Almazhan`,
      region: RegionsEnum.NEW_VOLAND,
      languages: [`Volaani`],
    },
    {
      lineage: "Vitxiplalax",
      region: RegionsEnum.SOUTH_WENDAJII,
      languages: [`Volaani`],
    },
    {
      lineage: "Itherian",
      region: RegionsEnum.CLIFFS_OF_BORALIS,
      languages: [`Brolean`],
    },
    {
      lineage: "Foundfolk",
      region: RegionsEnum.NORTHERN_HINN,
      languages: [`Kimenian`],
    },
    {
      lineage: "Balendian",
      region: RegionsEnum.EASTERN_BORDERLANDS,
      languages: [`Uskelian`],
    },
    "DIASPORIC",
  ],
};

export const diasporicRegions = [
  {
    region: RegionsEnum.OMMULTIC_FRONT,
    languages: [`Ommultic`, `Kimenian`, `Brolean`],
  },
  {
    region: RegionsEnum.WENDAJII,
    languages: [`Bwantaal`, `Volaani`, `Brolean`],
  },
  {
    region: RegionsEnum.BROLEAN_EXPANCE,
    languages: [`Brolean`, `Bwantaal`, `Chenachua`],
  },
  {
    region: RegionsEnum.DELONIAN_HINN,
    languages: [`Delonian`, `Kimenian`, `Volaani`],
  },
  {
    region: RegionsEnum.NEW_SCORTH,
    languages: [`Es'ahn`, `Torlish`, `Alldedan`],
  },
  {
    region: RegionsEnum.WEYELL,
    languages: [`Thelean`, `Kimenian`, `Es'ahn`],
  },
  {
    region: RegionsEnum.VALADAGAL,
    languages: [`Melg'huur`, `Alldedan`, `Es'ahn`],
  },
  {
    region: RegionsEnum.MAINLAND_SCHELK,
    languages: [`Lorosian`, `Ardonic`, `Es'ahn`],
  },
  {
    region: RegionsEnum.NEW_VOLAND,
    languages: [`Volaani`, `Brolean`, `Bwantaal`],
  },
  {
    region: RegionsEnum.DJENNDAN_PROTECTORATE,
    languages: [`Alldedan`, `Melg'huur`, `Es'ahn`],
  },
  {
    region: RegionsEnum.COASTAL_BOSEN,
    languages: [`Elmecian`, `Creonic`, `Alldedan`],
  },
  {
    region: RegionsEnum.SIADAGAL,
    languages: [`Ardonic`, `Lorosian`, `Creonic`],
  },
  {
    region: RegionsEnum.FORESTS_OF_CREONA,
    languages: [`Creonic`, `Elmecian`, `Taluan`],
  },
  {
    region: RegionsEnum.PLENITH_SOUTH,
    languages: [`Taluan`, `Creonic`, `Es'ahn`],
  },
  {
    region: RegionsEnum.REVIAK_PROPER,
    languages: [`Uskelian`, `Elmecian`, `Volaani`],
  },
  {
    region: RegionsEnum.EASTERN_BORDERLANDS,
    languages: [`Uskelian`, `Elmecian`, `Volaani`],
  },
  {
    region: RegionsEnum.SOUTHWEST_HINN,
    languages: [`Delonian`, `Kimenian`, `Volaani`],
  },
  {
    region: RegionsEnum.SCHELK_ISLANDS,
    languages: [`Elmecian`, `Lorosian`, `Ardonic`],
  },
  {
    region: RegionsEnum.CENTRAL_BOSEN,
    languages: [`Alldedan`, `Elmecian`, `Creonic`],
  },
  {
    region: RegionsEnum.NORTHERN_WILDS,
    languages: [`Kimenian`, `Ommultic`, `Alldedan`],
  },
];
