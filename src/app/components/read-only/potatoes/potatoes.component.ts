import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Potato, PotatoesService } from '../../../services/potatoes.service';


const POTATO_DATA: Potato[] = [];

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.css']
})

export class PotatoesComponent implements OnInit {

  apiUrl = "http://localhost:3000/potatoes"
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

  constructor(private service: PotatoesService) { 
    this.service.getPotatoes().subscribe(data => {
      this.dataSource = data;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
