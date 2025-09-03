const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/user');

router.post("/signUp",UserController.signUp)

module.exports = router;


