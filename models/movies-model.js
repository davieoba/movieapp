const mongoose = require('mongoose')
const { Performer } = require('./performer-model')
const { reviewSchema } = require('./review-model')
const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A title is required']
    },
    releaseYear: {
      type: Number,
      default: function () {
        return new Date().getFullYear()
      }
    },
    mpaaRating: {
      type: String,
      enum: ['G', 'PG', 'PG-13', 'R']
    },
    cast: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Performer'
      }
    ],
    nowShowing: {
      type: Boolean,
      default: false
    },
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
)

const Movie = mongoose.model('Movie', movieSchema)

exports.MovieSchema = movieSchema
exports.Movie = Movie
