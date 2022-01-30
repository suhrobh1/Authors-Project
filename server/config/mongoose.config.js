const mongoose = require("mongoose");


const dbName = "authorsDB"; //creating or using the database

mongoose.connect(`mongodb://localhost/${dbName}`, { // connecting to the database
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {console.log(`Connected to the ${dbName} database.`)})
    .catch((err) =>{console.log(`Problem connecting to ${dbName} database!`)})
