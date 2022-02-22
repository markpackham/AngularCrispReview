import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../model/Brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  @Output() onBrandAdd: EventEmitter<Brand> = new EventEmitter();
  brand_name!: string;
  brand_owner!: string;
  errorMsg:any;
  successMsg:any;

  constructor(private service: BrandService) { }

  ngOnInit(): void {
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

}