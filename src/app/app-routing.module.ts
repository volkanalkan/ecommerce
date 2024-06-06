import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductResolverService } from './services/product-resolver.service';
import { CommentResolverService } from './services/comment-resolver.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoryResolverService } from './services/category-resolver.service';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: [ProductResolverService, CategoryResolverService],
  },
  {
    path: 'category',
    component: CategoriesComponent,
    resolve: [CategoryResolverService],
    pathMatch: 'full',
  },
  {
    path: 'category/:name',
    component: CategoryComponent,
    resolve: [ProductResolverService, CategoryResolverService],
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sale',
    component: SaleComponent,
  },
  {
    path: 'product',
    redirectTo: '/category',
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    resolve: [ProductResolverService, CommentResolverService],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
