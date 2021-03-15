/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findridesearch-result',
  templateUrl: './findridesearch-result.page.html',
  styleUrls: ['./findridesearch-result.page.scss'],
})
export class FindridesearchResultPage implements OnInit {
  pickupLoc: any;
  destLoc: any;
  date: any;
  time: any;
  starsCount: number;
  ridesList: any;
  constructor(public service: DataService, public route: Router) {
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

    this.ridesList = [{
      pickup: this.pickupLoc,
      destination: this.destLoc,
      image: '../../assets/image/images.jpg',
      name: 'Allen Chanadenar',
      car: 'Toyota prius 007,G5 5867, Mini white',
      numberPlate: '5867 Traffic way',
      cost: '500'
    }, {
      pickup: this.pickupLoc,
      destination: this.destLoc,
      image: '../../assets/image/chat2.jpg',
      name: 'Julia',
      car: 'Toyota prius 007,G5 7855, Mini white',
      numberPlate: '7855 Traffic way',
      cost: '480'

    }, {
      pickup: this.pickupLoc,
      destination: this.destLoc,
      image: '../../assets/image/chat6.jpg',
      name: 'Barbie',
      car: 'Toyota prius 007,G5 7876, Mini white',
      numberPlate: '7876 Traffic way',
      cost: '800'

    }, {
      pickup: this.pickupLoc,
      destination: this.destLoc,
      image: '../../assets/image/chat7.jpg',
      name: 'Cristina',
      car: 'Toyota prius 007,G5 7856, Mini white',
      numberPlate: '7856 Traffic way',
      cost: '640'

    }];
  }

  ngOnInit() {
  }
  goforBooking(cards) {
    console.log(cards);
    this.route.navigate(['ridedetails', cards]);
  }
}
