const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// Lấy danh sách sản phẩm
router.get('/', getProducts);

router.get('/:id', getProductById);

// Thêm sản phẩm mới (chỉ admin mới có quyền)
router.post('/', protect, admin, createProduct);

// Xóa sản phẩm (chỉ admin mới có quyền)
router.delete('/:id', protect, admin, deleteProduct);

router.put('/:id', protect, admin, updateProduct);

module.exports = router;