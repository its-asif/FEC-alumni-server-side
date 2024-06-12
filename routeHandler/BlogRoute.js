const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');


//! Get
// Get all the blogs
router.get('/', blogController.getAllBlogs);

// Get a particular blog
router.get('/:id', blogController.getBlogById);

// Get all blogs that are public and not blocked
router.get('/public-unblocked', blogController.getAllPublicUnblockedBlogs);

// Get all the public blogs
router.get('/public', blogController.getAllPublicBlogs);

// Get blogs by author
router.get('/author/:authorEmail', blogController.getBlogsByAuthor);

// Get all blogs by author that are public and not blocked
router.get('/author/:authorEmail/public-unblocked', blogController.getPublicUnblockedBlogsByAuthor);

// Search blogs by title
router.get('/search/:title', blogController.searchBlogsByTitle);

//! Post
// Create a new blog
router.post('/', blogController.createBlog);

//! Delete
// Delete a blog
router.delete('/:id', blogController.deleteBlog);

//! Update
// Update a blog
router.put('/:id', blogController.updateBlog);

// toggle varification a blog
router.put('/toggle-verification/:id', blogController.toggleVerification);

// toggle isBlock
router.put('/toggle-block/:id', blogController.toggleBlock);

// toggle isPublic
router.put('/toggle-public/:id', blogController.togglePublic);

module.exports = router;