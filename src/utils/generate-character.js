import CharacterGenerator from "./generator/characterGenerator";
import characterSheetURL from "../assets/character-sheet.pdf";
import { PDFDocument } from "pdf-lib";

export const generateCharacter = async () => {
  try {
    const charGen = new CharacterGenerator();
    charGen.rollAll();
    charGen.logToConsole();
    // const data = await fetch(characterSheetURL).then((res) =>
    //   res.arrayBuffer()
    // );
    // const fields = charGen.mapToPdfFields();
    // const pdfDoc = await PDFDocument.load(data);
    // const form = pdfDoc.getForm();
    // Object.entries(fields).forEach(([fieldName, fieldValue]) => {
    //   const valueAsString = fieldValue[0].toString();
    //   form.getTextField(fieldName).setText(valueAsString);
    // });
    // form.flatten();

    // const pdfBytes = await pdfDoc.save();
    // const blob = new Blob([pdfBytes]);
    // const pdfUrl = window.webkitURL.createObjectURL(blob);
    // const { character } = charGen;
    // return { character, pdfUrl };
  } catch (err) {
    console.error(err);
  }
};
