import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flavour } from '../model/Flavour';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class FlavourService {

  private apiUrl = 'http://localhost:3000/flavours';

  constructor(private http: HttpClient) {}

  getFlavours(): Observable<Flavour[]> {
    return this.http.get<Flavour[]>(this.apiUrl);
  }

  deleteFlavour(flavour: Flavour): Observable<Flavour> {
    const url = `${this.apiUrl}/${flavour._id}`;
    return this.http.delete<Flavour>(url);
  }

  updateFlavourReminder(flavour: Flavour): Observable<Flavour> {
    const url = `${this.apiUrl}/${flavour._id}`;
    return this.http.put<Flavour>(url, flavour, httpOptions);
  }

  addFlavour(flavour: Flavour): Observable<Flavour> {
    return this.http.post<Flavour>(this.apiUrl, flavour, httpOptions);
  }
}
