const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Tự động thêm `createdAt` và `updatedAt`
});

module.exports = mongoose.model('Product', productSchema);