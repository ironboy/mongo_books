const Schema = require('mongoose').Schema;
const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Book extends ModelAndRoutes {

  static get schema(){
    return {
      author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
      },
      country: String,
      imageLink: String,
      language: String,
      link: String,
      pages: Number,
      title: String,
      year: Number
    }
  }

}