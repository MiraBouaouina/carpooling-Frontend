/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MouseEvent } from '@agm/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.page.html',
  styleUrls: ['./direction.page.scss'],
})
export class DirectionPage implements OnInit {

  constructor(public service: DataService, public route: Router) {
    this.service.originlongititude.subscribe(filter => {
      this.pickupLng = filter;
    });
    this.service.originlatitude.subscribe(filter => {
      this.pickupLat = filter;
    });
    this.service.destinationLatitude.subscribe(filter => {
      this.destinationlat = filter;
    });
    this.service.destinationLongitude.subscribe(filter => {
      this.destinationlng = filter;
    });
    this.service.lngRerouting.subscribe(filter => {
      this.stopoverLng = filter;
    });
    this.service.latRerouting.subscribe(filter => {
      this.stopoverLat = filter;
    });
    this.service.locaReroutin.subscribe(filter => {
      this.stopoverAddress = filter;
    });

    this.origin = { lat: this.pickupLat, lng: this.pickupLng };
    this.destination = { lat: this.destinationlat, lng: this.destinationlng };
  }
  header = 'This is the most popular place to stop here';
  public origin: { lat: any; lng: any; };
  public destination: { lat: any; lng: any; };
  public pickupLat: any;
  public pickupLng: any;
  public destinationlat: any;
  public destinationlng: any;
  public stopoverLng: any;
  public stopoverLat: any;
  public zoom = 8;
  public markers = [];
  public stopoverAddress: any;
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

  ngOnInit() {
  }
  clickedMarker(label: string, index: number) {
  }
  markerDragEnd(m: Marker, $event: MouseEvent) {
  }
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  goforDate() {
    this.route.navigate(['calender', { value: 'oneway' }]);
  }
}
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
