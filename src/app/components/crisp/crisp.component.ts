import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Crisp} from '../../model/Crisp';


@Component({
  selector: 'app-crisp',
  templateUrl: './crisp.component.html',
  styleUrls: ['./crisp.component.css']
})
export class CrispComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
