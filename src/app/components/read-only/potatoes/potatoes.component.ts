import { Component, OnInit } from '@angular/core';

export interface PotatoStructure {
  potato_name: string;
  potato_country: string;
}

const POTATO_DATA: PotatoStructure[] = [
  {potato_name: 'King Edward', potato_country: 'UK'},
  {potato_name: 'Yukon Gold', potato_country: 'Canada'},
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
  dataSource = POTATO_DATA;

}
