/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopoverlocation',
  templateUrl: './stopoverlocation.component.html',
  styleUrls: ['./stopoverlocation.component.scss'],
})
export class StopoverlocationComponent implements OnInit {
  searchItem = '';
  autocompleteItems = [];
  rerouteLocation: any;
  des_Lat: any;
  des_Lng: any;
  latitude: any;
  longitude: any;
  showdestination: any;
  showPickup: any;

  constructor(public serviceProvider: DataService, public __zone: NgZone, public modalCtrl: ModalController, public route: Router) { }

  ngOnInit() { }

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

  closeModal() {
    this.modalCtrl.dismiss();
  }


  chooseItem(e) {
    if (this.serviceProvider.findridePickup === 'stopover') {
      this.rerouteLocation = e;
      this.serviceProvider.getLatLan(e).subscribe((result: { lat: () => void; lng: () => void; }) => {
        this.__zone.run(() => {
          this.des_Lat = result.lat();
          this.des_Lng = result.lng();
          this.serviceProvider.rerouteLocation(this.des_Lat, this.des_Lng, this.rerouteLocation);
          this.serviceProvider.reRoute = true;
          this.modalCtrl.dismiss();
        });
      }, error => console.log(error),
        () => console.log('pickup completed'));
    } else if (this.serviceProvider.findridePickup === 'destination') {
      this.showdestination = e;
      this.serviceProvider.getLatLan(e).subscribe((result: { lat: () => void; lng: () => void; }) => {
        this.__zone.run(() => {
          this.latitude = result.lat();
          this.longitude = result.lng();
          this.serviceProvider.findRideDestination(this.des_Lat, this.des_Lng, this.showdestination);
          this.serviceProvider.reRouteDestination = true;
          this.modalCtrl.dismiss();
        });
      }, error => console.log(error),
        () => console.log('pickup completed'));
    } else if (this.serviceProvider.findridePickup === 'pickup') {
      this.showPickup = e;
      this.serviceProvider.getLatLan(e).subscribe((result: { lat: () => void; lng: () => void; }) => {
        this.__zone.run(() => {
          this.latitude = result.lat();
          this.longitude = result.lng();
          this.serviceProvider.findRidePickup(this.des_Lat, this.des_Lng, this.showPickup);
          this.serviceProvider.reRoutePickup = true;

          this.modalCtrl.dismiss();
        });
      }, error => console.log(error),
        () => console.log('pickup completed'));
    }
  }
  getCurrentLocation(source) {
    this.serviceProvider.getCurrentLoaction();
    this.serviceProvider.reRoute = true;
    this.route.navigate(['stopover', { value: 'rerouteModal' }]);
    this.modalCtrl.dismiss();
  }
}
