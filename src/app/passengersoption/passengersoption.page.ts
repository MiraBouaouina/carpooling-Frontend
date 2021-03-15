/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-passengersoption',
  templateUrl: './passengersoption.page.html',
  styleUrls: ['./passengersoption.page.scss'],
})
export class PassengersoptionPage implements OnInit {
  options: any;
  placeholdeText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. assumenda velit!';
  totalSeats: any;
  product = 0;
  passengerNo = '';
  total_Passenger: any;
  constructor(public route: Router, public toastCtrl: ToastController, public service: DataService) {
    this.service.totalPassenger.subscribe(filter => {
      this.totalSeats = filter;
    });
    this.options = [{
      iconfirst: 'car',
      checkbox: true,
      seats: this.totalSeats
    },
    {
      iconfirst: 'flash',
      checkbox: true,
      text: 'Instant booking'
    }];


  }

  ngOnInit() {
  }
  async saveData() {
    const toast = await this.toastCtrl.create({
      message: 'Thanks you have updated successfully',
      position: 'bottom',
      cssClass: 'toastBack',
      duration: 2000
    });
    toast.present();
    this.route.navigate(['/tabs/home']);

  }
  updateCart(type) {
    if (type === 'add') {
      this.product += 1;
    }
    if (type === 'remove') {
      this.product -= 1;

    }
  }
}
