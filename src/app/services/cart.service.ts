import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: any) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, product]);
  }

  removeFromCart(productId: string) {
    const currentCart = this.cart.value.filter((item) => item.id !== productId);
    this.cart.next(currentCart);
  }

  clearCart() {
    this.cart.next([]);
  }

  updateCart(updatedItems: any[]) {
    this.cart.next(updatedItems);
  }
}
