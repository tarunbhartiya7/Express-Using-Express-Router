/**
 * Created by Tarun on 8/17/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.end("Welcome to dashboard");
});

router.get('/home', function (req, res) {
    res.end("Welcome to the home page of our food app");
});

router.get('/aboutUs', function (req, res) {
    res.end("This page displays information about foods and food groups");
});

module.exports = router;
