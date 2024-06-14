import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.cartService.cart$.subscribe((items) => {
        this.cartItems = items.map((item) => ({ ...item, quantity: 1 }));
      });
    }
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  updateQuantity(productId: string, quantity: number) {
    const updatedItems = this.cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    this.cartService.updateCart(updatedItems);
  }

  getTotalPrice() {
    return this.cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }
}
