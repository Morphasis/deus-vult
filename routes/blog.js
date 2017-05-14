var express = require('express');
var router = express.Router();
var blog = "./views/blog"

console.log('loaded')
router.get('/', function(req, res, next) {
  res.render('blog', { title: 'Jack Sharville' });
});

module.exports = router;
