import { Component, Input, OnInit } from '@angular/core';
import { ITableObjects } from '../../../core/models/table-objects/tableObjects';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() users: ITableObjects[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
