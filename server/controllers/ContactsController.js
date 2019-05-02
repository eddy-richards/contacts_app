let Contacts = require('../models/Contacts')
let responseCtrl = require('../../utils/reponseCtrl')

exports.save = async (req, res) => {
  try{
    let requestBody = req.body;
    
  }catch(error){
    responseCtrl.sendInternalServerError(res, "Error while saving contact")
  }
}