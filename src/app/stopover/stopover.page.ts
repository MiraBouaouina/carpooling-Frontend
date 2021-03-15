/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { StopoverlocationComponent } from '../stopoverlocation/stopoverlocation.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-stopover',
  templateUrl: './stopover.page.html',
  styleUrls: ['./stopover.page.scss'],
})
export class StopoverPage implements OnInit {
  lat: any;
  lng: any;
  loc: any;
  paramValue: any;
  locArray = [];
  constructor(public route: Router, public service: DataService, public actvRoute: ActivatedRoute, public modalCtrl: ModalController, public ngZone: NgZone) {
    this.actvRoute.params.subscribe(params => {
      this.paramValue = params.value;
      console.log(this.paramValue);
    });

  }

  ngOnInit() {
  }
  ionViewDidEnter() {
  }
  ionViewDidLeave() {
    this.locArray = [];
  }
  async goforStopovers(name) {
    this.service.findridePickup = name;
    const modal = await this.modalCtrl.create({
      component: StopoverlocationComponent
    });
    await modal.present();
    await modal.onDidDismiss();
    this.ngZone.run(() => {
      if (this.service.reRoute) {
        this.service.locaReroutin.subscribe(filter => {
          this.loc = filter;
        });
        this.locArray.push(this.loc);
      }
    });
  }

  goforStopoversRouteMap() {
    this.route.navigate(['direction']);

  }
}
