import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../../model/Brand';
import { Crisp } from '../../../model/Crisp';
import { Flavour } from '../../../model/Flavour';
import { CrudService } from '../../../services/crud.service';
import { CustomValidationService } from '../../../services/custom-validation.service';

@Component({
  selector: 'app-crisp-create',
  templateUrl: './crisp-create.component.html',
  styleUrls: ['./crisp-create.component.css']
})
export class CrispCreateComponent implements OnInit {

  brands: Brand[] = [];
  crisps: Crisp[] = [];
  fileImage: any;
  flavours: Flavour[] = [];
  imageData!: string;
  orderBrands: string = 'brand_name';
  orderFlavours: string = 'flavour_name';

  private apiItemPath = 'crisps';
  private apiItemPathBrand = 'brands';
  private apiItemPathFlavour = 'flavours';

 
  crispForm = new FormGroup({
    'crisp_name':new FormControl('',[Validators.required, Validators.minLength(3)], this.customValidator.validateCrispNameNotTaken.bind(this.customValidator)),
    'crisp_image':new FormControl(''),
    'crisp_image_upload':new FormControl(''),
    'flavour_name':new FormControl('',[Validators.required]),
    'brand_name':new FormControl('',[Validators.required]),
    'weight':new FormControl('',[Validators.required, Validators.min(1), Validators.minLength(1)]),
    'review':new FormControl('',[Validators.required]),
    'review_score':new FormControl('',[Validators.required,Validators.min(1), Validators.max(5)]),
  });

  errorMsg!: string;
  successMsg!: string;
  getParamId: any;

  constructor(private customValidator: CustomValidationService, private service: CrudService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    this.getAllBrands();

    this.getAllFlavours();
    
    if(this.getParamId){
      this.service.getItem(this.apiItemPath, this.getParamId).subscribe((res)=>{
        this.crispForm.patchValue({
          "crisp_name":res.crisp_name,
          "crisp_image":res.crisp_image,
          "crisp_image_upload":res.crisp_image_upload,
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
    this.service.addItem(this.apiItemPath, crisp).subscribe((crisp) => this.crisps.push(crisp));
  }

  crispSubmit() {
    if(this.crispForm.valid){
      this.service.addItem(this.apiItemPath, this.crispForm.value).subscribe((res)=>{
          this.crispForm.reset();
          this.successMsg = "Creation successful!";
      });
    }
    else{
      this.errorMsg = 'Only the image can be empty!';
    }
  }

  crispUpdate(){
    if(this.crispForm.value.crisp_name.length > 2 && this.crispForm.value.weight > 0 && this.crispForm.value.review_score > 0){
      this.service.updateItem(this.apiItemPath, this.crispForm.value, this.getParamId).subscribe((res)=>{
        console.log(res);
          this.successMsg = "Update successful!";
      });
    }
    else{
      this.errorMsg = 'Only the image, review and review score can be empty!';
    }
  }

  getAllBrands(){
    this.service.getItems(this.apiItemPathBrand).subscribe((brands) => (this.brands = brands));
  }

  getAllFlavours(){
    this.service.getItems(this.apiItemPathFlavour).subscribe((flavours) => (this.flavours = flavours));
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file)

    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageData = reader.result as string;
    };
  }

}
