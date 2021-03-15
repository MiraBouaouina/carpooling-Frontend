/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreturndescription',
  templateUrl: './addreturndescription.page.html',
  styleUrls: ['./addreturndescription.page.scss'],
})
export class AddreturndescriptionPage implements OnInit {
  head = 'Anything to add about your ride?';
  placeholder = 'Hello i\'m going to visit my family. i travel with a cat and i have a lot of space in the van!';
  returnDesc = '';
  constructor(public route: Router) { }

  ngOnInit() {
  }
  rideSucces() {
    this.route.navigate(['offerrideconfirmation']);
  }
}
