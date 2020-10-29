const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
require('dotenv/config')


mongoose.connect('DB_CONNECT', () => {
    console.log('Connected to DB!')
})

app.listen(process.env.PORT || 5000, () => console.log('Server Started Successfully!'));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/home/index.html'))
})

app.get('/posts', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/posts/index.html' ))
})






