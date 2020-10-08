const express = require('express');
const connectDb = require('./DB/connection')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
connectDb();

//Import routes
const loginRoute = require('./routes/users');
app.use('/users', loginRoute);

const itemsRoute = require('./routes/items');
app.use('/items', itemsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('Server working');
});


//LISTEN TO THE SERVER
app.listen(3000);