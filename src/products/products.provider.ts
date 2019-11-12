import { Products } from './products.entity';
import { PRODUCTS_REPO } from 'src/constants';

export const productsProvider = [
  {
    provide: PRODUCTS_REPO,
    useValue: Products,
  },
];
