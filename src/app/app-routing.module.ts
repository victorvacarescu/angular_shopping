import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduseComponent } from './produse/produse.component';
import { PlataCardComponent } from './plata-card/plata-card.component';
import { BasePageComponent } from './base-page/base-page.component';

const routes: Routes = [
  { path: 'base-page', component: BasePageComponent },
  { path: '',   redirectTo: '/base-page', pathMatch: 'full' },
  { path: 'produse', component: ProduseComponent },
  { path: 'plata-card/:suma', component: PlataCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
