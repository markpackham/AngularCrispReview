import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Crisp } from '../../model/Crisp';
import { CrispService } from '../../services/crisp.service';

@Component({
  selector: 'app-add-crisp',
  templateUrl: './add-crisp.component.html',
  styleUrls: ['./add-crisp.component.css']
})
export class AddCrispComponent implements OnInit {
  @Output() onAddCrisp: EventEmitter<Crisp> = new EventEmitter();
  crisp_name!: string;
  crisp_owner!: string;

  constructor(private service: CrispService) { }

  ngOnInit(): void {
  }

  crispForm = new FormGroup({
    'crisp_name':new FormControl('',Validators.required),
    'crisp_image':new FormControl(''),
    'flavour_name':new FormControl('',Validators.required),
    'brand_name':new FormControl('',Validators.required),
    'weight':new FormControl('',Validators.required),
    'review':new FormControl(''),
    'review_score':new FormControl(''),
  });

  onSubmit() {
    if(this.crispForm.valid){
      this.service.addCrisp(this.crispForm.value).subscribe((res)=>{
          this.crispForm.reset();
      });
    }
  }

}