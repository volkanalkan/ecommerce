import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Array<Product> = [
    new Product(
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
    ),
    new Product(
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
    ),
    new Product(
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
    ),
    new Product(
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
    ),
    new Product(
      'nl23nlk43n5l',
      'Product Name',
      'HP',
      4.5,
      261,
      20019.99,
      [
        'https://media.wired.com/photos/624df21cb340f55b37084fdc/1:1/w_1544,h_1544,c_limit/How-to-Build-a-PC-Gear.jpg',
      ],
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro libero qui voluptas repudiandae placeat in quidem praesentium expedita molestias incidunt, a sequi non. Incidunt eligendi eius velit sunt accusamus non!',
      37,
      []
    ),
    new Product(
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
    ),
    new Product(
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
    ),
  ];
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>(
      'http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts'
    );
  }

  getProducts(): Array<Product> {
    return this.products.slice();
  }
}
