import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  private items$: Subject<DataList>;
  public dataArray: DataList[];
  public dataString: string;

  constructor() {
    this.dataArray = [];
    this.dataString = '';
    this.items$ = new Subject<DataList>();
  }

  ngOnInit() {
    this.items$.subscribe(value => this.dataArray.push(value));
  }

  public addData() {
    const data = {
      value: this.dataString,
      date: new Date().toLocaleString(),
    }
    this.items$.next(data);
  }
}
interface DataList {
  value: string,
  date: string,
}
