const PetsController = require("../controllers/pets.controller");

module.exports = app => {
    // GET ALL
    app.get("/api/pets", PetsController.findAllPets)
    // GET ONE
    app.get("/api/pets/:_id", PetsController.findOnePet)
    // CREATE
    app.post("/api/pets/new", PetsController.createOnePet)
    // UPDATE
    app.put("/api/pets/update/:_id", PetsController.updateOnePet)
    // DELETE
    app.delete("/api/pets/delete/:_id", PetsController.deleteOnePet)
}