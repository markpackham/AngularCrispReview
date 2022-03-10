import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { NgModule } from '@angular/core';


import { AboutComponent } from './content/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandComponent } from './components/brands/brand/brand.component';
import { ContactComponent } from './content/contact/contact.component';
import { CrispComponent } from './components/crisps/crisp/crisp.component';
import { CrudService } from './services/crud.service';
import { FlavourComponent } from './components/flavours/flavour/flavour.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './helpers/not-found/not-found.component';
import { OwnerComponent } from './components/owners/owner/owner.component';
import { BrandCreateComponent } from './components/brands/brand-create/brand-create.component';
import { BrandReadComponent } from './components/brands/brand-read/brand-read.component';
import { CrispReadComponent } from './components/crisps/crisp-read/crisp-read.component';
import { CrispCreateComponent } from './components/crisps/crisp-create/crisp-create.component';
import { FlavourCreateComponent } from './components/flavours/flavour-create/flavour-create.component';
import { FlavourReadComponent } from './components/flavours/flavour-read/flavour-read.component';
import { OwnerReadComponent } from './components/owners/owner-read/owner-read.component';
import { OwnerCreateComponent } from './components/owners/owner-create/owner-create.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { CrispDetailComponent } from './components/crisps/crisp-detail/crisp-detail.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BrandComponent,
    ContactComponent,
    CrispComponent,
    FlavourComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    OwnerComponent,
    BrandCreateComponent,
    BrandReadComponent,
    CrispReadComponent,
    CrispCreateComponent,
    FlavourCreateComponent,
    FlavourReadComponent,
    OwnerReadComponent,
    OwnerCreateComponent,
    AsideComponent,
    CrispDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    ReactiveFormsModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
