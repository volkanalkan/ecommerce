import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteItems: any[] = [];

  constructor(
    private favoritesService: FavoritesService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.favoritesService.favorites$.subscribe((items) => {
        this.favoriteItems = items;
      });
    }
  }

  removeFromFavorites(productId: string) {
    this.favoritesService.removeFromFavorites(productId);
  }

  clearFavorites() {
    this.favoritesService.clearFavorites();
  }
}
