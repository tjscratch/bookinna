import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss'],

})
export class PackageSearchComponent implements OnInit {

  showForm = false;


  constructor(private _DataService: DataService) { }

  ngOnInit() {
  }

}
