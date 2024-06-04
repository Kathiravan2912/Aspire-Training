import { Component } from '@angular/core';
import { shop } from './shop.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  shop:shop;
  constructor(){
    this.shop = new shop("AK Electronics", 110, "Villupuram");
  }
}
