const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Đăng ký người dùng mới
exports.registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Kiểm tra xem email đã tồn tại chưa
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email đã được sử dụng' });
      }
  
      // Mã hóa mật khẩu trước khi lưu vào database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Tạo người dùng mới
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'Đăng ký thành công', userId: newUser._id });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
};

// Lấy danh sách tất cả người dùng
exports.getUsers = async (req, res) => {
    try {
      const users = await User.find().select('-password'); // Loại bỏ password khi trả về
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
};

// Lấy thông tin một người dùng cụ thể
exports.getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'Người dùng không tồn tại' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
};
  
// Xóa người dùng
exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Người dùng không tồn tại' });
      }
      res.json({ message: 'Người dùng đã bị xóa' });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error });
    }
};