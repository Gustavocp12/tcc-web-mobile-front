import { Component } from '@angular/core';
import {NavService} from "../../../services/nav.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private navSerice: NavService) {}

  navItems = [
    { name: 'Cardápio', icon: 'pi-book', component: 'home' },
    { name: 'Pedidos', icon: 'pi-shopping-cart', component: 'order' },
    { name: 'Mesa', icon: 'pi-table', component: 'table' },
  ];

  sendComponent(component: string){
    this.navSerice.componentSelected(component);
  }

}
