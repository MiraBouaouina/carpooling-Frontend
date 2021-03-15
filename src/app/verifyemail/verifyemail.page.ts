/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.page.html',
  styleUrls: ['./verifyemail.page.scss'],
})
export class VerifyemailPage implements OnInit {
  emailData: any;
  constructor(public service: DataService) {
    this.emailData = service.emailVerification;

  }

  ngOnInit() {
  }

}
