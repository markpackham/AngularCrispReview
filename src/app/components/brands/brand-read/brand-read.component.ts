import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../../model/Brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand-read',
  templateUrl: './brand-read.component.html',
  styleUrls: ['./brand-read.component.css']
})
export class BrandReadComponent implements OnInit {

  brands: Brand[] = [];
  deleteMsg: any;
  @Output() onDeleteBrand: EventEmitter<Brand> = new EventEmitter();

  constructor(private service: BrandService) { }

  ngOnInit(): void {
    this.service.getBrands().subscribe((brands) => (this.brands = brands));
  }

  onDelete(id: any) {
    this.service.deleteBrand(id).subscribe((res)=>{
      console.log(res,'deleteCrisp');
      this.deleteMsg = "Deletion done!";
    });
  }

}
