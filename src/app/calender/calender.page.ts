/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  public myDate: any = '05-03-2019';
  public mydate;
  public timeSelected = '04:10 AM';
  public datePickerObj: any = {
    fromDate: new Date('2019-01-08'),
    toDate: new Date('2030-12-28'),
    showTodayButton: true,
    closeOnSelect: true,
    mondayFirst: true,
    setLabel: 'S',
    todayLabel: 'Today',
    closeLabel: 'Close',
    titleLabel: 'Select a Date',
    monthsList: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    weeksList: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    dateFormat: 'DD-MM-YYYY',
    clearButton: false
  };
  pickupLat: any;
  pickupLng: any;
  address: any;
  date_Selected: any;
  tripValue: any;
  constructor(public service: DataService, public route: Router, public actvRoute: ActivatedRoute) {
    this.actvRoute.params.subscribe(params => {
      this.tripValue = params.value;
    });



    this.service.destinationLatitude.subscribe(filter => {
      this.pickupLat = filter;
    });

    this.service.destinationLongitude.subscribe(filter => {
      this.pickupLng = filter;
    });

    this.service.showPickup.subscribe(filter => {
      this.address = filter;
    });
  }


  gotoDrop(myDate) {
    this.date_Selected = myDate;
    if (this.tripValue === 'oneway') {
      this.service.planDate(this.date_Selected);
      this.route.navigate(['selecttime', { myDate }]);
    } else if (this.tripValue === 'returnTrip') {
      this.service.returnPlan(this.date_Selected);
      this.route.navigate(['returntime', { value: 'returnTrip' }]);
    } else if (this.tripValue === 'findride') {
      this.service.findrideplanDate(this.date_Selected);
      this.route.navigate(['returntime', { value: 'findride' }]);
    }
  }

  ngOnInit() {
  }

}
