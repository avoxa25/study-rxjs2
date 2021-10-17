import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { ProductsComponent } from './products/products.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [				
    AppComponent,
      ListComponent,
      InputComponent,
      ProductsComponent,
      PopupComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
