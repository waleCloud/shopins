import { Module } from '@nestjs/common';
import { productsProvider } from './products.provider';
import { ProductsService } from './products.service';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsController } from './products.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsService, ...productsProvider],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
