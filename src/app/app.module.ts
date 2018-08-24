import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';

import { StaticDataSource } from './model/static.datasource';
import { ProductRepository } from './model/product.repository';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    ProductCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StaticDataSource, ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
