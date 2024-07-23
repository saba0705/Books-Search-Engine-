const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sabahjunaid:PWgK9xeiINGiu7Wn@cluster0.vjyqz6j.mongodb.net/bookdb')

module.exports = mongoose.connection;
