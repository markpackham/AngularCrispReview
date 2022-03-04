import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../../model/Brand';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-brand-read',
  templateUrl: './brand-read.component.html',
  styleUrls: ['./brand-read.component.css']
})
export class BrandReadComponent implements OnInit {

  brands: Brand[] = [];
  searchTerm!: string;
  deleteMsg!: string;

  private apiItemPath = 'brands';

  @Output() onDeleteBrand: EventEmitter<Brand> = new EventEmitter();

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  clearSearch(){
    this.searchTerm = "";
  }

  onDelete(id: any) {
    this.service.deleteItem(this.apiItemPath,id).subscribe(()=>{
      this.deleteMsg = "Deletion done!";
      this.getAllBrands();
    });
  }

  getAllBrands(){
    this.service.getItems(this.apiItemPath).subscribe((brands) => (this.brands = brands));
  }

}
