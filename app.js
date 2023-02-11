const express = require("express")
const bodyParser = require("body-parser")
const elasticsearch = require("elasticsearch")
const app = express()
app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, () => {
    console.log("connected")
})
