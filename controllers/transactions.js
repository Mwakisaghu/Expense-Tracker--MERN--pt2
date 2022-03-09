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
    return res.status(500).json({
      sucess: false,
      error: 'Server Error',
    });
  }
};

//@desc       Add transaction
//@routes     POST/api/v1/transactions
//access      Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      sucess: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        sucess: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        sucess: false,
        error: 'Server Error',
      });
    }
  }
};

//@desc       Delete transaction
//@routes     DELETE/api/v1/transactions/:id
//access      Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE Transaction');
};
