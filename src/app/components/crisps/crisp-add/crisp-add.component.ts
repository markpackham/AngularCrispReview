import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Crisp } from '../../../model/Crisp';
import { CrispService } from '../../../services/crisp.service';

@Component({
  selector: 'app-crisp-add',
  templateUrl: './crisp-add.component.html',
  styleUrls: ['./crisp-add.component.css']
})
export class CrispAddComponent implements OnInit {
  @Output() onCrispAdd: EventEmitter<Crisp> = new EventEmitter();
  crisp_name!: string;
  crisp_owner!: string;
  errorMsg:any;
  successMsg:any;

  constructor(private service: CrispService) { }

  ngOnInit(): void {
  }

  crispForm = new FormGroup({
    'crisp_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'crisp_image':new FormControl(''),
    'flavour_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'brand_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'weight':new FormControl('',Validators.required),
    'review':new FormControl(''),
    'review_score':new FormControl(''),
  });

  onSubmit() {
    if(this.crispForm.valid){
      this.service.addCrisp(this.crispForm.value).subscribe((res)=>{
          location.reload();
          this.crispForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'All fields except Image, Review and Review Score required!';
    }
  }

}