//- Work.js
//- Joel Murphy
//- https://joelfmurphy.herokuapp.com/
//- Contains the structure of the type of data in mlab of my previous works.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Work = new Schema({
    title: String,
    description: String,
    thumbnail: String,
    link: String,
    schoolYear: Number
})

module.exports = mongoose.model('Work', Work);