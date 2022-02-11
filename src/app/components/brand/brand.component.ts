import { Component, OnInit } from '@angular/core';
import { Brand } from '../../model/Brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/brands';

  brands: Brand[] = [];

  constructor(private brandService: BrandService) { 
  }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((brands) => (this.brands = brands));
  }

}
