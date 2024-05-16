import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { map, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private commentService: CommentService
  ) {}

  fetchProducts() {
    return this.http.get('http://localhost:3000/products').pipe(
      tap((products) => {
        this.productService.setProducts(products);
      })
    );
  }
  fetchComments() {
    return this.http.get('http://localhost:3000/comments').pipe(
      tap((comments) => {
        this.commentService.setComments(comments);
      })
    );
  }
}
