import { Component, OnInit } from '@angular/core';
import { Product } from './product.class';
import { ProductService } from './product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  products!: Product[]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.productsChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }



}
