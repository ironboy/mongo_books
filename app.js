// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const ModelAndRoutes = require('./classes/model-and-routes.class');
const SessionHandler = require('./classes/session-handler.class');
const UserRouteProtector = require('./classes/user-route-protector.class');


// Make ModelAndRoutes into a global
global.ModelAndRoutes = ModelAndRoutes;

// Make mongoose, it's Schema obj and it's db connection into globals
global.mongoose = mongoose;
global.Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongo_books');
global.db = mongoose.connection;
db.on('error', (e)=>{ console.error(e); });
db.once('open', ()=>{ console.info('db connected');});

// Create an Express app
const app = express();

// Middleware
app.use(bodyParser.json()) // needed to post json
app.use(cookieParser()); // needed to read and set cookies
app.use(new SessionHandler());
app.use(new UserRouteProtector());
app.use(express.static('www'));

// Set up routes (and make the User mongoose model global)
const Book = new require('./classes/book.class')
new Book(app);
const Author = require('./classes/author.class');
new Author(app);
const User = require('./classes/user.class');
let u = new User(app);
global.User = u.myModel;
const LoginHandler = require('./classes/login-handler.class');
new LoginHandler(app);

// Start the Express app on port 3000
app.listen(3000,()=>{
  console.log("Listening on port 3000!");
});