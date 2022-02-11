import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crisp } from '../model/Crisp';

@Injectable({
  providedIn: 'root'
})
export class CrispService {

  private apiUrl = 'http://localhost:3000/crisps';

  constructor(private http: HttpClient) {}

  getCrisps(): Observable<Crisp[]> {
    return this.http.get<Crisp[]>(this.apiUrl);
  }
}
