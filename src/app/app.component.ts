import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ DataService ]
})
export class AppComponent implements OnInit{
  constructor(private _DataService: DataService) { }
  ngOnInit(){
    this._DataService.getHostName();
  }
}
