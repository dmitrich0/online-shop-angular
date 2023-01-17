import {Component, OnInit} from '@angular/core';
import {IProducts} from "../../models/product";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: IProducts[];
  productsSubscription!: Subscription;
  canEdit!: boolean;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.canEdit = true;
  }

  ngOnDestroy() {
    if (this.productsSubscription)
      this.productsSubscription.unsubscribe();
  }

}
