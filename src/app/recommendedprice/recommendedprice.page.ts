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
  selector: 'app-recommendedprice',
  templateUrl: './recommendedprice.page.html',
  styleUrls: ['./recommendedprice.page.scss'],
})
export class RecommendedpricePage implements OnInit {
  headerText = 'This is our recommended price per seat. Is it OK for you?';
  pickup: any;
  destination: any;
  constructor(public service: DataService, public route: Router) {

    this.service.showPickup.subscribe(filter => {
       this.pickup = filter;
    });

    this.service.showDestination.subscribe(filter => {
       this.destination = filter;
    });
  }

  ngOnInit() {
  }
  askforReturn() {
    this.route.navigate(['comingback']);
  }
  notAgree() {
    this.route.navigate(['editprice']);
  }
}
