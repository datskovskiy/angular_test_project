import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'product 1', 100, 'Category 1'),
        new Product(2, 'product 2', 200, 'Category 2' ),
        new Product(3, 'product 3', 300, 'Category 3' ),
        new Product(4, 'product 4', 400, 'Category 1'),
        new Product(5, 'product 5', 500, 'Category 2'),
        new Product(6, 'product 6', 600, 'Category 3'),
        new Product(7, 'product 7', 700, 'Category 1'),
        new Product(8, 'product 8', 800, 'Category 2'),
        new Product(9, 'product 9', 900, 'Category 3'),
        new Product(10, 'product 10', 1000, 'Category 2' )];

    getProducts(): Product[] {
        return this.products;
    }
}
