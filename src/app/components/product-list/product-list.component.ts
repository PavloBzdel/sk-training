import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.products = this.data.getProducts();
  }
  addProduct(name: string, price: string){
    this.data.addNewProduct(name, +price);
  }

}
