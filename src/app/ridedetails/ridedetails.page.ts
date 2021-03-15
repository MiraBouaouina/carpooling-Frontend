/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.page.html',
  styleUrls: ['./ridedetails.page.scss'],
})
export class RidedetailsPage implements OnInit {
  date: any;
  time: any;
  pickupLoc: any;
  destLoc: any;
  rideData: any;

  constructor(public service: DataService, public actvroute: ActivatedRoute, public route: Router) {
    this.service.locationFindRide.subscribe(filter => {
      this.pickupLoc = filter;
    });
    this.service.locationFindRideDes.subscribe(filter => {
      this.destLoc = filter;
    });
    this.service.dateForFindride.subscribe(filter => {
      this.date = filter;
    });
    this.service.timeForFindride.subscribe(filter => {
      this.time = filter;
    });
    this.actvroute.params.subscribe(params => {
      this.rideData = params;
    });
  }

  ngOnInit() {
  }
  goforSeats() {
    this.service.totalFare = this.rideData.cost;
    this.route.navigate(['totalpassengers', { value: 'ticketBook' }]);
  }
}
