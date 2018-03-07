// Boiler plate code to connect to db
// a get our mongoose models
const booksJson = require('./books.json');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb://localhost/mongo_books');
const db = mongoose.connection;
db.on('error', (e)=>{ console.error(e); });
db.once('open', ()=>{ console.info('db connected');});
const Book = require('./classes/Book.class');
const Author = require('./classes/Author.class');
let bookModel = new Book(app).myModel;
let authorModel = new Author(app).myModel;

// Get books and populate with author info
/*bookModel.find().populate('author').exec((err,books)=>{
  console.log(JSON.stringify(books,'','  '));
});*/

// Get an author and populate with book info
authorModel.find().populate('books').exec((err, authors) => {
  console.log(JSON.stringify(authors,'','  '));
  process.exit();
});







