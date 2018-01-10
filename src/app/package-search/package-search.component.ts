import { Component, OnInit, Directive } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss'],

})
export class PackageSearchComponent implements OnInit {

  constructor(private _DataService: DataService) { }

  ngOnInit() {
  }

}
