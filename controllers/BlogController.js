const Blog = require('../schema/BlogSchema');


//! Get
// Get all the blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a particular blog
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all blogs that are public and not blocked
exports.getAllPublicUnblockedBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublic: true, isBlocked: false });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//! Post
// Create a new blog
exports.createBlog = async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        subtitle: req.body.subtitle,
        blogImage: req.body.blogImage,
        authorEmail: req.body.authorEmail,
        content: req.body.content
    });

    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//! Delete
// Delete a blog
exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//! Update
// Update a blog
exports.updateBlog = async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Blog updated successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// toggle varification a blog
exports.toggleVerification = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.isVerified = !blog.isVerified;
        await blog.save();
        res.json({ message: "Blog varified successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// toggle isBlock 
exports.toggleBlock = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.isBlocked = !blog.isBlocked;
        await blog.save();
        res.json({ message: "Blog blocked successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// toggle isPublic
exports.togglePublic = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.isPublic = !blog.isPublic;
        await blog.save();
        res.json({ message: "Blog public status changed successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//! more get operations
// Get blogs by author
exports.getBlogsByAuthor = async (req, res) => {
    try {
        const blogs = await Blog.find({ authorEmail: req.params.authorEmail });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Get all blogs by author that are public and not blocked
exports.getPublicUnblockedBlogsByAuthor = async (req, res) => {
    try {
        const blogs = await Blog.find({ 
            authorEmail: req.params.authorEmail, 
            isPublic: true, 
            isBlocked: false 
        });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Search blogs by title
exports.searchBlogsByTitle = async (req, res) => {
    try {
        const blogs = await Blog.find({ title: { $regex: req.params.title, $options: 'i' } });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all the public blogs
exports.getAllPublicBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublic: true });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};