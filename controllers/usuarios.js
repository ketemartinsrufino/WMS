var express          = require('express');
var router           = express.Router();
var app              = express();
var models           = require('../models');

router.get('/', function (req, res){

    res.header("Content-Type", "application/json; charset=utf-8");

    models.wmscf_users.findAll({}).then (function (user) {
        res.json(user);
    });

});
router.post('/', function (req, res){

    res.header("Content-Type", "application/json; charset=utf-8");

    models.wmscf_users.create(req.body).then (function (u) {
        res.json(u);
    });

});

module.exports = router;