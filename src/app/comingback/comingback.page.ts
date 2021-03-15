/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comingback',
  templateUrl: './comingback.page.html',
  styleUrls: ['./comingback.page.scss'],
})
export class ComingbackPage implements OnInit {
  comingBack = 'Coming back as well? Publish your return trip now!';
  subheader = 'Just tell us when you\'re going back';
  confirmImage = '../../assets/image/a.jpg';
  constructor(public route: Router) { }

  ngOnInit() {
  }
  goforReturnRide() {
    this.route.navigate(['calender', { value: 'returnTrip' }]);
  }
  goforThanks() {
    this.route.navigate(['addreturndescription']);
  }
}
