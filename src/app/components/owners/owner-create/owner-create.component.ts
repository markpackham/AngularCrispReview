import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from '../../../services/custom-validation.service';
import { Owner } from '../../../model/Owner';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  owners: Owner[] = [];
 
  ownerForm = new FormGroup({
    'owner_name':new FormControl('',[Validators.required, Validators.minLength(5)], this.customValidator.validateOwnerNameNotTaken.bind(this.customValidator)),
    'owner_address':new FormControl('',[Validators.required, Validators.minLength(5)]),
    'owner_phone':new FormControl(''),
    'owner_website':new FormControl(''),
  });

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;

  private apiItemPath = 'owners';

  constructor(private customValidator: CustomValidationService, private service: CrudService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    if(this.getParamId){
      this.service.getItem(this.apiItemPath, this.getParamId).subscribe((res)=>{
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
    this.service.addItem(this.apiItemPath, owner).subscribe((owner) => this.owners.push(owner));
  }

  ownerSubmit() {
    if(this.ownerForm.valid){
      this.service.addItem(this.apiItemPath, this.ownerForm.value).subscribe((res)=>{
          this.ownerForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'Owner name and address must be at least 5 characters!';
    }
  }

  ownerUpdate(){
    if(this.ownerForm.value.owner_name.length > 4 && this.ownerForm.value.owner_address.length > 4){
      this.service.updateItem(this.apiItemPath, this.ownerForm.value, this.getParamId).subscribe((res)=>{
        console.log(res);
          this.successMsg = "Update successful!";
      });
    }
    else{
      this.errorMsg = 'Owner name and address must be at least 5 characters!';
    }
  }

}