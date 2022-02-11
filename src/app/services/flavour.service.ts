import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flavour } from '../model/Flavour';

@Injectable({
  providedIn: 'root'
})
export class FlavourService {

  private apiUrl = 'http://localhost:3000/flavours';

  constructor(private http: HttpClient) {}

  getFlavours(): Observable<Flavour[]> {
    return this.http.get<Flavour[]>(this.apiUrl);
  }
}
