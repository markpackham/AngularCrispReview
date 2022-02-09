import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlavourComponent } from './components/flavour/flavour.component';
import { BrandComponent } from './components/brand/brand.component';
import { CrispComponent } from './components/crisp/crisp.component';
import { OwnerComponent } from './components/owner/owner.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FlavourComponent,
    BrandComponent,
    CrispComponent,
    OwnerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
