/**
 * Created by Tarun on 8/17/2016.
 */
var express = require('express');
var app = express();
var router = require('./routes/routes');
var fruits = require('./routes/fruits');

app.use('/', router);
app.use('/fruits', fruits);

app.get('*', function (req, res) {
    res.statusCode = 404;
    res.end("This page does not exist!!");
});

var port = 3000;
app.listen(port, function () {
    console.log("Server running on port 3000...");
});