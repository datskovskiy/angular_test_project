import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css']
})
export class ProductCreatorComponent {
  submitted = false;
  selectedCategory: string;
  product: Product = new Product();

  constructor(private repository: ProductRepository) { }

  public get categories(): string[] {
    return this.repository.getCategories();
  }

  save(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.product.category = this.selectedCategory;
      this.repository.saveProduct(this.product);
      this.product = new Product();
      this.selectedCategory = null;
      this.submitted = false;
    }
  }
}