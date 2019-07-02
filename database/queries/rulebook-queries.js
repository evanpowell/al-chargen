const { Schema, model } = require('mongoose');

const ancestryLibSchema = new Schema({
  value: String,
  libId: Number
});

const AncestryLib = model('AncestryLib', ancestryLibSchema, 'ancestryLib');

const findAncestryByLibId = (id) => {
  return new Promise((resolve, reject) => {
    AncestryLib.findOne({ libId: id}, 'value', { lean: true }, (err, ancestryLibItem) => {
      if (err) {
        reject(err);
      } else {
        resolve(ancestryLibItem.value);
      }
    });
  });
}

const getAllAncestries = () => {
  return new Promise((resolve) => {
    AncestryLib.find().then((docs) => {
      resolve(docs);
    });
  });
}

module.exports = {
  findAncestryByLibId,
  getAllAncestries
};
