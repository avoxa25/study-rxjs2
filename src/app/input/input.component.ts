import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public dataString: string;

  constructor(private listService: ListService) {
    this.dataString = '';
  }

  ngOnInit() {
  }

  public addData() {
    this.listService.addData(this.dataString);
    this.dataString = '';
  }

}
