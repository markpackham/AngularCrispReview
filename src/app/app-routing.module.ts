import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { BrandCreateComponent } from './components/brands/brand-create/brand-create.component';
import { BrandReadComponent } from './components/brands/brand-read/brand-read.component';
import { CrispComponent } from './components/crisps/crisp/crisp.component';
import { CrispCreateComponent } from './components/crisps/crisp-create/crisp-create.component';
import { CrispDetailComponent } from './components/crisps/crisp-detail/crisp-detail.component';
import { CrispReadComponent } from './components/crisps/crisp-read/crisp-read.component';
import { FlavourComponent } from './components/flavours/flavour/flavour.component';
import { FlavourCreateComponent } from './components/flavours/flavour-create/flavour-create.component';
import { FlavourReadComponent } from './components/flavours/flavour-read/flavour-read.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './helpers/not-found/not-found.component';
import { OwnerComponent } from './components/owners/owner/owner.component';
import { OwnerCreateComponent } from './components/owners/owner-create/owner-create.component';
import { OwnerReadComponent } from './components/owners/owner-read/owner-read.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'brands/brand-create', component: BrandCreateComponent },
  { path: 'brands/brand-create/:id', component: BrandCreateComponent },
  { path: 'brands/brand-read', component: BrandReadComponent },
  { path: 'crisps', component: CrispComponent },
  { path: 'crisps/crisp-create', component: CrispCreateComponent },
  { path: 'crisps/crisp-create/:id', component: CrispCreateComponent },
  { path: 'crisps/crisp-detail/:id', component: CrispDetailComponent },
  { path: 'crisps/crisp-read', component: CrispReadComponent },
  { path: 'flavours', component: FlavourComponent },
  { path: 'flavours/flavour-create', component: FlavourCreateComponent },
  { path: 'flavours/flavour-create/:id', component: FlavourCreateComponent },
  { path: 'flavours/flavour-read', component: FlavourReadComponent },
  { path: 'owners', component: OwnerComponent },
  { path: 'owners/owner-create', component: OwnerCreateComponent },
  { path: 'owners/owner-create/:id', component: OwnerCreateComponent },
  { path: 'owners/owner-read', component: OwnerReadComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
