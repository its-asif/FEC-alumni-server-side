const mongoose = require('mongoose');
require('dotenv').config();


// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.gf8ipgr.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`)
    .then( () => console.log("Connected to MongoDB"))
    .catch( err => console.log("Error connecting to MongoDB", err));


module.exports = mongoose;