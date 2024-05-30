import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input('products') products: Array<Product>;

  constructor(
    private productService: ProductService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    // this.dataStorageService.fetchProducts();
    // this.products = this.productService.getProducts();
  }
}
