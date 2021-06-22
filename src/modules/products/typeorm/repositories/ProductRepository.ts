/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    public async findName(name:string): Promise<Product | undefined>{
        const product = await this.findOne({
            where:{
                name
            }
        })
        return product
    }
}

