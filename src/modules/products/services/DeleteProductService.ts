/* eslint-disable prettier/prettier */
import { IIdRequest } from '@shared/contracts/IIdRequest';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class DeleteProductService {

  public async execute({ id }: IIdRequest): Promise<void> {

    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }
    await productRepository.remove(product);
  }
}

export { DeleteProductService };

