import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  products: Product[] = [
    { name: 'Memory', price: 3200 },
    { name: 'CPU', price: 8200 },
    { name: 'Video', price: 27000 },
  ];
  getProducts() {
    return this.products;
  }
  addNewProduct(name: string, price: number) {
    this.products.push({ name: name, price: price });
  }
}
