import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlavourComponent } from './components/flavour/flavour.component';
import { BrandComponent } from './components/brand/brand.component';
import { CrispComponent } from './components/crisp/crisp.component';
import { OwnerComponent } from './components/owner/owner.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FlavourItemComponent } from './components/flavour-item/flavour-item.component';
import { BrandItemComponent } from './components/brand-item/brand-item.component';
import { CrispItemComponent } from './components/crisp-item/crisp-item.component';
import { OwnerItemComponent } from './components/owner-item/owner-item.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCrispComponent } from './components/add-crisp/add-crisp.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { AddFlavourComponent } from './components/add-flavour/add-flavour.component';

@NgModule({
  declarations: [
    AppComponent,
    FlavourComponent,
    BrandComponent,
    CrispComponent,
    OwnerComponent,
    HeaderComponent,
    FooterComponent,
    FlavourItemComponent,
    BrandItemComponent,
    CrispItemComponent,
    OwnerItemComponent,
    AddBrandComponent,
    AddCrispComponent,
    AddOwnerComponent,
    AddFlavourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
