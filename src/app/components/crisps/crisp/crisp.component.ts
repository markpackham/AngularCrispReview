import { Component, OnInit } from '@angular/core';
import { Crisp } from '../../../model/Crisp';
import { CrispService } from '../../../services/crisp.service';

@Component({
  selector: 'app-crisp',
  templateUrl: './crisp.component.html',
  styleUrls: ['./crisp.component.css']
})
export class CrispComponent implements OnInit {

  crisps: Crisp[] = [];
  orderReviewScore: string = 'review_score';

  constructor(private service: CrispService) { 
  }

  ngOnInit(): void {
    this.service.getCrisps().subscribe((crisps) => (this.crisps = crisps));
  }

  getAllCrisps(){
    this.service.getCrisps().subscribe((crisps) => (this.crisps = crisps));
  }

}
