import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navItems = [
    { name: 'Cardápio', icon: 'pi-book', component: '' },
    { name: 'Pedidos', icon: 'pi-shopping-cart', component: '' },
    { name: 'Mesa', icon: 'pi-table', component: '' },
  ];

}
