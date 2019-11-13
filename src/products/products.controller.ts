import { Controller, Get, Catch, Post, Body, HttpException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { Products } from './products.entity';
import { ProductsDTO } from 'src/dto/productsDto';

@Catch(HttpException)
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  public async getProducts(): Promise<Products[]> {
    return await this.productService.getAllProducts();
  }

  @Post('add')
  public async addProduct(@Body() body: ProductsDTO): Promise<Products> {
    return await this.productService.createProduct(body);
  }

}
