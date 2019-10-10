const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);


repository.save({
    'id' : 1,
    "name" :"test",
    'price' :6.1,
    "added_at" : '2019-01-01'
},{
    'id' : 2,
    "name" :"50 shades of yellow sunshine",
    'price' :50,
    "added_at" : '2019-01-04'
}

);

console.log(repository.getTotalCount());