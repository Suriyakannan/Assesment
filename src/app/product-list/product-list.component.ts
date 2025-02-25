// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true, // Mark as standalone
  imports: [CommonModule, FormsModule], // Import necessary modules directly
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onProductNameChange(product: Product, newName: string) {
    product.name = newName;  //Two way data binding
    //you can update to database
  }
}