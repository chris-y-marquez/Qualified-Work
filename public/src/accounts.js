function findAccountById(accounts, id) {
  let found = accounts.find((accounts) => accounts.id === id);
  return found
}

function sortAccountsByLastName(accounts) {
  let results = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return results
  
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let results = books.filter((books) => id === books.borrowed.id);
  return results

  
    
  });
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
