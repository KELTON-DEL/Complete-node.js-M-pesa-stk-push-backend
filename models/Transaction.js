const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    receiptNumber: {
        type: String
    }

}, { timestamps: true });

const Transaction = mongoose.model(
    'Transaction',
    transactionSchema
);

module.exports = Transaction;