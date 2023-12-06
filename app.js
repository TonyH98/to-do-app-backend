
const express = require('express')

require("dotenv").config()

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req , res) => {
    res.send("Welcome to the to do app")
})

const todos = require("./controller/todosController")

app.use("/todos", todos)


module.exports = app