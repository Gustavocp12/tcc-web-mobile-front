import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {

  products = [
    { name: 'Product 1', price: 100, image: './assets/images/product-example.png' },
    { name: 'Product 2', price: 200, image: './assets/images/product-example.png' },
    { name: 'Product 3', price: 300, image: './assets/images/product-example.png' },
    { name: 'Product 4', price: 400, image: './assets/images/product-example.png' },
    { name: 'Product 5', price: 500, image: './assets/images/product-example.png' },
  ];

}
