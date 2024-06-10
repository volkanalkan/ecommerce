import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Order } from '../models/order.model';
import { OrdersService } from './orders.service';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersResolverService implements Resolve<Array<Order>> {
  constructor(
    private orderService: OrdersService,
    private dataService: DataStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Order[]> {
    const orders = this.orderService.getOrders();

    if (orders.length !== 0) {
      return orders;
    } else {
      return this.dataService.fetchOrders();
    }
  }
}
