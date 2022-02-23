import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../model/Brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private service: BrandService) { }

  ngOnInit(): void {
    this.service.getBrands().subscribe((res) => {
      console.log(res);
    });
  }

}
