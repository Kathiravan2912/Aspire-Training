import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 }
  ];

  constructor() { }

  ngOnInit(): void { }

  removeFromCart(item: any): void {
    console.log(`${item.name} removed from cart`);
    // Implement remove from cart functionality
  }

  confirmOrder(): void {
    console.log('Order confirmed');
    // Implement order confirmation functionality
  }
}
