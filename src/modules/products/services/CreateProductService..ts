/* eslint-disable prettier/prettier */
import { IProductRequest } from '@shared/contracts/HttpProductRequest';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/Model/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class CreateProductService {

  public async execute({ name, price, quantity }: IProductRequest): Promise<Product | undefined> {

    const productRepository = getCustomRepository(ProductRepository);

    const existsProduct = await productRepository.findName(name);

    if (existsProduct) {
      throw new AppError('Product already registered.');
    }

    const product = productRepository.create({
      name,
      price,
      quantity,
    });

    await productRepository.save(product)
    
    return product

  }

}

export {CreateProductService}

