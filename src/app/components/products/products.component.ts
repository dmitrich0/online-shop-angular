import {Component, OnInit} from '@angular/core';
import {IProducts} from "../../models/product";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: IProducts[];
  productsSubscription!: Subscription;
  canEdit!: boolean;

  constructor(private productsService: ProductsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.canEdit = true;
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.height = '400px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
  }

  ngOnDestroy() {
    if (this.productsSubscription)
      this.productsSubscription.unsubscribe();
  }
}
