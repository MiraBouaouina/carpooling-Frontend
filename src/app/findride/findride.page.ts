/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../data.service';
import { ModalController, AlertController } from '@ionic/angular';
import { StopoverlocationComponent } from '../stopoverlocation/stopoverlocation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findride',
  templateUrl: './findride.page.html',
  styleUrls: ['./findride.page.scss'],
})
export class FindridePage implements OnInit {
  pickup: boolean;
  marker: boolean;
  loc: any;
  des: any;
  pickupLoc: any;
  destLoc: any;
  rightTime: any;
  date: any;
  time: any;

  constructor(public service: DataService, public modalCtrl: ModalController, public ngZone: NgZone, public route: Router, public alertController: AlertController) {
    this.pickup = true;
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.rightTime = time;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.service.dateTime) {
      setTimeout(() => {
        this.service.dateForFindride.subscribe(filter => {
          this.date = filter;
        });
        this.service.timeForFindride.subscribe(filter => {
          this.time = filter;
        });
      }, 2000);
    }
  }
  async gotoEdit(name: string) {
    this.service.findridePickup = name;
    const modal = await this.modalCtrl.create({
      component: StopoverlocationComponent,
    });

    await modal.present();
    await modal.onDidDismiss();
    this.ngZone.run(() => {
      if (this.service.reRoutePickup || this.service.reRouteDestination) {
        this.service.locationFindRide.subscribe(filter => {
          this.pickupLoc = filter;
        });
        this.service.locationFindRideDes.subscribe(filter => {
          this.destLoc = filter;
        });
      }
    });
  }

  gotoSwipe() {
    this.pickup = !this.pickup;
  }



  goForDateTime(findride: any) {
    this.route.navigate(['calender', { value: findride }]);
  }
  goforSearchResults() {
    if (this.service.reRoutePickup && this.service.reRouteDestination && !this.service.dateTime) {
      this.route.navigate(['findridesearch-result']);
    } else {
      this.dataFillAlert();
    }
  }

  async dataFillAlert() {
    const alert = await this.alertController.create({
      header: 'Required!',
      message: 'Please select pickup, destination, date and time first!.',
      buttons: ['OK'],
      cssClass: 'alertCss'
    });

    await alert.present();
  }
}
