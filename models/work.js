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

// "title": "JSON Email With Local Storage",
//     "description": "An email webpage where it grabs random data from a JSON file and stores it locally. The user can create new messages and delete messages, sending them from the "Inbox" to the "Trash". User can refresh the page and continue from where they left off with the messages in the same folders, unless they clear their local storage. Layout was created with purecss and html. Logic and functionality created with javascript.",
//     "thumbnail": "/images/comp2112_assignment1.jpg",
//     "link": "https://comp2112-joelfm.azurewebsites.net/assignment1/",
//     "schoolYear": 2