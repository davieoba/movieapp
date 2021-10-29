const mongoose = require('mongoose')

const performerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: true,
      unique: true
    },
    born: Date
  },
  {
    timestamps: true
  }
)

const Performer = mongoose.model('Performer', performerSchema)

exports.performerSchema = performerSchema
exports.Performer = Performer
