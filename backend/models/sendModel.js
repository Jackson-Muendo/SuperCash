const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  dateTime: { type: Date, default: Date.now, require: true },
  recipientAccount: { type: Number, require: true },
  tax: { type: Number, require: true },
  amount: { type: Number, require: true },
  balance: { type: Number, require: true }
});

module.exports = mongoose.model('Transaction', transactionSchema);
