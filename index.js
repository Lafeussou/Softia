const express = require('express')
const path = require('path')
const database = require('./config/database')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use(cors({
  origin: 'localhost'
}))

//ROUTES
//app.use('/student', require('./routes/student'))
// app.use('/auth', require('./routes/auth'))


// console.log(process.env.DB_USER)
database.connect()

app.listen(process.env.PORT);
console.log("Listening on PORT " + process.env.PORT)

module.exports = app