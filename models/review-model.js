const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 4
    },
    content: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Review = mongoose.model('Review', reviewSchema)

exports.reviewSchema = reviewSchema
exports.review = Review
