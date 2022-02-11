import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Flavour} from '../../model/Flavour';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.css']
})
export class FlavourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
