import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';

import { StaticDataSource } from './model/static.datasource';
import { ProductRepository } from './model/product.repository';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StaticDataSource, ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
