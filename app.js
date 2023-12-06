const express = require('express')

require("dotenv").config()

const stripeKey = process.env.STRIPE_SECRET_KEY



const stripe = require("stripe")(stripeKey)

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())


module.exports = app