const express = require("express")

const app = express()

// Routing
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/blog", (req, res) => {
  res.send("Welcome to the blog")
})

app.listen(4000, () => {
  console.log("Server is running on port 4000")
})
