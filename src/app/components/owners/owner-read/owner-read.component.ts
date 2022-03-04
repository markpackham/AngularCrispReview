import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Owner } from '../../../model/Owner';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-owner-read',
  templateUrl: './owner-read.component.html',
  styleUrls: ['./owner-read.component.css']
})
export class OwnerReadComponent implements OnInit {

  owners: Owner[] = [];
  deleteMsg!: string;
  searchTerm!: string;

  private apiItemPath = 'owners';

  @Output() onDeleteOwner: EventEmitter<Owner> = new EventEmitter();

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  clearSearch(){
    this.searchTerm = "";
  }

  onDelete(id: any) {
    this.service.deleteItem(this.apiItemPath, id).subscribe(()=>{
      this.deleteMsg = "Deletion done!";
      this.getAllOwners();
    });
  }

  getAllOwners(){
    this.service.getItems(this.apiItemPath).subscribe((owners) => (this.owners = owners));
  }

}
