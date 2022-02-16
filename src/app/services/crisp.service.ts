import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getCrisps(): Observable<Crisp[]> {
    return this.http.get<Crisp[]>(this.apiUrl);
  }

  deleteCrisp(_id: any): Observable<any> {
    let ids = _id;
    return this.http.delete(`${this.apiUrl}/delete/${ids}`);
  }

  updateCrispReminder(crisp: Crisp): Observable<Crisp> {
    const url = `${this.apiUrl}/${crisp._id}`;
    return this.http.put<Crisp>(url, crisp, httpOptions);
  }

  addCrisp(crisp: Crisp): Observable<Crisp> {
    return this.http.post<Crisp>(this.apiUrl, crisp, httpOptions);
  }
}
