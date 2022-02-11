import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Flavour} from '../../model/Flavour';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.css']
})
export class FlavourComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/flavours';

  flavours: Flavour[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getFlavours().subscribe((flavours) => (this.flavours = flavours));
  }

  getFlavours(): Observable<Flavour[]> {
    return this.http.get<Flavour[]>(this.apiUrl);
  }

}
