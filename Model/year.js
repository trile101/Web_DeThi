const mongoose = require('mongoose')

const yearSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Year', yearSchema)