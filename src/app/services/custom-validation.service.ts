import { Injectable } from '@angular/core';
import { AbstractControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private http: HttpClient) { }

  validateFlavourNameNotTaken(control: AbstractControl) {
    return this.checkFlavourNameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { flavour_nameTaken: true };
      })
    );
  }

  checkFlavourNameNotTaken(flavour_name: string): Observable<boolean> {
    return this.http.get("http://localhost:3000/flavours").pipe(
      map((flavourList: any) => 
      flavourList.filter((flavour: { flavour_name: string; }) => flavour.flavour_name === flavour_name)
      ),
      map(flavours => !flavours.length)
    );
  }

}
