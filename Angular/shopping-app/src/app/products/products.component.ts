import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 10 },
    { name: 'Product 2', description: 'Description 2', price: 20 },
    { name: 'Product 3', description: 'Description 3', price: 30 }
  ];

  constructor() { }

  ngOnInit(): void { }

  addToCart(product: any): void {
    console.log(`${product.name} added to cart`);
    // Implement add to cart functionality
  }
}
