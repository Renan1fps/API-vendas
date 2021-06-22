/* eslint-disable prettier/prettier */
import { IIdRequest } from '@shared/contracts/IdRequest';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class ShowProductService {

  public async execute({ id }: IIdRequest): Promise<Product | undefined> {

    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if(!product){
        throw new AppError('Product not found')
    }

    return product;

  }

}

export { ShowProductService }