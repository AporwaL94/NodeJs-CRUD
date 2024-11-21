import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authService';

export const login = async (req: Request, res: Response) => {
    try {
        const user = await loginUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const newUser = await registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};
