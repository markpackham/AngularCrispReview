import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Owner } from '../../../model/Owner';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {
  @Output() onOwnerAdd: EventEmitter<Owner> = new EventEmitter();
  owner_name!: string;
  owner_owner!: string;
  errorMsg:any;
  successMsg:any;

  constructor(private service: OwnerService) { }

  ngOnInit(): void {
  }

  ownerForm = new FormGroup({
    'owner_name':new FormControl('',[Validators.required, Validators.minLength(5)]),
    'owner_address':new FormControl('',[Validators.required, Validators.minLength(6)]),
    'owner_phone':new FormControl(''),
    'owner_website':new FormControl(''),
  });

  onSubmit() {
    if(this.ownerForm.valid){
      this.service.addOwner(this.ownerForm.value).subscribe((res)=>{
          location.reload();
          this.ownerForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'All fields except Phone and Website required!';
    }
  }

}
