/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-returntime',
  templateUrl: './returntime.page.html',
  styleUrls: ['./returntime.page.scss'],
})
export class ReturntimePage implements OnInit {
  pickupFrom: any;
  returnSchedule: any;
  header = 'What time will you pick up your passenger?';
  headerFindaride = 'What time would you like to go?';

  timeSelected = '';
  return_journey_time: any;
  comingFrom: any;
  findRideDate: any;
  findRidePickupLoc: any;
  constructor(public service: DataService, public router: Router, public actcRoute: ActivatedRoute) {
    this.actcRoute.params.subscribe(params => {
      this.comingFrom = params.value;
    });
    this.service.showDestination.subscribe(filter => {
      this.pickupFrom = filter;
    });

    this.service.returnDate.subscribe(filter => {
      this.returnSchedule = filter;
    });

    this.service.dateForFindride.subscribe(filter => {
      this.findRideDate = filter;
    });
    this.service.locationFindRide.subscribe(filter => {
      this.findRidePickupLoc = filter;
    });


  }

  ngOnInit() {
  }
  gotoCompelte(returnTiming) {
    this.return_journey_time = returnTiming;
    if (this.comingFrom === 'findride') {
      this.service.findrideplanTime(this.return_journey_time);
      this.service.dateTime = false;
      this.router.navigate(['/tabs/findride']);
    } else {
      this.service.returnTimePlan(this.return_journey_time);
      this.router.navigate(['addreturndescription']);
    }

  }
}
