function findAuthorById(authors, id) {
  let result = authors.find((authors) => authors.id === id);
  return result
}

function findBookById(books, id) {
  let result = books.find((books) => books.id === id);
  return result
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((books) => books.borrows[0].returned === false);
  const returned = books.filter((books) => books.borrows[0].returned === true);
  return [checkedOut, returned]
}


function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map((book) => {
   const accountId = findAuthorById(accounts, book.id)
   accountId.returned = book.returned 
   return accountId;
  })
 .slice (0,10);
 return borrowers
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
