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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'category',
    component: CategoriesComponent,
    children: [{ path: ':id', component: CategoryComponent }],
  },
  {
    path: 'cart',
    component: CartComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
