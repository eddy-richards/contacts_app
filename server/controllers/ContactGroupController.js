let responseCtrl = require('../../utils/reponseCtrl')
let dbOperations = require('../models/dbOperations')

exports.save = async (req, res) => {
  try{
    let requestBody = req.body;
    let savedGroup = await dbOperations.saveContactGroup(requestBody.contactGroup)
    responseCtrl.sendCreated(res, savedGroup)
  }catch(error){
    if(error.status = "bad_request"){
      console.log(error.details)
      responseCtrl.sendBadRequest(res, error.details ? error.details : "Provide proper data")
    }else{
      responseCtrl.sendInternalServerError(res, "Error while saving contact")
    }
  }
}

exports.updateGroupName = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContactGroup = await dbOperations.updateGroupName(requestBody.contactGroup)
    if(updatedContactGroup){
      responseCtrl.sendSuccess(res, "Contact Group Name Updated Successfully")
    }else{
      responseCtrl.sendBadRequest(res, "Not able to update Contact Group Name")
    }
  }catch(error){
    if(error.status = "bad_request"){
      console.log(error.details)
      responseCtrl.sendBadRequest(res, error.details ? error.details : "Provide proper data")
    }else{
      responseCtrl.sendInternalServerError(res, "Error while updating contact group")
    }
  }
}

exports.addGroupMembers = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContactGroup = await dbOperations.addGroupMembers(requestBody.contactGroup)
    if(updatedContactGroup){
      responseCtrl.sendSuccess(res, "added group members Successfully")
    }else{
      responseCtrl.sendBadRequest(res, "Not able to add Group Members")
    }
  }catch(error){
    if(error.status = "bad_request"){
      console.log(error.details)
      responseCtrl.sendBadRequest(res, error.details ? error.details : "Provide proper data")
    }else{
      responseCtrl.sendInternalServerError(res, "Error while adding group members")
    }
  }
}

exports.removeGroupMembers = async (req, res) => {
  try{
    let requestBody = req.body;
    let updatedContactGroup = await dbOperations.removeGroupMembers(requestBody.contactGroup)
    if(updatedContactGroup){
      responseCtrl.sendSuccess(res, "removed group members Successfully")
    }else{
      responseCtrl.sendBadRequest(res, "Not able to remove Group Members")
    }
  }catch(error){
    if(error.status = "bad_request"){
      console.log(error.details)
      responseCtrl.sendBadRequest(res, error.details ? error.details : "Provide proper data")
    }else{
      responseCtrl.sendInternalServerError(res, "Error while removing group members")
    }
  }
}

exports.listContactGroup = async (req, res) => {
  try{
    let requestBody = req.body;
    let listedContactGroup = await dbOperations.listContactGroup(requestBody)

    responseCtrl.sendSuccess(res, listedContactGroup)
  }catch(error){
    if(error.status = "bad_request"){
      console.log(error.details)
      responseCtrl.sendBadRequest(res, error.details ? error.details : "Provide proper data")
    }else{
      responseCtrl.sendInternalServerError(res, "Error while removing group members")
    }
  }
}

exports.showContactGroups = async (req, res) => {
  try{
    let requestBody = req.body;
    let detailedContactGroup = await dbOperations.showContactGroups(requestBody._id)

    if(detailedContactGroup == null){
      responseCtrl.sendNotFound(res, "Contact Group not found")
    }else{
      responseCtrl.sendSuccess(res, detailedContactGroup)
    }
  }catch(error){
    if(error.status = "bad_request"){
      console.log(error.details)
      responseCtrl.sendBadRequest(res, error.details ? error.details : "Provide proper data")
    }else{
      responseCtrl.sendInternalServerError(res, "Error while getting contact group")
    }
  }
}

exports.deleteContactGroups = async (req, res) => {
  try{
    let requestBody = req.body;
    let deletedContactGroup = await dbOperations.deleteContactGroups(requestBody)

    if(deletedContactGroup){
      responseCtrl.sendSuccess(res, "Contact Group Deleted Successfully")
    }else{
      responseCtrl.sendBadRequest(res, "Not able to delete Contact Group")
    }
  }catch(error){
    if(error.status = "bad_request"){
      console.log(error.details)
      responseCtrl.sendBadRequest(res, error.details ? error.details : "Provide proper data")
    }else{
      responseCtrl.sendInternalServerError(res, "Error while deleting contact group")
    }
  }
}