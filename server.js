const app = require('./app')
const mongoose = require('mongoose')
const config = require('dotenv').config({
  path: './config.env'
})
const port = process.env.PORT || 5000
const uri = process.env.DB_LOCAL

const DB = mongoose
  .connect(uri)
  .then(() => {
    console.log(`connected to DB successfully`)
  })
  .catch((err) => console.log(err))

app.listen(port, () => {
  console.log(`application has started on port: ${port}`)
})
