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
@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
})
export class JourneyPage implements OnInit {
  constructor(public service: DataService) {
    this.service.offerRide.subscribe(filter => {
      this.offerRideDetails = filter;
      this.pick = this.offerRideDetails.pickup;
      this.des = this.offerRideDetails.destinaton;
      this.journeyDate = this.offerRideDetails.date;
      this.journeyTime = this.offerRideDetails.time;
      this.stopover = this.offerRideDetails.stopover;
      if (this.pick.length > 15 || this.des.length > 15) {
        this.pickSub = this.pick.substring(0, 15);
        this.desSub = this.des.substring(0, 15);
      }
    });

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

    this.rideData = [{
      head: 'Date',
      detail: this.journeyDate
    }, {
      head: 'Time',
      detail: this.journeyTime
    }, {
      head: this.pickSub,
      detail: this.pick,
      icon: 'radio-button-on'
    }, {
      head: 'Stopover',
      detail: this.stopover,
      icon: 'radio-button-on'
    }, {
      head: this.desSub,
      detail: this.des,
      icon: 'radio-button-on'
    }];
  }

  public offerRideDetails: any;
  public pick: any;
  public des: any;
  public desSub: any;
  public pickSub: any;
  public origin: { lat: any; lng: any; };
  public destination: { lat: any; lng: any; };
  public pickupLat: any;
  public pickupLng: any;
  public destinationlat: any;
  public destinationlng: any;
  public stopoverLng: any;
  stopoverLat: any;
  zoom = 8;
  markers = [];
  stopoverAddress: any;
  journeyDate: any;
  journeyTime: any;
  seatsAval: any;
  stopover: any;
  rideData: any;
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
}
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
