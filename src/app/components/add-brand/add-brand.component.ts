import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../model/Brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  @Output() onAddBrand: EventEmitter<Brand> = new EventEmitter();
  brand_name!: string;
  brand_owner!: string;
  errorMsg:any;

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
          this.brandForm.reset();
      });
    }
    else{
      this.errorMsg = 'All fields required!';
    }
  }

}
