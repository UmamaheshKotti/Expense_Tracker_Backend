const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post("/register", userController.userRegisteration);
router.post('/login', userController.userLogin);
router.get('/all-users', userController.getUsers);
router.get("/getuser/:userId", userController.getUserById);
router.delete("/delete-user/:userId", userController.deleteUser);

module.exports = router;