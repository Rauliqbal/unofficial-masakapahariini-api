const express = require('express');
const route = require('./src/route/index');
const cors = require('cors');
const morgan = require('morgan')
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));

// Route Recipes New Version
app.use('/api/v2',route);

// Base Endpoint
route.get('/', (req, res) => {
    res.send({
        greet : 'Hello there 👋',
        message : 'visit link on bellow for documentation about masak apa hari ini 👇',
        documentation : 'https://github.com/tomorisakura/unofficial-masakapahariini-api'
    });
});

// Route API
route.get('/api', (req, res) => {
    res.send({
        method : req.method,
        message : 'Hello there 🌹',
        status : 'On Progress 🚀',
        lets_connected : {
            github : 'https://github.com/tomorisakura',
            dribbble : 'https://dribbble.com/grevimsx',
            deviantart : 'https://deviantart.com/hakureix'
        }
    });
});

// Route Error
route.get('*', (req, res) => {
    res.status(404).json({
        method : req.method,
        message : 'cant find spesific endpoint, please make sure you read a documentation',
        status : false,
        code : 401,
    });
});

const port = process.env.port || 3000;
app.listen(port, () => {
    try {
        console.log(`Running on ${port} without you 😥`);
    } catch (error) {
        throw error;
    }
});