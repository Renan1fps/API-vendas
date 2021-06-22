/* eslint-disable prettier/prettier */
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class ListProductService {

  public async execute(): Promise<Product[]> {

    const productRepository = getCustomRepository(ProductRepository);

    const products = await productRepository.find();
    return products;
  }
}

export { ListProductService };

