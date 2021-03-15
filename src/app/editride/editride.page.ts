/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editride',
  templateUrl: './editride.page.html',
  styleUrls: ['./editride.page.scss'],
})
export class EditridePage implements OnInit {
  editData: { head: string; route: string; }[];

  constructor(public route: Router, public service: DataService) {
    this.editData = [{
      head: 'Journey & stops',
      route: 'journey'
    }, {
      head: 'Passenger contribution',
      route: 'editpricelist'
    }, {
      head: 'Passenger options',
      route: 'passengersoption'
    }];
  }

  ngOnInit() {
  }
  gotoPages(route) {
    this.service.journey = false;
    this.route.navigate([route]);
  }
  saveData() {
    this.route.navigate(['deleteride']);

  }
}
