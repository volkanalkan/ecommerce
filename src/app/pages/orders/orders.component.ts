import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Order } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  orders: Array<Order> = [];
  products: Array<Product> = [];

  constructor(
    private productService: ProductService,
    private orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
    this.orders.forEach((order) => {
      this.products.push(this.productService.getProduct(order.productId - 1));
    });
    console.log(this.orders);
    console.log(this.products);
  }
}
