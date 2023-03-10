import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProducts} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProducts[]>(this.url)
  }

  getProduct(id: number) {
    return this.http.get<IProducts>(`${this.url}/${id}`)
  }

  postProduct(product: IProducts) {
    return this.http.post<IProducts>(this.url, product);
  }
}
