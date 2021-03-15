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
  selector: 'app-middleseat',
  templateUrl: './middleseat.page.html',
  styleUrls: ['./middleseat.page.scss'],
})
export class MiddleseatPage implements OnInit {
  middle = 'Think comfort, keep the middle seat empty';
  constructor(public service: DataService, public route: Router) { }

  ngOnInit() {
  }
  gotoSelectSeats() {
    this.route.navigate(['totalpassengers', { value: 'direct' }]);
  }
}
