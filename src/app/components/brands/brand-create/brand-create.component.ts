import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Brand } from '../../../model/Brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {

  brands: Brand[] = [];

  brandForm = new FormGroup({
    'brand_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'brand_owner':new FormControl('',[Validators.required, Validators.minLength(3)]),
  });

  constructor(private service: BrandService) { }

  ngOnInit(): void {
  }

  addBrand(brand: Brand) {
    this.service.addBrand(brand).subscribe((brand) => this.brands.push(brand));
  }

}
