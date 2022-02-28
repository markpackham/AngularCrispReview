import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomValidationService } from '../../../services/custom-validation.service';
import { Owner } from '../../../model/Owner';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  owners: Owner[] = [];
 
  ownerForm = new FormGroup({
    'owner_name':new FormControl('',[Validators.required, Validators.minLength(5)]),
    'owner_address':new FormControl('',[Validators.required, Validators.minLength(5)]),
    'owner_phone':new FormControl(''),
    'owner_website':new FormControl(''),
  });

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;

  constructor(private customValidator: CustomValidationService, private service: OwnerService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    if(this.getParamId){
      this.service.getOwner(this.getParamId).subscribe((res)=>{
        this.ownerForm.patchValue({
          "owner_name":res.owner_name,
          "owner_address":res.owner_address,
          "owner_phone":res.owner_phone,
          "owner_website":res.owner_website,
        })
    });
    }
  }

  addOwner(owner: Owner) {
    this.service.addOwner(owner).subscribe((owner) => this.owners.push(owner));
  }

  ownerSubmit() {
    if(this.ownerForm.valid){
      this.service.addOwner(this.ownerForm.value).subscribe((res)=>{
          this.ownerForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'Owner name and address must be at least 5 characters!';
    }
  }

  ownerUpdate(){
    if(this.ownerForm.valid){
      this.service.updateOwner(this.ownerForm.value, this.getParamId).subscribe((res)=>{
        console.log(res);
          this.successMsg = "Update successful!";
      });
    }
    else{
      this.errorMsg = 'Owner name and address must be at least 5 characters!';
    }
  }

}