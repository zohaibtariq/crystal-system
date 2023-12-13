const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/unique/email', auth(), userController.isEmailsUnique);
router.post('/', auth(), validate(userValidation.createUser), userController.createUser);
router.get('/', auth(), userController.getUsers);
router.get('/:userId', auth(), validate(userValidation.getUser), userController.getUser);
router.post('/:userId', auth(), validate(userValidation.updateUser), userController.updateUser);
router.delete('/:userId', auth(), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
