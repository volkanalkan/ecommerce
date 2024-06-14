import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites = new BehaviorSubject<any[]>([]);
  favorites$ = this.favorites.asObservable();

  addToFavorites(product: any) {
    const currentFavorites = this.favorites.value;
    if (!currentFavorites.find((item) => item.id === product.id)) {
      this.favorites.next([...currentFavorites, product]);
    }
  }

  removeFromFavorites(productId: string) {
    const currentFavorites = this.favorites.value.filter(
      (item) => item.id !== productId
    );
    this.favorites.next(currentFavorites);
  }

  clearFavorites() {
    this.favorites.next([]);
  }
}
