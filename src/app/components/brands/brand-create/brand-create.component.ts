import { ActivatedRoute } from '@angular/router';
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

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;

  constructor(private service: BrandService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    if(this.getParamId){
      this.service.getBrand(this.getParamId).subscribe((res)=>{
        this.brandForm.patchValue({
          "brand_name":res.brand_name,
          "brand_owner":res.brand_owner
        })
    });
    }
  }

  addBrand(brand: Brand) {
    this.service.addBrand(brand).subscribe((brand) => this.brands.push(brand));
  }

  brandSubmit() {
    if(this.brandForm.valid){
      this.service.addBrand(this.brandForm.value).subscribe((res)=>{
          this.brandForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required!';
    }
  }

  brandUpdate(){
    if(this.brandForm.valid){
      this.service.updateBrand(this.brandForm.value, this.getParamId).subscribe((res)=>{
          this.successMsg = "Update successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required!';
    }
  }

}
