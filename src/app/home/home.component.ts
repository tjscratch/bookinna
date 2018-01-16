import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerUrl: any= [];
  offers = [];
  offersArray: any;
  constructor(private _DataService: DataService) { }

  ngOnInit() {
    this._DataService.GetBanners().subscribe(data => {
      this.bannerUrl = data['Slider'][0].Image;
      this.offersArray = data['SectionLayouts'][0].OfferLayouts;
      this.offersArray.map(item => {
        Object.values(item).map((offersArray, key) => {
          if (key >= 2) {
            this.offers.push(offersArray);
          }
        });
      });
      console.log(this.offers);
  });
  }
}
