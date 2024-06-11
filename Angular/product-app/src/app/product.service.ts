// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description 3', imageUrl: 'https://via.placeholder.com/150' },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
