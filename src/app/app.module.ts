import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCrispComponent } from './components/add-crisp/add-crisp.component';
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
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/helpers/not-found/not-found.component';
import { OwnerComponent } from './components/owner/owner.component';
import { OwnerItemComponent } from './components/owner-item/owner-item.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'crisps', component: CrispComponent },
  { path: 'flavours', component: FlavourComponent },
  { path: 'owners', component: OwnerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AboutComponent,
    AddBrandComponent,
    AddCrispComponent,
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
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
