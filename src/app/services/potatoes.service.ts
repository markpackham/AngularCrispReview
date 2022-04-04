import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export interface Potato{
  potato_name: string,
  potato_country: string
}


@Injectable({
  providedIn: 'root'
})
export class PotatoesService {

  private apiUrl = `http://localhost:3000/potatoes`;

  constructor(private http: HttpClient) { }

  getPotatoes(): Observable<Potato[]> {
    return this.http.get<Potato[]>(this.apiUrl);
  }
}
