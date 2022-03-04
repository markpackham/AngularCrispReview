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
export class CrudService {

  private apiUrl = `http://localhost:3000/`;
  private item = new Object();

  constructor(private http: HttpClient) {}

  addItem(apiItemPath: string, item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+apiItemPath, item, httpOptions);
  }

  deleteItem(apiItemPath: string, _id: any): Observable<any> {
    let ids = _id;
    return this.http.delete(`${this.apiUrl+apiItemPath}/delete/${ids}`);
  }

  getItem(apiItemPath: string, _id: any): Observable<any> {
    let id = _id;
    return this.http.get<any>(`${this.apiUrl+apiItemPath}/${id}`);
  }

  getItems(apiItemPath: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+apiItemPath);
  }

  updateItem(apiItemPath: string, data: any, _id: any): Observable<any> {
    let id = _id;
    return this.http.put(`${this.apiUrl+apiItemPath}/update/${id}`,data);
  }
}
