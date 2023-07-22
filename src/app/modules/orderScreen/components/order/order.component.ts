import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  products = [
    { name: 'Product 1', price: 100, description: 'test of description', image: 'assets/images/product-example.png', amount: 1 },
    { name: 'Product 2', price: 200, description: 'test of description', image: 'assets/images/product-example.png', amount: 1 },
    { name: 'Product 3', price: 300, description: 'test of description', image: 'assets/images/product-example.png', amount: 1 },
  ];

}
