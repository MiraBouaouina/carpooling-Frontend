/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.page.html',
  styleUrls: ['./addcar.page.scss'],
})
export class AddcarPage implements OnInit {

  constructor(public modalCtrl: ModalController, public route: Router) { }
  public data = [{
    'name': 'Madza',
    'car_no': '43A 235 70',
    'icon': 'paper',
  },
  {
    'name': 'Mitshubishi Outlander',
    'car_no': '43A 125 70',
    'icon': 'paper',
  }];
  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };
  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  ngOnInit() {
  }

  openpageTRansition() {
    this.route.navigate(['addnewvehicle']);
  }
}

