import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {
  API_URLS: any = {
      SectionGet: '/api/v1/Section/Get/',
      GetOffers : '/api/v1/BestOffer/GetOffers',
      DirectoryById: '/api/v1//Dictionary/DirectoryById/',
      PackagesSearchHotels: '/api/v1//Packages/SearchHotels?AddFilter=true&',
      PackagesSearchTickets: '/api/v1//Packages/SearchTickets?AddFilter=true&',
      DictionaryHotel: '/api/v1//Dictionary/Hotel?term=',
      GetCurrentLocation: '/api/v1//Dictionary/GetCurrentLocation',
      HotelDetails: '/api/v1//Packages/HotelDetails',
      IsPackageAvailable: '/api/v1//Packages/IsPackageAvailable',
      MakeReservation: '/api/v1//PackagesOrder/Reservation',
      DictionaryAllCountries: '/api/v1//Dictionary/Country',
      BuyPage: '/api/v1//Payment/Index',
      PaymentRepricing: '/api/v1//Payment/Repricing',
      Pay: '/api/v1//Psb/Pay',
      getSmsCode: '/api/v1//Verification/SendCode',
      checkSmsCode: '/api/v1//Verification/CheckCode'
    };
  hostname: any;
  getHostName () {
      const host = location.host;
      console.log(host);
      if (host !== `inna.ru`) {
        this.hostname = `https://inna.ru`;
      } else {
        this.hostname = `http://test.inna.ru`;
      }
      return this.hostname;
      };

  constructor(private http: HttpClient) { }

  GetBanners() {
    return this.http.get(this.hostname + this.API_URLS.SectionGet + '/4');
  }
  GetCurrentLocation() {
    return this.http.get(this.hostname + this.API_URLS.GetCurrentLocation);
  }
  GetInputedLocations(term) {
    return this.http.get(this.hostname + this.API_URLS.DictionaryHotel + term);
  }
  getPackagesAvia(searchParams) {
    return this.http.get(this.hostname + this.API_URLS.PackagesSearchTickets + searchParams);
  }
  getPackagesHotels(searchParams) {
    return this.http.get(this.hostname + this.API_URLS.PackagesSearchHotels + searchParams);
  }
}
