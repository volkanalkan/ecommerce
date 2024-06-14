import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FavoritesService } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user$: Observable<any>;
  favoriteCount: number;
  cartCount: number;

  constructor(
    public authService: AuthService,
    public favoritesService: FavoritesService,
    public cartService: CartService
  ) {
    this.user$ = this.authService.user$;
    this.favoritesService.favorites$.subscribe((favorites) => {
      this.favoriteCount = favorites.length;
    });
    this.cartService.cart$.subscribe((cart) => {
      this.cartCount = cart.length;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
