import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flavour } from '../../model/Flavour';
import { FlavourService } from '../../services/flavour.service';

@Component({
  selector: 'app-flavour-item',
  templateUrl: './flavour-item.component.html',
  styleUrls: ['./flavour-item.component.css']
})
export class FlavourItemComponent implements OnInit {
  @Input() flavour: Flavour;
  @Output() onDeleteBrand: EventEmitter<Flavour> = new EventEmitter();

  constructor(private service: FlavourService) { }

  ngOnInit(): void {
  }

  onDelete(id: any) {
    this.service.deleteFlavour(id).subscribe((res)=>{
      console.log(res,'deleteFlavour');
    });
  }

  onUpdate(id: any) {
  }

}
