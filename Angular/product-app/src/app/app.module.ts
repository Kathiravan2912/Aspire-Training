// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, // Declare here
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
