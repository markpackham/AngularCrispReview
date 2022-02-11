import { Component, OnInit, Input } from '@angular/core';
import { Crisp } from '../../model/Crisp';

@Component({
  selector: 'app-crisp-item',
  templateUrl: './crisp-item.component.html',
  styleUrls: ['./crisp-item.component.css']
})
export class CrispItemComponent implements OnInit {
  @Input() crisp: Crisp;

  constructor() { }

  ngOnInit(): void {
  }

}
