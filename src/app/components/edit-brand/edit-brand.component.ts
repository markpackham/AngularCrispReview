import { Component, OnInit, Input} from '@angular/core';
import { Brand } from '../../model/Brand';
import { BrandService } from '../../services/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {
  @Input() brand: Brand;

  constructor(private service: BrandService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
