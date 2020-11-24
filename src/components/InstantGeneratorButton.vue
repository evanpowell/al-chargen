<template>
  <div class="container">
    <button class="generate-button" @click="calculate">
      Generate Instant Character
    </button>
    <div v-if="isFilled">
      <div class="details">
        <p>Your character is:</p>
        <h2>{{ character.name }},</h2>
        <h3>
          the {{ character.ancestry }}
          {{ character.vocation.toLowerCase() }} from
          {{ character.origins.provincialOrigins.region }}.
        </h3>
      </div>
      <a class="download-link" :href="url" :download="fileName"
        >Download {{ character.name }}'s Character Sheet</a
      >
    </div>
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
          const filledForm = pdfform().transform(
            data,
            this.charGen.mapToPdfFields()
          );
          const blob = new Blob([filledForm]);
          const url = window.webkitURL.createObjectURL(blob);
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
.container {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.download-link {
  text-decoration: none;
  color: white;
  padding: 1em;
  background-color: #585858;
  border-radius: 6px;

  &:hover {
    background-color: #2c2c2c;
  }
}

.generate-button {
  margin-bottom: 30px;
}

.details {
  margin-bottom: 30px;
}
</style>
