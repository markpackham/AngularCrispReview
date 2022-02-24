import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



import { AboutComponent } from './content/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandComponent } from './components/brands/brand/brand.component';
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
import { BrandCreateComponent } from './components/brands/brand-create/brand-create.component';
import { BrandReadComponent } from './components/brands/brand-read/brand-read.component';
import { CrispService } from './services/crisp.service';
import { BrandService } from './services/brand.service';
import { FlavourService } from './services/flavour.service';
import { OwnerService } from './services/owner.service';
import { CrispReadComponent } from './components/crisps/crisp-read/crisp-read.component';
import { CrispCreateComponent } from './components/crisps/crisp-create/crisp-create.component';
import { FlavourCreateComponent } from './components/flavours/flavour-create/flavour-create.component';
import { FlavourReadComponent } from './components/flavours/flavour-read/flavour-read.component';
import { OwnerReadComponent } from './components/owners/owner-read/owner-read.component';
import { OwnerCreateComponent } from './components/owners/owner-create/owner-create.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BrandComponent,
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
    BrandCreateComponent,
    BrandReadComponent,
    CrispReadComponent,
    CrispCreateComponent,
    FlavourCreateComponent,
    FlavourReadComponent,
    OwnerReadComponent,
    OwnerCreateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [BrandService, CrispService, FlavourService, OwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
