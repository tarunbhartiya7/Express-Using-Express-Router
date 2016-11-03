/**
 * Created by Tarun on 8/17/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.end("Welcome to Fruits dashboard");
});

router.get('/examples', function (req, res) {
    res.end("Some examples of fruits are banana, apples, cherries");
});

router.get('/aboutUs', function (req, res) {
    res.end("A fruits is a part of a flowering plant. Many fruits are edible and nutritious");
});

router.get('/:id', function (req, res) {
    res.end(req.params.id + " is very nutritious food");
});

module.exports = router;
/**
 * Created by Tarun on 8/17/2016.
 */
