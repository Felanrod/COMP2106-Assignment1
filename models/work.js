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