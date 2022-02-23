import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../model/Brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand-read',
  templateUrl: './brand-read.component.html',
  styleUrls: ['./brand-read.component.css']
})
export class BrandReadComponent implements OnInit {

  constructor(private service: BrandService) { }

  brands: Brand[] = [];

  ngOnInit(): void {
    this.service.getBrands().subscribe((brands) => (this.brands = brands));
  }

}
