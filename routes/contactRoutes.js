let express = require('express')
let router = express.Router()
let ContactController = require('../server/controllers/ContactsController')

router.post("/save", ContactController.save)
// router.post("/updateAll", ContactController.updateAll)
router.post("/updateContactName", ContactController.updateContactName)
router.post("/addMobileNumber", ContactController.addMobileNumber)
router.post("/addEmail", ContactController.addEmail)
router.post("/removeMobileNumber", ContactController.removeMobileNumber)
router.post("/removeEmail", ContactController.removeEmail)
router.post("/listContacts", ContactController.listContacts)
router.post("/showContact", ContactController.showContact)
router.post("/deleteContact", ContactController.deleteContact)

module.exports = router