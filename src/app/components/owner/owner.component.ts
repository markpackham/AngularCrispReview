import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../../model/Owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/owners';

  owners: Owner[] = [];

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    this.getOwners().subscribe((owners) => (this.owners = owners));
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

}
