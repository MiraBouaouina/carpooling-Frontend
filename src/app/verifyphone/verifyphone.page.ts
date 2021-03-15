/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-verifyphone',
  templateUrl: './verifyphone.page.html',
  styleUrls: ['./verifyphone.page.scss'],
})
export class VerifyphonePage implements OnInit {
  customPopoverOptions: any = {
  };
  data: { 'name': string; 'dial_code': string; 'code': string; }[];
  selectedValue: any = '';
  inputValue: any = '';
  phoneNumber: any;
  countryCode: { 'name': string; 'dial_code': string; 'code': string; }[];
  constructor(public route: Router, public service: DataService) {
    this.countryCode = service.countries;
  }

  ngOnInit() {
  }
  gotVerification(input: any, selected: any) {
    this.phoneNumber = selected + input;
    this.route.navigate(['phoneverification', { selected, input }]);
  }
}
