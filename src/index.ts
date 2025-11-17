import app from './app';
import connectDB from './config/db';
import env from './config/env';
import AuthService from './modules/auth/auth.service';

const startServer = async () => {
  try {
    await connectDB(env.mongoURI);

    
    await AuthService.createDefaultAdmin();

    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
