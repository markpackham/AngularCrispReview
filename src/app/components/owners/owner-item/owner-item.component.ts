import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Owner } from '../../../model/Owner';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-item',
  templateUrl: './owner-item.component.html',
  styleUrls: ['./owner-item.component.css']
})
export class OwnerItemComponent implements OnInit {
  @Input() owner: Owner;
  @Output() onDeleteBrand: EventEmitter<Owner> = new EventEmitter();
  deleteMsg: any;

  constructor(private service: OwnerService) { }

  ngOnInit(): void {
  }

  onDelete(id: any) {
    this.service.deleteOwner(id).subscribe((res)=>{
      location.reload();
      console.log(res,'deleteOwner');
      this.deleteMsg = "Deletion done!";
    });
  }

  onUpdate(id: any) {
  }
  
}
