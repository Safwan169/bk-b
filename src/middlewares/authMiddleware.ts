import type e = require("express");
import env from "../config/env";
import ApiError from "../utils/ApiError";


// Extend Express Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: string;
      };
    }
  }
}

interface JwtPayload {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

const protect = (req: Request, res: Response, next: e.NextFunction) => {
  let token;
  
  const authHeader = req.get('Authorization');
  
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    return next(new ApiError(401, 'Not authorized, token missing'));
  }

  try {
    const decoded = jwt.verify(token, env.jwtSecret) as JwtPayload;
    // Now properly typed without 'any'
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    return next(new ApiError(401, 'Not authorized, token invalid'));
  }
};

export default protect;