import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { BrandCreateComponent } from './components/brands/brand-create/brand-create.component';
import { BrandReadComponent } from './components/brands/brand-read/brand-read.component';
import { CrispComponent } from './components/crisps/crisp/crisp.component';
import { FlavourComponent } from './components/flavours/flavour/flavour.component';
import { OwnerComponent } from './components/owners/owner/owner.component';
import { NotFoundComponent } from './helpers/not-found/not-found.component';
import { CrispEditComponent } from './components/crisps/crisp-edit/crisp-edit.component';
import { FlavourEditComponent } from './components/flavours/flavour-edit/flavour-edit.component';
import { OwnerEditComponent } from './components/owners/owner-edit/owner-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'brands/brands-create', component: BrandCreateComponent },
  { path: 'brands/brands-read', component: BrandReadComponent },
  { path: 'crisps', component: CrispComponent },
  { path: 'flavours', component: FlavourComponent },
  { path: 'owners', component: OwnerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
