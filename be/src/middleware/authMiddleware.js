const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Đảm bảo đường dẫn đúng
const bcrypt = require('bcrypt');

// Hàm tạo token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Middleware để đăng ký người dùng
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

        // Tạo token
        const token = generateToken(newUser._id);

        res.status(201).json({
            message: 'Đăng ký thành công',
            userId: newUser._id,
            token,
            online: true // Trạng thái online
        });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
};

// Middleware để đăng nhập người dùng
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Tìm người dùng theo email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email không tồn tại' });
        }

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mật khẩu không đúng' });
        }

        // Tạo token
        const token = generateToken(user._id);

        res.status(200).json({
            message: 'Đăng nhập thành công',
            userId: user._id,
            token,
            online: true // Trạng thái online
        });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error });
    }
}; 