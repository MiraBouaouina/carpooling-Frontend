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
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editpricelist',
  templateUrl: './editpricelist.page.html',
  styleUrls: ['./editpricelist.page.scss'],
})
export class EditpricelistPage implements OnInit {
  product = 100;
  show: boolean;
  passengerNo = '';
  destination: any;
  pickup: any;
  priceEditList: { pickup: any; destination: any; model: string; placeholder: string; price: number }[];
  pickSub: any;
  desSub: any;
  priceValue = '';
  stopOver: any;
  stopOverLoc: any;
  constructor(public service: DataService, public route: Router, public toastCtrl: ToastController) {
    this.service.showPickup.subscribe(filter => {
      this.pickup = filter;
      if (this.pickup.length > 15) {
        this.pickSub = this.pickup.substring(0, 15);
      }
    });

    this.service.showDestination.subscribe(filter => {
      this.destination = filter;
      if (this.destination.length > 15) {
        this.desSub = this.destination.substring(0, 15);
      }
    });

    this.service.locaReroutin.subscribe(filter => {
      this.stopOver = filter;
      if (this.stopOver.length > 15) {
        this.stopOverLoc = this.stopOver.substring(0, 15);
      }
    });


    this.priceEditList = [{
      pickup: this.pickSub,
      destination: this.desSub,
      model: 'sourceTodest',
      placeholder: '₹ 250.00',
      price: 250.00
    }, {
      pickup: this.pickSub,
      destination: this.stopOverLoc,
      model: 'sourceTostopover',
      placeholder: '₹ 150.00',
      price: 150.00
    }, {
      pickup: this.stopOverLoc,
      destination: this.desSub,
      model: 'stopoverTodest',
      placeholder: '₹ 100.00',
      price: 100.00
    },
    ];
  }

  updateCart(type, index) {
    if (type === 'add') {
      this.priceEditList[index].price += 10;
      this.product += 10;
    }
    if (type === 'remove') {
      this.priceEditList[index].price -= 10;
      this.product -= 10;

    }
  }
  ngOnInit() {
  }

  async  gotoDrop() {
    if (this.service.journey) {
      this.route.navigate(['comingback']);
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Thanks you have updated successfully',
        position: 'bottom',
        cssClass: 'toastBack',
        duration: 2000
      });
      toast.present();
      this.route.navigate(['/tabs/home']);
    }
  }
}
