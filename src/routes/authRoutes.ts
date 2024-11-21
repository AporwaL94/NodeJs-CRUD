import { Router } from 'express';
import { login, register } from '../controllers/authController';

const router = Router();

// POST login
router.post('/auth/login', login);

// POST register
router.post('/auth/register', register);

export default router;
