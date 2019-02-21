var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('contact', {
    title: 'Joel F Murphy'
  });
});

module.exports = router;