import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
    private products: Product[] = [];

    constructor(private dataSource: StaticDataSource) {
        this.products = dataSource.getProducts();
    }

    deleteProduct(id: number) {
        this.products.splice(this.products.findIndex(p => p.id === id), 1);
    }

    getProducts(category: string = null): Product[] {
        return this.products.filter(p => p.category === category || category == null);
    }

    getCategories(): string[] {
        return this.products.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) === index)
                .sort();
    }
}
