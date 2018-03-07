async function test(){

  /*let newAuthor = await Author.create({
    name: "Pia Mellanström",
    description: "Pia skriver om det ofattbara. Om mysteriet i våra liv..."
  });

  let newBook = await Book.create({
    "author": newAuthor._id,
    "country": "Sverige",
    "imageLink": "",
    "language": "Swedish",
    "link": "",
    "pages": 249,
    "title": "Mysterier i vardagen",
    "year": 2017
  });

  newAuthor.books.push(newBook._id);
  await newAuthor.save();*/

  let authors = await Author.find({
    name: /Pia/g,
    populate: 'books'
  });
  console.log(authors);

  let authors2 = await Author.find('name[$regex]=Pia&populate=books');
  console.log(authors2);

}
test();