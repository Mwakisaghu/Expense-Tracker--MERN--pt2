const Transaction = require('../models/Transaction');

//@desc       Get all transactions
//@routes     GET/api/v1/transactions
//access      Public
exports.getTransactions = (req, res, next) => {
  res.send('GET Transaction');
};

//@desc       Add transaction
//@routes     POST/api/v1/transactions
//access      Public
exports.addTransaction = (req, res, next) => {
  res.send('POST Transaction');
};

//@desc       Delete transaction
//@routes     DELETE/api/v1/transactions/:id
//access      Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE Transaction');
};
