import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'product 1', 100 ),
        new Product(2, 'product 2', 200 ),
        new Product(3, 'product 3', 300 ),
        new Product(4, 'product 4', 400 ),
        new Product(5, 'product 5', 500 ),
        new Product(6, 'product 6', 600 ),
        new Product(7, 'product 7', 700 ),
        new Product(8, 'product 8', 800 ),
        new Product(9, 'product 9', 900 ),
        new Product(10, 'product 10', 1000 )];

    getProducts(): Product[] {
        return this.products;
    }
}
