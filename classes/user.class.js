module.exports = class User extends ModelAndRoutes {

  static get schema(){
    return {
      email: { type: String, index: { unique: true }},
      password: String
    }
  }

}
