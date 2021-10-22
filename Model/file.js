const mongoose = require('mongoose')

const file = new mongoose.Schema({
    subject: {
        type: String,
        trim: true,
        require: true,
    },
    year:{
        type: String,
        trim: true,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    mimetype:{
        type: String,
        trim: true,
        require: true,
    },
    // save multiple files
    data: {
        type: Array,
        require: true,
    },
    //active
    active: {
        type: Boolean,
        require: true,
    }
})

module.exports = mongoose.model('File', file)