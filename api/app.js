var express = require('express'),
    app = express(),
    route = require('./routes'),
    bodyParser = require('body-parser');


console.log('server running...')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
});*/


app.use('/tasks', route);



// if you get here, route was incorrect
app.use((req, res, next) => {
    const error = new Error("Invalid route!")
    error.status = 404;
    next(error)
})


module.exports = app;