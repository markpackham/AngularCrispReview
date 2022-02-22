import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Flavour } from '../../../model/Flavour';
import { FlavourService } from '../../../services/flavour.service';

@Component({
  selector: 'app-flavour-add',
  templateUrl: './flavour-add.component.html',
  styleUrls: ['./flavour-add.component.css']
})
export class FlavourAddComponent implements OnInit {
  @Output() onFlavourAdd: EventEmitter<Flavour> = new EventEmitter();
  flavour_name!: string;
  flavour_owner!: string;
  errorMsg:any;
  successMsg:any;

  constructor(private service: FlavourService) { }

  ngOnInit(): void {
  }

  flavourForm = new FormGroup({
    'flavour_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    if(this.flavourForm.valid){
      this.service.addFlavour(this.flavourForm.value).subscribe((res)=>{
          location.reload();
          this.flavourForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required!';
    }
  }

}
