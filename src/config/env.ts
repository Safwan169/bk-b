import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  mongoURI: process.env.DATABASE_URL || '',
  jwtSecret: process.env.JWT_SECRET || 'secretkey',
};
