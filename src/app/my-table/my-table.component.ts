import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {

  @Input('rows')
  rows: number;

  @Output()
  deletedId: EventEmitter<number> = new EventEmitter();

  constructor(private repository: ProductRepository) {
    this.rows = repository.products.length;
  }

  getProducts(): Product[] {
        return this.repository.products.slice(0, this.rows);
  }

  deleteRow(id: number) {
    this.repository.deleteProduct(id);
    this.deletedId.emit(id);
  }
}
