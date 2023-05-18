import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category/category.model';
import { Product } from 'src/app/models/Product/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private ProductService: ProductService) {}

  products!: Product[];
  categories !: Category[] ;
  ngOnInit(): void {
    this.products = this.ProductService.getProduct();
    this.categories = this.ProductService.getCategory() ;
  }
}
