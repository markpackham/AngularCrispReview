import { Component, OnInit } from '@angular/core';
import { Crisp } from '../../../model/Crisp';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-crisp',
  templateUrl: './crisp.component.html',
  styleUrls: ['./crisp.component.css']
})
export class CrispComponent implements OnInit {

  crisps: Crisp[] = [];
  crispsMessage: string = "Show Worst Crisps";
  crispsWorst: boolean = true;
  orderReviewScore: string = 'review_score';

  private apiItemPath = 'crisps';

  constructor(private service: CrudService) {
    this.crispsWorst === true; 
  }

  ngOnInit(): void {
    this.service.getItems(this.apiItemPath).subscribe((crisps) => (this.crisps = crisps));
  }

  getAllCrisps(){
    this.service.getItems(this.apiItemPath).subscribe((crisps) => (this.crisps = crisps));
  }

  showWorstCrisps(){

    if(this.crispsWorst === true)
    {
      this.crispsMessage = "Show Best Crisps";
      this.crispsWorst = false;
    }
    else{
      this.crispsMessage = "Show Worst Crisps";
      this.crispsWorst = true;
    }
  }

}
