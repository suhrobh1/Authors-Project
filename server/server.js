const express = require ("express");
const cors = require("cors");
const app = express();

app.use(express.json()); //setting up middleware
app.use(express.urlencoded({extended: true}));//middleware

app.use(cors({
    origin: "http://localhost:3000" // defining the port
}))


require("./config/mongoose.config");  // importing required components
require("./routes/author.route")(app);  // importing required components


const port = 8000;

app.listen(port, () => console.log(`Connected to the port ${port}.`));
