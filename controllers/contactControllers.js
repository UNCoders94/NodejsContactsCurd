// @decs Get All the contacts @route GET /api/contacts @acess Public
const asyncHandler  = require('express-async-handler')
const  getContacts = (req,res)=>{
    res.status(200).json({ message : 'Get All the contacts!'})
};


const  getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({ message : `Get contact list !${req.params.id}`})
});
// @decs Create All the contacts @route  /api/contacts @acess Public

const  createContacts = asyncHandler(async(req,res)=>{
   console.log("server request " , req.body)
    const {name ,email, phone } = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All Fildes are requires !")
    }
    res.status(201).json({ message : 'Create Contacts!'})
}
);


// @decs Update  All the contacts @route  /api/contacts/:id @acess Public

const  updateContacts = asyncHandler(async(req,res)=>{
    res.status(200).json({ message : `Update contact list !${req.params.id}`})
});
// @decs Delete All the contacts @route  /api/contacts/:id  @acess Public

const  deleteContacts = asyncHandler(async(req,res)=>{
    res.status(200).json({ message : `Delete contact list !${req.params.id}`})
});






// Export Modules 
module.exports = {getContacts , createContacts , updateContacts , deleteContacts ,getContact}