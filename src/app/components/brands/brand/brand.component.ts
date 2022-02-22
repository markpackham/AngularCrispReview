import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../../model/Brand';
import { BrandService } from '../../../services/brand.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  @Input() brand: Brand;
  @Output() onDeleteBrand: EventEmitter<Brand> = new EventEmitter();
  @Output() onBrandAdd: EventEmitter<Brand> = new EventEmitter();
  brand_name!: string;
  brand_owner!: string;
  errorMsg:any;
  successMsg:any;
  deleteMsg: any;
  brands: Brand[] = [];

  constructor(private service: BrandService) { 
  }

  ngOnInit(): void {
    this.service.getBrands().subscribe((brands) => (this.brands = brands));
  }

  addBrand(brand: Brand) {
    this.service.addBrand(brand).subscribe((brand) => this.brands.push(brand));
  }

  brandForm = new FormGroup({
    'brand_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'brand_owner':new FormControl('',[Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    if(this.brandForm.valid){
      this.service.addBrand(this.brandForm.value).subscribe((res)=>{
          location.reload();
          this.brandForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required!';
    }
  }

  onDelete(id: any) {
    this.service.deleteBrand(id).subscribe((res)=>{
      location.reload();
      console.log(res,'deleteBrand');
      this.deleteMsg = "Deletion done!";
    });
  }

  onUpdate(id: any) {
  }

}
