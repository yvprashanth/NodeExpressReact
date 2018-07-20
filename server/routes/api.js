var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ message: [{ "id": "1", "name": "Honda" }, { "id": "2", "name": "BMW" }, { "id": "3", "name": "Audi" }] });
});

module.exports = router;
