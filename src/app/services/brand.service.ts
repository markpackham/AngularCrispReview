import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/Brand';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) {}

  addBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.apiUrl, brand, httpOptions);
  }

  deleteBrand(_id: any): Observable<any> {
    let ids = _id;
    return this.http.delete(`${this.apiUrl}/delete/${ids}`);
  }

  getBrand(_id: any): Observable<Brand> {
    let ids = _id;
    return this.http.get<Brand>(`${this.apiUrl}/${ids}`);
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  updateBrand(data: any, _id: any): Observable<any> {
    let ids = _id;
    return this.http.put(`${this.apiUrl}/${ids}`,data);
  }



}

