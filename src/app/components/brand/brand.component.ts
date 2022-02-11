import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../../model/Brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/brands';

  brands: Brand[] = [];

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    this.getBrands().subscribe((brands) => (this.brands = brands));
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

}
