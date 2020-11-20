<template>
  <div>
    <button v-on:click="calculate">Generate Instant Character</button>
  </div>
</template>

<script>
import { Step1 } from "@/utils/generator/step1/step1";
import { Step2 } from "@/utils/generator/step2/step2";
import { Step3 } from "@/utils/generator/step3/step3";
import CharacterGenerator from "@/utils/generator/characterGenerator";

export default {
  name: "InstantGeneratorButton",

  methods: {
    calculate: function () {
      const charGen = new CharacterGenerator();
      charGen.rollStep1();
      charGen.rollStep2();
      charGen.rollStep3();
      console.log(JSON.stringify(charGen, null, 2).replace(/["]/g, ""));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
