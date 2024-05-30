import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsChanged = new Subject<Array<Product>>();
  private products = [];
  constructor() {}

  setProducts(products): void {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts(): Array<Product> {
    return this.products.slice();
  }

  getProduct(id: number) {
    return this.products[id];
  }

  getProductsbyCategory(category: string) {
    return this.products
      .slice()
      .filter((product) => product.category.split(' > ').includes(category));
  }
}
