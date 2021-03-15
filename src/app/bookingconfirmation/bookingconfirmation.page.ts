/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bookingconfirmation',
  templateUrl: './bookingconfirmation.page.html',
  styleUrls: ['./bookingconfirmation.page.scss'],
})
export class BookingconfirmationPage implements OnInit {

  progress: number;
  pickupLoc: any;
  destLoc: any;
  constructor(public statusBar: StatusBar, public route: Router, public navCtrl: NavController, public serviceProvider: DataService, public loadingCtrl: LoadingController) {
    this.serviceProvider.locationFindRide.subscribe(filter => {
      this.pickupLoc = filter;
    });
    this.serviceProvider.locationFindRideDes.subscribe(filter => {
      this.destLoc = filter;
    });
    this.statusBar.backgroundColorByHexString('#000');
    this.Load();
  }

  async Load() {
    const loader = await this.serviceProvider.loading('Please wait...');
    this.progress = 10;
    await loader.present();
    setTimeout(() => {
      this.progress = 20;
    }, 1);
    setTimeout(() => {
      this.progress = 30;
    }, 1000);
    setTimeout(() => {
      this.progress = 40;
    }, 2000);
    setTimeout(() => {
      this.progress = 50;
    }, 3000);
    setTimeout(() => {
      this.progress = 60;
    }, 4000);
    setTimeout(() => {
      this.progress = 70;
    }, 5000);
    setTimeout(() => {
      this.progress = 80;
    }, 6000);
    setTimeout(() => {
      this.progress = 100;
    }, 10000);
    setTimeout(() => {
      loader.dismiss();
      this.serviceProvider.bookRideConfirmation = true;
      this.route.navigate(['offerrideconfirmation']);
    }, 11000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingConfitmationPage');
  }

  ngOnInit() {
  }

}
