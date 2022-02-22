import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AboutComponent } from './content/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandAddComponent } from './components/brands/brand-add/brand-add.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { BrandEditComponent } from './components/brands/brand-edit/brand-edit.component';
import { BrandItemComponent } from './components/brands/brand-item/brand-item.component';
import { ContactComponent } from './content/contact/contact.component';
import { CrispAddComponent } from './components/crisps/crisp-add/crisp-add.component';
import { CrispComponent } from './components/crisps/crisp/crisp.component';
import { CrispEditComponent } from './components/crisps/crisp-edit/crisp-edit.component';
import { CrispItemComponent } from './components/crisps/crisp-item/crisp-item.component';
import { FlavourAddComponent } from './components/flavours/flavour-add/flavour-add.component';
import { FlavourComponent } from './components/flavours/flavour/flavour.component';
import { FlavourEditComponent } from './components/flavours/flavour-edit/flavour-edit.component';
import { FlavourItemComponent } from './components/flavours/flavour-item/flavour-item.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './helpers/not-found/not-found.component';
import { OwnerAddComponent } from './components/owners/owner-add/owner-add.component';
import { OwnerComponent } from './components/owners/owner/owner.component';
import { OwnerEditComponent } from './components/owners/owner-edit/owner-edit.component';
import { OwnerItemComponent } from './components/owners/owner-item/owner-item.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BrandAddComponent,
    BrandComponent,
    BrandEditComponent,
    BrandItemComponent,
    ContactComponent,
    CrispAddComponent,
    CrispComponent,
    CrispEditComponent,
    CrispItemComponent,
    FlavourAddComponent,
    FlavourComponent,
    FlavourEditComponent,
    FlavourItemComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    OwnerAddComponent,
    OwnerComponent,
    OwnerEditComponent,
    OwnerItemComponent,
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
