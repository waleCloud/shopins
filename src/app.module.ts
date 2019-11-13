import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, '', '**/!(*.d).{env}')),
    DatabaseModule,
    ProductsModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
