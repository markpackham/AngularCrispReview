import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomValidationService } from '../../../services/custom-validation.service';
import { Flavour } from '../../../model/Flavour';
import { FlavourService } from '../../../services/flavour.service';

@Component({
  selector: 'app-flavour-create',
  templateUrl: './flavour-create.component.html',
  styleUrls: ['./flavour-create.component.css']
})
export class FlavourCreateComponent implements OnInit {

  flavours: Flavour[] = [];
 
  flavourForm = new FormGroup({
    'flavour_name':new FormControl('',[Validators.required, Validators.minLength(3)], this.customValidator.validateFlavourNameNotTaken.bind(this.customValidator))
  });

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;

  constructor(private customValidator: CustomValidationService, private router: ActivatedRoute, private service: FlavourService) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    if(this.getParamId){
      this.service.getFlavour(this.getParamId).subscribe((res)=>{
        this.flavourForm.patchValue({
          "flavour_name":res.flavour_name
        })
    });
    }
  }

  addFlavour(flavour: Flavour) {
    this.service.addFlavour(flavour).subscribe((flavour) => this.flavours.push(flavour));
  }

  flavourSubmit() {
    if(this.flavourForm.valid){
      this.service.addFlavour(this.flavourForm.value).subscribe((res)=>{
          this.flavourForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required and flavour name must be unique!';
    }
  }

  flavourUpdate(){
    if(this.flavourForm.valid){
      this.service.updateFlavour(this.flavourForm.value, this.getParamId).subscribe((res)=>{
        console.log(res);
          this.successMsg = "Update successful!";
      });
    }
    else{
      this.errorMsg = 'All fields required or no change in flavour name!';
    }
  }

}
