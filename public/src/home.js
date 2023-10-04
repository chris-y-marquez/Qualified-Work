function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let results = books.filter((books) => books.borrows[0].returned === false);
  return results.length
}

function getBooksBorrowedCount(books) {
  let results = books.filter((books) => books.borrows[0].returned === false);
  return results.length
}

function getMostCommonGenres(books) {
    let result = {};
    let genre = books.forEach((book) => {
      if (result[book.genre] == null) {
        result[book.genre] = 1;
      } else {
        result[book.genre] += 1;
      }
    })
    let countArray = [];
    for (const [key, value] of Object.entries(result)) {
      countArray.push({
        'name' : key,
        'count' : value
      });
    }
    countArray.sort((a,b) => b.count - a.count);
    return countArray.slice(0, 5);
  }


function getMostPopularBooks(books) {
  //note: popularity is measured by times a book has been borrowed
  const results = [];
  books.forEach((bookObj) => {
    results.push({name: bookObj.title,
    count: bookObj.borrows.length
  });
  });
  
  results.sort((a,b) => b.count - a.count);

  return results.slice(0,5);
}


function getMostPopularAuthors(books, authors) {
  const results = [];
let booksByAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));

booksByAuthor.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId)
    results.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
  });
results.sort ((a,b) => b.count - a.count);

  return results.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
