const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('/pages/home/index.html')
})

router.get('/posts', (req,res) => {
    res.sendFile('/pages/posts/index.html')
})


module.exports = router