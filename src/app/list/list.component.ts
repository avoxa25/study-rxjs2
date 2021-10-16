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
  public dataArray: Array<any>;

  constructor() {
    this.dataArray = [];
    this.items$ = new Subject<DataList>();
  }

  ngOnInit() {
    this.items$.subscribe(value => this.dataArray.push(value));
  }

  public addData() {
    this.items$.next({value: 'HELLO', date: new Date});
    console.log('clicked');
  }
}

interface DataList {
  value: string,
  date: Date,
}
