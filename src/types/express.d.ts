import { User } from '../db/models/user'; // Pastikan lokasinya sesuai dengan model User Anda

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
