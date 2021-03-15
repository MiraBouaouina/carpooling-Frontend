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
  selector: 'app-editprice',
  templateUrl: './editprice.page.html',
  styleUrls: ['./editprice.page.scss'],
})
export class EditpricePage implements OnInit {
  header = 'Why not give our price a try?';
  description = 'Driver\'s who use our suggested price get reservations faster. Try it and see the difference!';
  constructor(public route: Router) { }

  ngOnInit() {
  }
  gotoeditAmount() {
    this.route.navigate(['editpricelist']);
  }
}
