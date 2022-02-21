import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { BrandComponent } from './components/brand/brand.component';
import { CrispComponent } from './components/crisp/crisp.component';
import { FlavourComponent } from './components/flavour/flavour.component';
import { OwnerComponent } from './components/owner/owner.component';
import { NotFoundComponent } from './helpers/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'brands/:id', component: BrandComponent },
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
