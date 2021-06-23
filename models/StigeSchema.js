const mongoose = require('mongoose')
const schema = mongoose.Schema

const docs = new schema({
    Description: String,
    Completed: String
})

const data = mongoose.model('Tasks',docs)

module.exports = data