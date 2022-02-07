import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FlavourComponent } from './components/flavour/flavour.component';
import { BrandComponent } from './components/brand/brand.component';
import { CrispComponent } from './components/crisp/crisp.component';
import { OwnerComponent } from './components/owner/owner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FlavourComponent,
    BrandComponent,
    CrispComponent,
    OwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
