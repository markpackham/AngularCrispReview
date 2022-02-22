import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AboutComponent } from './content/about/about.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CrispAddComponent } from './components/crisp-add/crisp-add.component';
import { AddFlavourComponent } from './components/add-flavour/add-flavour.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandComponent } from './components/brand/brand.component';
import { BrandItemComponent } from './components/brand-item/brand-item.component';
import { CrispComponent } from './components/crisp/crisp.component';
import { CrispItemComponent } from './components/crisp-item/crisp-item.component';
import { FlavourComponent } from './components/flavour/flavour.component';
import { FlavourItemComponent } from './components/flavour-item/flavour-item.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './helpers/not-found/not-found.component';
import { OwnerComponent } from './components/owner/owner.component';
import { OwnerItemComponent } from './components/owner-item/owner-item.component';
import { ContactComponent } from './content/contact/contact.component';
import { EditBrandComponent } from './components/edit-brand/edit-brand.component';
import { CrispEditComponent } from './components/crisp-edit/crisp-edit';
import { EditFlavourComponent } from './components/edit-flavour/edit-flavour.component';
import { OwnerEditComponent } from './components/owner-edit/owner-edit.component';

@NgModule({
  declarations: [
    AboutComponent,
    BrandAddComponent,
    CrispAddComponent,
    AddFlavourComponent,
    AddOwnerComponent,
    AppComponent,
    BrandComponent,
    BrandItemComponent,
    CrispComponent,
    CrispItemComponent,
    FlavourComponent,
    FlavourItemComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    OwnerComponent,
    OwnerItemComponent,
    ContactComponent,
    EditBrandComponent,
    CrispEditComponent,
    EditFlavourComponent,
    OwnerEditComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
