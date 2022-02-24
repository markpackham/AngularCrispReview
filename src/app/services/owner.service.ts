import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../model/Owner';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiUrl = 'http://localhost:3000/owners';

  constructor(private http: HttpClient) {}

  addOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner, httpOptions);
  }

  deleteOwner(_id: any): Observable<any> {
    let ids = _id;
    return this.http.delete(`${this.apiUrl}/delete/${ids}`);
  }

  getOwner(_id: any): Observable<Owner> {
    let id = _id;
    return this.http.get<Owner>(`${this.apiUrl}/${id}`);
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  updateOwner(data: any, _id: any): Observable<any> {
    let id = _id;
    return this.http.put(`${this.apiUrl}/update/${id}`,data);
  }

}