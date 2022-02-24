import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisp } from '../model/Crisp';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CrispService {

  private apiUrl = 'http://localhost:3000/crisps';

  constructor(private http: HttpClient) {}

  addCrisp(crisp: Crisp): Observable<Crisp> {
    return this.http.post<Crisp>(this.apiUrl, crisp, httpOptions);
  }

  deleteCrisp(_id: any): Observable<any> {
    let ids = _id;
    return this.http.delete(`${this.apiUrl}/delete/${ids}`);
  }

  getCrisp(_id: any): Observable<Crisp> {
    let id = _id;
    return this.http.get<Crisp>(`${this.apiUrl}/${id}`);
  }

  getCrisps(): Observable<Crisp[]> {
    return this.http.get<Crisp[]>(this.apiUrl);
  }

  updateCrisp(data: any, _id: any): Observable<any> {
    let id = _id;
    return this.http.put(`${this.apiUrl}/update/${id}`,data);
  }

}

