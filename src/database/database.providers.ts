import { Sequelize } from 'sequelize-typescript';
import { Products } from 'src/products/products.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'SA',
        password: '',
        database: 'shopins',
      });
      sequelize.addModels([Products]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
