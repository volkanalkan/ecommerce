import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { DataStorageService } from './data-storage.service';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Array<Product>> {
  constructor(
    private productService: ProductService,
    private dataService: DataStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<any> {
    const products = this.productService.getProducts();

    if (products.length !== 0) {
      return products;
    } else {
      return this.dataService.fetchProducts();
    }
  }
}
