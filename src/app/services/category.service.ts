import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: any[] = [];
  constructor() {}

  setCategories(categories: any[]): void {
    this.categories = categories;
  }

  getCategories(): any[] {
    return this.categories;
  }

  getCategoryById(id: number) {
    return this.findCategoryById(this.categories, id);
  }

  private findCategoryById(arr: any[], id: number): any {
    for (const category of arr) {
      if (category.id === id) {
        return category;
      }
      if (category.children) {
        const result = this.findCategoryById(category.children, id);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }

  getCategoryByName(name: string) {
    return this.findCategoryByName(this.categories, name);
  }

  private findCategoryByName(arr: any[], name: string): any {
    for (const category of arr) {
      if (category.name === name) {
        return category;
      }
      if (category.children) {
        const result = this.findCategoryByName(category.children, name);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }
}
