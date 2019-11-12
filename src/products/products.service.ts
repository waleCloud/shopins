import { Injectable, Inject } from '@nestjs/common';
import { PRODUCTS_REPO } from 'src/constants';
import { Products } from './products.entity';
import { ProductsDTO } from '../dto/productsDto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPO) private readonly ProductsRepo: typeof Products,
  ) {}

  async getAllProducts(): Promise<Products[]> {
    return await this.ProductsRepo.findAll<Products>();
  }

  async createProduct(createProduct: ProductsDTO): Promise<Products> {
    return await this.ProductsRepo.create<Products>(createProduct);
  }
}
