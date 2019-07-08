const { Schema, model } = require('mongoose');

const blankSchema= new Schema({});

const AncestriesLib = model('AncestryLib', blankSchema, 'ancestriesLib');
const AttributesLib = model('AttributesLib', blankSchema, 'attributesLib');

const getAncestriesLib = () => {
  return getAllFromLib(AncestriesLib);
}

const getAttributesLib = () => {
  return getAllFromLib(AttributesLib);
}

const getAllFromLib = (libModel) => {
  return new Promise((resolve) => {
    libModel.find().then((docs) => {
      resolve(docs);
    })
  })
}

module.exports = {
  getAncestriesLib,
  getAttributesLib
};
