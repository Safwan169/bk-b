import express from 'express';
import AuthController from './auth.controller';
import { registerValidation, loginValidation } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post('/register', registerValidation, validateRequest, AuthController.register);
router.post('/login', loginValidation, validateRequest, AuthController.login);

export default router;
