const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet needs a name!"],
        minlength: [3, "Pet name must be at least 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "Pet must have a type!"],
        minlength: [3, "Type must be at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "Pet needs a description!"],
        minlength: [3, "Description must be at least 3 characters!"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
}, {timestamps: true})

const Pets = mongoose.model("Pets", PetsSchema);

module.exports = Pets;