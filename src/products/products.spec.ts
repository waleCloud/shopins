import { Test, TestingModule } from '@nestjs/testing';
import { productsProvider } from './products.provider';

describe('Products', () => {
  let provider: productsProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [productsProvider],
    }).compile();

    provider = module.get<productsProvider>(productsProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
