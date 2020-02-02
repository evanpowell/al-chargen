<template>
  <div>
    <button v-on:click="calculate"></button>
    <navbar/>

    <router-view/>
  
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
// import axios from 'axios';
import { Step1 } from './utils/generator/step1/step1';
import { Step2 } from './utils/generator/step2/step2';
import { Step3 } from './utils/generator/step3/step3';

export default {
  components: {
    Navbar
  },
  mounted() {
  },
  methods: {
    calculate: function() {
      const s1 = new Step1();
      const initialScores = s1.generateAttributes();

      const s2 = new Step2();
      const ancestry = s2.rollAncestry();
      const adjustedScores = s2.calculateAdjustedScores(initialScores, ancestry);
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
          finalAppearance[appearanceDetail] = Math.floor(finalAppearance[appearanceDetail] * multiplier);
        }
      }

      const s3 = new Step3();
      const birthDate = s3.rollBirthDate();
      const province = s3.rollProvince();
      const biome = s3.rollBiome(province);
      const originsProse = s3.generateOriginsProse({ province, biome });

      // console.log('character', {
      //   initialScores,
      //   ancestry,
      //   adjustedScores,
      //   bonusPenalties,
      //   sex,
      //   appearance,
      //   features,
      //   finalAppearance,
      //   birthDate,
      //   province,
      //   biome
      // });

      console.log(originsProse);
    }
  }
}
</script>

<style lang="scss">

</style>
