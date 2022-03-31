import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';

import { AboutComponent } from './content/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AsideComponent } from './layouts/aside/aside.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { BrandCreateComponent } from './components/brands/brand-create/brand-create.component';
import { BrandReadComponent } from './components/brands/brand-read/brand-read.component';
import { ContactComponent } from './content/contact/contact.component';
import { CrispComponent } from './components/crisps/crisp/crisp.component';
import { CrispCreateComponent } from './components/crisps/crisp-create/crisp-create.component';
import { CrispReadComponent } from './components/crisps/crisp-read/crisp-read.component';
import { CrudService } from './services/crud.service';
import { FaqComponent } from './content/faq/faq.component';
import { FlavourComponent } from './components/flavours/flavour/flavour.component';
import { FlavourCreateComponent } from './components/flavours/flavour-create/flavour-create.component';
import { FlavourReadComponent } from './components/flavours/flavour-read/flavour-read.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './helpers/not-found/not-found.component';
import { OwnerComponent } from './components/owners/owner/owner.component';
import { OwnerCreateComponent } from './components/owners/owner-create/owner-create.component';
import { OwnerReadComponent } from './components/owners/owner-read/owner-read.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    AsideComponent,
    BrandComponent,
    BrandCreateComponent,
    BrandReadComponent,
    ContactComponent,
    CrispComponent,
    CrispCreateComponent,
    CrispReadComponent,
    FaqComponent,
    FlavourComponent,
    FlavourCreateComponent,
    FlavourReadComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    OwnerComponent,
    OwnerCreateComponent,
    OwnerReadComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    OrderModule,
    ReactiveFormsModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
