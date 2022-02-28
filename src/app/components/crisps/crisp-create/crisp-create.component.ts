import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Brand } from '../../../model/Brand';
import { Crisp } from '../../../model/Crisp';
import { Flavour } from '../../../model/Flavour';
import { BrandService } from '../../../services/brand.service';
import { CrispService } from '../../../services/crisp.service';
import { FlavourService } from '../../../services/flavour.service';
import { CustomValidationService } from '../../../services/custom-validation.service';

@Component({
  selector: 'app-crisp-create',
  templateUrl: './crisp-create.component.html',
  styleUrls: ['./crisp-create.component.css']
})
export class CrispCreateComponent implements OnInit {

  brands: Brand[] = [];
  crisps: Crisp[] = [];
  flavours: Flavour[] = [];
 
  crispForm = new FormGroup({
    'crisp_name':new FormControl('',[Validators.required, Validators.minLength(3)], this.customValidator.validateCrispNameNotTaken.bind(this.customValidator)),
    'crisp_image':new FormControl(''),
    'flavour_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'brand_name':new FormControl('',[Validators.required, Validators.minLength(3)]),
    'weight':new FormControl('',[Validators.required, Validators.min(1), Validators.minLength(1)]),
    'review':new FormControl('',[Validators.required]),
    'review_score':new FormControl('',[Validators.required,Validators.min(1), Validators.max(5)]),
  });

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;

  constructor(private customValidator: CustomValidationService, private service: CrispService, private serviceBrand: BrandService, private serviceFlavour: FlavourService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    this.getAllBrands();

    this.getAllFlavours();

    if(this.getParamId){
      this.service.getCrisp(this.getParamId).subscribe((res)=>{
        this.crispForm.patchValue({
          "crisp_name":res.crisp_name,
          "crisp_image":res.crisp_image,
          "flavour_name":res.flavour_name,
          "brand_name":res.brand_name,
          "weight":res.weight,
          "review":res.review,
          "review_score":res.review_score,
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
      this.errorMsg = 'Only the image can be empty!';
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

  getAllBrands(){
    this.serviceBrand.getBrands().subscribe((brands) => (this.brands = brands));
  }

  getAllFlavours(){
    this.serviceFlavour.getFlavours().subscribe((flavours) => (this.flavours = flavours));
  }

}
