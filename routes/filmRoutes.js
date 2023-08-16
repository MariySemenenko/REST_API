//Cannot GET /api/v1/film   this link is in browsers(http://localhost:5000/api/v1/film)
const filmsRoutes = require("express").Router();

const filmCtrl = require("../controllers/Film");

//add film (post) http://localhost:5000/api/v1/film
filmsRoutes.post(
  "/film",
  (req, res, next) => {
    console.log("joi");
    next();
  },
  filmCtrl.add
); 

//get all (get) http://localhost:5000/api/v1/film
filmsRoutes.get("/film", filmCtrl.getAll); 

//get one id (get) http://localhost:5000/api/v1/film/64dbc4fcb7639fc259823310
filmsRoutes.get("/film/:id", filmCtrl.getById); 

//update one
filmsRoutes.put("/film/:id", filmCtrl.update); //http://localhost:5000/api/v1/film/100

//delete one
filmsRoutes.delete("/film/:id", filmCtrl.remove); //http://localhost:5000/api/v1/film/100

module.exports = filmsRoutes;
