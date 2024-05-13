import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsChanged = new Subject<Array<Product>>();
  private products: Array<Product> = [];
  constructor() {}

  setProducts(products: any): void {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts(): Array<Product> {
    return this.products.slice();
  }
}
