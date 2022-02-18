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

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  deleteOwner(_id: any): Observable<any> {
    let ids = _id;
    return this.http.delete(`${this.apiUrl}/delete/${ids}`);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    const url = `${this.apiUrl}/${owner._id}`;
    return this.http.put<Owner>(url, owner, httpOptions);
  }

  addOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner, httpOptions);
  }
}
