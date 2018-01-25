import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { AviaComponent } from './avia/avia.component';

const routes: Routes = [
  { path: '', redirectTo: '/packages', pathMatch: 'full' },
  { path: 'packages',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'search/:searchParams',
        component: PackageSearchComponent
      }
    ]
  },
  { path: 'avia', component: AviaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
