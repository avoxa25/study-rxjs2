import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from './mock';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private products$: Subject<IProduct>;

  constructor() {
    this.products$ = new Subject();
  }

  public addData(data: IProduct): void {
    this.products$.next(data);
  }

  public getStream(): Subject<IProduct> {
    return this.products$;
  }

}
