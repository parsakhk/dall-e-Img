const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')

const PORT = process.env.PORT || 5000;
const OPENAI_KEY = process.env.OPENAI_API_KEY

const app = express();

//enable body parser
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openai'))

app.listen(PORT, () => console.log('server is running'))