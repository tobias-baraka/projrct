import { EventEmitter } from '@angular/core';
import { Product } from './product.class';

export class ProductService {
  productsChanged = new EventEmitter<Product[]>();
  private products: Product[] = [
  new Product('Banana', 200),
  new Product('Mango', 200)
];

getProducts() {
  return this.products.slice();
}
addProductService(product: Product) {
  this.products.push(product);
  this.productsChanged.emit(this.products.slice())
}

}
