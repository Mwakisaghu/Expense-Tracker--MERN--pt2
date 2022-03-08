const Transaction = require('../models/Transaction');

//@desc       Get all transactions
//@routes     GET/api/v1/transactions
//access      Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      sucess: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).json({
      sucess: false,
      error: 'Server Error',
    });
  }
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
