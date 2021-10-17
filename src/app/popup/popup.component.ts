import { Component, OnInit } from '@angular/core';
import { IProduct } from '../mock';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public isHidden: boolean;
  public product?: IProduct;

  constructor(private popupService: PopupService) {
    this.isHidden = true;
  }

  ngOnInit() {
    this.popupService.getStream().subscribe(data => {
      this.product = data;
      this.isHidden = false
    });
  }

  public close(): void {
    this.isHidden = true;
  }
}
