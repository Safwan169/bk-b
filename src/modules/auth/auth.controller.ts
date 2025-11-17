import { Request, Response, NextFunction } from 'express';
import AuthService from './auth.service';

class AuthController {
  register = (async (req: Request, res: Response) => {
    const { user, token } = await AuthService.register(req.body);
    res.status(201).json({ success: true, user, token });
  });

  login = (async (req: Request, res: Response) => {
    const { user, token } = await AuthService.login(req.body);
    res.status(200).json({ success: true, user, token });
  });
}

export default new AuthController();
