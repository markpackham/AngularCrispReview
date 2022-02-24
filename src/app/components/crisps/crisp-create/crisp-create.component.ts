import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Crisp } from '../../../model/Crisp';
import { CrispService } from '../../../services/crisp.service';

@Component({
  selector: 'app-crisp-create',
  templateUrl: './crisp-create.component.html',
  styleUrls: ['./crisp-create.component.css']
})
export class CrispCreateComponent implements OnInit {

  crisps: Crisp[] = [];
 
  crispForm = new FormGroup({
    'crisp_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'crisp_image':new FormControl(''),
    'flavour_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'brand_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'weight':new FormControl('',[Validators.required, Validators.minLength(1)]),
    'review':new FormControl(''),
    'review_score':new FormControl(''),
  });

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;

  constructor(private service: CrispService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    if(this.getParamId){
      this.service.getCrisp(this.getParamId).subscribe((res)=>{
        this.crispForm.patchValue({
          "crisp_name":res.crisp_name
        })
    });
    }
  }

  addCrisp(crisp: Crisp) {
    this.service.addCrisp(crisp).subscribe((crisp) => this.crisps.push(crisp));
  }

  crispSubmit() {
    if(this.crispForm.valid){
      this.service.addCrisp(this.crispForm.value).subscribe((res)=>{
          this.crispForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'Only the image, review and review score can be empty!';
    }
  }

  crispUpdate(){
    if(this.crispForm.valid){
      this.service.updateCrisp(this.crispForm.value, this.getParamId).subscribe((res)=>{
        console.log(res);
          this.successMsg = "Update successful!";
      });
    }
    else{
      this.errorMsg = 'Only the image, review and review score can be empty!';
    }
  }

}
