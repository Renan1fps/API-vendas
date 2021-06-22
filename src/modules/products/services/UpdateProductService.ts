/* eslint-disable prettier/prettier */
import { IUpdateProduct } from '@shared/contracts/IUpdateProduct';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/Model/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class UpdateProductService {

  
  public async execute({id, name, quantity, price,}: IUpdateProduct): Promise< Product > {

    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);
    if( !product){
        throw new AppError('Product not found')
    }
    const findProductByName = await productRepository.findName(name)
    if (findProductByName){
        throw new AppError ('Product already registered')
    }
    product.name = name
    product.price = price
    product.quantity = quantity

    await productRepository.save(product)

    return product
  }

}

export { UpdateProductService }
