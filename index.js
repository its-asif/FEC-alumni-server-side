const express = require('express');
require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;
const UserRoute = require('./routeHandler/UserRoute');
const BlogRoute = require('./routeHandler/BlogRoute');
const EventRoute = require('./routeHandler/EventRoute');
const OpportunityRoute = require('./routeHandler/OpportunityRoute');

// express app initialization
const app = express();
app.use(express.json());


// application routes
app.get('/', (req, res) => res.send("Its working"));
app.use('/api/users', UserRoute);
app.use('/api/blogs', BlogRoute);
app.use('/api/events', EventRoute);
app.use('/api/opportunities', OpportunityRoute);


app.listen(port, () => {
    console.log('Server started on port 3000');
});