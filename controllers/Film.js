const FilmsModal = require('../models/filmsModal')

class Films {
  add = async (req, res) => {
    //save base
   const film = await FilmsModal.create({...req.body})
   res.status(201).json({code:201, data:film})
  };

  getAll = (req, res) => {
    res.send("getAll");
  };

  getById = (req, res) => {
    res.send("getById");
  };

  update = (req, res) => {
    res.send("update");
  };

  remove = (req, res) => {
    res.send("remove");
  };
}

module.exports = new Films();
