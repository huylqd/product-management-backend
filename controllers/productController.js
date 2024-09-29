const Product = require('../models/productModel');

// Lấy tất cả sản phẩm
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

// Tạo mới sản phẩm
const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const product = new Product({
      name,
      price,
      description,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa sản phẩm
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
    const { name, price, description } = req.body;
  
    try {
      const product = await Product.findById(req.params.id);
  
      if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
  
        const updatedProduct = await product.save();
        res.json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
};
