import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css']
})
export class ProductCreatorComponent implements OnInit {
  newProductForm: FormGroup;

  constructor(private repository: ProductRepository, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public get categories(): string[] {
    return this.repository.getCategories();
  }

  save({ value, valid }: { value: Product, valid: boolean }) {
    if (valid) {
      this.repository.saveProduct(value);
      this.newProductForm.reset();
    }
  }

  private initForm(): void {
    this.newProductForm = this.formbuilder.group({
      name: [null, [
        Validators.required,
        Validators.minLength(4)]
      ],
      category: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }
}