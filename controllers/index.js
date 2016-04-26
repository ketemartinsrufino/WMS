var express = require('express');
var router  = express.Router();
var app     = express();

//mapeando os routers

router.use('/usuarios', require('./usuarios'));

module.exports = router;