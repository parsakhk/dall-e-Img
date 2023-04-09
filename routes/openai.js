const express = require('express')
const router = express.Router();

const { generateImage } = require('../controllers/openaiController')

router.post('/generateimage', (req,res) => {
    generateImage(req,res)
})

module.exports = router