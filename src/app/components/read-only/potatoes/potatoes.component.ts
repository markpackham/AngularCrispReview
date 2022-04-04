import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Potato } from '../../../model/Potato';
import { PotatoesService } from '../../../services/potatoes.service';


@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.css']
})

export class PotatoesComponent implements OnInit {

  displayedColumns: string[] = ['potato_name', 'potato_country'];
  dataSource: any;

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

  constructor(private service: PotatoesService) { 
    this.service.getPotatoes().subscribe(data => {
      this.dataSource = new MatTableDataSource<Potato>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngOnInit(): void {
  }

}
