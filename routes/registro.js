var express = require('express');
var session = require('express-session');
var hash = require('pbkdf2-password')();
var router = express.Router();

// middleware
/*
app.use(express.urlencoded({ extended: false }))
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));
*/
// Session-persisted message middleware
/*
app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});
*/



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Pagina de Registro ' });
});

router.post('/registrar', function (req, res, next) {
   /*	
    req.session.regenerate(function(){
    		//req.session.user = user;
    		req.session.success = 'Ha funcionado el POST de la pagina de registro!!!<br> Con los ' 
		+ 'datos de USUARIO: ' + req.body.username + ' y PASSWORD: '
		+ req.body.password;
    	  });     
*/
//res.render('/registro',{message:'...'}
    res.send('Ha funcionado el POST de la pagina de registro!!!<br> Con los ' 
		+ 'datos de USUARIO: ' + req.body.username + ' y PASSWORD: '
		+ req.body.password);
   res.redirect('/registro');
});


module.exports = router;
