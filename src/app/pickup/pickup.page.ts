/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { google, GoogleMap } from '@agm/core/services/google-maps-types';
import { DataService } from '../data.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.page.html',
  styleUrls: ['./pickup.page.scss'],
})
export class PickupPage implements OnInit {

  map: GoogleMap;
  searchItem = '';
  autocompleteItems = [];
  public lat: number;
  public lng: number;
  public latitude: number;
  public longitude: number;
  item: any;
  pickupLoc: any;
  constructor(private __zone: NgZone,
    public serviceProvider: DataService,
    public modalCtrl: ModalController,
    public route: Router,
    public mapsAPILoader: MapsAPILoader) {

  }

  ngOnInit() {
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  searcOnChnage() {
    if (this.searchItem) {
      const service = new window['google'].maps.places.AutocompleteService();
      service.getPlacePredictions({ input: this.searchItem, componentRestrictions: { country: 'IN' } }, (predictions, status) => {
        this.autocompleteItems = [];
        this.__zone.run(() => {
          if (predictions != null) {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction.description);
            });
          }
        });
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();

  }
  chooseItem(pickup) {
    this.pickupLoc = pickup;
    this.serviceProvider.getLatLan(pickup).subscribe((result: { lat: () => number; lng: () => number; }) => {
      this.__zone.run(() => {
        this.lat = result.lat();
        this.lng = result.lng();
        this.serviceProvider.changeFilterPicup(this.lat, this.lng, this.pickupLoc);
      });
    }, error => console.log(error),
      () => console.log('pickup completed'));
    this.route.navigate(['map', { value: 'pickup' }]);
    this.searchItem = '';
  }


  getCurrentLocation(source) {
    this.serviceProvider.getCurrentLoaction();
    this.route.navigate(['map', { value: 'pickup' }]);
    this.searchItem = '';
  }
}


