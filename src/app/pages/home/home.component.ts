import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productList: Array<Product>;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
}
