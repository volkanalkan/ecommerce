import { Component, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;

  constructor(
    private favoritesService: FavoritesService,
    private cartService: CartService
  ) {}

  onAddToFavorites(event: Event): void {
    event.stopPropagation();
    this.favoritesService.addToFavorites(this.product);
  }

  onAddToCart(event: Event): void {
    event.stopPropagation();
    this.cartService.addToCart(this.product);
  }
}
