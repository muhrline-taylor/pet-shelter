const Pets = require("../models/pets.model");

module.exports.findAllPets = (req, res) => {
    Pets.find()
        .then(allPets => res.json({Pets: allPets}))
        .catch(err => res.json({message: "Something went wrong grabbing all the pets!", error: err}))
}

module.exports.findOnePet = (req, res) => {
    Pets.findOne({_id: req.params._id})
        .then(onePet => res.json({Pets: onePet}))
        .catch(err => res.json({message: "Something went wrong grabbing the pet!", error: err}))
}

module.exports.createOnePet = (req, res) => {
    Pets.create(req.body)
        .then(addPet => res.json({Pets: addPet}))
        .catch(err => res.json({message: "Something went wrong creating the pet!", error: err}))
}

module.exports.updateOnePet = (req, res) => {
    Pets.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePet => res.json({Pets: onePet}))
        .catch(err => res.json({message: "Something went wrong updating the pet!", error: err}))
}

module.exports.deleteOnePet = (req, res) => {
    Pets.deleteOne({_id: req.params._id})
        .then(res.json({message: "Pet deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the pet!", error: err}))
}