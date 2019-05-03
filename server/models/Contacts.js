let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Contact = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String},
  workNumbers: [String],
  personalNumbers: [String],
  workEmails: [String],
  personalEmails: [String],
  createdAt:{type: Date, default:Date.now}
});

module.exports = mongoose.model('Contacts', Contact);
