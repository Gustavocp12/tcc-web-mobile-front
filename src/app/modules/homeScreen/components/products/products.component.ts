import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products = [
    { name: 'Product 1', price: 100, description: 'test of description', image: 'assets/images/product-example.png' },
    { name: 'Product 2', price: 200, description: 'test of description', image: 'assets/images/product-example.png' },
    { name: 'Product 3', price: 300, description: 'test of description', image: 'assets/images/product-example.png' },
  ];

}
