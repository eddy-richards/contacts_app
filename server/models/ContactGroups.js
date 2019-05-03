let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let ContactGroups = new Schema({
  groupName: {type: String, unique: true},
  groupMembers: [{type : ObjectId, ref: 'Contacts' }],
  createdAt:{type: Date, default:Date.now}
});

module.exports = mongoose.model('ContactGroups', ContactGroups);
