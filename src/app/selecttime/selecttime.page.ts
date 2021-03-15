/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-selecttime',
  templateUrl: './selecttime.page.html',
  styleUrls: ['./selecttime.page.scss'],
})
export class SelecttimePage implements OnInit {
  timeSelected = '';
  time_selected: any;
  constructor(public route: Router, public acvRoute: ActivatedRoute, public service: DataService) {

  }

  ngOnInit() {
  }

  gotoDrop(timeSelected) {
    this.time_selected = timeSelected;
    this.service.planTime(this.time_selected);
    this.route.navigate(['middleseat']);
    console.log(this.time_selected);
  }
}
