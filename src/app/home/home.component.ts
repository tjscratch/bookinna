import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerUrl: any= [];
  constructor(private _DataService: DataService) { }

  ngOnInit() {
    this._DataService.GetMainBanner().subscribe(data => {
      // console.log(...data['SectionLayouts'][0]['OfferLayouts']);
      this.bannerUrl = data['Slider'][0].Image;
      // this.bannerUrl = `https://babeswp.com/wallpapers/original/270740.jpg`;
    });
  }
}
