import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {
  public selectedCategory = null;

  @Input('rows')
  rows: number;

  @Output()
  deletedId: EventEmitter<number> = new EventEmitter();

  constructor(private repository: ProductRepository) {
    this.rows = repository.getProducts(this.selectedCategory).length;
  }

  getProducts(): Product[] {
    return this.repository.getProducts(this.selectedCategory).slice(0, this.rows);
  }

  deleteRow(id: number) {
    this.repository.deleteProduct(id);
    this.deletedId.emit(id);
  }

  public get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
