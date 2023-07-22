import {Component, OnInit} from '@angular/core';
import {NavService} from "../../services/nav.service";

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit{

  componentState: { [key: string]: boolean } = {
    home: true,
    order: false,
    table: false,
  };

  constructor(private navService: NavService) { }

  openComponent(){
    this.navService.getSelectedComponent().subscribe(component => {
      if (component) {
        Object.keys(this.componentState).forEach(key => {
          this.componentState[key] = (key === component);
        });
      }
    });
  }

  ngOnInit() {
    this.openComponent();
  }

}
