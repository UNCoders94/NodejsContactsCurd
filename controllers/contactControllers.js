// @decs Get All the contacts 
// @route GET /api/contacts
// @acess Public

const  getContacts = (req,res)=>{
    res.json({ message : 'Get All the contacts!'})
};


const  getContact = (req,res)=>{
    res.json({ message : `Get contact list !${req.params.id}`})
};;
// @decs Create All the contacts 
// @route Post /api/contacts
// @acess Public
const  createContacts = (req,res)=>{
    res.json({ message : 'Create Contacts!'})
};
// @decs Update  All the contacts 
// @route GET /api/contacts
// @acess Public
const  updateContacts = (req,res)=>{
    res.json({ message : `Update contact list !${req.params.id}`})
};
// @decs Delete All the contacts 
// @route GET /api/contacts
// @acess Public
const  deleteContacts = (req,res)=>{
    res.json({ message : `Delete contact list !${req.params.id}`})
};






// Export Modules 
module.exports = {getContacts , createContacts , updateContacts , deleteContacts ,getContact}