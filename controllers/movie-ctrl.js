const { Movie } = require('./../models/movies-model')

exports.newMovie = (req, res) => {
  res.render('movies/new', {
    title: 'Add Movie'
  })
}

exports.createMovie = async (req, res, next) => {
  try {
    req.body.nowShowing = !!req.body.nowShowing
    // req.body.cast = req.body.case.replace(/\s*, \s*/g, ',')
    // if (!req.body.cast) return next(err)
    // req.body.cast = req.body.cast.split(',')
    if (!req.body.title || !req.body.releaseYear) throw new Error('Broken')
    const movie = await new Movie(req.body)
    await movie.save()
    console.log(movie)
    res.redirect('movies/new')
  } catch (err) {
    console.log(err)
    next(err)
  }
}

exports.getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find()
    console.log(movies)
    res.render('movies/index', {
      movies,
      title: 'All Movies'
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id)
    if (!movie) return next(err)
    console.log(movie)
    res.render('movies/detail', {
      movie,
      title: 'Movie Detail'
    })
  } catch (err) {
    console.log(err)
  }
}

exports.createReview = async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id)
    movie.reviews.push(req.body)

    movie.save()
    // console.log(movie)
    res.redirect(`/movies/${movie._id}`)
  } catch (err) {
    console.log(err)
  }
}
