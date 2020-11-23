<template>
  <div>
    <button @click="calculate">Generate Instant Character</button>
    <a v-if="isFilled" :href="url" :download="fileName"
      >Download filled sheet</a
    >
  </div>
</template>

<script>
import CharacterGenerator from "@/utils/generator/characterGenerator";
import pdfform from "../assets/pdfform";
import characterSheetURL from "../assets/pdf/character-sheet.pdf";
import axios from "axios";

export default {
  name: "InstantGeneratorButton",

  data: () => {
    return {
      character: null,
      charGen: null,
      isFilled: false,
      characterSheetURL,
      url: "",
      fileName: "",
    };
  },

  methods: {
    calculate: function () {
      const charGen = new CharacterGenerator();
      // for (let i = 0; i < 1000; i++) {
      charGen.rollAll();

      this.character = charGen.character;
      this.charGen = charGen;
      // }
      charGen.printCharacter();
      this.printCharacter();
    },

    printCharacter: function () {
      axios
        .get(characterSheetURL, { responseType: "arraybuffer" })
        .then(({ data }) => {
          const fields = pdfform().list_fields(data);
          const fieldKeys = Object.keys(fields);
          console.log(
            "mapped fields",
            JSON.stringify(fieldKeys, null, 2).replaceAll(`"`, "")
          );
          const filledForm = pdfform().transform(
            data,
            this.charGen.mapToPdfFields()
          );
          console.log("filledForm", filledForm);
          const blob = new Blob([filledForm]);
          console.log("blob", blob);
          const url = window.webkitURL.createObjectURL(blob);
          console.log("url", url);
          this.url = url;
          this.fileName = `${this.character.name}.pdf`;
          this.isFilled = true;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
