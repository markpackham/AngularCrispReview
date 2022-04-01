import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PotatoStructure {
  potato_name: string;
  potato_country: string;
}

const POTATO_DATA: PotatoStructure[] = [
  {potato_name: 'King Edward', potato_country: 'UK'},
  {potato_name: 'Yukon Gold', potato_country: 'Canada'},
  {potato_name: 'Russian Blue', potato_country: 'Russia'},
];

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.css']
})
export class PotatoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['potato_name', 'potato_country'];
  dataSource = new MatTableDataSource(POTATO_DATA);

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
