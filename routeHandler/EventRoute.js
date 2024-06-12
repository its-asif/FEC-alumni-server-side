const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController');


// Get all the Blogs
router.get('/', eventController.getAllEvents);

// Get a particular Blog
router.get('/:id', eventController.getEventById);

// Create a new Blog
router.post('/', eventController.createEvent);

// Delete a Blog
router.delete('/:id', eventController.deleteEvent);

// Update a Blog
router.patch('/:id', eventController.updateEvent);

// toggle varification a Blog
router.patch('/toggleVerification/:id', eventController.toggleVerification);

// Get events by date range
router.get('/date/:startDate/:endDate', eventController.getEventsByDateRange);

module.exports = router;