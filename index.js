const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

// Fill in your request handlers here

app.listen(port)