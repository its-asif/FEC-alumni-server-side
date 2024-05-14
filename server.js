const express = require('express');
require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;
const UserRoute = require('./routeHandler/UserRoute');

// express app initialization
const app = express();
app.use(express.json());


// application routes
app.get('/', (req, res) => res.send("Its working"));
app.use('/api/users', UserRoute);


app.listen(port, () => {
    console.log('Server started on port 3000');
}); 