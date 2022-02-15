import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Owner } from '../../model/Owner';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  @Output() onAddOwner: EventEmitter<Owner> = new EventEmitter();
  owner_name!: string;
  owner_owner!: string;

  constructor(private service: OwnerService) { }

  ngOnInit(): void {
  }

  ownerForm = new FormGroup({
    'owner_name':new FormControl('',Validators.required),
    'owner_address':new FormControl('',Validators.required),
    'owner_phone':new FormControl(''),
    'owner_website':new FormControl(''),
  });

  onSubmit() {
    if(this.ownerForm.valid){
      this.service.addOwner(this.ownerForm.value).subscribe((res)=>{
          this.ownerForm.reset();
      });
    }
  }

}
