import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Crisp } from '../../../model/Crisp';
import { Flavour } from '../../../model/Flavour';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-crisp-read',
  templateUrl: './crisp-read.component.html',
  styleUrls: ['./crisp-read.component.css']
})
export class CrispReadComponent implements OnInit {

  crisps: Crisp[] = [];
  flavours: Flavour[] = [];
  deleteMsg!: string;
  orderFlavours: string = 'flavour_name';
  searchTerm!: string;
  searchTermFlavour!: string;
  @Output() onDeleteCrisp: EventEmitter<Crisp> = new EventEmitter();

  private apiItemPath = 'crisps';
  private apiItemFlavourPath = 'flavours';

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.getAllCrisps();
    this.getAllFlavours();
  }

  clearSearch(){
    this.searchTerm = "";
  }

  clearSearchFlavour(){
    this.searchTermFlavour = "";
  }

  onDelete(id: any) {
    this.service.deleteItem(this.apiItemPath, id).subscribe(()=>{
      this.deleteMsg = "Deletion done!";
      this.getAllCrisps();
    });
  }

  getAllCrisps(){
    this.service.getItems(this.apiItemPath).subscribe((crisps) => (this.crisps = crisps));
  }

  getAllFlavours(){
    this.service.getItems(this.apiItemFlavourPath).subscribe((flavours) => (this.flavours = flavours));
  }

}
