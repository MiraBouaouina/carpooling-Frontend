/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  constructor(public actvRouter: ActivatedRoute, public service: DataService, public route: Router, public ngZone: NgZone) {
    this.actvRouter.params.subscribe(params => {
      this.comingFrom = params.value;
      if (this.comingFrom === 'pickup') {
        this.service.originlatitude.subscribe(filter => {
          this.pickupLat = filter;
        });
        this.service.originlongititude.subscribe(filter => {
          this.pickupLng = filter;
        });
        this.service.showPickup.subscribe(filter => {
          this.address = filter;
        });
      } else {
        this.service.destinationLatitude.subscribe(filter => {
          this.pickupLat = filter;
        });
        this.service.destinationLongitude.subscribe(filter => {
          this.pickupLng = filter;
        });
        this.service.showDestination.subscribe(filter => {
          this.address = filter;
        });
      }
    });
  }
  markers = [];
  public dropLat: any;
  public dropLng: any;
  public pickupLat: any;
  public pickupLng: any;
  zoom = 8;
  address: any;
  comingFrom: any;
  public markerOptions = {
    origin: {
      animation: '\'DROP\'',
      label: 'origin',

    },
    destination: {
      animation: '\'DROP\'',
      label: 'destination',

    },
  };
  public renderOptions = {
    suppressMarkers: true,
  };

  ionViewDidEnter() {
    if (this.comingFrom === 'drop') {

      this.service.destinationLatitude.subscribe(filter => {
        this.pickupLat = filter;
      });

      this.service.destinationLongitude.subscribe(filter => {
        this.pickupLng = filter;
      });

      this.service.showDestination.subscribe(filter => {
        this.address = filter;
      });

    }

  }

  ngOnInit() {
  }
  clickedMarker(label: string, index: number) {
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }


  gotoDrop() {
    if (this.comingFrom === 'pickup') {
      this.service.changeFilterPicup(this.pickupLat, this.pickupLng, this.address);
      this.route.navigate(['dropoff']);
    } else if (this.comingFrom === 'drop') {
      this.service.changefilterDestination(this.pickupLat, this.pickupLng, this.address);

      this.route.navigate(['stopover']);

    }
  }
}
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
