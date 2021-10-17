import { Component, OnInit } from '@angular/core';
import { IProduct, productArray } from '../mock';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[]

  constructor(private popupService: PopupService) {
    this.products = productArray;
  }

  ngOnInit() {
  }

  public changeProduct(product: IProduct): void {
    this.popupService.addData(product);
  }

}
