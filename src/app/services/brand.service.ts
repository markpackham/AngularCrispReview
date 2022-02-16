import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  deleteBrand(_id: any): Observable<any> {
    let ids = _id;
    return this.http.delete(`${this.apiUrl}/${ids}`);
  }

  updateBrandReminder(brand: Brand): Observable<Brand> {
    const url = `${this.apiUrl}/${brand._id}`;
    return this.http.put<Brand>(url, brand, httpOptions);
  }

  addBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.apiUrl, brand, httpOptions);
  }

}

