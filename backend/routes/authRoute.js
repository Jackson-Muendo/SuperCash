const express = require('express');
const {
  createUser,
  getAllUsers,
  loginUserCtrl,
  getUserById,
  deleteUser,
  updateUser,
  handleRefreshToken,
  logOut,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();
router.post('/register', createUser);
router.put('/update_password', authMiddleware, updatePassword);
router.post('/forgot-password-token', forgotPasswordToken);

router.post('/login', loginUserCtrl);
router.post('/admin-login', loginAdmin);
router.put('/reset-password/:token', resetPassword);
router.put('/update_user', authMiddleware, updateUser);

router.get('/all_users', getAllUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logOut);
router.get('/:id', authMiddleware, isAdmin, getUserById);
router.delete('/:id', deleteUser);

module.exports = router;
