const express = require ("express");
const errorHandler = require("./mddlewares/errorHandler.js");
const contactRouts =  require('./routes/contactRouts.js');
const app = express();
const dotenv = require ('dotenv').config();
const port = process.env.PORT || 5001;

app.use(express.json())
app.use(errorHandler)
app.use('/api/contacts',contactRouts)


app.listen(port ,()=> {
    console.log(`Server Startd port number ${port}`)
})