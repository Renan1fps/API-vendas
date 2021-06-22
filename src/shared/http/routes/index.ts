/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { productsRouter } from '@modules/products/router/products.router';

const router = Router();

router.use('/products', productsRouter)

export { router };
