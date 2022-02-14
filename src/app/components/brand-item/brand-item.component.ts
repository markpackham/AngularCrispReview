import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../model/Brand';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent implements OnInit {
  @Input() brand: Brand;
  @Output() onDeleteBrand: EventEmitter<Brand> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(brand: Brand) {
    this.onDeleteBrand.emit(brand);
  }

}
