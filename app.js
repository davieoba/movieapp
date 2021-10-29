const express = require('express')
const path = require('path')

const app = express()
const movieRouter = require('./routes/movie-route')
const performerRouter = require('./routes/performer-route')

// configure the express app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

// mount middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// add css to my template :)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
  res.render('home')
})

app.use('/movies', movieRouter)
app.use('/', performerRouter)

module.exports = app
