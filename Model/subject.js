const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    name:{
        type: String,
    }
})

module.exports = mongoose.model('subjects', subjectSchema)
