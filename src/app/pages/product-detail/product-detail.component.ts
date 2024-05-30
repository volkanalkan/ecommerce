import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from '../../models/comment.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Array<Comment>;
  id: number;
  categoryPath: Array<string>;

  constructor(
    carouselConfig: NgbCarouselConfig,
    private productService: ProductService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    carouselConfig.interval = 0;
    carouselConfig.wrap = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.productService.getProduct(this.id - 1);
      this.comments = this.commentService.getCommentsForProduct(this.id);
      this.categoryPath = this.product.category.split(' > ');
    });
  }

  onCategoryPath(category: string) {
    this.router.navigate(['/category/', category]);
  }
}
