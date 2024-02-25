import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authMiddleware from './middleware/authMiddleware';
import userRoutes from './routes/userRoute';
import postRoutes from './routes/postRoute';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger';

dotenv.config();

const app = express();

// Gunakan middleware untuk menyajikan dokumentasi Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gunakan rute yang telah didefinisikan
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', authMiddleware, postRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(
    `${process.env.APP_NAME} - Server is running on port ${process.env.APP_PORT}`
  );
});
