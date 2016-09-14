var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/links', function() {
  console.log('mongodb connected')
})
module.exports = mongoose
