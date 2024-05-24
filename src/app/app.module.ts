import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {
  NgbAccordionModule,
  NgbCarouselModule,
  NgbModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    CommentListComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbRatingModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbAccordionModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
