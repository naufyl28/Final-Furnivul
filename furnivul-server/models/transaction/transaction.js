const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    _userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    _voucherId: {
      type: Schema.Types.ObjectId,
      ref: 'Voucher',
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;