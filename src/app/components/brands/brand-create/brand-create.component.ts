import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../../model/Brand';
import { CrudService } from '../../../services/crud.service';
import { CustomValidationService } from '../../../services/custom-validation.service';
import { Owner } from '../../../model/Owner';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {

  brands: Brand[] = [];
  owners: Owner[] = [];

  private apiItemPath = 'brands';
  private apiItemPathOwners = 'owners';
 
  brandForm = new FormGroup({
    'brand_name':new FormControl('',[Validators.required, Validators.minLength(3)], this.customValidator.validateBrandNameNotTaken.bind(this.customValidator)),
    'brand_owner':new FormControl('',[Validators.required, Validators.minLength(3)]),
  });

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;
  orderOwners: string = 'owner_name';

  constructor(private customValidator: CustomValidationService, private service: CrudService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    this.getAllOwners();

    if(this.getParamId){
      this.service.getItem(this.apiItemPath,this.getParamId).subscribe((res)=>{
        this.brandForm.patchValue({
          "brand_name":res.brand_name,
          "brand_owner":res.brand_owner
        })
    });
    }
  }

  addBrand(brand: Brand) {
    this.service.addItem(this.apiItemPath, brand).subscribe((brand) => this.brands.push(brand));
  }

  brandSubmit() {
    if(this.brandForm.valid){
      this.service.addItem(this.apiItemPath,this.brandForm.value).subscribe(()=>{
          this.brandForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required & brand name must be unique!';
    }
  }

  brandUpdate(){
    if(this.brandForm.value.brand_name.length > 2 && this.brandForm.value.brand_owner.length > 2){
      this.service.updateItem(this.apiItemPath, this.brandForm.value, this.getParamId).subscribe(()=>{
          this.successMsg = "Update successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required or brand name has not been changed!';
    }
  }

  getAllOwners(){
    this.service.getItems(this.apiItemPathOwners).subscribe((owners) => (this.owners = owners));
  }

}
