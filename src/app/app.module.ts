import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { Daterangepicker } from 'ng2-daterangepicker';

import { BsDatepickerModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BestoffersComponent } from './bestoffers/bestoffers.component';
import { FooterComponent } from './footer/footer.component';
import { SearchFormComponent } from './packages-search-form/packages-search-form.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { AviaComponent } from './avia/avia.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BestoffersComponent,
    FooterComponent,
    SearchFormComponent,
    PackageSearchComponent,
    AviaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    Daterangepicker,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
