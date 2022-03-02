import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Crisp } from '../../../model/Crisp';
import { CrispService } from '../../../services/crisp.service';

@Component({
  selector: 'app-crisp-read',
  templateUrl: './crisp-read.component.html',
  styleUrls: ['./crisp-read.component.css']
})
export class CrispReadComponent implements OnInit {

  crisps: Crisp[] = [];
  deleteMsg!: string;
  searchTerm!: string;
  @Output() onDeleteCrisp: EventEmitter<Crisp> = new EventEmitter();

  constructor(private service: CrispService) { }

  ngOnInit(): void {
    this.getAllCrisps();
  }

  onDelete(id: any) {
    this.service.deleteCrisp(id).subscribe((res)=>{
      console.log(res,'deleteCrisp');
      this.deleteMsg = "Deletion done!";

      this.getAllCrisps();
    });
  }

  getAllCrisps(){
    this.service.getCrisps().subscribe((crisps) => (this.crisps = crisps));
  }

}
