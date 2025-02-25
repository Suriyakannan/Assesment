import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './product-list/add-product.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'add', component:AddProductComponent },
  { path: '',   redirectTo: '/products', pathMatch: 'full' }
];