let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Contact = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  workNumbers: [Number],
  personalNumbers: [Number],
  workEmails: [String],
  personalEmails: [String],
});

module.exports = mongoose.model('contacts', Contact);
