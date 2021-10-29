const express = require('express')
const router = express.Router()
const moviesCtrl = require('./../controllers/movie-ctrl')

// get request for a form
router.get('/new', moviesCtrl.newMovie) // this code renders the form page for creating a movie
router.route('/').post(moviesCtrl.createMovie).get(moviesCtrl.getMovies) // this code for the get request gets all the movies and displays them
router.get('/:id', moviesCtrl.getMovie)

router.post('/:id/reviews', moviesCtrl.createReview)

module.exports = router
