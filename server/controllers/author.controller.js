const Author = require('../models/author.model');
module.exports ={
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.json(newAuthor);
                console.log(newAuthor)
            })
            .catch((err) =>{
                res.status(404).json(err);
                console.log("Problem in createAuthor")
            })
    },
    findAllAuthors: (req, res) =>{
        Author.find()
            .then((allAuthors) =>{
                res.json(allAuthors);
                console.log(allAuthors);
            })
            .catch((err) => {
                res.json({message: "Problem in findAll", error: err})
                console.log("Find all Authors failed!")
            })
    },
    findOneAuthor:(req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => {
                res.json(oneAuthor);
                console.log(oneAuthor);
            })
            .catch((err) => {
                res.json({message: "Problem in findOneAuthor", error: err});
                console.log("Find the Author failed!");
            })
    },
    updateAuthor: (req, res) =>{
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedAuthor)=> {
                res.json(updatedAuthor);
                console.log(updatedAuthor);
            })
            .catch((err) => {
                res.status(400).json(err);
                console.log("Problem in updateAuthor.");
            })
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((oneAuthor) => {
                res.json(oneAuthor);
                console.log(oneAuthor);
            })
            .catch((err) => {
                res.json({message: "Problem in deleteAuthor", error: err});
                console.long("Delete Author failed!");
            })
    }       
}