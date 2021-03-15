/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-addnewvehicle',
  templateUrl: './addnewvehicle.page.html',
  styleUrls: ['./addnewvehicle.page.scss'],
})
export class AddnewvehiclePage implements OnInit {
  license = '';
  public newvehicleData = [
    {
      label: 'Vehicle Brand',
      placeholder: 'Select Vehicle',
      data: [{
        'name': 'Toyota',
      },
      {
        'name': 'Mercedes-Benz',
      },
      {
        'name': 'Audii',
      },
      {
        'name': 'Maruti',
      },
      {
        'name': 'Scoda',
      },
      {
        'name': 'Wolgswagon',
      },
      {
        'name': 'Innova',
      },
      {
        'name': 'Alto K10',
      },
      {
        'name': 'Swift Desire',
      },
      {
        'name': 'Bugatti Veyron',
      }
      ]
    },
    {
      label: 'Model',
      placeholder: 'Select Model',
      data: [{
        'name': 'Camry',
      },
      {
        'name': 'Suv',
      },
      {
        'name': 'XUv',
      },
      {
        'name': 'Sedan',
      }
      ]
    }, {
      label: 'Year',
      placeholder: 'Select Year',
      data: [{
        'name': '2000',
      },
      {
        'name': '2001',
      },
      {
        'name': '2002',
      },
      {
        'name': '2003',
      },
      {
        'name': '2004',
      },
      {
        'name': '2005',
      },
      {
        'name': '2006',
      },
      {
        'name': '2007',
      },
      {
        'name': '2008',
      },
      {
        'name': '2009',
      },
      {
        'name': '2010',
      },
      {
        'name': '20011',
      },
      {
        'name': '20012',
      },
      {
        'name': '20013',
      },
      {
        'name': '20014',
      },
      {
        'name': '20015',
      },
      {
        'name': '20016',
      },
      {
        'name': '20017',
      },
      {
        'name': '20018',
      }
      ]
    }, {
      label: 'color',
      placeholder: 'Select color',
      data: [{
        'name': 'Black',
      },
      {
        'name': 'Yellow',
      },
      {
        'name': 'Red',
      },
      {
        'name': 'White',
      }
      ]
    },
    {
      label: 'Booking Type',
      placeholder: 'Select Booking Type',
      data: [{
        'name': 'Taxi 7 seat',
      },
      {
        'name': 'Taxi 9 seat',
      },
      {
        'name': 'Cab 4 seat',
      },
      {
        'name': 'Auto-Rikshaw',
      },
      {
        'name': 'E-Rikshaw',
      }
      ]
    },
  ];
  valueName: any;

  constructor(public route: Router, public navctrl: NavController) { }

  ngOnInit() {
  }
  getValue(item: any) {
    this.valueName = item;
    console.log('selected valiue name', this.valueName);
  }
  openpageTRansition() {
    this.navctrl.back();
  }

}
