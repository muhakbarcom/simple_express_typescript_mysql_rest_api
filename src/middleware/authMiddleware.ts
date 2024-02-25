import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../db/models/user';

interface DecodedToken {
  userId: string;
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Mengambil token dari header Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Token:', token);

    // Validasi keberadaan token
    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    // Verifikasi token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || ''
    ) as DecodedToken;

    // Mencari user berdasarkan ID dari token
    const user = await User.findByPk(decoded.userId);

    // Validasi keberadaan user
    if (!user) {
      throw new Error('User tidak ditemukan');
    }

    // Menambahkan data user ke objek request
    // req.user = user;

    next();
  } catch (error: any) {
    res.status(401).json({
      message: 'Autentikasi gagal',
      data: error.message,
    });
  }
};

export default authMiddleware;
