const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController');


// Get all the Blogs
router.get('/', eventController.getAllEvents);


module.exports = router;