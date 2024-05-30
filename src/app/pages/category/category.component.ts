import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categoryName: string;
  products: Array<Product>;
  category;
  brands: Array<string> = [
    'LuminaVista',
    'Nexara',
    'QuantaVibe',
    'VelociTech',
    'SolaraNova',
    'AeroFlexi',
    'TruVera',
    'ZenithWave',
    'PuraLuxe',
    'OptiSphere',
  ];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryName = params['name'];
      this.category = this.categoryService.getCategoryByName(this.categoryName);
      this.products = this.productService.getProductsbyCategory(
        this.categoryName
      );
    });
  }

  onCategoryPath(category: string) {
    this.router.navigate(['/category/', category]);
  }
}
