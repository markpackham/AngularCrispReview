import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PotatoesService {

  private apiUrl = `http://localhost:3000/potatoes`;

  constructor(private http: HttpClient) { }

  getPotatoes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
