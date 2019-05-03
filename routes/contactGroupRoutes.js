let express = require('express')
let router = express.Router()
let ContactGroupController = require('../server/controllers/ContactGroupController')

router.post("/save", ContactGroupController.save)
router.post("/updateGroupName", ContactGroupController.updateGroupName)
router.post("/addGroupMembers", ContactGroupController.addGroupMembers)
router.post("/removeGroupMembers", ContactGroupController.removeGroupMembers)
router.post("/listContactGroup", ContactGroupController.listContactGroup)
router.post("/showContactGroups", ContactGroupController.showContactGroups)
router.post("/deleteContactGroups", ContactGroupController.deleteContactGroups)

module.exports = router