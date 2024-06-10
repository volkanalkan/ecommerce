import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor(
    private cartService: CartService,
    private favouritesService: FavoritesService
  ) {}

  onAddtoCart() {
    this.cartService.addToCart(this.product);
  }

  onAddtoFavourites() {
    this.favouritesService.addToFavorites(this.product);
  }
}
