import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  images = [944, 1011, 984, 5].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  product: Product = new Product(
    'nl23nlk43n5l',
    'Product Name',
    'HP',
    4.5,
    261,
    19.99,
    [
      'https://media.wired.com/photos/624df21cb340f55b37084fdc/1:1/w_1544,h_1544,c_limit/How-to-Build-a-PC-Gear.jpg',
    ],
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro libero qui voluptas repudiandae placeat in quidem praesentium expedita molestias incidunt, a sequi non. Incidunt eligendi eius velit sunt accusamus non!',
    37,
    []
  );

  constructor(carouselConfig: NgbCarouselConfig) {
    carouselConfig.interval = 0;
    carouselConfig.wrap = false;
  }
}
