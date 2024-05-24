import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user$ = this.authService.user$;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
