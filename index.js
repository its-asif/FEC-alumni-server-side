const express = require('express');
require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;

// express app initialization
const app = express();
app.use(express.json());


// application routes
app.get('/', (req, res) => res.send("Its working"));
app.use('/api/users', require('./routeHandler/UserRoute'));
app.use('/api/blogs', require('./routeHandler/BlogRoute'));
app.use('/api/events', require('./routeHandler/EventRoute'));
app.use('/api/opportunities', require('./routeHandler/OpportunityRoute'));



app.listen(port, () => {
    console.log('Server started on port 3000');
}); 