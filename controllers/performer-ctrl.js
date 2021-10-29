const { Performer } = require('./../models/performer-model')

exports.show = async (req, res, next) => {
  try {
    const performers = await Performer.find()
    res.render('movies/performer', {
      performers,
      title: 'Add Performer'
    })
  } catch (err) {
    console.log(err)
  }
}

exports.new = async (req, res) => {
  try {
  } catch (err) {
    console.log(err)
  }
}
