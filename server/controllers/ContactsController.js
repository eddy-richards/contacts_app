let Contacts = require('../models/Contacts')
let responseCtrl = require('../../utils/reponseCtrl')
let dbOperations = require('../models/dbOperations')

exports.save = async (req, res) => {
  try{
    let requestBody = req.body;
    let savedContact = await dbOperations.saveContact(requestBody.contact)
    responseCtrl.sendSuccess(res, savedContact)
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.updateAll = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContact = await dbOperations.updateWholeContact(requestBody.contact)
    responseCtrl.sendSuccess(res, "Contact updated Successfully")
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.updateName = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContact = await dbOperations.updateContactName(requestBody.contact)
    responseCtrl.sendSuccess(res, "Contact updated Successfully")
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.addMobileNumber = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContact = await dbOperations.addMobileNumber(requestBody.contact)
    responseCtrl.sendSuccess(res, "Contact updated Successfully")
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.addEmail = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContact = await dbOperations.addEmail(requestBody.contact)
    responseCtrl.sendSuccess(res, "Contact updated Successfully")
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.removeMobileNumber = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContact = await dbOperations.removeMobileNumber(requestBody.contact)
    responseCtrl.sendSuccess(res, "Contact updated Successfully")
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.removeEmail = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContact = await dbOperations.removeEmail(requestBody.contact)
    responseCtrl.sendSuccess(res, "Contact updated Successfully")
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.listContacts = async (req, res) => {
  try{
    let requestBody = req.body;
    let contactList = await dbOperations.listContacts(requestBody)
    responseCtrl.sendSuccess(res, contactList)
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.showContact = async (req, res) => {
  try{
    let requestBody = req.body;
    let contactDetails = await dbOperations.showContact(requestBody._id)
    responseCtrl.sendSuccess(res, contactDetails)
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.deleteContact = async (req, res) => {
  try{
    let requestBody = req.body;
    let deletedContact = await dbOperations.deleteContact(requestBody)
    console.log(deletedContact)
    if(deletedContact){
      responseCtrl.sendSuccess(res, "Contact Deleted Successfully")
    }else{
      responseCtrl.sendBadRequest(res, "Not able to delete Contact")
    }
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}