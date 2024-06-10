import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { CommentService } from './comment.service';
import { CategoryService } from './category.service';
import { Order } from '../models/order.model';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private commentService: CommentService,
    private categoryService: CategoryService,
    private orderService: OrdersService
  ) {}

  fetchProducts() {
    //<Array<Product>>
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

  fetchCategories(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/categories').pipe(
      tap((categories) => {
        this.categoryService.setCategories(categories);
      })
    );
  }

  fetchOrders() {
    return this.http.get<Array<Order>>('http://localhost:3000/orders').pipe(
      tap((orders) => {
        this.orderService.setOrders(orders);
      })
    );
  }
}
