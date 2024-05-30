import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { CategoryService } from './category.service';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryResolverService implements Resolve<Array<any>> {
  constructor(
    private categoryService: CategoryService,
    private dataService: DataStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<any> {
    const categories = this.categoryService.getCategories();

    if (categories.length !== 0) {
      return categories;
    } else {
      return this.dataService.fetchCategories();
    }
  }
}
