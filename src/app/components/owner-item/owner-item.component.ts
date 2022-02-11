import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../../model/Owner';

@Component({
  selector: 'app-owner-item',
  templateUrl: './owner-item.component.html',
  styleUrls: ['./owner-item.component.css']
})
export class OwnerItemComponent implements OnInit {
  @Input() owner: Owner;

  constructor() { }

  ngOnInit(): void {
  }

}
