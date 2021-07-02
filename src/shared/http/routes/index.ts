/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { productsRouter } from '@modules/products/router/products.router';
import { userRoutes } from '@modules/users/routes/users.routes';

const router = Router();

router.use('/products', productsRouter)
router.use('/user', userRoutes)

export { router };
