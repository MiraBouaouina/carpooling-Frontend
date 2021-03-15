/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-totalpassengers',
  templateUrl: './totalpassengers.page.html',
  styleUrls: ['./totalpassengers.page.scss'],
})
export class TotalpassengersPage implements OnInit {
  headerText = 'So ho many carpool passenger\'s can you take?';
  headerTextticketBook = 'So ho many carpool passenger\'s would you ride?';
  product = 0;
  show: boolean;
  passengerNo = '';
  total_Passenger: any;
  comingFrom: string;
  constructor(public route: Router, public service: DataService, public actvRoute: ActivatedRoute) {
    this.show = true;
    this.actvRoute.params.subscribe(params => {
      this.comingFrom = params.value;
    });
  }

  ngOnInit() {
  }
  updateCart(type) {
    if (type === 'add') {
      this.product += 1;
    }
    if (type === 'remove') {
      this.product -= 1;

    }
  }
  gotoDrop(total) {
    if (this.comingFrom === 'ticketBook') {
      this.service.totalpassengerCount = total;
      this.route.navigate(['checkbooking']);
    } else {
      this.total_Passenger = total;
      this.service.planPassenger(this.total_Passenger);
      this.route.navigate(['bookinstantly']);
    }
  }
}
