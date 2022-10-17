var express = require('express');
var router = express.Router();
//https://tranquil-plains-63509.herokuapp.com/ sitio par probar varios dispositivos resultados en C:\Users\pmadmin\OneDrive\Documents\MernStack\request_values

//linux chrome: USER AGENT: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
//linux firefox: USER AGENT: Mozilla/5.0 (X11; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0
const replacerFunc = () => {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', useragent: req.headers['user-agent']});
  let a = JSON.stringify( req, replacerFunc());
  console.log(req);
  res.render('index', { title: 'Express', useragent: JSON.stringify(a)});
});

module.exports = router;
