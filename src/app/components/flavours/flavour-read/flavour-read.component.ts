import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Flavour } from '../../../model/Flavour';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-flavour-read',
  templateUrl: './flavour-read.component.html',
  styleUrls: ['./flavour-read.component.css']
})
export class FlavourReadComponent implements OnInit {

  flavours: Flavour[] = [];
  deleteMsg!: string;
  searchTerm!: string;
  orderFlavourName: string = 'flavour_name';

  private apiItemPath = 'flavours';

  @Output() onDeleteFlavour: EventEmitter<Flavour> = new EventEmitter();

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.getAllFlavours();
  }

  clearSearch(){
    this.searchTerm = "";
  }

  onDelete(id: any) {
    this.service.deleteItem(this.apiItemPath, id).subscribe(()=>{
      this.deleteMsg = "Deletion done!";
      this.getAllFlavours();
    });
  }

  getAllFlavours(){
    this.service.getItems(this.apiItemPath).subscribe((flavours) => (this.flavours = flavours));
  }

}
