const mongoose = require('mongoose');

const { findAncestryByLibId, getAllAncestries } = require('./queries/rulebook-queries');

mongoose.connect('mongodb://chargen-sotps-user1:123Givemeyourpants@ds341557.mlab.com:41557/chargen-sotps');

const db = mongoose.connection;

db.on('error', () => {
  console.log('connection error');
});

db.once('open', () => {
  console.log('successfully connected to db');
  findAncestryByLibId(1).then((ancestry) => {
    console.log('ancestry', ancestry);
  });
  getAllAncestries().then((docs) => {
    console.log('docs', docs);
  });
});
