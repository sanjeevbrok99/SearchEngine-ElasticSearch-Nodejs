const express = require("express")
const bodyParser = require("body-parser")
const elasticClient = require("./elastic-client");
require("express-async-errors");
const app = express()
app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, () => {
    console.log("connected")
})
app.post("/create-post", async (req, res) => {
    const result = await elasticClient.index({
      index: "posts",
      document: {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
      },
    });
  
    res.json(result);
  });