import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
    products: Product[] = [];

    constructor(private dataSource: StaticDataSource) {
        this.products = dataSource.getProducts();
    }

    deleteProduct(id: number) {
        this.products.splice(this.products.findIndex(p => p.id === id), 1);
    }
}
