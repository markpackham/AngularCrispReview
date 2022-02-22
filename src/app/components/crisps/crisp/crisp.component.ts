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

  constructor(private crispService: CrispService) { 
  }

  ngOnInit(): void {
    this.crispService.getCrisps().subscribe((crisps) => (this.crisps = crisps));
  }

  addCrisp(crisp: Crisp) {
    this.crispService.addCrisp(crisp).subscribe((crisp) => this.crisps.push(crisp));
  }

  

}
