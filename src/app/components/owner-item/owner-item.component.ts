import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Owner } from '../../model/Owner';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-owner-item',
  templateUrl: './owner-item.component.html',
  styleUrls: ['./owner-item.component.css']
})
export class OwnerItemComponent implements OnInit {
  @Input() owner: Owner;
  @Output() onDeleteBrand: EventEmitter<Owner> = new EventEmitter();

  constructor(private service: OwnerService) { }

  ngOnInit(): void {
  }

  onDelete(id: any) {
    this.service.deleteOwner(id).subscribe((res)=>{
      console.log(res,'deleteOwner');
    });
  }

}
