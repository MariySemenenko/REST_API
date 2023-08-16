const FilmsModal = require("../models/filmsModal");
const asyncHandler = require("express-async-handler"); //librery for try catch


class Films {
  add = asyncHandler(async (req, res) => {
    const { title, year } = req.body;
    if (!title || !year) {
      res.status(404);
      throw new Error("Provide all films!");
    }
    //save base
    const film = await FilmsModal.create({
      ...req.body,
    });
    res.status(201).json({ code: 201, data: film });
  });

  getAll = asyncHandler(async (req, res) => {
    
    const allFilms = await FilmsModal.find({});
    res.status(200).json({ code: 200, data: allFilms, qty: allFilms.length });
  });

  getById = asyncHandler(async (req, res) => {
    const films = await FilmsModal.findById(req.params.id);
    res.status(200).json({ code: 200, data: films });
  });

  update = (req, res) => {
    res.send("update");
  };

  remove = (req, res) => {
    res.send("remove");
  };
}

module.exports = new Films();
