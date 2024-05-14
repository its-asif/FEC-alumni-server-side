const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


// Get all the users
router.get('/', userController.getAllUsers);

// POST a user
router.post('/', userController.createUser);


module.exports = router;