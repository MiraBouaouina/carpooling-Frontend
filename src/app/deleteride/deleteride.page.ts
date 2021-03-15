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

@Component({
  selector: 'app-deleteride',
  templateUrl: './deleteride.page.html',
  styleUrls: ['./deleteride.page.scss'],
})
export class DeleteridePage implements OnInit {
  deleteRide: any;
  customPopoverOptions: any = {
  };
  constructor(public service: DataService, public route: Router) {
    this.deleteRide = [
      {
        header1: 'Are you sure you want to delete this ride offer?',
        header2: 'Please tell us what happened.it\'ll help us improve our service.',
        listheader: 'Your reason',
        textarea: false,
      },
      {
        label: 'Reason',
        select: [{ reason: 'Something cameup, i am no longer offering-this ride' },
        { reason: 'The person who turned up was\'t the person who booked' },
        { reason: 'I have to cahnge my departure time.' },
        { reason: 'I have to change the schedule.' },
        { reason: 'I want to change the price per seat.' },
        { reason: 'My car broke down.' },
        { reason: 'I have to edit my ride offer.' },
        { reason: 'Another reason that is not in the list' },
        ],
        textarea: false,
      },
      {
        label: 'MORE DETAILS',
        placeholder: 'Please provide details(these will only be seen by our Community Relations team).',
        textarea: true,
      },
      {
        header1: 'Note: Your cancellation rate is recorded on your profile.',
        header2: 'Any co-traveller wil be automatically notified.it\'d be nice touch if you also let them know directly. ',
        textarea: false,
      }];
  }

  ngOnInit() {
  }
  deleteData() {
    this.service.cardDetails = false;
    this.route.navigate(['/tabs/home']);
  }
}
