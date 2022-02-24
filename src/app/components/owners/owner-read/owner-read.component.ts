import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Owner } from '../../../model/Owner';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-read',
  templateUrl: './owner-read.component.html',
  styleUrls: ['./owner-read.component.css']
})
export class OwnerReadComponent implements OnInit {

  owners: Owner[] = [];
  deleteMsg!: string;
  @Output() onDeleteOwner: EventEmitter<Owner> = new EventEmitter();

  constructor(private service: OwnerService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  onDelete(id: any) {
    this.service.deleteOwner(id).subscribe((res)=>{
      console.log(res,'deleteCrisp');
      this.deleteMsg = "Deletion done!";

      this.getAllOwners();
    });
  }

  getAllOwners(){
    this.service.getOwners().subscribe((owners) => (this.owners = owners));
  }

}
