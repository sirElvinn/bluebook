import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDatabase } from './db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Hash password
export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

// Compare password
export async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

// Generate JWT token
export function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

// Verify JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

// Register user
export async function registerUser(email, password, name) {
  const db = getDatabase();
  
  // Check if user already exists
  const existingUser = await db.get('SELECT id FROM users WHERE email = ?', [email]);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const passwordHash = await hashPassword(password);
  
  const result = await db.run(
    'INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)',
    [email, passwordHash, name || email]
  );

  return {
    id: result.lastID,
    email,
    name: name || email
  };
}

// Login user
export async function loginUser(email, password) {
  const db = getDatabase();
  
  const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const passwordMatch = await comparePassword(password, user.password_hash);
  
  if (!passwordMatch) {
    throw new Error('Invalid email or password');
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name
  };
}

// Get user by ID
export async function getUserById(userId) {
  const db = getDatabase();
  
  const user = await db.get(
    'SELECT id, email, name, created_at FROM users WHERE id = ?',
    [userId]
  );

  return user;
}

// Middleware to verify token
export function authMiddleware(req, res, next) {
  const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const decoded = verifyToken(token);
  
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  req.userId = decoded.userId;
  next();
}
