<template>
  <div>
    <button v-on:click="calculate"></button>
    <navbar/>

    <router-view/>
  
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { Step1 } from './utils/generator/step1/step1';
import { Step2 } from './utils/generator/step2/step2';

export default {
  components: {
    Navbar
  },
  mounted() {
  },
  methods: {
    calculate: function(event) {
      const s1 = new Step1();
      const s2 = new Step2();
      const initialScores = s1.generateAttributes();
      console.log('initialScores', initialScores);
      const ancestry = s2.rollAncestry();
      console.log('ancestry', ancestry);
      const adjustedScores = s2.calculateAdjustedScores(initialScores, ancestry);
      console.log('adjustedScores', adjustedScores);
      const bonusPenalties = s2.calculateBonusPenalties(adjustedScores);
      console.log('bonusPenalties', bonusPenalties);
      const sex = s2.rollSex();
      console.log('sex', sex);
    }
    // convertLibArrayToObject(libArray) {
    //   const libObject = {};
    //   libArray.forEach((libItem) => {
    //     const { libId, value } = libItem;
    //     libObject[libId] = value;
    //   });

    //   return libObject;
    // }
  }
}
</script>

<style lang="scss">

</style>
