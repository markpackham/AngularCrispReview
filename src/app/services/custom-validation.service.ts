import { Injectable } from '@angular/core';
import { AbstractControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  private apiUrlBrands = 'http://localhost:3000/brands';
  private apiUrlCrisps = 'http://localhost:3000/crisps';
  private apiUrlFlavours = 'http://localhost:3000/flavours';
  private apiUrlOwners = 'http://localhost:3000/owners';

  constructor(private http: HttpClient) { }

  // Respond as to whether or not the brand name is taken 
  validateBrandNameNotTaken(control: AbstractControl) {
    return this.checkBrandNameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { brand_nameTaken: true };
      })
    );
  }

  // See if brand name already taken in database
  checkBrandNameNotTaken(brand_name: string): Observable<boolean> {
    return this.http.get(this.apiUrlBrands).pipe(
      map((brandList: any) => 
      brandList.filter((brand: { brand_name: string; }) => brand.brand_name === brand_name)
      ),
      map(brands => !brands.length)
    );
  }


  validateCrispNameNotTaken(control: AbstractControl) {
    return this.checkCrispNameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { crisp_nameTaken: true };
      })
    );
  }

  checkCrispNameNotTaken(crisp_name: string): Observable<boolean> {
    return this.http.get(this.apiUrlCrisps).pipe(
      map((crispList: any) => 
      crispList.filter((crisp: { crisp_name: string; }) => crisp.crisp_name === crisp_name)
      ),
      map(crisps => !crisps.length)
    );
  }


  validateFlavourNameNotTaken(control: AbstractControl) {
    return this.checkFlavourNameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { flavour_nameTaken: true };
      })
    );
  }

  checkFlavourNameNotTaken(flavour_name: string): Observable<boolean> {
    return this.http.get(this.apiUrlFlavours).pipe(
      map((flavourList: any) => 
      flavourList.filter((flavour: { flavour_name: string; }) => flavour.flavour_name === flavour_name)
      ),
      map(flavours => !flavours.length)
    );
  }


  validateOwnerNameNotTaken(control: AbstractControl) {
    return this.checkOwnerNameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { owner_nameTaken: true };
      })
    );
  }

  checkOwnerNameNotTaken(owner_name: string): Observable<boolean> {
    return this.http.get(this.apiUrlOwners).pipe(
      map((ownerList: any) => 
      ownerList.filter((owner: { owner_name: string; }) => owner.owner_name === owner_name)
      ),
      map(owners => !owners.length)
    );
  }

}
