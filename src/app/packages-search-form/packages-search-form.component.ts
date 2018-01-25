import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { ru } from 'ngx-bootstrap/locale';
defineLocale('ru', ru);

@Component({
  selector: 'app-packages-search-form',
  templateUrl: './packages-search-form.component.html',
  styleUrls: ['./packages-search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public showForm = true;
  public checkDate: any;
  months = ['ян', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  currentLocation: any;
  // Параметры для поиска
  locationFromId: any;
  locationToId: any;
  UrlDate: any;
  StartVoyageDate: any;
  EndVoyageDate: any;
  // Параметры для поиска
  locationTo: any;
  locationFrom: any = false;
  searchedLocationsTo: any;
  searchedLocationsFrom: any;
  selectedLocation: any;
  peoleCounter = false;
  options: BsDatepickerConfig;
  locale = 'ru';

  selectText (event) {
    event.target.select();
  }
  searchLocations(value, input) {
    if (value.length >= 3) {
      const term = value;
      this._DataService.GetInputedLocations(term).subscribe(data => {
        if (input === 'locationFrom') {
          this.searchedLocationsFrom = data;
        }else {
          this.searchedLocationsTo = data;
        }
      });
    }
  }
  selectLocation(input, locationId, locationName, locationCountry) {
    if (input === 'locationFrom') {
      this.currentLocation = `${locationName}, ${locationCountry}`;
      this.searchedLocationsFrom = false;
    }else {
      this.selectedLocation = `${locationName}, ${locationCountry}`;
      this.locationToId = locationId;
      this.searchedLocationsTo = false;
    }
  }
  getCurrentDate() {
    const date = new Date();
    const currentDate = `${date.getDate()} ${this.months[date.getMonth()]}, ${this.weekDay[date.getDay()]}`;
    const week = new Date(date.setDate(date.getDate() + 7));
    const inWeek = `${week.getDate()} ${this.months[week.getMonth()]}, ${this.weekDay[week.getDay()]}`;
    return `${currentDate} \u2013 ${inWeek}`;
}
  checkdate(val) {
    const dateFrom = val[0];
    const dateTo = val[1];
    const dayFrom = (dateFrom.getDate() < 10) ? `0${dateFrom.getDate()}` : `${dateFrom.getDate()}`;
    const dayTo = (dateTo.getDate() < 10) ? `0${dateTo.getDate()}` : `${dateTo.getDate()}`;
    const monthFrom = (dateFrom.getMonth() + 1 < 10) ? `0${dateFrom.getMonth() + 1}` : `${dateFrom.getMonth() + 1}`;
    const monthTo = (dateTo.getMonth() + 1 < 10) ? `0${dateTo.getMonth() + 1}` : `${dateTo.getMonth() + 1}`;
    const startDate = `${dayFrom} ${this.months[dateFrom.getMonth()]}, ${this.weekDay[dateFrom.getDay()]}`;
    const endDate = `${dayTo} ${this.months[dateTo.getMonth()]}, ${this.weekDay[dateTo.getDay()]}`;
    this.checkDate = `${startDate} \u2013 ${endDate}`;
    this.StartVoyageDate = `${dateFrom.getFullYear()}-${monthFrom}-${dayFrom}`;
    this.EndVoyageDate = `${dateTo.getFullYear()}-${monthTo}-${dayTo}`;
    this.UrlDate = `${dayFrom}.${monthFrom}.${dateFrom.getFullYear()}-${dayTo}.${monthTo}.${dateTo.getFullYear()}`;
  }
  showPeopleCounter() {
    this.peoleCounter = ! this.peoleCounter;
  }
  startSearch() {
    const searchUrl = `${this.locationFromId}-${this.locationToId}-${this.UrlDate}-0-2-`;
    const searchParams = `Adult=2&ArrivalId=${this.locationToId}&DepartureId=${this.locationFromId}&EndVoyageDate=${this.EndVoyageDate}&StartVoyageDate=${this.StartVoyageDate}&TicketClass=0`;
    this.router.navigate(['packages/search', searchUrl]);
    this._DataService.getPackagesAvia(searchParams).subscribe(data => {
      console.log(data);
    });
    this._DataService.getPackagesHotels(searchParams).subscribe(data => {
      console.log(data);
    });
  }
  constructor(private _localeService: BsLocaleService, private router: Router, private _DataService: DataService) {
    this._localeService.use(this.locale);
  }
  ngOnInit() {
    this._DataService.GetCurrentLocation().subscribe(data => {
      this.currentLocation = `${data['Name']}, ${data['CountryName']}`;
      this.locationFromId = data['Id'];
    });
  }
}
