import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { AviaComponent } from './avia/avia.component';

const routes: Routes = [
  { path: '', redirectTo: '/packages', pathMatch: 'full' },
  { path: 'packages', component: HomeComponent, pathMatch: 'full' },
  { path: 'packages/search/:searchParams', component: PackageSearchComponent, pathMatch: 'full' },
  { path: 'avia', component: AviaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
