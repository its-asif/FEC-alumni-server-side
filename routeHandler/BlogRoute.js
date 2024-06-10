const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');


// Get all the blogs
router.get('/', blogController.getAllBlogs);



module.exports = router;