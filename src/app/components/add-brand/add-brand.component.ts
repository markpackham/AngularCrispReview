import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Brand } from '../../model/Brand';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  @Output() onAddBrand: EventEmitter<Brand> = new EventEmitter();
  brand_name!: string;
  brand_owner!: string;

  constructor() { }

  ngOnInit(): void {
  }

  brandForm = new FormGroup({
    'brand_name':new FormControl('',Validators.required),
    'brand_owner':new FormControl('',Validators.required),
  });

  onSubmit() {
    console.log(this.brandForm.value);

    const newBrand: Brand = {
      brand_name : this.brand_name,
      brand_owner: this.brand_owner
    };

    this.onAddBrand.emit(newBrand);
    this.brand_name = '';
    this.brand_owner = '';
  }

}
