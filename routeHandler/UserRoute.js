const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


// Get all the users
router.get('/', userController.getAllUsers);

// Get a user by id
router.get('/:id', userController.getUserById);

// POST a user
router.post('/', userController.createUser);

// DELETE a user
router.delete('/:id', userController.deleteUser);


module.exports = router;