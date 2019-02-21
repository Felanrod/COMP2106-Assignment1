var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Joel F Murphy',
    headshot: '/images/headshot.png'
  });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About Me'
  });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title: 'Contact Me'
  });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('services', {
    title: 'My Services'
  });
});

module.exports = router;
