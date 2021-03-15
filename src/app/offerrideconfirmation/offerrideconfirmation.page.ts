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
  selector: 'app-offerrideconfirmation',
  templateUrl: './offerrideconfirmation.page.html',
  styleUrls: ['./offerrideconfirmation.page.scss'],
})
export class OfferrideconfirmationPage implements OnInit {
  confirmImage = '../../assets/image/trumpet.png';
  offerSuccess = 'Your ride is now online! Passengers can now book and travel with you!';
  bookSuccess = 'Your ride is now booked! Driver will now reach you soon on call or chat!';

  destinaton: any;
  pickup: any;
  time: any;
  date: any;
  passeners: any;
  cardData: {};
  returnDate: any;
  returnTime: any;
  stopoverAddress: any;
  comingFrom: any;
  constructor(public service: DataService, public route: Router, public actvRoute: ActivatedRoute) {

    this.service.showPickup.subscribe(filter => {
      this.pickup = filter;
    });
    this.service.showDestination.subscribe(filter => {
      this.destinaton = filter;
    });
    this.service.selectedTime.subscribe(filter => {
      this.time = filter;
    });
    this.service.selectedDate.subscribe(filter => {
      this.date = filter;
    });

    this.service.totalPassenger.subscribe(filter => {
      this.passeners = filter;
    });

    this.service.returnDate.subscribe(filter => {
      this.returnDate = filter;
    });
    this.service.returnTime.subscribe(filter => {
      this.returnTime = filter;
    });
    this.service.locaReroutin.subscribe(filter => {
      this.stopoverAddress = filter;
    });


    this.cardData = { pickup: this.pickup, destinaton: this.destinaton, time: this.time, date: this.date, passenger: this.passeners, returnJorneD: this.returnDate, returnJourneyT: this.returnTime, stopover: this.stopoverAddress };
  }

  ngOnInit() {
  }

  onRideSucces() {
    if (this.service.bookRideConfirmation) {
      this.service.findRideDestination('', '', '');
      this.service.findRidePickup('', '', '');
      this.service.bookRideConfirmation = false;
      this.route.navigate(['/tabs/findride']);
    } else {
      this.service.completeRideInfo(this.cardData);
      this.service.cardDetails = true;
      this.route.navigateByUrl('/tabs/home');
    }

  }
}
