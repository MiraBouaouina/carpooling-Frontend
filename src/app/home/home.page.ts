/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  segmenValue: any;
  rideDetails: any;
  pick: any;
  pickSub: any;
  des: any;
  desSub: any;
  offerRideDetails: any;
  rideData: any;
  journeyDate: any;
  journeyTime: any;
  seatsAval: any;
  rating = 4;
  starsCount: number;
  data = [];
  routerSubscription: any = null;
  constructor(public service: DataService, public router: Router, public actvRoute: ActivatedRoute, public route: Router) {
    this.rideDetails = '';
    this.data = this.service.cards;

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/tabs/home') {
            this.loadDetails();
          }

        }
      }
    );

  }

  loadDetails() {
    if (this.service.cardDetails) {
      this.service.offerRide.subscribe(filter => {
        this.offerRideDetails = filter;
        this.pick = this.offerRideDetails.pickup;
        this.des = this.offerRideDetails.destinaton;
        this.journeyDate = this.offerRideDetails.date;
        this.journeyTime = this.offerRideDetails.time;
        this.seatsAval = this.offerRideDetails.passenger;
        if (this.pick.length > 15 || this.des.length > 15) {
          this.pickSub = this.pick.substring(0, 15);
          this.desSub = this.des.substring(0, 15);
        }
      });
    }
  }
  ionViewDidEnter() {
    this.loadDetails();
  }

  segmentValue(event: any) {
    this.segmenValue = event.detail.value;
  }
  gotoOfferaRide() {
    this.router.navigate(['pickup']);
  }
  gotoeditRide() {
    this.router.navigate(['editride']);
  }
  dismiss() {
    this.route.navigate(['/tabs/home']);
  }
  gotofindaRide() {
    this.route.navigate(['/tabs/findride']);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
