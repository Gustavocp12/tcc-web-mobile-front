import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './modules/cardapio/cardapio.component';
import { HomeScreenComponent } from './modules/homeScreen/home-screen.component';
import { FinishedOrderComponent } from './modules/finishedOrder/finished-order.component';
import { OrderScreenComponent } from './modules/orderScreen/order-screen.component';
import { NavComponent } from './core/components/nav/nav.component';
import { HeaderComponent } from './modules/homeScreen/components/header/header.component';
import { SearchComponent } from './modules/homeScreen/components/search/search.component';
import { HighlightsComponent } from './modules/homeScreen/components/highlights/highlights.component';
import { ProductsComponent } from './modules/homeScreen/components/products/products.component';
import { OrderComponent } from './modules/orderScreen/components/order/order.component';
import { ModalConfirmOrderComponent } from './modules/orderScreen/components/modal-confirm-order/modal-confirm-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    HomeScreenComponent,
    FinishedOrderComponent,
    OrderScreenComponent,
    NavComponent,
    HeaderComponent,
    SearchComponent,
    HighlightsComponent,
    ProductsComponent,
    OrderComponent,
    ModalConfirmOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
