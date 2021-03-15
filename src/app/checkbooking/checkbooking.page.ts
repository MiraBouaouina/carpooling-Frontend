/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkbooking',
  templateUrl: './checkbooking.page.html',
  styleUrls: ['./checkbooking.page.scss'],
})
export class CheckbookingPage implements OnInit {
  pickupLoc: any;
  destLoc: any;
  date: any;
  time: any;
  actvroute: any;
  rideData: any;
  totalCost: any;
  totalPass: any;
  total: number;

  constructor(public service: DataService, public actvRoute: ActivatedRoute, public route: Router, public alertCtrl: AlertController) {
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

    this.actvRoute.params.subscribe(params => {
      this.rideData = params;
    });
    this.totalCost = this.service.totalFare;
    this.totalPass = this.service.totalpassengerCount;
    this.total = this.totalPass * this.totalCost;
  }

  ngOnInit() {
  }
  async  goforbooking() {

    const alert = await this.alertCtrl.create({
      header: 'Confirm Booking',
      message: 'Your driver will contact you in some moment. Do you want to confirm booking?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Book',
          handler: () => {
            this.route.navigate(['bookingconfirmation']);
          }
        }
      ]
    });
    return await alert.present();
  }

}
