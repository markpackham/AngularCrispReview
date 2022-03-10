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

  private apiItemPath = 'crisps';
  private apiItemPathBrand = 'brands';
  private apiItemPathFlavour = 'flavours';

  constructor(private service: CrudService) { }

  ngOnInit(): void {
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
