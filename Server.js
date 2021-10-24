const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// giup cho viec upload file cua client 
const fileUpload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(cookieParser())


// 1. get : '/'
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
})

// 2. router: '/'
app.use('/api', require('./Router/file'))
app.use('/api', require('./Router/subject'))
app.use('/api', require('./Router/year'))
app.use('/api', require('./Router/statistic'))
app.use('/api', require('./Router/admin'))


// Connect to mongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB')
})

const PORT = 4000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})





