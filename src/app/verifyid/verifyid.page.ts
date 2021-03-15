/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyid',
  templateUrl: './verifyid.page.html',
  styleUrls: ['./verifyid.page.scss'],
})
export class VerifyidPage implements OnInit {

  public documents = [{
    'name': 'Identification Card',
    'icon': 'person',
    'url': '/tabs/home'
  }, {
    'name': 'Driving License',
    'icon': 'person',
    'url': '/drivinglicense'
  }];
  constructor(public route: Router) { }

  ngOnInit() {
  }
  gotoPage(item: any) {
    this.route.navigate([item]);

  }
}
