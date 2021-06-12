import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';
import { AppError } from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  },
);

app.listen(8080, () => {
  console.log('Server running');
});
