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
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileInfo: any;
  segmentButton: any;
  profileInfoDetails: any;
  constructor(public service: DataService, public route: Router) {
    this.profileInfo = service.profileData;
    this.profileInfoDetails = service.profileDetails;
  }
  segmentValue(ev: any) {
    this.segmentButton = ev.detail.value;
  }
  ngOnInit() {
  }
  goforProfiledit(link: any) {
    if (link === 'write my mini biography') {
      this.route.navigate(['editprofile']);
    } else if (link === 'add a car') {
      this.route.navigate(['addcar']);
    } else if (link === 'Verify my id') {
      this.route.navigate(['verifyid']);
    }
  }
  goforPreferences(link: any) {
    if (link === 'Add my preferences') {
      this.route.navigate(['preferences']);
    } else if (link === 'Verify +91 123 325 452') {
      this.route.navigate(['verifyphone']);
    }
  }
  goforEmailVerification(link: any) {
    if (link === 'verify my Email') {
      this.route.navigate(['verifyemail']);
    }
  }
}
