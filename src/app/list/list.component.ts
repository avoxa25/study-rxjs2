import { Component, OnInit } from '@angular/core';
import { ListService, IDataList } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public dataArray: IDataList[];

  constructor(private listService: ListService) {
    this.dataArray = [];
  }

  ngOnInit() {
    this.listService.getStream().subscribe(value => this.dataArray.push(value));
  }

}
