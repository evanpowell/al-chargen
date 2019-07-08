const mongoose = require('mongoose');

mongoose.connect('mongodb://chargen-sotps-user1:123Givemeyourpants@ds341557.mlab.com:41557/chargen-sotps');

const db = mongoose.connection;

db.on('error', () => {
  console.log('connection error');
});

db.once('open', () => {
  console.log('successfully connected to db');
});

module.exports = {
  db
};
