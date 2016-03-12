/**
 * Created by tangzhiqiang on 16/3/13.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('I am books');
});

module.exports = router;