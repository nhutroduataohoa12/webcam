import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ContactComponent } from './components/mains/contact/contact.component';
import { ComparisonComponent } from './components/mains/products_area/comparison/comparison.component';
import { DetailComponent } from './components/mains/products_area/detail/detail.component';

import { ProductsComponent } from './components/mains/products_area/products/products.component';
import { NewArrivalComponent } from './components/mains/products_area/dichvu/new-arrival.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories/all-products', component: ProductsComponent },
  { path: 'products/comparison', component: ComparisonComponent },
  { path: 'products/:id', component: DetailComponent },
  {path : 'dichvu' ,component : NewArrivalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
