const Contact = require('./Contacts')
const mongoose = require("mongoose")

exports.saveContact = async (contact) => {
  try{
    let firstName = contact.firstName;
    let lastName = contact.lastName ? contact.lastName : "";
    let workNumbers = contact.workNumbers ? contact.workNumbers : [];
    let personalNumbers = contact.personalNumbers ? contact.personalNumbers : [];
    let workEmails = contact.workEmails ? contact.workEmails : [];
    let personalEmails = contact.personalEmails ? contact.personalEmails : [];

    if((personalNumbers.length == 0) && (workNumbers.length == 0)){
      throw {status:"bad_request", details: "Personal Number or Work Number Needed"}
    }else if(!isValidNumberArray(personalNumbers) && !isValidNumberArray(workNumbers)){
      throw {status:"bad_request", details: "Personal Number and Work Number should be a valid number "}
    }else if(!isValidEmailArray(personalEmails) && !isValidEmailArray(workEmails)){
      throw {status:"bad_request", details: "Give a valid Email"}
    }

    let newContact = new Contact();
    newContact.firstName = firstName;
    newContact.lastName = lastName;
    newContact.workNumbers = workNumbers;
    newContact.personalNumbers = personalNumbers;
    newContact.workEmails = workEmails;
    newContact.personalEmails = personalEmails;

    return await newContact.save()
  }catch(error){
    throw error
  }
}

exports.updateWholeContact = async (contact) => {
  try{
    if(checkFor_id){
      let updateObj = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        workNumbers: contact.workNumbers,
        personalNumbers: contact.personalNumbers,
        workEmails: contact.workEmails,
        personalEmails: contact.personalEmails
      }

      let updatedContact = await Contact.updateOne({_id:mongoose.Types.ObjectId(contact._id)},{$set:updateObj})
      if(updatedContact && updatedContact.ok && updatedContact.nModified){
        return true
      }
      return false
    }else{
      throw {status:"bad_request", details: "Need _id to update"}
    }
  }catch(error){
    console.log(error)
    throw error
  }
}

exports.updateContactName = async (contact) => {
  try{
    if(checkFor_id){
      let updateObj = {
        firstName: contact.firstName,
        lastName: contact.lastName
      }

      let updatedContact = await Contact.updateOne({_id:mongoose.Types.ObjectId(contact._id)},{"$set":updateObj})
      if(updatedContact && updatedContact.ok && updatedContact.nModified){
        return true
      }
      return false
    }else{
      throw {status:"bad_request", details: "Need _id to update"}
    }
  }catch(error){
    console.log(error)
    throw error
  }
}

exports.addMobileNumber = async (contact) => {
  try{
    if(checkFor_id){
      if(!isValidNumberArray(contact.personalNumbers) && !isValidNumberArray(contact.workNumbers)){
        throw {status:"bad_request", details: "Personal Number and Work Number should be a valid number "}
      }
      let updateObj = {
        personalNumbers: {
          "$each": contact.personalNumbers
        },
        workNumbers: {
          "$each": contact.workNumbers
        }
      }
      let updatedContact = await Contact.updateOne({_id:mongoose.Types.ObjectId(contact._id)},{"$addToSet":updateObj})
      if(updatedContact && updatedContact.ok && updatedContact.nModified){
        return true
      }
      return false
    }else{
      throw {status:"bad_request", details: "Need _id to update"}
    }
  }catch(error){
    console.log(error)
    throw error
  }
}

exports.addEmail = async (contact) => {
  try{
    if(checkFor_id){
      if(!isValidEmailArray(contact.personalEmails) && !isValidEmailArray(contact.workEmails)){
        throw {status:"bad_request", details: "Give a valid Email"}
      }
      let updateObj = {
        personalEmails: {
          "$each": contact.personalEmails
        },
        workEmails: {
          "$each": contact.workEmails
        }
      }
      let updatedContact = await Contact.updateOne({_id:mongoose.Types.ObjectId(contact._id)},{"$addToSet":updateObj})
      if(updatedContact && updatedContact.ok && updatedContact.nModified){
        return true
      }
      return false
    }else{
      throw {status:"bad_request", details: "Need _id to update"}
    }
  }catch(error){
    console.log(error)
    throw error
  }
}

exports.removeMobileNumber = async (contact) => {
  try{
    if(checkFor_id){
      if(!isValidNumberArray(contact.personalNumbers) && !isValidNumberArray(contact.workNumbers)){
        throw {status:"bad_request", details: "Personal Number and Work Number should be a valid number "}
      }
      let updateObj = {
        workNumbers:{
          "$in": contact.workNumbers
        },
        personalNumbers:{
          "$in": contact.personalNumbers
        }
      }
      let updatedContact = await Contact.updateOne({_id:mongoose.Types.ObjectId(contact._id)},{"$pull":updateObj})
      if(updatedContact && updatedContact.ok && updatedContact.nModified){
        return true
      }
      return false
    }else{
      throw {status:"bad_request", details: "Need _id to update"}
    }
  }catch(error){
    console.log(error)
    throw error
  }
}

exports.removeEmail = async (contact) => {
  try{
    if(checkFor_id){
      if(!isValidEmailArray(contact.personalEmails) && !isValidEmailArray(contact.workEmails)){
        throw {status:"bad_request", details: "Give a valid Email"}
      }
      let updateObj = {
        workEmails:{
          "$in": contact.workEmails
        },
        personalEmails:{
          "$in": contact.personalEmails
        }
      }
      let updatedContact = await Contact.updateOne({_id:mongoose.Types.ObjectId(contact._id)},{"$pull":updateObj})
      if(updatedContact && updatedContact.ok && updatedContact.nModified){
        return true
      }
      return false
    }else{
      throw {status:"bad_request", details: "Need _id to update"}
    }
  }catch(error){
    console.log(error)
    throw error
  }
}

exports.listContacts = async (searchObj) => {
  try{
    let findObj = {};
    let regEx = new RegExp("^"+searchObj.field, "i")
    if (isNaN(searchObj.field)) {
      if(isEmail(searchObj.field)){
        findObj = {
          $or: [{
            workEmails: {
              $in: [regEx]
            }
          }, {
            personalEmails: {
              $in: [regEx]
            }
          }]
        }
      }else{
        findObj = {
          firstName:regEx
        }
        console.group(findObj)
      }
    } else {
      findObj = {
        $or: [{
          workNumbers: {
            $in: [regEx]
          }
        }, {
          personalNumbers: {
            $in: [regEx]
          }
        }]
      }
    }
    return await Contact.find(findObj)
  }catch(error){
    throw error
  }
}

exports.showContact = async (contactId) => {
  try{
    return await Contact.findById(contactId)
  }catch(error){
    throw error
  }
}

exports.deleteContact = async (deleteObj) => {
  try{
    let deletedContact = await Contact.deleteOne(deleteObj)
    console.log(deletedContact)
    if(deletedContact && deletedContact.ok && deletedContact.deletedCount){
      return true
    }
    return false
  }catch(error){
    throw error
  }
}

checkFor_id = (obj) => {
  return obj._id ? true : false
}

isValidNumberArray = (numArray = []) => {
  return numArray.every((num) => {
    return !isNaN(num) && num != "" && num != null && num != undefined
  })
}

isValidEmailArray = (emailArray = []) => {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailArray.every((email) => {
    return re.test(email)
  })
}

isEmail = (value) => {
  let index = value.search("@")
  return index > -1 ? true : false
}