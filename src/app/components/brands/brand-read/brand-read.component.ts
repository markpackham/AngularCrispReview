import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../model/Brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand-read',
  templateUrl: './brand-read.component.html',
  styleUrls: ['./brand-read.component.css']
})
export class BrandReadComponent implements OnInit {

  brands: Brand[] = [];

  constructor(private service: BrandService) { }

  ngOnInit(): void {
    this.service.getBrands().subscribe((brands) => (this.brands = brands));
  }

}
