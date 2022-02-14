import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Brand } from '../../model/Brand';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  @Output() onAddBrand: EventEmitter<Brand> = new EventEmitter();
  brand!: string;
  brand_owner!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    const newBrand: Brand = {
      brand: this.brand,
      brand_owner: this.brand_owner
    };

    this.onAddBrand.emit(newBrand);

    this.brand = '';
    this.brand_owner = '';
  }

}
