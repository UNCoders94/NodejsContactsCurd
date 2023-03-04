const express = require ("express");
const app = express();

const dotenv = require ('dotenv').config();

const port = process.env.PORT || 5001;

// create the Routes 
const contactRouts =  require('./routes/contactRouts.js');
app.use('/api/contacts',contactRouts)


app.listen(port ,()=> {
    console.log(`Server Startd port number ${port}`)
})