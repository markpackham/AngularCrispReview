import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../model/Brand';
import { Crisp } from '../../../model/Crisp';
import { Flavour } from '../../../model/Flavour';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-crisp-detail',
  templateUrl: './crisp-detail.component.html',
  styleUrls: ['./crisp-detail.component.css']
})
export class CrispDetailComponent implements OnInit {

  brands: Brand[] = [];
  crisps: Crisp[] = [];
  flavours: Flavour[] = [];

  getParamId: any;

  private apiItemPath = 'crisps';
  private apiItemPathBrand = 'brands';
  private apiItemPathFlavour = 'flavours';

  constructor(private service: CrudService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    this.getAllBrands();

    this.getAllFlavours();
  }

  getAllBrands(){
    this.service.getItems(this.apiItemPathBrand).subscribe((brands) => (this.brands = brands));
  }

  getAllFlavours(){
    this.service.getItems(this.apiItemPathFlavour).subscribe((flavours) => (this.flavours = flavours));
  }

}
