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

  private apiUrl = 'http://localhost:3000/crisps';

  crisps: Crisp[] = [];

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    this.getCrisps().subscribe((crisps) => (this.crisps = crisps));
  }

  getCrisps(): Observable<Crisp[]> {
    return this.http.get<Crisp[]>(this.apiUrl);
  }
}
