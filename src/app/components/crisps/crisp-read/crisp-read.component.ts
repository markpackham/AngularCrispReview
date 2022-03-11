import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Crisp } from '../../../model/Crisp';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-crisp-read',
  templateUrl: './crisp-read.component.html',
  styleUrls: ['./crisp-read.component.css']
})
export class CrispReadComponent implements OnInit {

  crisps: Crisp[] = [];
  deleteMsg!: string;
  searchTerm!: string;
  orderCrispName: string = 'crisp_name';

  @Output() onDeleteCrisp: EventEmitter<Crisp> = new EventEmitter();

  private apiItemPath = 'crisps';

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.getAllCrisps();
  }

  clearSearch(){
    this.searchTerm = "";
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

}
