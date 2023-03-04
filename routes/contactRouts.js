const express = require ('express');
const router = express.Router();
const {
    getContacts , 
    createContacts , 
    updateContacts , 
    deleteContacts ,
    getContact
} = require ("../controllers/contactControllers")



//Routes 
router.route("/").get(getContacts).post (createContacts);
router.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts);


module.exports = router;