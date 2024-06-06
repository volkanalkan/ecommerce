import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user$ = this.authService.user$;
  categoryArr: any[];

  constructor(
    private authService: AuthService,
    private categoryService: CategoryService
  ) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.categoryArr = this.categoryService.getCategories();
  }
}
