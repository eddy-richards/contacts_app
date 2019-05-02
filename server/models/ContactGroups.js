let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId

let ContactGroups = new Schema({
  groupName: {type: String},
  groupMembers: [{ type : ObjectId, ref: 'Contacts' }]
});

module.exports = mongoose.model('Contacts', ContactGroups);
