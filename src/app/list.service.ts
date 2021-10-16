import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private data$: Subject<IDataList>;

  constructor() { 
    this.data$ = new Subject<IDataList>();
  }

  public addData(value: string): void {
    const data: IDataList = {
      value: value,
      date: new Date().toLocaleString(),
    }
    this.data$.next(data);
  }

  public getStream(): Subject<IDataList> {
    return this.data$;
  }
}

export interface IDataList {
  value: string,
  date: string,
}
