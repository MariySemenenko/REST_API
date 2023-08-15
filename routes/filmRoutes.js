//Cannot GET /api/v1/film   this link is in browsers(http://localhost:5000/api/v1/film)
const filmsRoutes = require("express").Router();

const filmCtrl = require("../controllers/Film");

//add film
filmsRoutes.post("/film", filmCtrl.add);//http://localhost:5000/api/v1/film

//get all
filmsRoutes.get("/film", filmCtrl.getAll);//http://localhost:5000/api/v1/film

//get one id
filmsRoutes.get("/film/:id", filmCtrl.getById);//http://localhost:5000/api/v1/film/100

//update one
filmsRoutes.put("/film/:id", filmCtrl.update);//http://localhost:5000/api/v1/film/100

//delete one
filmsRoutes.delete("/film/:id", filmCtrl.remove);//http://localhost:5000/api/v1/film/100

module.exports = filmsRoutes;
