module.exports = class Author extends ModelAndRoutes {

  static get schema(){
    return {
      name: String,
      description: String,
      books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
      }]
    }
  }

}
