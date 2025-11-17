import express from 'express';
import authRoutes from '../modules/auth/auth.routes';

const router = express.Router();

router.use('/auth', authRoutes);

// TODO: add other module routes here

export default router;
