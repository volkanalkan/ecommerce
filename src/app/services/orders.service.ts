import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { ProductService } from './product.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  ordersChanged = new Subject<Array<Order>>();
  orders: Array<Order> = [];

  constructor() {}

  setOrders(orders: Array<Order>): void {
    this.orders = orders;
    this.ordersChanged.next(this.orders.slice());
  }

  getOrders(): Array<Order> {
    return this.orders.slice();
  }
}
