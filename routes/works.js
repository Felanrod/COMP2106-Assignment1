//- Works.js
//- Joel Murphy
//- https://joelfmurphy.herokuapp.com/
//- Route that sends the view to the works.pug with the works list of data from mlab.

const express = require('express');
const router = express.Router();
const Work = require('../models/work');

//GET /works
router.get('/', (req, res, next) => {
    Work.find().then(works => {
        res.render('works', {
            title: 'My Work',
            works
        });
    });
});

module.exports = router;