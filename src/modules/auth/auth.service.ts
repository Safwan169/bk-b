import User, { IUser } from './auth.model';
import ApiError from '../../utils/ApiError';
import generateToken from '../../utils/generateToken';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

class AuthService {
  async register(input: RegisterInput): Promise<{ user: IUser; token: string }> {
    const existingUser = await User.findOne({ email: input.email });
    if (existingUser) {
      throw new ApiError(400, 'Email already registered');
    }

    const user = new User({ ...input, role: 'user' });
    await user.save();

    const token = generateToken(user._id.toString(), user.role);
    return { user, token };
  }

  async login(input: LoginInput): Promise<{ user: IUser; token: string }> {
    const user = await User.findOne({ email: input.email });
    if (!user) throw new ApiError(400, 'Invalid email or password');

    const isMatch = await user.comparePassword(input.password);
    if (!isMatch) throw new ApiError(400, 'Invalid email or password');

    const token = generateToken(user._id.toString(), user.role);
    return { user, token };
  }

  // Default admin creation
  async createDefaultAdmin() {
    const adminEmail = 'admin@example.com';
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const admin = new User({
        name: 'Admin',
        email: adminEmail,
        password: 'admin123', // production: change & secure this
        role: 'admin',
      });
      await admin.save();
      console.log('✅ Default admin user created');
    }
  }
}

export default new AuthService();
