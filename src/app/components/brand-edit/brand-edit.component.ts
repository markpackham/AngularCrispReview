import { Component, OnInit, Input} from '@angular/core';
import { Brand } from '../../model/Brand';
import { BrandService } from '../../services/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  @Input() brand: Brand;

  constructor(private service: BrandService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
