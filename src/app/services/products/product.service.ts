import { Injectable } from '@angular/core';
import { categories } from 'src/app/demoDatas/categoriesList';
import { productsList } from 'src/app/demoDatas/productsList';
import { Category } from 'src/app/models/Category/category.model';
import { Product } from 'src/app/models/Product/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product [] = [] ;
  categories : Category[] = [] ;
  constructor() { }
  getProduct() : Product[]{
    return productsList ;
  }
  getCategory(){
    return categories ;
  }
}
