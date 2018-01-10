import { Component, OnInit } from '@angular/core';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import $ from 'jquery';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {
  checkDate: any;
  months = ['ян', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  currentLocation: any;
  // Параметры для поиска
  locationFromId: any;
  locationToId: any;
  checkDate_formated: any;
  StartVoyageDate: any;
  EndVoyageDate: any;
  // Параметры для поиска
  locationTo: any;
  locationFrom: any = false;
  searchedLocationsTo: any;
  searchedLocationsFrom: any;
  selectedLocation: any;
  peoleCounter = false;

  selectText (event) {
    event.target.select();
  }
  searchLocations(event, input) {
    console.log(this.locationTo);
    if (event.target.value.length >= 3) {
      const term = event.target.value;
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
    const dateFrom_fomated = val.start;
    const dateTo_fomated = val.end;
    const dateFrom = val.start._d;
    const dateTo = val.end._d;
    const startDate = `${dateFrom.getDate()} ${this.months[dateFrom.getMonth()]}, ${this.weekDay[dateFrom.getDay()]}`;
    const endDate = `${dateTo.getDate()} ${this.months[dateTo.getMonth()]}, ${this.weekDay[dateTo.getDay()]}`;
    this.checkDate_formated = `${dateFrom_fomated.format('DD.MM.YYYY')}-${dateTo_fomated.format('DD.MM.YYYY')}`;
    this.checkDate = `${startDate} \u2013 ${endDate}`;
    this.StartVoyageDate = dateFrom_fomated.format('YYYY-MM-DD');
    this.EndVoyageDate = dateTo_fomated.format('YYYY-MM-DD');
  }
  showPeopleCounter() {
    this.peoleCounter = ! this.peoleCounter;
  }
  startSearch() {
    const searchUrl = `${this.locationFromId}-${this.locationToId}-${this.checkDate_formated}-0-2-`;
    console.log(searchUrl);
    const searchParams = `Adult=2&ArrivalId=${this.locationToId}&DepartureId=${this.locationFromId}
      &EndVoyageDate=${this.EndVoyageDate}&StartVoyageDate=${this.StartVoyageDate}&TicketClass=0`;
    this.router.navigate(['packages/search', searchUrl]);
    this._DataService.getPackagesAvia(searchParams).subscribe(data => {
      console.log(data);
    });
    this._DataService.getPackagesHotels(searchParams).subscribe(data => {
      console.log(data);
    });
  }
  constructor(private daterangepickerOptions: DaterangepickerConfig, private router: Router, private _DataService: DataService) {
    this.daterangepickerOptions.settings = {
      'autoApply': true,
      autoUpdateInput: false,
      'minDate': new Date(),
      'dateLimit': 28,
      locale: {
        format: 'DD.MM.YYYY',
        'separator': ' - ',
        'daysOfWeek': [
          'Вс',
          'Пн',
          'Вт',
          'Ср',
          'Чт',
          'Пт',
          'Сб'
        ],
        'monthNames': [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабррь'
        ],
        'firstDay': 1
      },
    };
  }

  ngOnInit() {
    this._DataService.GetCurrentLocation().subscribe(data => {
      this.currentLocation = `${data['Name']}, ${data['CountryName']}`;
      this.locationFromId = data['Id'];
    });
  }
}
$(document).ready(function () {
  $('.daterangepicker_input').css('display', 'none');
});
