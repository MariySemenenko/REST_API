const express = require('express');
const ContactController = require('../controllers/contact');
const router = express.Router();

router.get('/', ContactController.getAll); // 
router.post('/', ContactController.create); // 
router.get('/:id', ContactController.getById); // http://localhost:8080/api/contacts
router.put('/:id', ContactController.update); // http://localhost:8080/api/contacts
router.delete('/:id', ContactController.remove); // http://localhost:8080/api/contacts


module.exports = router;

