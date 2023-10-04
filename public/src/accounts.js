function findAccountById(accounts, id) {
  let found = accounts.find((accounts) => accounts.id === id);
  return found
}


function sortAccountsByLastName(accounts) {
  let results = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return results
  
}


function getTotalNumberOfBorrows(account, books) {
  let count = 0 
  books.forEach((book) => {
    count += book.borrows.filter((borrow) => borrow.id === account.id).length;
    });
    return count
}

  
function getBooksPossessedByAccount(account, books, authors) {
const checkedOut = books.filter((book) => {
 return book.borrows.some((borrow) => borrow.returned === false && 
 borrow.id === account.id);


});
const results = checkedOut.map((book) => {
const author = authors.find((author) => book.authorId === author.id)
return {...book, author}

});
  return results
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
