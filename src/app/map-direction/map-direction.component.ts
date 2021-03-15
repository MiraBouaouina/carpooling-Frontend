/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'map-direction',
  templateUrl: './map-direction.component.html',
  styleUrls: ['./map-direction.component.scss'],
})
export class MapDirectionComponent implements OnInit {

  @Input() lat: any;
  @Input() lng: any;
  @Input() zoom: any;
  @Input() origin: any;
  @Input() destination: any;
  @Input() markerOptions: any;
  @Input() latitude: any;
  @Input() longitude: any;
  @Input() renderOptions: any;
  constructor() { }

  ngOnInit() { }

}
