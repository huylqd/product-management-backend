require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

// Kết nối cơ sở dữ liệu
connectDB();

// Middleware để phân tích request body thành JSON
app.use(express.json());

// Cho phép CORS
app.use(cors());
// Đường dẫn API
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
