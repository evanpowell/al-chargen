<template>
  <div>
    <button v-on:click="calculate">Generate Instant Character</button>
  </div>
</template>

<script>
import { Step1 } from "@/utils/generator/step1/step1";
import { Step2 } from "@/utils/generator/step2/step2";
import { Step3 } from "@/utils/generator/step3/step3";

export default {
  name: "InstantGeneratorButton",

  methods: {
    calculate: function () {
      const s1 = new Step1();
      const initialScores = s1.generateAttributes();

      const s2 = new Step2();
      const ancestry = s2.rollAncestry();
      const adjustedScores = s2.calculateAdjustedScores(
        initialScores,
        ancestry
      );
      const bonusPenalties = s2.calculateBonusPenalties(adjustedScores);
      const sex = s2.rollSex();
      const appearance = s2.rollAppearance(ancestry);
      const finalAppearance = { ...appearance };
      const features = s2.rollDistinguishingFeatures();
      for (let feature of features) {
        if (!feature.modifications) continue;
        // console.log('MODIFICATION');
        for (let modification of feature.modifications) {
          const { appearanceDetail, multiplier } = modification;
          finalAppearance[appearanceDetail] = Math.floor(
            finalAppearance[appearanceDetail] * multiplier
          );
        }
      }

      const s3 = new Step3();
      const birthDate = s3.rollBirthDate();
      const province = s3.rollProvince();
      const languages = s3.rollLanguages(province, adjustedScores.int);
      const biome = s3.rollBiome(province);
      const settlement = s3.rollSettlement();
      const parentage = s3.rollParentage();
      const relations = s3.rollRelations();
      // const name = s3.rollName(languages[0], sex);

      const originsProse = s3.generateOriginsProse({
        name,
        province,
        biome,
        settlement,
      });

      const character = {
        initialScores,
        ancestry,
        adjustedScores,
        bonusPenalties,
        sex,
        appearance,
        finalAppearance,
        features,
        origins: {
          birthDate,
          province,
          languages,
          biome,
          settlement,
          name,
          parentage,
          relations,
          originsProse,
        },
      };

      console.log("-------------------------------");

      console.log(
        "character object:",
        JSON.stringify(character, null, 2).replace(/"/g, "")
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
