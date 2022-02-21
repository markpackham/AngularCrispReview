import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../model/Brand';
import { BrandService } from '../../services/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent implements OnInit {
  @Input() brand: Brand;
  @Output() onDeleteBrand: EventEmitter<Brand> = new EventEmitter();

  constructor(private service: BrandService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onDelete(id: any) {
    this.service.deleteBrand(id).subscribe((res)=>{
      location.reload();
      console.log(res,'deleteBrand');
    });
  }

  onUpdate(id: any) {
  }

}
