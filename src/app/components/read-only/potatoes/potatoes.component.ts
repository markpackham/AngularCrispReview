import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

export interface PotatoStructure {
  potato_name: string;
  potato_country: string;
}

const POTATO_DATA: PotatoStructure[] = [
  {potato_name: 'Agata', potato_country: 'Netherlands'},
  {potato_name: 'Bamberg', potato_country: 'Germany'},
  {potato_name: 'Black Champion', potato_country: 'Ireland'},
  {potato_name: 'British Queen', potato_country: 'UK'},
  {potato_name: 'Dejima', potato_country: 'Japan'},
  {potato_name: 'Irish White', potato_country: 'Ireland'},
  {potato_name: 'King Edward', potato_country: 'UK'},
  {potato_name: 'Pink Fir Apple', potato_country: 'France'},
  {potato_name: 'Ranger Russet', potato_country: 'USA'},
  {potato_name: 'Red Gold', potato_country: 'Canada'},
  {potato_name: 'Russian Blue', potato_country: 'Russia'},
  {potato_name: 'Shetland Black', potato_country: 'UK'},
  {potato_name: 'Yukon Gold', potato_country: 'Canada'},
];

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.css']
})

export class PotatoesComponent implements OnInit {

  displayedColumns: string[] = ['potato_name', 'potato_country'];
  dataSource = new MatTableDataSource(POTATO_DATA);

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  // MatPaginator Output
  pageEvent!: PageEvent;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
