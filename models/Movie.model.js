const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const movieSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    title: String,
    director: String,
    stars: [String]
    image: String,
    // we want to reference authors inside the book model and for that we will use their IDs
    // this is telling us that in "author" property of each book object, we will have
    // saved ObjectId (id that is automatically generated by MongoDB) that belongs to one of the authors from the authors collection
    description: String,
    showtimes: [String]
  })
 
// const Author = model('Author', authorSchema);
// module.exports = Author;
module.exports = model('Movie', movieSchema);