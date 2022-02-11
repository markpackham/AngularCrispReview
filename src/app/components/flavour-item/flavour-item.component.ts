import { Component, OnInit, Input } from '@angular/core';
import { Flavour } from '../../model/Flavour';

@Component({
  selector: 'app-flavour-item',
  templateUrl: './flavour-item.component.html',
  styleUrls: ['./flavour-item.component.css']
})
export class FlavourItemComponent implements OnInit {
  @Input() flavour: Flavour;

  constructor() {
 
   }

  ngOnInit(): void {
  }

}
