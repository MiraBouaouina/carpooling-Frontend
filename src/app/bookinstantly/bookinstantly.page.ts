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
  selector: 'app-bookinstantly',
  templateUrl: './bookinstantly.page.html',
  styleUrls: ['./bookinstantly.page.scss'],
})
export class BookinstantlyPage implements OnInit {
  book = 'Can passengers book instantly?';
  constructor(public route: Router) { }

  ngOnInit() {
  }
  gotoPrice() {
    this.route.navigate(['recommendedprice']);

  }
}
