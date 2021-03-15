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
  selector: 'app-dropoff',
  templateUrl: './dropoff.page.html',
  styleUrls: ['./dropoff.page.scss'],
})
export class DropoffPage implements OnInit {

  map: GoogleMap;
  searchItem = '';
  autocompleteItems = [];
  public des_Lat: number;
  public des_Lng: number;
  public latitude: number;
  public longitude: number;
  item: any;
  destinationLoc: any;
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
  chooseItem(destination) {
    this.destinationLoc = destination;
     this.serviceProvider.getLatLan(destination).subscribe((result: { lat: () => number; lng: () => number; }) => {
      this.__zone.run(() => {
        this.des_Lat = result.lat();
        this.des_Lng = result.lng();
        this.serviceProvider.changefilterDestination(this.des_Lat, this.des_Lng, this.destinationLoc);
      });
    },
      error => console.log(error),
      () => console.log('pickup completed'));
    this.route.navigate(['map', { value: 'drop' }]);
    this.searchItem = '';

  }


  getCurrentLocation(source) {
     this.serviceProvider.getCurrentLoaction();
    this.route.navigate(['map']);
    this.searchItem = '';
  }
}


