const mongoose = require('mongoose')

const statisticSchema = new mongoose.Schema({
    User:{
        type: Number
    },
    download:{
        type: Number
    }
})


module.exports = mongoose.model('Statistics', statisticSchema)