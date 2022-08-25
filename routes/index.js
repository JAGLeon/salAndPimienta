var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/detalle/:id', function(req, res, next) {
  res.render('detalleMenu');
});

module.exports = router;
