import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { map, tap } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  fetchProducts() {
    this.http.get('http://localhost:3000/products').subscribe((products) => {
      this.productService.setProducts(products);
    });
  }
}
