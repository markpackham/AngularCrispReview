import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crisp } from '../../model/Crisp';
import { CrispService } from '../../services/crisp.service';

@Component({
  selector: 'app-crisp-item',
  templateUrl: './crisp-item.component.html',
  styleUrls: ['./crisp-item.component.css']
})
export class CrispItemComponent implements OnInit {
  @Input() crisp: Crisp;
  @Output() onDeleteBrand: EventEmitter<Crisp> = new EventEmitter();

  constructor(private service: CrispService) { }

  ngOnInit(): void {
  }

  onDelete(id: any) {
    this.service.deleteCrisp(id).subscribe((res)=>{
      location.reload();
      console.log(res,'deleteCrisp');
    });
  }

  onUpdate(id: any) {
  }

}
