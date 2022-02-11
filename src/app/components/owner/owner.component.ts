import { Component, OnInit } from '@angular/core';
import { Owner } from '../../model/Owner';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  owners: Owner[] = [];

  constructor(private ownerService: OwnerService) { 
  }

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe((owners) => (this.owners = owners));
  }

}
