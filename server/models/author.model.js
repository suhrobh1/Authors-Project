const mongoose = require("mongoose");


const AuthorSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minlength: [3, "First name must be at least 2 characters!"],
    },

    lastName:{
        type: String,
        required: [true, "Last name is required!"],
        minlength: [3, "Last name must be at least 2 characters!"],
    },

    likes:{
        type: Number,
        default: 0
    },
     works:{
        type: [String]
        }

}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author

