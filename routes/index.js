var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Joel F Murphy',
    headshot: './images/headshot.png'
  });
});

module.exports = router;
