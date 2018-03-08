module.exports = class User extends ModelAndRoutes {

  static get schema(){
    return {
      email: String,
      password: String
    }
  }

}
