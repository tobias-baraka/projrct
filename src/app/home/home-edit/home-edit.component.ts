import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/home/product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit {
@ViewChild('productNameInput',{static: true}) nameInputRef!: ElementRef
@ViewChild('amountNameInput',{static: true}) amountInputRef!: ElementRef


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onAddInputs() {
    const prodNameInput = this.nameInputRef.nativeElement.value;
    const prodAmountInput = this.amountInputRef.nativeElement.value;
   const newInput = new Product(prodNameInput, prodAmountInput);
    this.productService.addProductService(newInput)
  }

}
