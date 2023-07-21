import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardapioComponent} from "./modules/cardapio/cardapio.component";

const routes: Routes = [
  { path: "", component: CardapioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
