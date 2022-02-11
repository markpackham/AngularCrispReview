import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlavourComponent } from './components/flavour/flavour.component';
import { BrandComponent } from './components/brand/brand.component';
import { CrispComponent } from './components/crisp/crisp.component';
import { OwnerComponent } from './components/owner/owner.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FlavourItemComponent } from './components/flavour-item/flavour-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FlavourComponent,
    BrandComponent,
    CrispComponent,
    OwnerComponent,
    HeaderComponent,
    FooterComponent,
    FlavourItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
