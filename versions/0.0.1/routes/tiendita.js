var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tiendita/index',{title:'Bienvenidos a la tiendita en linea de...'});
});

module.exports = router;
