let responseCtrl = require('../../utils/reponseCtrl')
let dbOperations = require('../models/dbOperations')

exports.save = async (req, res) => {
  try{
    let requestBody = req.body;
    let savedContact = await dbOperations.saveContact(requestBody.contact)
    responseCtrl.sendCreated(res, savedContact)
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
      responseCtrl.sendInternalServerError(res, "Error while updating contact")
    }
  }
}

exports.updateContactName = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContact = await dbOperations.updateContactName(requestBody.contact)
    responseCtrl.sendSuccess(res, "Contact updated Successfully")
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while updating contact")
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
      responseCtrl.sendInternalServerError(res, "Error while adding mobileNumber to contact")
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
      responseCtrl.sendInternalServerError(res, "Error while adding Email to contact")
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
      responseCtrl.sendInternalServerError(res, "Error while removing mobileNumber to contact")
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
      responseCtrl.sendInternalServerError(res, "Error while removing email to contact")
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
      responseCtrl.sendInternalServerError(res, "Error while listing contact")
    }
  }
}

exports.showContact = async (req, res) => {
  try{
    let requestBody = req.body;
    let contactDetails = await dbOperations.showContact(requestBody._id)

    if(contactDetails == null){
      responseCtrl.sendNotFound(res, "Contact not found")
    }else{
      responseCtrl.sendSuccess(res, contactDetails)
    }
  }catch(error){
    if(error.status = "bad_request"){
      responseCtrl.sendBadRequest(res, error.details)
    }else{
      responseCtrl.sendInternalServerError(res, "Error while showing contact")
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
      responseCtrl.sendInternalServerError(res, "Error while deleting contact")
    }
  }
}